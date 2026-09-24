VfR Heilbronn U15 Statistik V8.11 - Offline-PWA

GitHub Pages:
1. Alle Dateien aus diesem Paket gemeinsam in das Repository kopieren.
2. index.html, sw.js, manifest.webmanifest und beide Icons müssen im selben Ordner liegen.
3. GitHub Pages öffnen und die App einmal mit Internetverbindung laden.
4. Auf dem Handy zum Home-Bildschirm hinzufügen.
5. Danach ist ein Start ohne Internet möglich.

Offline-Test:
- App einmal online öffnen und vollständig laden.
- App zum Home-Bildschirm hinzufügen.
- Flugmodus aktivieren.
- App vollständig schließen und über das Homescreen-Symbol neu starten.

Wichtig: Die Spiel- und Statistikdaten bleiben wie bisher lokal im Browser/auf dem Gerät gespeichert. Regelmäßig unter Sicherung exportieren.

Wichtige Grenze beim allerersten Start:
- Ohne vorherigen Online-Aufruf kann eine GitHub-Pages-PWA nicht starten. Der Browser muss index.html und den Service Worker mindestens einmal über HTTPS herunterladen und installieren.
- Nach dieser einmaligen Online-Installation startet die App aus dem Cache ohne Internet.
- Für einen wirklich netzlosen Erststart wäre eine native/sideloaded App oder ein bereits vorab installiertes Paket nötig.

Offline-Datenexport:
- Im Reiter Sicherung steht „Offline-Datenexport JSON“ zur Verfügung.
- Der Export benötigt kein Internet.
- Auf unterstützten Handys öffnet sich das Teilen-Menü; andernfalls wird die JSON-Datei lokal heruntergeladen.
