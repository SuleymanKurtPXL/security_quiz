export const chunk_python = [
  {
    vraag: "Welke van de volgende opties is géén geldige variabelenaam in Python?",
    opties: [
      "totaal_waarde",
      "2e_waarde",
      "waarde_2",
      "_waarde2"
    ],
    correct: 1,
    uitleg: "Variabelen mogen niet met een cijfer beginnen. 2e_waarde is dus ongeldig.",
    mnemonic: "Variabelen mogen niet met een cijfer starten."
  },
  {
    vraag: "Wat is het resultaat (datatype) van de volgende expressie in Python 3?\n\ntype(3 / 2)",
    opties: [
      "int",
      "float",
      "str",
      "compex"
    ],
    correct: 1,
    uitleg: "In Python 3 geeft 3 / 2 altijd een float terug.",
    mnemonic: "/ in Python 3 = float."
  },
  {
    vraag: "Welke van de volgende beweringen over variabelen en scope in Python is correct?",
    opties: [
      "Een variabele gedeclareerd binnen een functie is overal in het programma beschikbaar.",
      "Python heeft geen concept van 'scope'.",
      "Een variabele gedeclareerd in een functie is standaard alleen toegankelijk binnen die functie (lokale scope).",
      "Je kan best zorgen dat alle variabelen in een script globaal zijn."
    ],
    correct: 2,
    uitleg: "Variabelen in een functie zijn standaard lokaal. Dit heet lokale scope.",
    mnemonic: "Functie = lokale scope."
  },
  {
    vraag: "Als je de code hieronder uitvoert, wat is dan de output?\n\nnumbers = [10, 20, 30, 40, 50]\nprint(numbers[1:4])",
    opties: [
      "[10, 20, 30]",
      "[20, 30, 40]",
      "[20, 30, 40, 50]",
      "[10, 20, 30, 40]"
    ],
    correct: 1,
    uitleg: "Slicing [1:4] geeft de elementen op index 1, 2 en 3: [20, 30, 40]",
    mnemonic: "Slicing: start inclusief, end exclusief."
  },
  {
    vraag: "Welk deel van de code wordt uitgevoerd als x = 10?\n\nx = 10\nif x < 10:\n  print(\"Kleiner dan 10\")\nelif x == 10:\n  print(\"Precies 10\")\nelse:\n  print(\"Groter dan 10\")",
    opties: [
      "Kleiner dan 10",
      "Precies 10",
      "Groter dan 10",
      "Er wordt niets geprint."
    ],
    correct: 1,
    uitleg: "x == 10, dus de elif wordt uitgevoerd: 'Precies 10'",
    mnemonic: "elif x == 10: ..."
  },
  {
    vraag: "Wat is de output van de volgende code?\n\nfor i in range(2, 5):\n  print(i)",
    opties: [
      "2 3 4",
      "2 3 4 5",
      "2 5",
      "2 4"
    ],
    correct: 0,
    uitleg: "range(2, 5) geeft 2, 3, 4 (5 is exclusief)",
    mnemonic: "range(start, end): end is exclusief."
  },
  {
    vraag: "Welke methode zou je gebruiken om alle letters in de string woord naar hoofdletters te converteren?",
    opties: [
      "woord.upper()",
      "toUpper(woord)",
      "convert_upper(woord)",
      "woord.capitalizeAll()"
    ],
    correct: 0,
    uitleg: "De juiste methode is .upper() voor hoofdletters.",
    mnemonic: ".upper() = hoofdletters."
  },
  {
    vraag: "Gegeven de dictionary:\n\nstudent = {\n    'naam': 'Bas',\n    'leeftijd': 21,\n    'studiepunten': 45\n}\nHoe haal je de waarde van de sleutel 'leeftijd' op?",
    opties: [
      "student['leeftijd']",
      "student.getValue('leeftijd')",
      "student['Bas']",
      "student.value['leeftijd']"
    ],
    correct: 0,
    uitleg: "De juiste syntax is student['leeftijd'].",
    mnemonic: "dict[key] voor waarde."
  },
  {
    vraag: "Wat print de code als deze functie wordt aangeroepen met functie(5)?\n\ndef functie(x, y=3):\n    print(x * y)\n\nfunctie(5)",
    opties: [
      "15",
      "8",
      "3",
      "5"
    ],
    correct: 0,
    uitleg: "y=3 is de default, dus 5*3=15.",
    mnemonic: "Default argumenten in functie."
  },
  {
    vraag: "Welke syntaxis is het meest geschikt om een bestand genaamd data.txt in te lezen en automatisch te sluiten zodra we klaar zijn?",
    opties: [
      "file = open('data.txt', 'r')\n# leesbestand\nfile.close()",
      "with open('data.txt', 'r') as file:\n  # leesbestand",
      "open('data.txt', 'r')",
      "with open('data.txt') as file:\n  # leesbestand\nfile.close()"
    ],
    correct: 1,
    uitleg: "De with open(...) as file: ... syntax sluit het bestand automatisch.",
    mnemonic: "with open() = automatisch sluiten."
  }
]; 