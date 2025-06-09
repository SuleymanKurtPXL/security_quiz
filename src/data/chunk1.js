export const chunk1 = [
  {
    vraag: "Wat is het hoofddoel van 'chain of custody' in digital forensics?",
    opties: [
      "Bewijs vernietigen na analyse",
      "Juridisch eigendom overdragen van data",
      "De integriteit en authenticiteit van bewijsmateriaal behouden",
      "Toestaan dat meerdere personen het bewijs bewerken"
    ],
    correct: 2,
    uitleg: "Chain of custody zorgt ervoor dat bewijs niet wordt gemanipuleerd en altijd herleidbaar is.",
    mnemonic: "Chain = ketting = ononderbroken, dus altijd traceerbaar!"
  },
  {
    vraag: "Wat is het voordeel van dynamische malware-analyse t.o.v. statische analyse?",
    opties: [
      "Je hebt geen tools nodig",
      "Je ziet direct wat de code zou kunnen doen",
      "Je kunt malware uitvoeren en het gedrag observeren",
      "Je weet meteen wie het geschreven heeft"
    ],
    correct: 2,
    uitleg: "Bij dynamische analyse kun je het gedrag van malware in een gecontroleerde omgeving observeren.",
    mnemonic: "Dynamisch = Doen = Uitvoeren en kijken wat er gebeurt."
  },
  {
    vraag: "Waarom wordt een hashwaarde gegenereerd bij het maken van een forensische image?",
    opties: [
      "Voor compressie",
      "Voor encryptie",
      "Om de originaliteit van het bewijs te garanderen",
      "Om het automatisch te uploaden naar cloud"
    ],
    correct: 2,
    uitleg: "Een hashwaarde garandeert dat het bewijs niet is gewijzigd.",
    mnemonic: "Hash = Handtekening van het bestand."
  },
  {
    vraag: "Welke tool wordt vaak gebruikt voor geheugenanalyse (RAM dumps)?",
    opties: [
      "Wireshark",
      "FTK Imager",
      "Volatility",
      "Nmap"
    ],
    correct: 2,
    uitleg: "Volatility is dé tool voor RAM-analyse.",
    mnemonic: "Volatility = Volatiel geheugen (RAM)."
  },
  {
    vraag: "Wat betekent 'file carving' in digital forensics?",
    opties: [
      "Het versleutelen van bestanden",
      "Het verwijderen van bestanden van een disk",
      "Het extraheren van bestanden uit ongealloceerde ruimte",
      "Het loggen van netwerkverkeer"
    ],
    correct: 2,
    uitleg: "File carving = bestanden terughalen uit ongealloceerde ruimte.",
    mnemonic: "Carving = uitgraven = terughalen."
  },
  {
    vraag: "Welke van de volgende is GEEN geheugenformaat bij RAM dump?",
    opties: [
      "RAW",
      "Crash Dump",
      "NTFS",
      "Hibernation File"
    ],
    correct: 2,
    uitleg: "NTFS is een bestandssysteem, geen geheugenformaat.",
    mnemonic: "NTFS = file system, geen RAM dump."
  },
  {
    vraag: "Wat is de functie van osQuery in een blue team-omgeving?",
    opties: [
      "Het uitvoeren van DDoS-aanvallen",
      "Het analyseren van e-mails",
      "Het stellen van SQL-vragen aan endpoints voor forensische analyse",
      "Het versturen van alerts bij phishing"
    ],
    correct: 2,
    uitleg: "osQuery laat je SQL-vragen stellen aan endpoints voor forensische analyse.",
    mnemonic: "osQuery = SQL op endpoints."
  },
  {
    vraag: "Waarom zijn F-strings handig bij het loggen in Python?",
    opties: [
      "Ze maken automatisch back-ups",
      "Ze voeren automatisch e-mailverzending uit",
      "Ze zorgen voor snellere en leesbare string formatting",
      "Ze voeren scripts sneller uit"
    ],
    correct: 2,
    uitleg: "F-strings maken string formatting sneller en leesbaarder.",
    mnemonic: "F-string = Fast & Format."
  },
  {
    vraag: "Wat doet de Python pandas library?",
    opties: [
      "Data visualiseren met grafieken",
      "Netwerkscans uitvoeren",
      "Dataframes beheren en analyseren",
      "Malware automatisch verwijderen"
    ],
    correct: 2,
    uitleg: "Pandas is bedoeld voor het beheren en analyseren van dataframes.",
    mnemonic: "Pandas = Dataframes."
  },
  {
    vraag: "Wat is het nut van forensic imaging in een incident response?",
    opties: [
      "Tijd besparen bij log-analyse",
      "Systemen updaten",
      "Een exacte kopie van een disk maken zonder deze te wijzigen",
      "Gebruikers blokkeren van toegang"
    ],
    correct: 2,
    uitleg: "Forensic imaging maakt een exacte kopie zonder het origineel te wijzigen.",
    mnemonic: "Imaging = kopie, niet wijzigen."
  }
]; 