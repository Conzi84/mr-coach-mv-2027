# Version 0.1: Lernkreislauf

Status: ursprüngliche Umsetzungsspezifikation. Version 0.1 ist inzwischen gebaut; tatsächlicher Umfang und Prüfstand stehen in README.md und PRUEFPROTOKOLL.md. Erweiterungen wie vollständige Papierbewertung stehen noch aus.

## Bedienung

Startseite mit „Heute üben“, „Einstiegscheck“, „Themen“ und „Fortschritt sichern“. Ruhige, gut lesbare Oberfläche für Handy und PC. Keine Belohnungswährung. Erster Besuch beginnt bei unbekanntem Lernstand.

Ein Lernblock besteht aus einem kurzen Wiederabruf, einer verständlichen Erklärung mit Beispiel, zwei Übungen und einer Transferaufgabe. Bei Bedarf gibt es zwei abgestufte Hinweise und anschließend einen vollständigen Lösungsweg. Nach gezeigter Lösung folgt eine neue Aufgabe; dieselbe Antwort gilt nicht als selbstständig gelöst.

## Technischer Umfang

Zunächst lokal nutzbare Webanwendung mit gebündelten Inhalten und regelbasierter Auswertung. Browser speichert Lernstand, zusätzlich JSON-Export und geprüfter Import. Keine externen Schriften, Analyseanbieter oder KI-Aufrufe. PWA-Installation und Offlinebetrieb erst nach Prüfung von lokalem Server, HTTPS-Hosting beziehungsweise localhost und Aktualisierungsverhalten. Eine einzelne HTML-Datei allein wird nicht als installierbare PWA bezeichnet.

## Datenmodell

Curriculum: ID, Bundesland, Bildungsgang, Abschluss, Jahr, Rahmenplanversion, Quellenstand.

Kompetenz: ID, überprüfbares Lernziel, Rolle (Grundlage/Pflichtschwerpunkt/Wahlschwerpunkt/Ergänzung), Voraussetzungen, Quellenfundstellen, Zuordnungsstatus, Lernmaterialstatus.

Aufgabe: ID, Kompetenz, Version, eigener Ursprung, Aufgabenstellung, Antwortformat, Hilfsmittel, Schwierigkeit, Teilpunkte, Antwortregel, Hinweise, Lösungsschritte, typische Fehler, unabhängige Prüfung der Lösung.

Versuch: Aufgaben-ID und Version, Zeitpunkt, Erstantwort, Korrekturen, Hilfen, Lösungsansicht, Ergebnis, Bearbeitungsmodus. Schriftliche Arbeit nur bei bewusstem Eintrag festhalten; zunächst keine Fotos.

## Antwortauswertung

Zahlen: Dezimalkomma und Dezimalpunkt, negative Zahlen und ausdrücklich konfigurierte Brüche zulassen; Ergebnis und Einheit getrennt. Rundungstoleranz pro Aufgabe festlegen. Leere oder unlesbare Eingaben nicht als falsche Fachantwort verbuchen. Kein Ausführen von Eingabetext als Programmcode.

Terme und Funktionen: im ersten Stand strukturierte Koeffizienteneingabe oder manueller Vergleich, solange keine geprüfte Gleichwertigkeitsprüfung existiert. Zeichnungen und Begründungen: Papierlösung plus Kriteriencheck, kein automatisches Urteil vortäuschen.

## Lernstand – vorläufige Regeln, ABGELEITET

- Unbekannt: keine aussagekräftigen Versuche.
- Üben: Fehler, benötigte Hilfe oder bisher nur unmittelbar wiederholte Aufgaben.
- Vorläufig gefestigt: drei unterschiedliche Aufgaben ohne Hilfe richtig, davon eine Transferaufgabe und mindestens eine an einem späteren Tag.
- Wiederholung fällig: Kontrolltermin erreicht. Das bedeutet nicht automatisch „vergessen“.

Hinweise helfen beim Lernen, liefern aber keinen Beleg für selbstständiges Können. Wiederholung zunächst nach 2, 7 und 21 Tagen; Intervalle als praktische Startregel erproben. Ausgelassene Tage verursachen keine Strafe.

Nächster Block: fällige Wiederholung, dann fehlende Voraussetzungen eines wichtigen Themas, dann Schwachstellen im Pflichtbereich oder gewählten Wahltraining. Neue Klasse-10-Themen separat kennzeichnen. Anzahl und Datum selbstständiger Versuche sichtbar machen; keine Notenprognose.

## Qualitätsprüfung vor Nutzung

Alle IDs und Voraussetzungen existent, keine Abhängigkeitszyklen. Jede Aufgabenlösung mathematisch nachgerechnet, Erklärung und Einheit geprüft. Fälle mit falscher Antwort, Hinweisnutzung, Wiederholung, Rundung und Importfehlern überprüfen. Handyansicht, Tastaturbedienung, Speicherverlust und Sicherung/Wiederherstellung testen. Fachliche Freigabe durch eine Mathelehrkraft ist hilfreich und steht noch aus; sie darf nicht behauptet werden.

## Erfolgskriterium

Nach zwei Wochen tatsächlicher Nutzung prüfen: Sind neue ähnliche Aufgaben ohne Hilfe lösbar? Funktioniert es auch eine Woche später und auf Papier? Passt die Routine neben der Schule? Was versteht dein Sohn nicht? Daraus Inhalt und Umfang anpassen.

