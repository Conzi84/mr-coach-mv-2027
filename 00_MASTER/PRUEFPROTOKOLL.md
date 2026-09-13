# Prüfprotokoll – Version 0.1

Stand: 13.09.2026. Tests verwenden ausschließlich selbst erzeugte Beispieldaten, keine echten Schülerergebnisse.

## Automatische Prüfung

`npm run check` erfolgreich: zehn Tests, keine Fehler; statischer Build erfolgreich.

Geprüft: deutsche Dezimalzahlen, negative Zahlen, Brüche, ungültige Eingaben, Zahlentoleranzen, vertauschte Funktionskoeffizienten, Referenzantworten pro Aufgabenfamilie, Aufgaben-IDs und Metadaten, keine Abhängigkeitszyklen, getrennte Hilfe/Erstversuche, Transfer und zeitversetzte Evidenz, erneutes Üben nach Fehlern, fällige Kontrollen, Voraussetzungen, Export/Import und ungültige Sicherungen. Nach einem erfolgreichen Tagesblock kann ein neues Thema folgen; eine spätere Kontrolle bleibt fällig.

## Browserprüfung

- Direkter Start in eine vierteilige Lerneinheit.
- Falsche Antwort → Hinweis → korrigierte Antwort: als Unterstützung erfasst, kein selbstständiger Erfolg.
- Neuladen: offene Aufgabe und Einheit erhalten.
- Lokaler Server abgeschaltet, App neu geladen: zwischengespeicherte Oberfläche und Aufgabe weiterhin verfügbar. Das prüft die Offline-Grundlage, nicht alle Browser oder Geräte.
- Neues Build angeboten und über App-Schaltfläche aktiviert: kontrollierter Versionswechsel.
- Sicherungsdatei mit falschem Curriculum abgelehnt; kein Überschreiben.
- Gültige Beispielsicherung wiederhergestellt; Eintrag nach Neuladen im Lernstand erhalten.
- Exportdaten im sichtbaren Ausweichfeld stimmen mit der wiederhergestellten Sicherung überein. Der Browser-Downloadabschluss wurde vom Testbrowser nicht bestätigt; der Ausweichweg ist vorhanden. Download auf dem Zielgerät noch prüfen.
- Vollständiger digitaler Check mit zehn richtigen, einer falschen und einer als noch nicht gelernt markierten Antwort: richtige Zusammenfassung und getrennte Rückmeldungen.
- Smartphoneansichten bei 390 × 844 und 320 × 740 sowie Desktopansicht visuell geprüft. Kein unbeabsichtigtes horizontales Scrollen der Startseite; mathematische Eingabefelder und reguläre Schaltflächen mindestens 48 px hoch.
- Alle erzeugten Versuche anschließend über eine leere Sicherung entfernt. Vorschau beginnt mit leerem Lernstand.

## Grenzen der Prüfung

Kein echter iOS-/Android-Gerätetest, keine bestätigte Home-Bildschirm-Installation, keine produktive Netlify-HTTPS-Veröffentlichung und kein GitHub-Remote-Prüflauf. Kein unabhängiges Mathelehrer-Review. Aufgabenbank und Kompetenzmatrix sind noch nicht vollständig. Lernstandregeln sind praktische Startregeln; keine validierte Bestehens- oder Notenprognose.
