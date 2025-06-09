export const chunk2 = [
  {
    vraag: "Wat is een belangrijk voordeel van statische analyse in reverse engineering?",
    opties: [
      "Je hoeft het programma niet uit te voeren",
      "Het laat onmiddellijk netwerkverkeer zien",
      "Het toont alleen foutmeldingen",
      "Je kan het gedrag testen in real-time"
    ],
    correct: 0,
    uitleg: "Statische analyse betekent dat je de code kunt onderzoeken zonder deze uit te voeren.",
    mnemonic: "Statisch = Stilstaan = Niet uitvoeren."
  },
  {
    vraag: "Wat is typisch voor een packed malware sample?",
    opties: [
      "Het bevat alleen tekstbestanden",
      "De code is versleuteld of gecomprimeerd",
      "Het draait alleen op Linux",
      "Het gebruikt geen API's"
    ],
    correct: 1,
    uitleg: "Packed malware is vaak versleuteld of gecomprimeerd om detectie te voorkomen.",
    mnemonic: "Packed = Ingepakt = Versleuteld/gecomprimeerd."
  },
  {
    vraag: "Wat is het doel van de functie eval() in Python (vaak misbruikt in malware)?",
    opties: [
      "Het verwerkt JSON",
      "Het toont errors in logging",
      "Het voert een string uit als Python-code",
      "Het sluit het programma af"
    ],
    correct: 2,
    uitleg: "eval() voert een string uit als Python-code. Dit is gevaarlijk als de input niet vertrouwd is.",
    mnemonic: "eval = evaluate = uitvoeren."
  },
  {
    vraag: "Wat doet import os; os.system('ls') in Python?",
    opties: [
      "Logt netwerkdata",
      "Stopt het script",
      "Voert een shell-commando uit",
      "Update Python libraries"
    ],
    correct: 2,
    uitleg: "os.system voert een shell-commando uit vanuit Python.",
    mnemonic: "os.system = operating system commando."
  },
  {
    vraag: "Welke Linux-directory bevat meestal logbestanden van systeemactiviteit?",
    opties: [
      "/etc",
      "/boot",
      "/var/log",
      "/usr/bin"
    ],
    correct: 2,
    uitleg: "/var/log bevat logbestanden van het systeem.",
    mnemonic: "log = /var/log."
  },
  {
    vraag: "Wat is het voordeel van het gebruik van een sandbox bij malware-analyse?",
    opties: [
      "Malware wordt direct verwijderd",
      "Malware draait zonder risico voor de echte machine",
      "Malware krijgt extra rechten",
      "Het blokkeert updates"
    ],
    correct: 1,
    uitleg: "Een sandbox isoleert malware zodat het geen schade aanricht.",
    mnemonic: "Sandbox = Zandbak = Veilig spelen."
  },
  {
    vraag: "Wat doet de instructie cmp eax, ebx in assembly?",
    opties: [
      "Vermenigvuldigt registers",
      "Verplaatst data",
      "Vergelijkt de waarden in registers",
      "Slaat waarden op in RAM"
    ],
    correct: 2,
    uitleg: "cmp vergelijkt de waarden van twee registers.",
    mnemonic: "cmp = compare = vergelijken."
  },
  {
    vraag: "Wat is het hoofddoel van 'chain of evidence' (bewijsbeheer)?",
    opties: [
      "Zorgt dat alleen forensisch personeel toegang heeft tot logboeken",
      "Houdt een audit trail bij van bewijsverwerking",
      "Versnelt malware-analyse",
      "Verwijdert irrelevante bestanden"
    ],
    correct: 1,
    uitleg: "Chain of evidence houdt een audit trail bij van bewijs.",
    mnemonic: "Chain = ketting = alles volgen."
  },
  {
    vraag: "In Linux, wat is de output van ls -la /home?",
    opties: [
      "Toont alleen tekstbestanden",
      "Verwijdert bestanden",
      "Toont alle bestanden (ook verborgen) in de /home directory",
      "Format de schijf"
    ],
    correct: 2,
    uitleg: "ls -la toont alle (ook verborgen) bestanden in een directory.",
    mnemonic: "-a = all, -l = lijst."
  },
  {
    vraag: "Wat doet f-string in Python: f\"Gebruiker: {naam}\"?",
    opties: [
      "Verstuurt een email",
      "Verwijdert data",
      "Vervangt {naam} door de variabele waarde",
      "Slaat gegevens op"
    ],
    correct: 2,
    uitleg: "Een f-string vervangt {naam} door de waarde van de variabele naam.",
    mnemonic: "f-string = format string."
  }
]; 