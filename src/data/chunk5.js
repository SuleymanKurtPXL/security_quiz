export const chunk5 = [
  {
    vraag: "Wat is een typische toepassing van Python in digitale forensics?",
    opties: [
      "Malware verspreiden",
      "Browserextensies maken",
      "RAM dumpen met os.kill()",
      "Automatisch logbestanden analyseren"
    ],
    correct: 3,
    uitleg: "Python wordt vaak gebruikt om logbestanden automatisch te analyseren.",
    mnemonic: "Python = automatiseren."
  },
  {
    vraag: "Welke Python-functie gebruik je om een bestand regel voor regel te openen?",
    opties: [
      "read()",
      "openlines()",
      "readline()",
      "open()"
    ],
    correct: 3,
    uitleg: "open() is de standaardfunctie om een bestand te openen in Python.",
    mnemonic: "open() = bestand openen."
  },
  {
    vraag: "Wat doet de SQL-query SELECT * FROM logs LIMIT 10;?",
    opties: [
      "Verwijdert 10 logs",
      "Toont de laatste 10 rijen",
      "Toont de eerste 10 rijen uit de logs-tabel",
      "Slaat 10 logs op"
    ],
    correct: 2,
    uitleg: "LIMIT 10 toont de eerste 10 rijen uit de logs-tabel.",
    mnemonic: "LIMIT = limiet op aantal rijen."
  },
  {
    vraag: "In SQLite, wat doet DELETE FROM users WHERE 1=1;?",
    opties: [
      "Verwijdert 1 gebruiker",
      "Verwijdert geen enkele gebruiker",
      "Verwijdert alle gebruikers",
      "Updatet alle gebruikers"
    ],
    correct: 2,
    uitleg: "WHERE 1=1 is altijd waar, dus alle gebruikers worden verwijderd.",
    mnemonic: "1=1 = altijd waar."
  },
  {
    vraag: "Waarom wordt pandas vaak gebruikt in combinatie met forensische CSV-analyse?",
    opties: [
      "Voor file carving",
      "Voor eenvoudig visualiseren en filteren van data",
      "Voor netwerkpenetratie",
      "Voor disk imaging"
    ],
    correct: 1,
    uitleg: "Pandas is ideaal voor het filteren en visualiseren van data uit CSV-bestanden.",
    mnemonic: "Pandas = data-analyse."
  },
  {
    vraag: "Wat doet pd.read_csv('data.csv') in Python?",
    opties: [
      "Maakt een backup",
      "Leest een CSV-bestand als dataframe",
      "Verstuurt data naar mail",
      "Start een SQL-query"
    ],
    correct: 1,
    uitleg: "pd.read_csv leest een CSV-bestand in als dataframe.",
    mnemonic: "read_csv = CSV lezen."
  },
  {
    vraag: "Wat is een INNER JOIN in SQL?",
    opties: [
      "Combineert rijen zonder gemeenschappelijke waarden",
      "Combineert alle rijen, ook zonder match",
      "Combineert alleen rijen met gelijke waarden in beide tabellen",
      "Kopieert rijen van de eerste tabel"
    ],
    correct: 2,
    uitleg: "INNER JOIN combineert alleen rijen met gelijke waarden in beide tabellen.",
    mnemonic: "INNER = alleen wat overeenkomt."
  },
  {
    vraag: "Welke aanval wordt vaak voorkomen door prepared statements?",
    opties: [
      "Brute-force",
      "SQL-injectie",
      "Cross-site scripting",
      "Ransomware"
    ],
    correct: 1,
    uitleg: "Prepared statements voorkomen SQL-injectie.",
    mnemonic: "Prepared = veilig tegen injectie."
  },
  {
    vraag: "Wat doet een foreign key in een SQL-tabel?",
    opties: [
      "Verwijst naar een kolom in dezelfde rij",
      "Verwijst naar een primaire sleutel in een andere tabel",
      "Maakt een index aan",
      "Codeert de data"
    ],
    correct: 1,
    uitleg: "Een foreign key verwijst naar een primaire sleutel in een andere tabel.",
    mnemonic: "Foreign = verwijzing naar buiten."
  },
  {
    vraag: "Hoe kun je de uitvoer van een SQLite-query opslaan naar een bestand in CLI?",
    opties: [
      "Gebruik EXPORT TO",
      "Gebruik .output filename.txt",
      "Gebruik .store filename.db",
      "Gebruik BACKUP TO"
    ],
    correct: 1,
    uitleg: ".output filename.txt slaat de uitvoer op in een bestand.",
    mnemonic: ".output = uitvoer naar bestand."
  }
]; 