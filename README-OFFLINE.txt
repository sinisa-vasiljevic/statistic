VfR Heilbronn U15 Statistik V8.20

ÄNDERUNGEN
- Spieler-Nachmeldung jetzt als normale Antipp-Auswahl statt Zahleneingabe.
- Mehrfachauswahl aktiviert.
- Gewählte Spieler werden blau markiert.
- Übernahme zeigt die Anzahl ausgewählter Spieler.
- Alle ausgewählten Spieler werden gemeinsam zur Bank hinzugefügt und erscheinen sofort unter Einwechslungen.
- Offline-Version und Cache auf V8.20 erhöht.

INSTALLATION
Alle Dateien gemeinsam auf GitHub Pages ersetzen. Alte Homescreen-App löschen, V8.20 einmal online in Safari öffnen, erneut zum Home-Bildschirm hinzufügen, einmal online starten und danach offline testen.
Vorher unter Sicherung einen JSON-Export erstellen.

KORREKTUR V8.20
- Nachgemeldete Spieler gelten für das komplette Spiel als eingeplant.
- Die mögliche Spielzeit beginnt deshalb rückwirkend mit Spielbeginn, nicht erst mit dem Zeitpunkt der Nachmeldung.
- Beispiel: 70 Minuten Spielzeit, keine Einwechslung = 70 mögliche Minuten, 0 gespielte Minuten, 0 Prozent.
- Bei späterer Einwechslung bleiben die vollen 70 Minuten die mögliche Spielzeit; nur die tatsächlich gespielten Minuten zählen als Einsatzzeit.
- Die mögliche Spielzeit wird jetzt je Spieler nur aus den Spielen berechnet, in denen der Spieler im Spieltagskader erfasst ist.

NEU IN V8.20
- Testspiele unterstützen jetzt 1, 2 oder 3 Halbzeiten.
- Neuer Reiter „Spiel nachtragen“ für bereits gespielte Partien.
- Startelf und Bank direkt auswählen.
- Ein- und Auswechslungen mit Spielminute eintragen.
- Tore, Vorlagen und Gegentore mit Spielminute eintragen.
- Aktionen vor dem Speichern löschen und korrigieren.
- Beim Abschluss werden Einsatzminuten, mögliche Spielzeit, Ergebnis, Tore und Vorlagen automatisch in die Statistik übernommen.
