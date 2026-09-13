# MR Coach MV 2027

Persönliches Mathematiktraining für die Mittlere Reife in Mecklenburg-Vorpommern. Vorrang hat wirksame Prüfungsvorbereitung, keine Monetarisierung.

## Erster Stand

- Smartphonefähige Lernoberfläche für Handy und PC.
- 40 eigene Trainingsaufgaben in zehn Teilbereichen, zwölf separate Aufgaben für einen kurzen Einstiegscheck.
- Abgestufte Hinweise, Lösungswege und typische Fehler.
- Lokaler Lernstand, JSON-Sicherung und geprüfte Wiederherstellung.
- Offline-Grundlage mit Service Worker, Manifest und App-Icons.
- Keine Konten, KI, Drittanbieterbibliotheken, externen Schriften oder eingebauten Analyseanbieter.

Noch keine vollständige Prüfungsvorbereitung: Sinus, quadratische und weitere Funktionen, große Teile der Geometrie und vollständiges Wahltraining fehlen. Einzelkompetenzen und Lernregeln sind abgeleitet. Der kurze Check ist nicht validiert. Endergebnisprüfungen ersetzen keine Bewertung von Rechenwegen, Zeichnungen und Begründungen.

## Lokal öffnen

Node.js 22 oder neuer vorausgesetzt. In diesem Ordner:

```text
npm start
```

Danach `http://localhost:4173/` im PC-Browser öffnen. Der Server lauscht nur lokal. Auf dem Smartphone wird später die Netlify-HTTPS-Adresse verwendet.

## Prüfung und Veröffentlichung

```text
npm run check
```

Führt die Prüfungen aus und erzeugt `dist/`. Keine Paketinstallation nötig. Netlify nutzt `netlify.toml` und liefert ausschließlich `dist` aus. Die Website-Dateien enthalten keinen eingebauten individuellen Lernstand. GitHub-Prüflauf liegt unter `.github/workflows/check.yml`.

Die Cache-Version wird aus den App-Dateien gebildet. Eine neue Version wartet auf bewusste Aktivierung unter „Wissen & Sicherung“. Fortschritt wird unabhängig vom App-Cache gespeichert.

## Projektstruktur

- `00_MASTER/`: Umsetzungsplan, Fahrplan, Netlify-Übergabe und Prüfprotokoll.
- `01_QUELLEN/`: offizielle Quellen und Korrekturen zum übernommenen Chat.
- `02_MATHEMATIK/`: Kompetenzentwurf und Papiercheck mit Lösungen.
- `app/`: auslieferbare Anwendung und eigene Aufgabenbank.
- `scripts/`: lokaler Server, statischer Build und einfache App-Icons.
- `tests/`: Antwortauswertung, Lernstand, Aufgabenmetadaten und Sicherung.
- `05_LERNSTAND/`: leere Vorlage, keine echten Schülerdaten im Repository.

Nächste Schritte stehen in `00_MASTER/UMSETZUNGSPLAN.md`. Technische Übertragung und Zugangslage in `00_MASTER/GITHUB_NETLIFY.md`.
