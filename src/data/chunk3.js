export const chunk3 = [
  {
    vraag: "Wat is het primaire doel van een forensic image?",
    opties: [
      "Een disk formatteren",
      "Een partitie partitioneren",
      "Een exacte kopie maken zonder originele data te wijzigen",
      "Een gecomprimeerde backup maken"
    ],
    correct: 2,
    uitleg: "Een forensic image is een exacte kopie van een disk, zonder de originele data te wijzigen.",
    mnemonic: "Image = kopie, niet wijzigen."
  },
  {
    vraag: "Waarom is een hash belangrijk bij forensic imaging?",
    opties: [
      "Voor compressie",
      "Voor bestandstype-detectie",
      "Voor integriteitscontrole",
      "Voor automatische updates"
    ],
    correct: 2,
    uitleg: "Een hash controleert of het image identiek is aan het origineel.",
    mnemonic: "Hash = integriteit."
  },
  {
    vraag: "Welk commando wordt vaak gebruikt in Linux om verborgen bestanden te vinden?",
    opties: [
      "find /root",
      "ls -al",
      "cd ..",
      "clear"
    ],
    correct: 1,
    uitleg: "ls -al toont alle (ook verborgen) bestanden in een directory.",
    mnemonic: "-a = all, -l = lijst."
  },
  {
    vraag: "Wat betekent het commando chmod 777 bestandsnaam?",
    opties: [
      "Verwijder rechten",
      "Alleen lezen",
      "Geef volledige rechten aan iedereen",
      "Blokkeer bestand"
    ],
    correct: 2,
    uitleg: "chmod 777 geeft alle rechten aan iedereen.",
    mnemonic: "777 = alles mag."
  },
  {
    vraag: "Wat is een voordeel van het mounten van een forensic image in 'read-only' modus?",
    opties: [
      "Je kunt direct logs bewerken",
      "Je voorkomt wijziging van het originele bewijs",
      "Je versnelt de imaging",
      "Je maakt het bestand kleiner"
    ],
    correct: 1,
    uitleg: "Read-only voorkomt dat het originele bewijs wordt gewijzigd.",
    mnemonic: "Read-only = alleen lezen, niet wijzigen."
  },
  {
    vraag: "Waarom gebruiken forensische analisten tools zoals Autopsy of Sleuth Kit?",
    opties: [
      "Om firewalls in te stellen",
      "Voor netwerkscanning",
      "Voor bestandsstructuur-analyse en dataherstel",
      "Voor realtime packet capturing"
    ],
    correct: 2,
    uitleg: "Deze tools zijn bedoeld voor bestandsstructuur-analyse en dataherstel.",
    mnemonic: "Autopsy = onderzoek, Sleuth = speurneus."
  },
  {
    vraag: "Wat is het doel van de WHERE-clausule in een SQL-query?",
    opties: [
      "Kolommen selecteren",
      "Tabellen verwijderen",
      "Voorwaarden opgeven voor filtering",
      "Data kopiëren"
    ],
    correct: 2,
    uitleg: "WHERE filtert de rijen die je wilt selecteren.",
    mnemonic: "WHERE = waar, dus filter."
  },
  {
    vraag: "Wat betekent SQL Injection in security context?",
    opties: [
      "SQL gebruiken om sneller data op te halen",
      "Onbedoelde wijziging van de tabelstructuur",
      "Kwaadaardige invoer misbruikt zwakke query's",
      "Een beveiligde API-query"
    ],
    correct: 2,
    uitleg: "SQL Injection is het misbruiken van zwakke queries voor aanvallen.",
    mnemonic: "Injection = inspuiten = misbruik."
  },
  {
    vraag: "Waarom vermijden we input() direct in SQL-queries in Python?",
    opties: [
      "Omdat het traag is",
      "Omdat het de RAM belast",
      "Omdat het kwetsbaar is voor SQL-injectie",
      "Omdat het geen logging ondersteunt"
    ],
    correct: 2,
    uitleg: "Directe input() maakt je kwetsbaar voor SQL-injectie.",
    mnemonic: "Input = gevaarlijk in SQL."
  },
  {
    vraag: "Welke library is in Python NIET standaard en wordt vaak gebruikt bij pentesting?",
    opties: [
      "hashlib",
      "os",
      "requests",
      "scapy"
    ],
    correct: 3,
    uitleg: "scapy is een externe library voor netwerkanalyse en pentesting.",
    mnemonic: "scapy = sniffen."
  }
]; 