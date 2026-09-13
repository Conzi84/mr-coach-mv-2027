import test from 'node:test';
import assert from 'node:assert/strict';
import {extraTasks,extraTopics} from '../app/extra-content.js';
import {emptyState,validateState} from '../app/engine.js';
import {evidence,matrixHTML,universeHTML} from '../app/universe.js';
test('New task bank: reference results include signs, units, periods and paired solutions',()=>{
 const answers=[[340],[2500],[.75],[48],[11],[-3],[-4],[16],[4,1],[3,.5],[4],[6],[5],[5],[5],[5,2.5],[9],[24],[20],[12],[6,4],[4,3],[5,3],[5,7],[5],[12],[17],[6],[6],[.5],[14],[10]];
 assert.equal(extraTasks.length,32);assert.equal(extraTopics.length,8);
 extraTasks.forEach((t,i)=>{assert.deepEqual(t.fields.map(f=>f.expected),answers[i],t.id);});
 const period=extraTasks.find(t=>t.id==='MAT-FUN-08-004');assert.equal(period.fields[0].expected,2*Math.PI/(Math.PI/3));
});
test('Evidence never converts assisted answers or solution viewing into independent proof',()=>{
 const t=extraTasks.find(t=>t.id==='MAT-ALG-04-004');const state=emptyState();
 const attempt={id:'expansion-test',taskId:t.id,taskVersion:1,topic:t.topic,time:Date.now(),mode:'training',outcome:'correct',firstCorrect:false,assisted:true,solutionSeen:false,hints:1,tries:1,sessionId:'test'};
 state.attempts=[attempt];assert.deepEqual(evidence(validateState(state),t.topic),{calculation:0,application:0,support:1});
 attempt.assisted=false;attempt.hints=0;attempt.firstCorrect=true;assert.deepEqual(evidence(validateState(state),t.topic),{calculation:1,application:1,support:0});
 assert.match(matrixHTML(state),/Noch nicht durch die App geprüft/);
 assert.match(universeHTML(state,t.topic),/besser auf dem Desktop/);
 assert.match(universeHTML(state,t.topic),/Noch kein Training verfügbar/);
});
