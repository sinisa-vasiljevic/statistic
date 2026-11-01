VfR Heilbronn U15 Statistik V8.22

FEHLERBEHEBUNG IN V8.22
- Die Spielerfassung speichert START- und BANK-Spieler jetzt aus einem festen Auswahl-Snapshot.
- Nach dem Speichern wird die gespeicherte Aufstellung unmittelbar kontrolliert.
- Bei einem Speicherfehler wird der vorherige Stand wiederhergestellt und eine klare Fehlermeldung angezeigt.
- Die Spielerfassung wird nach erfolgreichem Speichern neu aus den gespeicherten Datensätzen aufgebaut.
- Eine noch nicht gestartete Live-Aufstellung wird nach einer Änderung sicher neu erzeugt.
- Alle übrigen Funktionen aus V8.21 bleiben unverändert.
- App-Version, Datenbankschema und Offline-Cache wurden auf V8.22 angehoben.

INSTALLATION
1. Vor dem Update unter Sicherung einen JSON-Export erstellen.
2. index.html, sw.js und README-OFFLINE.txt gemeinsam in den GitHub-Pages-Ordner hochladen und vorhandene Dateien ersetzen.
3. Warten, bis in der App Version 8.22 angezeigt wird.
4. Die Seite einmal online öffnen und anschließend vollständig neu laden.
5. Falls weiterhin Version 8.21 erscheint, die bisherige Homescreen-App löschen und die Seite erneut zum Home-Bildschirm hinzufügen.
