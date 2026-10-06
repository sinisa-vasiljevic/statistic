VfR Heilbronn U15 Statistik V8.17

KORREKTUREN
- Offline-Start erneut grundlegend überarbeitet.
- Startseite wird unter ./, index.html und als Navigations-Fallback gespeichert.
- Service Worker wird sofort registriert und nicht erst nach dem load-Ereignis.
- Fehlende Einzeldateien verhindern nicht mehr die Installation des Offline-Caches.
- Manifest-Datei ist jetzt im Paket enthalten.
- Cache- und Versionsangaben auf V8.17 vereinheitlicht.
- Vergessene Spieler können nach Spielbeginn nachgemeldet werden.
- Der nachgemeldete Spieler wird zur Bank hinzugefügt, erscheint unter Einwechslungen und kann regulär eingewechselt werden.
- Die Nachmeldung ist sowohl unter Einwechslungen als auch im Spielverlauf erreichbar.
- Nachmeldungen können über die vorhandene Rückgängig-Funktion zurückgenommen werden.

WICHTIG: INSTALLATION AUF DEM IPHONE
1. Alle Dateien aus der ZIP gemeinsam in denselben GitHub-Pages-Ordner hochladen und die alten Dateien ersetzen.
2. Warten, bis GitHub Pages V8.17 veröffentlicht hat.
3. Die bisherige Homescreen-App löschen.
4. In Safari die GitHub-Pages-Adresse online öffnen und prüfen, ob im Kopf Version 8.17 steht.
5. Die Seite etwa 10 Sekunden geöffnet lassen.
6. Über Teilen > Zum Home-Bildschirm die App neu installieren.
7. Die neue Homescreen-App einmal online öffnen und etwa 10 Sekunden geöffnet lassen.
8. App vollständig schließen, Flugmodus einschalten und die App erneut starten.

Die vorhandenen Daten bleiben im LocalStorage-Schlüssel u15-v7 erhalten. Vor dem Austausch trotzdem unter Sicherung einen JSON-Export erstellen.
