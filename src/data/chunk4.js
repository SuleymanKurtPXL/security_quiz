export const chunk4 = [
  {
    vraag: "Wat is een belangrijk voordeel van SQLite voor forensic toepassingen?",
    opties: [
      "Het vereist een aparte serverinstallatie",
      "Het draait volledig in de cloud",
      "Het is lichtgewicht en draait zonder server",
      "Het ondersteunt enkel NoSQL-opslag"
    ],
    correct: 2,
    uitleg: "SQLite is lichtgewicht en heeft geen aparte server nodig.",
    mnemonic: "Lite = licht, geen server."
  },
  {
    vraag: "Wat is een veelgebruikte beveiligingsmaatregel tegen SQL-injectie in Python?",
    opties: [
      "f-strings gebruiken",
      "SQL-commando's hardcoden",
      "Parameterized queries gebruiken",
      "CSV-bestanden importeren"
    ],
    correct: 2,
    uitleg: "Parameterized queries voorkomen SQL-injectie.",
    mnemonic: "Parameters = veilig."
  },
  {
    vraag: "Wat is een mogelijke aanval via SQL-injectie?",
    opties: [
      "SELECT * FROM users WHERE username = '' OR '1'='1' --'",
      "DROP COLUMN",
      "SELECT PASSWORD FROM NULL;",
      "INSERT INTO VALUES *"
    ],
    correct: 0,
    uitleg: "Deze query misbruikt een zwakke WHERE-clausule.",
    mnemonic: "'1'='1' = altijd waar."
  },
  {
    vraag: "Welke Python-module gebruik je standaard voor SQLite-databases?",
    opties: [
      "sqlite",
      "dbconnect",
      "sqlite3",
      "pandasql"
    ],
    correct: 2,
    uitleg: "sqlite3 is de standaardmodule voor SQLite in Python.",
    mnemonic: "sqlite3 = Python."
  },
  {
    vraag: "Wat is het verschil tussen DictReader en reader in Python CSV?",
    opties: [
      "DictReader geeft indexwaarden",
      "reader maakt automatisch dicts",
      "DictReader werkt met kolomnamen als keys",
      "reader is veiliger tegen SQL-injectie"
    ],
    correct: 2,
    uitleg: "DictReader gebruikt kolomnamen als keys in het resultaat.",
    mnemonic: "Dict = dictionary = kolomnamen."
  },
  {
    vraag: "Wat is een veelgebruikt datatype in SQLite voor tekstkolommen?",
    opties: [
      "BINARY",
      "REAL",
      "TEXT",
      "FLOAT"
    ],
    correct: 2,
    uitleg: "TEXT is het standaard datatype voor tekst in SQLite.",
    mnemonic: "TEXT = tekst."
  },
  {
    vraag: "Wat doet de SQL-query SELECT COUNT(*) FROM users;?",
    opties: [
      "Toont alle usergegevens",
      "Telt het aantal gebruikers in de users-tabel",
      "Verwijdert dubbele users",
      "Geeft een lijst van unieke users"
    ],
    correct: 1,
    uitleg: "COUNT(*) telt het aantal rijen in een tabel.",
    mnemonic: "COUNT = tellen."
  },
  {
    vraag: "In SQLite, wat is het nut van een index op een kolom zoals title?",
    opties: [
      "Verhoogt opslagkosten",
      "Maakt data onleesbaar",
      "Versnelt zoekopdrachten op die kolom",
      "Combineert meerdere tabellen"
    ],
    correct: 2,
    uitleg: "Een index versnelt zoekopdrachten op een kolom.",
    mnemonic: "Index = sneller zoeken."
  },
  {
    vraag: "Wat betekent CRUD in SQL-context?",
    opties: [
      "Code, Run, Undo, Deploy",
      "Check, Read, Use, Delete",
      "Create, Read, Update, Delete",
      "Clone, Run, Update, Delete"
    ],
    correct: 2,
    uitleg: "CRUD staat voor Create, Read, Update, Delete.",
    mnemonic: "CRUD = basisbewerkingen."
  },
  {
    vraag: "Waarom is het belangrijk om .header on te gebruiken in SQLite?",
    opties: [
      "Het voegt rijen toe aan de database",
      "Het sluit het resultaatvenster",
      "Het toont kolomnamen in queryresultaten",
      "Het beschermt tegen injectie"
    ],
    correct: 2,
    uitleg: ".header on toont kolomnamen in de output.",
    mnemonic: "header = kolomnamen."
  }
]; 