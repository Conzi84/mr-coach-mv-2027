// Own exercises. These selected subskills do not exhaust the official curriculum.
const topic=(id,title,area,prerequisites,rule,explanation,example,role)=>({id,title,area,prerequisites,rule,explanation,example,role});
export const extraTopics=[
 topic('MAT-BAS-02','Einheiten umrechnen','Grundlagen',['MAT-BAS-01'],'Länge: Faktor 10. Fläche: Faktor 100. Volumen: Faktor 1000 je benachbarter Stufe.','Eine Fläche hat zwei, ein Volumen drei Dimensionen. Deshalb darfst du nicht denselben Faktor wie bei einer Länge verwenden. 1 Liter entspricht 1 dm³.','2 m = 200 cm\n2 m² = 20 000 cm²\n2 dm³ = 2 Liter','Grundlage'),
 topic('MAT-FUN-04','Quadratische Funktionen','Funktionen',['MAT-FUN-03'],'f(x) = a·x² + c','Quadriere zuerst x, auch wenn x negativ ist. a verändert Öffnung und Streckung, c verschiebt den Graphen nach oben oder unten. Hier trainierst du eine erste Teilfamilie quadratischer Funktionen.','f(x) = 2x² − 3\nf(−2) = 2·4 − 3 = 5','Pflichtschwerpunkt'),
 topic('MAT-FUN-08','Amplitude & Periode','Funktionen',['MAT-FUN-03'],'f(x) = a·sin(bx): Amplitude |a|, Periode 2π/|b| im Bogenmaß.','Die Amplitude ist nicht negativ. b verändert die Geschwindigkeit der Wiederholung. In diesen Aufgaben ist b positiv und x im Bogenmaß; gib die Periode als Vielfaches von π an.','f(x) = 3·sin(2x)\nAmplitude 3; Periode π, also T/π = 1','Pflichtschwerpunkt'),
 topic('MAT-STO-02','Mittelwert & Median','Stochastik',['MAT-BAS-01'],'Mittelwert: Summe / Anzahl. Median: mittlerer Wert der sortierten Daten.','Sortiere die Werte für den Median. Bei gerader Anzahl mittelt man die beiden mittleren Werte. Einzelne große Werte können den Mittelwert deutlich verändern.','1, 2, 3, 10\nMittelwert = 16/4 = 4\nMedian = (2+3)/2 = 2,5','Pflichtschwerpunkt'),
 topic('MAT-STO-06','Systematisch zählen','Stochastik',['MAT-STO-03'],'Unabhängige Wahlmöglichkeiten multiplizieren; Reihenfolge und Wiederholung beachten.','Bei Codes zählt die Reihenfolge. Sind Wiederholungen erlaubt, bleibt die Zahl der Möglichkeiten je Stelle gleich. Ohne Wiederholung sinkt sie. Bei einer Anordnung verschiedener Dinge entsteht n!.','Drei verschiedene Bücher anordnen:\n3·2·1 = 6 Reihenfolgen','Rahmenplan Klasse 10'),
 topic('MAT-ALG-04','Gleichungssysteme','Algebra',['MAT-ALG-02','MAT-FUN-03'],'Zwei Gleichungen müssen gleichzeitig stimmen.','Mit Addition oder Substitution reduzierst du auf eine Variable. Setze beide gefundenen Werte in beide Ausgangsgleichungen ein. Die App fragt x und y getrennt ab.','x + y = 9, x − y = 3\nAddition: 2x = 12\nx = 6, y = 3','Wahlschwerpunkt'),
 topic('MAT-GEO-02','Satz des Pythagoras','Geometrie',['MAT-BAS-02'],'a² + b² = c², nur im rechtwinkligen Dreieck.','c liegt gegenüber dem rechten Winkel und ist die längste Seite. Für eine fehlende Kathete subtrahierst du die Quadrate. Zeichne eine Planfigur und ziehe zuletzt die Wurzel.','Katheten 6 cm und 8 cm:\nc = √(36+64) = 10 cm','Grundlage für Wahlbereiche'),
 topic('MAT-TRI-01','Trigonometrie im Dreieck','Geometrie',['MAT-GEO-02','MAT-ALG-02'],'sin α = Gegenkathete/Hypotenuse; cos α = Ankathete/Hypotenuse; tan α = Gegenkathete/Ankathete.','Die Zuordnung der Katheten hängt vom betrachteten Winkel ab. Zeichne den rechten Winkel und α ein. Hier beginnen wir mit Sinus und einfachen Winkeln; Kosinus und Tangens folgen im Ausbau.','α = 30°, Hypotenuse 10 cm:\nGegenkathete = 10·sin(30°) = 5 cm','Wahlschwerpunkt')
];
const n=(key,label,expected,unit='')=>({key,label,expected,unit,tolerance:0.000001});
const v=(expected,unit='',label='Ergebnis')=>[n('value',label,expected,unit)];
const rows=[
 ['MAT-BAS-02','Rechne 3,4 m in cm um.',v(340,'cm'),['1 m = 100 cm.','3,4·100 = 340 cm.']],
 ['MAT-BAS-02','Rechne 0,25 m² in cm² um.',v(2500,'cm²'),['1 m² = 10 000 cm².','0,25·10 000 = 2500 cm².']],
 ['MAT-BAS-02','Rechne 750 cm³ in Liter um.',v(.75,'Liter'),['1000 cm³ = 1 Liter.','750/1000 = 0,75 Liter.']],
 ['MAT-BAS-02','Ein Aquarium enthält 24 dm³ Wasser. Wie viele Flaschen mit je 0,5 Liter lassen sich damit füllen?',v(48,'Flaschen'),['24 dm³ = 24 Liter.','24/0,5 = 48 Flaschen.']],
 ['MAT-FUN-04','Gegeben ist f(x) = x² + 2. Berechne f(−3).',v(11),['(−3)² = 9.','9 + 2 = 11.']],
 ['MAT-FUN-04','Gegeben ist f(x) = −2x² + 5. Berechne f(2).',v(-3),['2² = 4.','−2·4 + 5 = −3.']],
 ['MAT-FUN-04','Die Parabel f(x) = 3x² − 4 hat ihren Scheitel bei x = 0. Bestimme den y-Wert des Scheitels.',v(-4),['Setze x = 0 ein.','3·0² − 4 = −4.']],
 ['MAT-FUN-04','Der Bremsweg wird näherungsweise durch s(v) = (v/10)² in Metern modelliert; v ist in km/h. Berechne den Bremsweg bei 40 km/h.',v(16,'m'),['40/10 = 4.','4² = 16 m; das Modell ist eine Näherung.']],
 ['MAT-FUN-08','Bestimme Amplitude und T/π von f(x) = 4·sin(2x). x ist im Bogenmaß.',[n('amplitude','Amplitude',4),n('period','T/π',1)],['Amplitude = |4| = 4.','T = 2π/2 = π, also T/π = 1.']],
 ['MAT-FUN-08','Bestimme Amplitude und T/π von f(x) = −3·sin(4x). x ist im Bogenmaß.',[n('amplitude','Amplitude',3),n('period','T/π',.5)],['Amplitude = |−3| = 3.','T = 2π/4 = π/2, also T/π = 0,5.']],
 ['MAT-FUN-08','Eine Sinusfunktion a·sin(bx) hat b = 0,5. Bestimme T/π im Bogenmaß.',v(4,'','T/π'),['T = 2π/0,5 = 4π.','T/π = 4.']],
 ['MAT-FUN-08','Die Höhe einer Schwingung ist h(t) = 5·sin(πt/3) in cm; t in Sekunden. Nach wie vielen Sekunden wiederholt sich die Schwingung?',v(6,'s'),['b = π/3.','T = 2π/(π/3) = 6 Sekunden.']],
 ['MAT-STO-02','Bestimme den Mittelwert der Werte 2, 4, 6 und 8.',v(5),['Summe: 20.','20/4 = 5.']],
 ['MAT-STO-02','Bestimme den Median der Werte 9, 1, 5, 3 und 7.',v(5),['Sortiert: 1, 3, 5, 7, 9.','Der mittlere Wert ist 5.']],
 ['MAT-STO-02','Bestimme den Median der Werte 2, 3, 7 und 10.',v(5),['Die mittleren Werte sind 3 und 7.','(3+7)/2 = 5.']],
 ['MAT-STO-02','Vier Lieferzeiten betragen 2, 2, 3 und 13 Tage. Bestimme Mittelwert und Median.',[n('mean','Mittelwert',5,'Tage'),n('median','Median',2.5,'Tage')],['Mittelwert: 20/4 = 5 Tage.','Median: (2+3)/2 = 2,5 Tage. Der Ausreißer beeinflusst den Mittelwert stärker.']],
 ['MAT-STO-06','Ein zweistelliger Code nutzt die Ziffern 1, 2 und 3. Wiederholungen sind erlaubt. Wie viele Codes gibt es?',v(9,'Codes'),['Je Stelle 3 Möglichkeiten.','3·3 = 9.']],
 ['MAT-STO-06','Vier verschiedene Bücher werden nebeneinander gestellt. Wie viele Reihenfolgen gibt es?',v(24,'Reihenfolgen'),['4 Möglichkeiten, dann 3, dann 2, dann 1.','4·3·2·1 = 24.']],
 ['MAT-STO-06','Aus fünf Personen werden eine Vorsitzende oder ein Vorsitzender und eine Stellvertretung gewählt. Niemand übernimmt beide Ämter. Wie viele besetzte Ämterpaare sind möglich?',v(20,'Paare'),['Die Ämter sind verschieden: Reihenfolge zählt.','5·4 = 20.']],
 ['MAT-STO-06','Du wählst ein Outfit aus 3 T-Shirts, 2 Hosen und 2 Paar Schuhen. Jede Kombination ist möglich. Wie viele Outfits gibt es?',v(12,'Outfits'),['Für jedes T-Shirt gibt es 2·2 Kombinationen.','3·2·2 = 12.']],
 ['MAT-ALG-04','Löse das System: x + y = 10 und x − y = 2.',[n('x','x',6),n('y','y',4)],['Addieren: 2x = 12, also x = 6.','y = 4. Probe: 6+4=10; 6−4=2.']],
 ['MAT-ALG-04','Löse das System: 2x + y = 11 und x + y = 7.',[n('x','x',4),n('y','y',3)],['Zweite Gleichung abziehen: x = 4.','y = 3. Probe: 8+3=11; 4+3=7.']],
 ['MAT-ALG-04','Löse das System: x + 2y = 11 und x − y = 2.',[n('x','x',5),n('y','y',3)],['Subtraktion: 3y = 9, also y = 3.','x = 5. Probe: 5+6=11; 5−3=2.']],
 ['MAT-ALG-04','Zwei Erwachsenen- und drei Kindertickets kosten 31 €. Ein Erwachsenenticket und ein Kinderticket kosten zusammen 12 €. Bestimme beide Einzelpreise.',[n('adult','Erwachsenenticket',5,'€'),n('child','Kinderticket',7,'€')],['2E+3K=31 und E+K=12. Zweimal die zweite Gleichung abziehen: K=7.','E=5. Probe: 10+21=31 und 5+7=12.']],
 ['MAT-GEO-02','Ein rechtwinkliges Dreieck hat Katheten von 3 cm und 4 cm. Berechne die Hypotenuse.',v(5,'cm'),['c² = 9+16 = 25.','c = √25 = 5 cm.']],
 ['MAT-GEO-02','Die Hypotenuse misst 13 cm, eine Kathete 5 cm. Berechne die andere Kathete.',v(12,'cm'),['b² = 13²−5² = 144.','b = √144 = 12 cm.']],
 ['MAT-GEO-02','Ein rechtwinkliges Dreieck hat Katheten von 8 cm und 15 cm. Berechne die Hypotenuse.',v(17,'cm'),['c² = 64+225 = 289.','c = √289 = 17 cm.']],
 ['MAT-GEO-02','Eine 10 m lange Leiter reicht 8 m hoch an einer senkrechten Wand. Wie weit steht ihr Fuß waagerecht von der Wand entfernt?',v(6,'m'),['Die Leiter ist die Hypotenuse. Abstand² = 10²−8² = 36.','Abstand = 6 m.']],
 ['MAT-TRI-01','Im rechtwinkligen Dreieck ist α = 30° und die Hypotenuse 12 cm lang. Berechne die Gegenkathete zu α.',v(6,'cm'),['sin 30° = 0,5.','Gegenkathete = 12·0,5 = 6 cm.']],
 ['MAT-TRI-01','Die Gegenkathete zu α misst 4 cm, die Hypotenuse 8 cm. Bestimme sin α.',v(.5,'','sin α'),['sin α = Gegenkathete/Hypotenuse.','4/8 = 0,5.']],
 ['MAT-TRI-01','Im rechtwinkligen Dreieck gilt α = 30° und Gegenkathete = 7 cm. Bestimme die Hypotenuse.',v(14,'cm'),['0,5 = 7/Hypotenuse.','Hypotenuse = 7/0,5 = 14 cm.']],
 ['MAT-TRI-01','Eine 20 m lange gerade Rampe steigt unter einem Winkel von 30° zur Waagerechten an. Wie groß ist ihr Höhenunterschied?',v(10,'m'),['Die Rampenlänge ist die Hypotenuse. Höhe = 20·sin 30°.','Höhe = 20·0,5 = 10 m.']]
];
const counters=new Map();
export const extraTasks=rows.map(([id,prompt,fields,steps])=>{const seq=(counters.get(id)||0)+1;counters.set(id,seq);return {id:`${id}-${String(seq).padStart(3,'0')}`,version:1,topic:id,prompt,fields,steps,hints:[extraTopics.find(t=>t.id===id).rule,'Zeichne oder notiere zuerst den Ansatz. Prüfe, welche Größe gesucht ist und welche Angaben du brauchst.'],error:'Prüfe deinen Ansatz, die Reihenfolge der Rechenschritte und die gesuchte Größe. Nutze bei Bedarf einen Hinweis.',tools:false,transfer:seq===4,origin:'Eigenentwicklung',source:'Rahmenplan Mathematik 2019; eigene ausgewählte Teilkompetenz',difficulty:seq===4?3:2};});
