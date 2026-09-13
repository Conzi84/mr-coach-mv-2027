# GitHub und Netlify – Übergabe

## Geprüfte Ausgangslage

GitHub-Ziel bestätigt: https://github.com/Conzi84/mr-coach-mv-2027 . Das vom Nutzer angelegte Repository ist öffentlich. Die Übertragung erfolgt über den verbundenen GitHub-Zugriff. Netlify ist im verfügbaren Browser noch nicht angemeldet; die Hosting-Verknüpfung und HTTPS-Veröffentlichung stehen aus.

Lokal liegt ein eigenständiges Projekt mit `netlify.toml`, GitHub-Prüflauf und statischem Build vor. Kein Backend und keine API-Schlüssel nötig.

## Empfohlener Weg

Das bestätigte Repository `Conzi84/mr-coach-mv-2027` für dieses Projekt verwenden. Es ist öffentlich; wenn später private Projektdaten hinzukommen, die gewünschte Sichtbarkeit vorher klären. Nur Projektdateien übertragen; echte Lernstände bleiben außerhalb des Repositorys. Die Ignore-Datei schützt übliche Sicherungsnamen, ist aber kein Ersatz für die Kontrolle vor dem Hochladen.

Danach in Netlify „Import an existing project“ beziehungsweise „Deploy from repository“ wählen, GitHub verbinden und ausschließlich das Projektrepository auswählen. Falls die Integration neue Repositoryberechtigungen anfordert, muss der Kontoinhaber diese bewusst vergeben.

| Einstellung | Wert |
|---|---|
| Repositorywurzel | Inhalt von MR-MV-2027 |
| Produktionszweig | main |
| Basisverzeichnis | leer |
| Build-Befehl | npm run check |
| Veröffentlichungsverzeichnis | dist |
| Node-Version | 22 |
| Umgebungsvariablen / Geheimnisse | keine |

Netlify liest diese Build-Einstellungen auch aus `netlify.toml`. Für Pull Requests Deploy Previews nutzen. Nur `dist` wird als Website ausgeliefert, keine Arbeitspläne oder Lernstandvorlagen.

## Schnelltest ohne Git-Verbindung

Die Datei `MR-Coach-Netlify.zip` enthält die fertig gebauten Website-Dateien. Nach eigener Anmeldung kann der entpackte Inhalt als manuelle Netlify-Veröffentlichung verwendet werden. Das liefert einen ersten Handy-Link, hat aber noch keinen automatischen Abgleich mit GitHub. Die Git-Verbindung ist für die Weiterentwicklung der bevorzugte Weg.

## Was danach geprüft werden muss

HTTPS-Adresse öffnen; Lernstart, falsche Antwort, Hinweis, korrekte Antwort, Check und Sicherung prüfen. Auf dem echten Smartphone Home-Bildschirm-Installation testen. Nach vollständigem Erstladen Flugmodus aktivieren und App erneut öffnen. Neue App-Version installieren und vorhandenen Lernstand kontrollieren.

Die lokale Handyansicht ist eine Browserprüfung und ersetzt keinen Test auf dem tatsächlichen iPhone oder Android-Gerät. Lokales `localhost` auf dem PC ist kein öffentlich erreichbarer Handy-Link.

## Grenzen und Kosten

Ein privates GitHub-Repository macht die Netlify-Webadresse nicht automatisch privat. Die Anwendung enthält eigene allgemeine Aufgaben; persönliche Lernstände bleiben lokal. Netlify verarbeitet beim Abruf wie jeder Hostingdienst technische Verbindungsdaten. Es gibt keine von uns eingebauten Analyseanbieter oder Lernstandübertragungen.

Der aktuelle Netlify-Free-Tarif ist kreditbasiert. Laut Dokumentation: 300 Credits monatlich, 15 Credits pro Produktionsveröffentlichung; weitere Nutzung verbraucht ebenfalls Credits. Deploy Previews sind aktuell nicht kreditpflichtig. Bei Erreichen der Limits kann die Website pausieren. Den tatsächlichen Tarif des Kontos vor Einrichtung kontrollieren; keine kostenpflichtige Erweiterung nötig oder beauftragt.

Ohne Konto bleibt der Lernstand geräte- und browserbezogen. Safari, eine installierte Home-Bildschirm-App und PC-Browser können getrennte Speicher haben. Sicherung beim Wechsel auf die endgültige Webadresse mitnehmen. Wiederholungsregeln sind praktische Startregeln, keine wissenschaftlich validierte Bereitschaftsprognose.

## Offizielle technische Quellen

- [Netlify: Repository bereitstellen](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)
- [Netlify: Deploy Previews](https://docs.netlify.com/deploy/deploy-types/deploy-previews/)
- [Netlify: kreditbasierte Tarife](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/)
- [PWA-Installation, einschließlich iOS](https://web.dev/learn/pwa/installation)

