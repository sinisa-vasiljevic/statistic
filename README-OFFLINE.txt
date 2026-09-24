VfR Heilbronn U15 Statistik V8.15 - Robustheitsupdate

Verbesserungen:
- Vollständiges manifest.webmanifest wieder enthalten.
- Beschädigte lokale Daten verhindern nicht mehr den App-Start.
- Datenstruktur wird beim Start und Import automatisch normalisiert.
- Speicherfehler werden sichtbar gemeldet.
- JSON-Import wird vor Übernahme geprüft.
- Vor jedem Import wird automatisch eine Sicherung des aktuellen Datenstands erstellt.
- Laufende Spieluhr wird nach einem App-Neustart erkannt. Der Benutzer entscheidet, ob die Unterbrechungszeit weitergezählt oder die Uhr am letzten Stand angehalten wird.
- Zusätzliche Notfallspeicherung bei Wechsel in den Hintergrund, pagehide und beforeunload.
- Rückgängig-Historie wird im Datenbestand gespeichert.
- Premium-ST-Icon und sämtliche bisherigen Funktionen bleiben erhalten.
- Offline-Cache und sichtbare Version auf V8.15 aktualisiert.

Installation:
Alle Dateien gemeinsam bei GitHub ersetzen. Vorher zur Sicherheit einen JSON-Export der bisherigen App erstellen. Anschließend die App einmal online öffnen, neu laden, schließen und erneut starten.
