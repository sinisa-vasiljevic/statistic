VfR Heilbronn U15 Statistik V8.16 - sicherer Offline-Patch

OFFLINE- UND STARTKORREKTUREN
- Service Worker auf robustes Einzeldatei-Caching umgestellt.
- index.html bleibt zwingender Kern des Offline-Caches.
- Sichere Offline-Ersatzseite statt schwarzem oder weißem Bildschirm.
- Cache-Treffer funktionieren auch bei Versionsparametern an Manifest und Icons.
- Fehlgeschlagene lokale Abrufe werden kontrolliert behandelt.
- Nur alte Caches dieser U15-App werden gelöscht.
- structuredClone besitzt jetzt einen Rückfall für ältere iOS-/Safari-Versionen.
- Für V8.16 sind sichtbare Version, Manifest-Verweise und Cache-Name vereinheitlicht.

WEITERE KORREKTUREN
- Strafstöße und Elfmeterschießen werden vor dem Speichern in der Rückgängig-Historie gesichert.
- Das Beenden einer Halbzeit wird vor der Änderung in der Rückgängig-Historie gesichert.
- Das Manifest nutzt sichere Standard-Icons mit purpose "any".
- Vorhandene Daten bleiben unter dem bisherigen LocalStorage-Schlüssel u15-v7 erhalten.

INSTALLATION AUF DEM IPHONE
1. Alle Dateien aus der ZIP gemeinsam in denselben GitHub-Pages-Ordner hochladen und ersetzen.
2. Warten, bis GitHub Pages die neue Version veröffentlicht hat.
3. Die alte Homescreen-App löschen.
4. Die Website einmal vollständig online in Safari öffnen und kurz geöffnet lassen.
5. Neu zum Home-Bildschirm hinzufügen und einmal online starten.
6. Danach App schließen, Flugmodus aktivieren und erneut starten.
