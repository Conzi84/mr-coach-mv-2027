import test from 'node:test';
import assert from 'node:assert/strict';
import {depthTasks} from '../app/depth.js';
import {grade,selectTasks,emptyState,topicStats,DAY,validateState} from '../app/engine.js';
test('Depth results cover percentages versus points, weighted groups, inverse factors and integer limits',()=>{
 const expected=[2,1,10,28,2,100,3,12.5,3,5,120,0,1,2,25,19,2,2,5,3,2,3,15,8];
 assert.deepEqual(depthTasks.map(t=>t.fields[0].expected),expected);
 for(const t of depthTasks){assert.equal(grade(t,{value:String(t.fields[0].expected)}).correct,true);}
 for(const stage of ['verstehen','anwenden','pruefung']){const tasks=selectTasks(emptyState(),'MAT-PRO-02',4,stage);assert.ok(tasks.length);assert.ok(tasks.every(t=>(t.stage||'anwenden')===stage));}
});
test('Repeated old template successes and choice-only successes cannot establish depth mastery',()=>{
 const state=emptyState(),now=Date.now();const ids=['MAT-PRO-02-001','MAT-PRO-02-002','MAT-PRO-02-004'];
 state.attempts=ids.map((id,i)=>({id:'test-'+i,taskId:id,taskVersion:1,topic:'MAT-PRO-02',time:now-(3-i)*DAY,mode:'training',outcome:'correct',firstCorrect:true,assisted:false,solutionSeen:false,hints:0,tries:1,sessionId:'test'}));
 assert.equal(topicStats(validateState(state),'MAT-PRO-02').secure,false);
 state.attempts[1].taskId='DEPTH-006';state.attempts[2].taskId='DEPTH-007';
 assert.equal(topicStats(validateState(state),'MAT-PRO-02').secure,true);
 state.attempts[1].taskId='DEPTH-005';assert.equal(topicStats(validateState(state),'MAT-PRO-02').secure,false);
});
