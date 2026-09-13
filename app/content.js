import {extraTopics,extraTasks} from './extra-content.js';
// Own tasks. Subskills and learning order are derived, not an official exhaustive list.
export const curriculum = {id:'MV-MR-2027-MA-2019',year:2027,examDate:'2027-05-21',version:'0.2.0',sourceChecked:'2026-09-13'};
export const sources = [
 {name:'Vorabhinweise Mittlere Reife 2027',url:'https://www.bildung-mv.de/export/sites/bildungsserver/.galleries/dokumente/pruefungen/Vorabhinweise_MR_2027.pdf',note:'Mathematik, S. 18–20: Struktur, Hilfsmittel, Schwerpunkte und Bewertung.'},
 {name:'Rahmenplan Mathematik · Regionale Schule / Gesamtschule',url:'https://www.bildung-mv.de/export/sites/bildungsserver/.galleries/dokumente/unterricht/rahmenplaene/RP_MA_MR_7-10.pdf',note:'Plan 2019. Die vollständige Zuordnung aller Einzelkompetenzen ist noch in Arbeit.'},
 {name:'Amtliche Prüfungstermine 2027',url:'https://www.bildung-mv.de/export/sites/bildungsserver/.galleries/dokumente/schule/pruefungstermine_2027.pdf',note:'Dritte Berichtigung vom 27.07.2026, Spalte Mittlere Reife, PDF-S. 5–6.'},
 {name:'Offizielle Musterprüfung mit Lösungen',url:'https://www.bildung-mv.de/export/sites/bildungsserver/.galleries/dokumente/pruefungen/Musterpruefung-MR-MA-Aufgaben-und-Loesungen.pdf',note:'Original für die Prüfungsvorbereitung in MV. Schwerpunkte und Zeiten richten sich nach den Vorabhinweisen 2027.'}
];
export const topics = [
 {id:'MAT-BAS-01',title:'Brüche & Dezimalzahlen',area:'Grundlagen',prerequisites:[],rule:'Gleiche Darstellung, dann rechnen.',explanation:'Wandle Brüche in Dezimalzahlen um oder bringe sie auf einen gemeinsamen Nenner. Achte auf Vorzeichen und die Reihenfolge der Rechenoperationen.',example:'3/4 + 0,2 = 0,75 + 0,2 = 0,95',role:'Grundlage'},
 {id:'MAT-ALG-02',title:'Lineare Gleichungen',area:'Algebra',prerequisites:['MAT-BAS-01'],rule:'Auf beiden Seiten dasselbe tun.',explanation:'Isoliere die Variable mit Umkehroperationen. Was du auf einer Seite addierst, subtrahierst, multiplizierst oder dividierst, machst du auch auf der anderen Seite. Prüfe die Lösung in der Ausgangsgleichung.',example:'3x + 6 = 21\n3x = 15\nx = 5\nProbe: 3·5 + 6 = 21',role:'Wahlschwerpunkt'},
 {id:'MAT-PRO-01',title:'Prozentwert, Grundwert, Satz',area:'Prozentrechnung',prerequisites:['MAT-BAS-01'],rule:'W = G·p/100',explanation:'Der Grundwert G ist das Ganze (100 %). Der Prozentwert W ist der betrachtete Anteil. Der Prozentsatz p sagt, wie groß dieser Anteil in Prozent ist. Stelle die Formel nach der gesuchten Größe um.',example:'12 % von 250 €:\nW = 250·0,12 = 30 €',role:'Pflichtschwerpunkt'},
 {id:'MAT-PRO-02',title:'Erhöhen & Verringern',area:'Prozentrechnung',prerequisites:['MAT-PRO-01'],rule:'Neu = Alt·Änderungsfaktor',explanation:'Bei einer Erhöhung um p % ist der Faktor 1 + p/100. Bei einer Verringerung ist er 1 − p/100. Der neue Wert enthält also den alten Wert und die Änderung.',example:'80 € mit 25 % Rabatt:\n80·0,75 = 60 €',role:'Pflichtschwerpunkt'},
 {id:'MAT-PRO-03',title:'Den alten Wert finden',area:'Prozentrechnung',prerequisites:['MAT-PRO-02'],rule:'Alt = Neu / Änderungsfaktor',explanation:'Wenn der neue Wert bekannt ist, teile durch den Änderungsfaktor. Der Prozentsatz bezieht sich auf den alten Wert, deshalb funktioniert einfaches Abziehen des Prozentsatzes vom neuen Wert nicht.',example:'Nach 10 % Erhöhung: 66 €\nAlt = 66/1,10 = 60 €',role:'Pflichtschwerpunkt'},
 {id:'MAT-PRO-04',title:'Mehrere Änderungen',area:'Prozentrechnung',prerequisites:['MAT-PRO-02'],rule:'Endwert = Startwert·Faktor 1·Faktor 2',explanation:'Jede Änderung bezieht sich auf den gerade aktuellen Wert. Multipliziere die Faktoren nacheinander. Gleiche Erhöhung und Verringerung heben sich deshalb nicht auf.',example:'100 € → +20 % → −20 %\n100·1,20·0,80 = 96 €',role:'Pflichtschwerpunkt'},
 {id:'MAT-FUN-02',title:'Lineare Modelle aufstellen',area:'Funktionen',prerequisites:['MAT-BAS-01'],rule:'y = m·x + n',explanation:'m gibt die Änderung pro Einheit x an. n ist der feste Anfangswert. Lies genau, welcher Betrag immer anfällt und welcher sich mit x verändert.',example:'6 € Startgebühr, 3 € je Stunde:\nK(x) = 3x + 6\nm = 3 und n = 6',role:'Pflichtschwerpunkt'},
 {id:'MAT-FUN-03',title:'Funktionswerte & Nullstellen',area:'Funktionen',prerequisites:['MAT-FUN-02','MAT-ALG-02'],rule:'Funktionswert: x einsetzen.\nNullstelle: y = 0 setzen.',explanation:'Für einen Funktionswert ersetzt du x durch die angegebene Zahl. Bei einer Nullstelle suchst du dagegen die Stelle x, an der der Funktionswert 0 ist.',example:'f(x) = 2x − 6\nf(4) = 2·4 − 6 = 2\nNullstelle: 0 = 2x − 6, also x = 3',role:'Pflichtschwerpunkt'},
 {id:'MAT-STO-03',title:'Einfache Wahrscheinlichkeiten',area:'Stochastik',prerequisites:['MAT-BAS-01'],rule:'P = günstige / mögliche Ergebnisse',explanation:'Diese Zählregel gilt, wenn alle Einzelergebnisse gleich wahrscheinlich sind. Zähle sorgfältig. Bei einem Gegenereignis ziehst du die Wahrscheinlichkeit des Ereignisses von 1 ab.',example:'Fairer Würfel, Zahl größer als 4:\nP = 2/6 = 1/3',role:'Pflichtschwerpunkt'},
 {id:'MAT-STO-05',title:'Ziehen ohne Zurücklegen',area:'Stochastik',prerequisites:['MAT-STO-03'],rule:'Wahrscheinlichkeiten entlang des Pfads multiplizieren.',explanation:'Nach dem ersten Zug liegt eine Kugel weniger im Beutel. Hat der erste Zug die gewünschte Farbe, gibt es auch eine passende Kugel weniger. Passe Zähler und Nenner für den zweiten Zug an.',example:'3 rote, 2 blaue Kugeln; zweimal rot:\nP = 3/5·2/4 = 3/10',role:'Pflichtschwerpunkt'}
];
topics.push(...extraTopics);
const tasks=[];
const num=(key,label,expected,unit='',tolerance=0.000001)=>({key,label,expected,unit,tolerance});
function task(topic,seq,prompt,fields,hints,steps,error,tools=false){
 tasks.push({id:topic+'-'+String(seq).padStart(3,'0'),version:1,topic,prompt,fields,hints,steps,error,tools,transfer:seq===4,origin:'Eigenentwicklung',source:'Vorabhinweise 2027, S. 19; Einzelziel abgeleitet',difficulty:seq===4?3:2});
}
[
 ['Berechne 1/2 + 0,35.',0.85,'1/2 = 0,5.','0,5 + 0,35 = 0,85.'],
 ['Berechne 3/5 − 0,15.',0.45,'3/5 = 0,6.','0,6 − 0,15 = 0,45.'],
 ['Berechne −0,4 + 7/10.',0.3,'7/10 = 0,7.','−0,4 + 0,7 = 0,3.'],
 ['Eine Flasche enthält 3/4 Liter. Du trinkst 0,2 Liter. Wie viel bleibt übrig?',0.55,'3/4 Liter = 0,75 Liter.','0,75 − 0,2 = 0,55 Liter.']
].forEach((a,i)=>task('MAT-BAS-01',i+1,a[0],[num('value','Ergebnis',a[1],i===3?'Liter':'')],['Schreibe den Bruch als Dezimalzahl.','Teile den Zähler durch den Nenner, dann rechne weiter.'],[a[2],a[3]],'Achte darauf, ob du addieren oder subtrahieren sollst.'));
[[3,6,21,5],[4,-7,21,7],[5,8,38,6],[7,5,54,7]].forEach(([a,b,c,x],i)=>task('MAT-ALG-02',i+1,i===3?`Ein Verleih verlangt 5 € Startgebühr und 7 € je Stunde. Du zahlst 54 €. Wie viele Stunden waren es?`:`Löse ${a}x ${b<0?'−':'+'} ${Math.abs(b)} = ${c}.`,[num('value',i===3?'Stunden':'x',x,i===3?'h':'')],['Entferne zuerst den festen Betrag auf beiden Seiten.',`Dann teile beide Seiten durch ${a}.`],[`${a}x = ${c-b}.`,`x = ${c-b}/${a} = ${x}.`,`Probe: ${a}·${x} ${b<0?'−':'+'} ${Math.abs(b)} = ${c}.`],'Wende jede Umformung auf beide Seiten an.'));
[
 ['Berechne 12 % von 250 €.',30,'€','W = 250·0,12 = 30 €.'],
 ['18 € entsprechen 15 % des Gesamtpreises. Bestimme den Gesamtpreis.',120,'€','G = 18/0,15 = 120 €.'],
 ['Von 80 Personen kommen 20 mit dem Fahrrad. Wie viel Prozent sind das?',25,'%','p = 20/80·100 = 25 %.'],
 ['Ein Akku mit 4000 mAh hat noch 35 % seiner Kapazität. Wie viel ist das?',1400,'mAh','W = 4000·0,35 = 1400 mAh.']
].forEach((a,i)=>task('MAT-PRO-01',i+1,a[0],[num('value','Gesuchter Wert',a[1],a[2])],['Welche Größe ist das Ganze, welche der Anteil?','Nutze W = G·p/100. Stelle die Formel bei Bedarf um.'],[a[3]],'Prüfe, ob Prozentwert, Grundwert oder Prozentsatz gesucht ist.'));
[[80,25,false],[150,12,true],[240,15,false],[60,5,true]].forEach(([g,p,up],i)=>{const factor=1+(up?p:-p)/100;task('MAT-PRO-02',i+1,i===3?`Eine Monatskarte kostet ${g} €. Sie wird um ${p} % teurer. Bestimme den neuen Preis.`:`Ein Preis von ${g} € wird um ${p} % ${up?'erhöht':'gesenkt'}. Bestimme den neuen Preis.`,[num('value','Neuer Preis',Math.round(g*factor*100)/100,'€')],['Gesucht ist der gesamte neue Preis, nicht nur die Änderung.',`Der Änderungsfaktor ist ${factor.toLocaleString('de-DE')}.`],[`Neu = ${g}·${factor.toLocaleString('de-DE')}.`,`Neuer Preis: ${(g*factor).toLocaleString('de-DE')} €.`],'Der Prozentbetrag allein ist noch nicht der neue Preis.');});
[[66,10,true,60],[72,20,false,90],[184,15,true,160],[42,30,false,60]].forEach(([n,p,up,g],i)=>task('MAT-PRO-03',i+1,`Nach ${p} % ${up?'Erhöhung':'Rabatt'} kostet ${i===3?'ein Spiel':'ein Artikel'} ${n} €. Bestimme den ursprünglichen Preis.`,[num('value','Ursprünglicher Preis',g,'€')],['Die Prozentänderung bezieht sich auf den ursprünglichen Preis.',`Teile ${n} durch ${1+(up?p:-p)/100}.`],[`Änderungsfaktor: ${1+(up?p:-p)/100}.`,`Alt = ${n}/${1+(up?p:-p)/100} = ${g} €.`,`Probe: ${g}·${1+(up?p:-p)/100} = ${n} €.`],'Ziehe nicht einfach den Prozentsatz vom neuen Preis ab.'));
[[100,20,20],[200,10,10],[80,25,20],[50,10,20]].forEach(([g,p,q],i)=>{const result=Math.round(g*(1+p/100)*(1-q/100)*100)/100;task('MAT-PRO-04',i+1,`Ein Preis von ${g} € steigt zuerst um ${p} % und sinkt anschließend um ${q} %. Bestimme den Endpreis.`,[num('value','Endpreis',result,'€')],['Die zweite Änderung bezieht sich auf den bereits erhöhten Preis.',`Multipliziere ${g} zuerst mit ${1+p/100}, danach mit ${1-q/100}.`],[`Nach der Erhöhung: ${Math.round(g*(1+p/100)*100)/100} €.`,`Endpreis = ${g}·${1+p/100}·${1-q/100} = ${result} €.`],'Die Prozentsätze dürfen nicht einfach voneinander abgezogen werden.');});
[[6,3,'Fahrradverleih','Stunde'],[20,8,'Fitnessstudio','Besuch'],[4,2,'Taximodell','Kilometer'],[12,5,'Werkstatt','Nutzungsstunde']].forEach(([n,m,place,unit],i)=>task('MAT-FUN-02',i+1,`${place}: ${n} € Grundgebühr und ${m} € je ${unit}. Die Kosten sind K(x) = m·x + n. Bestimme m und n.`,[num('m','m · Betrag je Einheit',m),num('n','n · Grundgebühr',n)],['Welcher Betrag hängt von der Anzahl x ab?','Die Gebühr pro Einheit wird mit x multipliziert. Die Grundgebühr bleibt fest.'],[`m = ${m}, n = ${n}.`,`K(x) = ${m}x + ${n}.`],'Grundgebühr und Betrag je Einheit sind möglicherweise vertauscht.'));
[[2,5,-2,false],[3,-6,0,true],[-2,8,3,false],[4,-20,0,true]].forEach(([m,n,x,zero],i)=>task('MAT-FUN-03',i+1,`Gegeben ist f(x) = ${m}x ${n<0?'−':'+'} ${Math.abs(n)}. ${zero?'Bestimme die Nullstelle.':`Berechne f(${x}).`}`,[num('value',zero?'Nullstelle x':'Funktionswert',zero?-n/m:m*x+n)],['Ist die Stelle x gegeben oder der Funktionswert 0?',zero?'Setze f(x) = 0 und löse nach x auf.':`Setze ${x} für x ein. Achte auf das Vorzeichen.`],zero?[`0 = ${m}x ${n<0?'−':'+'} ${Math.abs(n)}.`,`x = ${-n/m}.`]:[`f(${x}) = ${m}·(${x}) ${n<0?'−':'+'} ${Math.abs(n)} = ${m*x+n}.`],'Verwechsle die Stelle x nicht mit dem Funktionswert f(x).'));
[
 ['Ein fairer Würfel wird einmal geworfen. Wie wahrscheinlich ist eine gerade Zahl?',3,6,'Günstige Ergebnisse: 2, 4 und 6.'],
 ['Ein fairer Würfel wird einmal geworfen. Wie wahrscheinlich ist eine Zahl größer als 4?',2,6,'Günstige Ergebnisse: 5 und 6.'],
 ['Ein Beutel enthält 4 rote und 6 blaue Kugeln. Eine Kugel wird zufällig gezogen. Wie wahrscheinlich ist eine rote?',4,10,'4 rote Kugeln unter 10 Kugeln.'],
 ['Ein Glücksrad hat 8 gleich große Felder, davon 3 Gewinnfelder. Wie wahrscheinlich ist es, nicht zu gewinnen?',5,8,'8 − 3 = 5 Felder ohne Gewinn.']
].forEach((a,i)=>task('MAT-STO-03',i+1,a[0],[num('value','Wahrscheinlichkeit als Bruch oder Dezimalzahl',a[1]/a[2],'',0.000001)],['Zähle günstige und insgesamt mögliche gleich wahrscheinliche Ergebnisse.','Teile die Anzahl der günstigen durch die Anzahl aller möglichen Ergebnisse.'],[a[3],`P = ${a[1]}/${a[2]}.`],'Gib eine Zahl zwischen 0 und 1 oder einen Bruch ein; z. B. 1/2 für 50 %.'));
[[3,2],[4,2],[5,3],[2,3]].forEach(([r,b],i)=>task('MAT-STO-05',i+1,`Ein Beutel enthält ${r} rote und ${b} blaue Kugeln. Zwei Kugeln werden zufällig ohne Zurücklegen gezogen. Wie wahrscheinlich sind zwei rote Kugeln?`,[num('value','Wahrscheinlichkeit als Bruch oder Dezimalzahl',(r/(r+b))*((r-1)/(r+b-1)),'',0.000001)],['Nach dem ersten roten Zug verändert sich der Inhalt des Beutels.',`Erster Zug: ${r}/${r+b}. Zweiter roter Zug: ${r-1}/${r+b-1}.`],[`P(rot, rot) = ${r}/${r+b}·${r-1}/${r+b-1}.`,`P = ${r*(r-1)}/${(r+b)*(r+b-1)}.`],'Ohne Zurücklegen werden beim zweiten Zug Zähler und Nenner jeweils um 1 kleiner.'));
const transferById = {
 'MAT-PRO-04-004':'Du hast 50 € gespart. Der Betrag wächst um 10 %. Danach gibst du 20 % des neuen Betrags aus. Wie viel Geld bleibt?',
 'MAT-FUN-02-004':'Eine Werkstattkarte hat eine Grundgebühr von 12 €. Für drei Nutzungsstunden zahlst du insgesamt 27 €. Die Kosten sind K(x) = m·x + n. Bestimme m und n.',
 'MAT-FUN-03-004':'Ein Konto hat 20 € Schulden. Jede Woche werden 4 € eingezahlt; Gebühren fallen nicht an. Der Kontostand ist f(x) = 4x − 20. Nach wie vielen Wochen sind die Schulden vollständig beglichen?',
 'MAT-STO-05-004':'Bei einer Tombola gibt es 5 Lose: 2 Gewinnlose und 3 Nieten. Du ziehst zwei Lose, ohne ein Los zurückzugeben. Wie wahrscheinlich sind zwei Gewinne?'
};
for (const [id,prompt] of Object.entries(transferById)) tasks.find(t=>t.id===id).prompt=prompt;
tasks.push(...extraTasks);
export const trainingTasks=tasks;
// Separate numbers and scenarios: seeing training solutions cannot reveal diagnostic answers.
export const diagnosticTasks=[
 ['MAT-BAS-01','Berechne 2/5 + 0,25.',[num('value','Ergebnis',0.65)],['2/5 = 0,4.','0,4 + 0,25 = 0,65.']],
 ['MAT-ALG-02','Löse 6x − 4 = 32.',[num('value','x',6)],['6x = 36.','x = 6.']],
 ['MAT-PRO-01','Berechne 18 % von 300 €.',[num('value','Prozentwert',54,'€')],['300·0,18 = 54 €.']],
 ['MAT-PRO-01','24 € entsprechen 20 % des Gesamtpreises. Bestimme den Gesamtpreis.',[num('value','Gesamtpreis',120,'€')],['G = 24/0,20 = 120 €.']],
 ['MAT-PRO-02','Ein Artikel kostet 90 €. Der Preis sinkt um 20 %. Bestimme den neuen Preis.',[num('value','Neuer Preis',72,'€')],['90·0,80 = 72 €.']],
 ['MAT-PRO-03','Nach 25 % Erhöhung kostet ein Artikel 100 €. Bestimme den ursprünglichen Preis.',[num('value','Alter Preis',80,'€')],['100/1,25 = 80 €.']],
 ['MAT-PRO-04','Ein Preis von 120 € steigt um 10 % und sinkt danach um 25 %. Bestimme den Endpreis.',[num('value','Endpreis',99,'€')],['120·1,10·0,75 = 99 €.']],
 ['MAT-FUN-02','Ein Verleih verlangt 9 € Grundgebühr und 4 € je Stunde. Bestimme m und n für K(x) = m·x + n.',[num('m','m',4),num('n','n',9)],['K(x) = 4x + 9.']],
 ['MAT-FUN-03','Gegeben ist f(x) = 5x − 12. Berechne f(3).',[num('value','Funktionswert',3)],['5·3 − 12 = 3.']],
 ['MAT-STO-03','Ein fairer Würfel wird geworfen. Wie wahrscheinlich ist eine Zahl kleiner als 3?',[num('value','Wahrscheinlichkeit als Bruch oder Dezimalzahl',1/3)],['Günstige Ergebnisse: 1 und 2.','P = 2/6 = 1/3.']],
 ['MAT-STO-05','Ein Beutel enthält 4 rote und 3 blaue Kugeln. Zwei werden ohne Zurücklegen gezogen. Wie wahrscheinlich sind zwei rote?',[num('value','Wahrscheinlichkeit als Bruch oder Dezimalzahl',2/7)],['P = 4/7·3/6 = 2/7.']],
 ['MAT-FUN-03','Bestimme die Nullstelle von f(x) = 3x − 15.',[num('value','Nullstelle x',5)],['0 = 3x − 15.','x = 5.']]
].map(([topic,prompt,fields,steps],i)=>({id:'DIAG-'+String(i+1).padStart(3,'0'),topic,prompt,fields,steps,hints:[],version:1,tools:i>=4,transfer:false,origin:'Eigenentwicklung'}));
export const allTasks=[...trainingTasks,...diagnosticTasks];


