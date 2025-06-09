export const chunk_mini_exam = [
  {
    vraag: "Welke tool wordt vaak gebruikt om geheugen dumps te analyseren?",
    opties: [
      "Wireshark",
      "FTK Imager",
      "Volatility",
      "Splunk"
    ],
    correct: 2,
    uitleg: "Volatility is dé tool voor geheugenanalyse van RAM dumps.",
    mnemonic: "Volatility = Volatiel geheugen (RAM)."
  },
  {
    vraag: "Waarom worden f-strings vaak gebruikt bij het loggen van data?",
    opties: [
      "Ze loggen automatisch naar syslog",
      "Ze maken string formatting eenvoudiger en leesbaarder",
      "Ze zijn verplicht in Python 3",
      "Ze maken logging veiliger"
    ],
    correct: 1,
    uitleg: "F-strings maken string formatting eenvoudiger en leesbaarder.",
    mnemonic: "F-string = Fast & Format."
  },
  {
    vraag: "Welke Python bibliotheek gebruik je om een pcap-bestand te analyseren?",
    opties: [
      "requests",
      "netmiko",
      "scapy",
      "flask"
    ],
    correct: 2,
    uitleg: "Scapy is een krachtige Python library voor netwerk- en pcap-analyse.",
    mnemonic: "scapy = sniffen."
  },
  {
    vraag: "Wat doet de CMP-instructie in assembly?",
    opties: [
      "Kopieert data tussen registers",
      "Vergelijkt twee waarden zonder ze te wijzigen",
      "Maakt een backup van het geheugen",
      "Springt naar een andere instructie"
    ],
    correct: 1,
    uitleg: "CMP vergelijkt twee waarden zonder ze te wijzigen.",
    mnemonic: "cmp = compare = vergelijken."
  },
  {
    vraag: "Wat doet SELECT * FROM logs LIMIT 10; in SQL?",
    opties: [
      "Toont alle tabellen",
      "Geeft de laatste 10 logregels",
      "Geeft de eerste 10 logregels",
      "Verwijdert 10 logregels"
    ],
    correct: 2,
    uitleg: "LIMIT 10 geeft de eerste 10 rijen van het resultaat.",
    mnemonic: "LIMIT = limiet op aantal rijen."
  },
  {
    vraag: "Wat betekent het SQL-commando DELETE FROM users WHERE 1=1;?",
    opties: [
      "Verwijdert 1 gebruiker",
      "Verwijdert niets",
      "Verwijdert alle gebruikers",
      "Updatet alle gebruikers"
    ],
    correct: 2,
    uitleg: "WHERE 1=1 is altijd waar, dus alle rijen worden verwijderd.",
    mnemonic: "1=1 = altijd waar."
  },
  {
    vraag: "Wat is het doel van een sandbox bij malware-analyse?",
    opties: [
      "Verwijderen van malware",
      "Malware uitvoeren zonder het echte systeem te infecteren",
      "Installeren van rootkits",
      "Encryptie van malwarebestanden"
    ],
    correct: 1,
    uitleg: "Een sandbox isoleert malware zodat het geen schade aanricht.",
    mnemonic: "Sandbox = Zandbak = Veilig spelen."
  },
  {
    vraag: "Wat is het nut van het genereren van een hashwaarde van een forensic image?",
    opties: [
      "Om het te kunnen opslaan als ZIP",
      "Voor compressie",
      "Voor verificatie van integriteit",
      "Voor automatische indexatie"
    ],
    correct: 2,
    uitleg: "Een hashwaarde garandeert dat het image niet is gewijzigd.",
    mnemonic: "Hash = Handtekening van het bestand."
  },
  {
    vraag: "Wat is een belangrijk voordeel van dynamische analyse?",
    opties: [
      "Je hoeft de code niet te compileren",
      "Het onthult runtime-gedrag en verborgen activiteiten",
      "Je krijgt meteen toegang tot de broncode",
      "Het versnelt de statische disassemblage"
    ],
    correct: 1,
    uitleg: "Dynamische analyse laat runtime-gedrag en verborgen activiteiten zien.",
    mnemonic: "Dynamisch = Doen = Uitvoeren en kijken wat er gebeurt."
  },
  {
    vraag: "Waarvoor wordt de pandas-library vooral gebruikt?",
    opties: [
      "Data encryptie",
      "Netwerkanalyse",
      "Data-analyse en manipulatie via dataframes",
      "Systeembeheer"
    ],
    correct: 2,
    uitleg: "Pandas is bedoeld voor het beheren en analyseren van dataframes.",
    mnemonic: "Pandas = Dataframes."
  },
  {
    vraag: "Wat is een veelvoorkomende indicatie van een packed executable?",
    opties: [
      "De bestandsgrootte is extreem groot",
      "Het executable bevat weinig of geen leesbare strings",
      "Het bestand gebruikt altijd UPX",
      "De hashwaarde verandert niet"
    ],
    correct: 1,
    uitleg: "Packed executables bevatten vaak weinig of geen leesbare strings.",
    mnemonic: "Packed = weinig strings."
  },
  {
    vraag: "Wat is het primaire doel van OSQuery?",
    opties: [
      "Compileren van het OS naar een database voor analyse",
      "Detectie van spam e-mails",
      "Firewall instellen",
      "Packet sniffing"
    ],
    correct: 0,
    uitleg: "OSQuery laat je SQL-vragen stellen aan het OS voor analyse.",
    mnemonic: "osQuery = SQL op endpoints."
  },
  {
    vraag: "Waarom gebruik je een write blocker tijdens forensisch onderzoek?",
    opties: [
      "Om malware te detecteren",
      "Om de originele data niet te wijzigen tijdens kopiëren",
      "Om logs automatisch te backuppen",
      "Om hashwaardes te berekenen"
    ],
    correct: 1,
    uitleg: "Een write blocker voorkomt dat originele data wordt gewijzigd.",
    mnemonic: "Write blocker = alleen lezen."
  },
  {
    vraag: "Wat doet de Linux tool strings in forensische context?",
    opties: [
      "Haal ASCII tekst uit binaire bestanden",
      "Versleutel bestanden",
      "Voeg metadata toe aan logs",
      "Maak backups van configs"
    ],
    correct: 0,
    uitleg: "strings haalt ASCII tekst uit binaire bestanden.",
    mnemonic: "strings = tekst uit binair."
  },
  {
    vraag: "Wat betekent chain of custody?",
    opties: [
      "Het beveiligen van een bestand",
      "Het correct documenteren van bewijsverplaatsing en toegang",
      "Het exporteren van bestanden naar CSV",
      "Het blokkeren van USB-toegang"
    ],
    correct: 1,
    uitleg: "Chain of custody is het correct documenteren van bewijsverplaatsing en toegang.",
    mnemonic: "Chain = ketting = ononderbroken, dus altijd traceerbaar!"
  },
  {
    vraag: "Welk register fungeert als de stack pointer in x86-architectuur?",
    opties: [
      "EAX",
      "ESP",
      "EBX",
      "ESI"
    ],
    correct: 1,
    uitleg: "ESP is de stack pointer in x86-architectuur.",
    mnemonic: "ESP = Stack Pointer."
  },
  {
    vraag: "Welke stelling over registers is correct?",
    opties: [
      "eax is een 64-bit register.",
      "rdx is een 64-bit register.",
      "bx is een 8-bit register.",
      "rcx is een 32-bit register."
    ],
    correct: 1,
    uitleg: "rdx is een 64-bit register (in x86-64).",
    mnemonic: "r-registers = 64-bit."
  },
  {
    vraag: "Wat is het primaire doel van reverse engineering?",
    opties: [
      "Nieuwe software schrijven.",
      "Bestaande software analyseren om de werking te begrijpen.",
      "Malware verspreiden.",
      "Broncode compileren."
    ],
    correct: 1,
    uitleg: "Reverse engineering is bedoeld om bestaande software te analyseren en te begrijpen.",
    mnemonic: "Reverse = begrijpen."
  },
  {
    vraag: "Wat gaat verloren tijdens disassembly?",
    opties: [
      "Alleen variabelenamen.",
      "Commentaren, variabelenamen en compiler-optimalisaties.",
      "Alleen machinecode.",
      "Netwerkverbindingen."
    ],
    correct: 1,
    uitleg: "Tijdens disassembly gaan commentaren, variabelenamen en optimalisaties verloren.",
    mnemonic: "Disassembly = alleen code, geen namen/comm."
  },
  {
    vraag: "Welke techniek overschrijft een buffer met meer data dan het aankan?",
    opties: [
      "SQL-injectie",
      "Buffer overflow",
      "Cross-site scripting",
      "Phishing"
    ],
    correct: 1,
    uitleg: "Buffer overflow betekent dat een buffer meer data krijgt dan hij aankan.",
    mnemonic: "Overflow = te veel data."
  },
  {
    vraag: "True/False: x86- en x86-64-architecturen gebruiken Big Endian.",
    opties: [
      "True",
      "False"
    ],
    correct: 1,
    uitleg: "x86 en x86-64 gebruiken Little Endian.",
    mnemonic: "x86 = Little Endian."
  },
  {
    vraag: "True/False: De IAT (Import Address Table) bevat geëxporteerde functies.",
    opties: [
      "True",
      "False"
    ],
    correct: 1,
    uitleg: "De IAT bevat geïmporteerde functies, niet geëxporteerde.",
    mnemonic: "IAT = Import Address Table."
  },
  {
    vraag: "True/False: Een nibble is 8 bits groot.",
    opties: [
      "True",
      "False"
    ],
    correct: 1,
    uitleg: "Een nibble is 4 bits.",
    mnemonic: "Nibble = 4 bits."
  }
]; 