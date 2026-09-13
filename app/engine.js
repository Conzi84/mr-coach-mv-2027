import {curriculum,topics,allTasks,trainingTasks,diagnosticTasks} from './content.js';
export const STORAGE_KEY='mr-coach-mv-2027-v1';
export const DAY=86400000;
export function emptyState(){return {schemaVersion:1,curriculum:curriculum.id,attempts:[],weeklyGoal:3};}
export function dateKey(time){const d=new Date(time);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function parseNumber(value){
 const text=String(value).trim().replace(/\u2212/g,'-');
 const decimal=/^[+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/;
 if (decimal.test(text)){const n=Number(text.replace(',','.'));return Number.isFinite(n)?n:null;}
 const parts=text.split('/');
 if(parts.length===2 && decimal.test(parts[0].trim()) && decimal.test(parts[1].trim())){
  const top=Number(parts[0].trim().replace(',','.')),bottom=Number(parts[1].trim().replace(',','.'));
  if(bottom!==0 && Number.isFinite(top/bottom))return top/bottom;
 }
 return null;
}
export function grade(task,answers){
 const values=task.fields.map(f=>parseNumber(answers[f.key]??''));
 if(values.some(v=>v===null))return {valid:false,correct:false};
 return {valid:true,correct:task.fields.every((f,i)=>Math.abs(values[i]-f.expected)<=f.tolerance),values};
}
export function validateState(raw){
 if(!raw || raw.schemaVersion!==1 || raw.curriculum!==curriculum.id || !Array.isArray(raw.attempts) || raw.attempts.length>5000)throw new Error('Die Datei passt nicht zu diesem Lernprojekt oder hat ein ungültiges Format.');
 const ids=new Set();
 const attempts=raw.attempts.map(a=>{
  const t=allTasks.find(t=>t.id===a?.taskId);
  if(!t || !a || typeof a.id!=='string' || a.id.length>100 || ids.has(a.id) || a.taskVersion!==t.version || a.topic!==t.topic || !Number.isFinite(a.time) || a.time<0 || a.time>Date.now()+DAY || !['training','diagnostic'].includes(a.mode) || (a.mode==='training')!==trainingTasks.some(x=>x.id===a.taskId) || !['correct','wrong','unknown','notTaught','shown'].includes(a.outcome) || typeof a.firstCorrect!=='boolean' || typeof a.assisted!=='boolean' || typeof a.solutionSeen!=='boolean' || !Number.isInteger(a.hints) || a.hints<0 || a.hints>2 || !Number.isInteger(a.tries) || a.tries<0 || a.tries>100 || typeof a.sessionId!=='string' || a.sessionId.length>100)throw new Error('Die Datei enthält unvollständige oder widersprüchliche Versuche.');
  if(a.firstCorrect && (a.outcome!=='correct' || a.assisted || a.solutionSeen || a.tries!==1))throw new Error('Ein selbstständiger Erfolg darf keine Hilfe oder Korrektur enthalten.');
  ids.add(a.id);
  return {id:a.id,taskId:t.id,taskVersion:t.version,topic:t.topic,time:a.time,mode:a.mode,outcome:a.outcome,firstCorrect:a.firstCorrect,assisted:a.assisted,solutionSeen:a.solutionSeen,hints:a.hints,tries:a.tries,sessionId:a.sessionId};
 });
 const weeklyGoal=[2,3,4,5].includes(raw.weeklyGoal)?raw.weeklyGoal:3;
 return {schemaVersion:1,curriculum:curriculum.id,attempts,weeklyGoal};
}
export function independent(a){return a.firstCorrect && !a.assisted && !a.solutionSeen && a.outcome==='correct';}
export function topicStats(state,id,now=Date.now()){
 const tries=state.attempts.filter(a=>a.topic===id).sort((a,b)=>a.time-b.time);
 const tested=tries.filter(a=>!['notTaught','unknown'].includes(a.outcome));
 const independentTries=tries.filter(independent);
 const unique=new Set(independentTries.map(a=>a.taskId));
 const days=new Set(independentTries.map(a=>dateKey(a.time)));
 const transfer=independentTries.some(a=>trainingTasks.find(t=>t.id===a.taskId)?.transfer);
 const last=tries.at(-1);
 const lastTested=tested.at(-1);
 const latestMistake=tested.filter(a=>!independent(a)).at(-1);
 const evidence=latestMistake?independentTries.filter(a=>a.time>latestMistake.time):independentTries;
 const evidenceUnique=new Set(evidence.map(a=>a.taskId)),evidenceDays=new Set(evidence.map(a=>dateKey(a.time)));
 const evidenceTransfer=evidence.some(a=>trainingTasks.find(t=>t.id===a.taskId)?.transfer);
 const secure=evidenceUnique.size>=3 && evidenceDays.size>=2 && evidenceTransfer;
 const successes=evidence.length;
 const interval=successes>=5?21:successes>=3?7:2;
 const due=lastTested?lastTested.time+interval*DAY:null;
 let status='Unbekannt';
 if(last?.outcome==='notTaught' && !tested.length)status='Noch nicht gelernt';
 else if(last?.outcome==='unknown' && !tested.length)status='Üben';
 else if(tested.length)status=secure?'Vorläufig gefestigt':'Üben';
 if(due && now>=due)status='Wiederholung fällig';
 return {id,status,tries:tries.length,tested:tested.length,independent:independentTries.length,unique:unique.size,days:days.size,transfer,secure,evidenceUnique:evidenceUnique.size,evidenceTransfer,due,last,lastTested};
}
export function recommend(state,now=Date.now()){
 const stats=topics.map(t=>({...t,stats:topicStats(state,t.id,now)}));
 const due=stats.filter(t=>t.stats.status==='Wiederholung fällig').sort((a,b)=>a.stats.due-b.stats.due);
 if(due.length)return {topic:due[0],reason:'Eine kurze Wiederholung ist fällig.'};
 const needsPractice=t=>!t.stats.secure && t.stats.status!=='Noch nicht gelernt' && !(t.stats.evidenceUnique>=3 && t.stats.evidenceTransfer);
 const seen=stats.find(t=>t.stats.status==='Üben' && needsPractice(t));
 if(seen){const missing=seen.prerequisites.map(id=>stats.find(t=>t.id===id)).find(t=>t && needsPractice(t));if(missing)return {topic:missing,reason:`Diese Grundlage hilft dir bei „${seen.title}“.`};return {topic:seen,reason:'Hier kannst du den nächsten Schritt machen.'};}
 const next=stats.find(needsPractice);
 if(next)return {topic:next,reason:state.attempts.length?'Der nächste kleine Lernschritt.':'Beginne mit einer kurzen Grundlagen-Einheit.'};
 const waiting=[...stats].filter(t=>t.stats.due).sort((a,b)=>a.stats.due-b.stats.due)[0]??stats[0];
 return {topic:waiting,reason:'Die bearbeiteten Themen warten auf spätere Kontrollen. Du kannst freiwillig weiterüben.'};
}
export function selectTasks(state,id,count=4){
 const pool=trainingTasks.filter(t=>t.topic===id);
 const lastTimes=new Map(state.attempts.map(a=>[a.taskId,a.time]));
 return [...pool].sort((a,b)=>(lastTimes.get(a.id)??0)-(lastTimes.get(b.id)??0)||a.id.localeCompare(b.id)).slice(0,count);
}
export function currentWeekSessions(state,now=Date.now()){
 const start=new Date(now);start.setHours(0,0,0,0);start.setDate(start.getDate()-((start.getDay()+6)%7));
 return new Set(state.attempts.filter(a=>a.time>=start.getTime() && a.time<=now).map(a=>a.sessionId)).size;
}
export {topics,trainingTasks,diagnosticTasks};

