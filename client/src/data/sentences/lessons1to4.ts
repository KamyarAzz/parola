import type {Scenario} from "../../types";
import {cue, say} from "./steps";

export const scenariosLessons1to4: Scenario[] = [
  // Lezione 1
  {
    id: "first-class",
    lesson: 1,
    format: "dialogue",
    title: "First day of class",
    italian: "Al corso d'italiano",
    intro:
      "It's your first Italian lesson. The student next to you says hello.",
    steps: [
      cue(
        "Marco",
        "Ciao, io sono Marco. E tu come ti chiami?",
        "Hi, I'm Marco. And what's your name?",
      ),
      say("Hi! My name is Anna.", "Ciao! [(Io) mi chiamo|(Io) sono] Anna."),
      cue(
        "Marco",
        "Piacere! Di dove sei?",
        "Nice to meet you! Where are you from?",
      ),
      say(
        "Nice to meet you! I'm English, from London.",
        "Piacere! (Io) sono [inglese, (sono) di Londra|inglese, (io) sono di Londra|di Londra, (sono) inglese].",
      ),
      say("And you? Are you Italian?", "E tu? (Tu) sei italiano?"),
      cue(
        "Marco",
        "No, sono spagnolo, di Madrid.",
        "No, I'm Spanish, from Madrid.",
      ),
      say("What's your phone number?", "Qual è il tuo numero di telefono?"),
      cue(
        "Marco",
        "È 347 2219085. Ciao, a domani!",
        "It's 347 2219085. Bye, see you tomorrow!",
      ),
      say("Bye, see you tomorrow!", "Ciao, a domani!"),
    ],
  },
  {
    id: "tu-or-lei",
    lesson: 1,
    format: "drill",
    title: "Formal or informal?",
    italian: "Tu o Lei?",
    intro: "Greet people and ask questions with tu (friends) or Lei (polite).",
    steps: [
      say("Hi Luca, how are you?", "Ciao Luca, come stai?"),
      say(
        "Good morning, Mrs Rossi. How are you?",
        "Buongiorno, signora Rossi. Come sta?",
        "Polite: use Lei",
      ),
      say("Good evening, Mr Bianchi!", "Buonasera, signor Bianchi!"),
      say("What's your name? (polite)", "(Lei) come si chiama?"),
      say("Where are you from? (informal)", "(Tu) di dove sei?"),
      say("Where are you from? (polite)", "(Lei) di dov'è?"),
      say("Are you German? (polite)", "(Lei) è [tedesco|tedesca]?"),
      say(
        "I'm not French, I'm Swiss.",
        "(Io) non sono [francese, sono svizzero|francese, sono svizzera].",
      ),
    ],
  },

  // Lezione 2
  {
    id: "introduce-yourself",
    lesson: 2,
    format: "text",
    title: "Introduce yourself",
    italian: "Mi presento",
    intro:
      "Write a short paragraph about yourself for your course's class page.",
    steps: [
      say(
        "My name is Paul and I'm 30 years old.",
        "[Mi chiamo|Sono] Paul e ho [trent'anni|trenta anni].",
      ),
      say("I'm English, from Manchester.", "(Io) sono inglese, di Manchester."),
      say(
        "I live in Bologna, in Via Mazzini 14.",
        "(Io) abito a Bologna, in via Mazzini quattordici.",
      ),
      say(
        "I'm an architect and I work in an office.",
        "[Sono architetto|Faccio l'architetto|Lavoro come architetto] e lavoro in (un) ufficio.",
      ),
      say(
        "I speak English, French and a bit of Italian.",
        "Parlo inglese, francese e un po' [di italiano|d'italiano].",
      ),
      say(
        "I study Italian at a language school.",
        "Studio (l')italiano in una scuola di lingue.",
      ),
    ],
  },
  {
    id: "at-a-party",
    lesson: 2,
    format: "dialogue",
    title: "Meeting someone at a party",
    italian: "A una festa",
    intro: "At a friend's party, Giulia comes over to talk to you.",
    steps: [
      cue(
        "Giulia",
        "Ciao, io sono Giulia. Tu sei Paolo, vero?",
        "Hi, I'm Giulia. You're Paolo, right?",
      ),
      say("Yes, nice to meet you! How are you?", "Sì, piacere! Come stai?"),
      cue(
        "Giulia",
        "Bene, grazie. Che lavoro fai?",
        "Fine, thanks. What do you do?",
      ),
      say(
        "I'm a doctor. I work in a hospital in Milan.",
        "[Sono medico|Faccio il medico]. Lavoro in (un) ospedale a Milano.",
      ),
      say("And you? What do you do?", "E tu? Che lavoro fai?"),
      cue(
        "Giulia",
        "Sono insegnante di inglese. Quanti anni hai?",
        "I'm an English teacher. How old are you?",
      ),
      say("I'm 35. And you?", "Ho trentacinque anni. E tu?"),
      cue("Giulia", "Io ho 28 anni.", "I'm 28."),
      say(
        "This is Luca. He's a student.",
        "Questo è Luca. (Lui) è (uno) studente.",
      ),
    ],
  },

  // Lezione 3
  {
    id: "at-the-bar",
    lesson: 3,
    format: "dialogue",
    title: "Breakfast at the bar",
    italian: "Al bar",
    intro: "You and a friend stop at a bar for breakfast.",
    steps: [
      cue(
        "Barista",
        "Buongiorno! Cosa prendete?",
        "Good morning! What will you have?",
      ),
      say(
        "Good morning! I'd like a cappuccino and a croissant, please.",
        "Buongiorno! [Vorrei|Per me|Prendo] un cappuccino e un cornetto, per favore.",
      ),
      cue("Barista", "E per la signora?", "And for the lady?"),
      say(
        "For her, a coffee and a glass of water.",
        "Per lei un caffè e un bicchiere [d'acqua|di acqua].",
      ),
      cue(
        "Barista",
        "Acqua naturale o frizzante?",
        "Still or sparkling water?",
      ),
      say("Sparkling, thanks.", "Frizzante, grazie."),
      cue("Barista", "Ecco a voi. Altro?", "Here you are. Anything else?"),
      say(
        "No, thanks. How much is it?",
        "No, grazie. [Quant'è|Quanto è|Quanto costa|Quanto fa]?",
      ),
    ],
  },
  {
    id: "at-the-restaurant",
    lesson: 3,
    format: "dialogue",
    title: "Dinner at a restaurant",
    italian: "Al ristorante",
    intro: "You go out for dinner with a friend.",
    steps: [
      cue(
        "Cameriere",
        "Buonasera. Quante persone?",
        "Good evening. How many people?",
      ),
      say(
        "Good evening, a table for two, please.",
        "Buonasera, un tavolo per due, per favore.",
      ),
      cue("Cameriere", "Prego. Ecco il menù.", "This way. Here's the menu."),
      say(
        "As a starter, I'd like ham and melon.",
        "Come antipasto [vorrei|prendo|per me] prosciutto e melone.",
      ),
      say(
        "Then, as a first course, spaghetti with tomato sauce.",
        "Poi, come primo, (gli) spaghetti al pomodoro.",
      ),
      say(
        "And to drink, a bottle of red wine and a mineral water.",
        "E da bere, una bottiglia di vino rosso e un'acqua minerale.",
      ),
      cue(
        "Cameriere",
        "Volete anche un dolce?",
        "Would you like a dessert too?",
      ),
      say("No, thank you. The bill, please.", [
        "No, grazie. Il conto, per favore.",
        "No, grazie. Ci porta il conto, per favore?",
      ]),
    ],
  },

  // Lezione 4
  {
    id: "my-free-time",
    lesson: 4,
    format: "text",
    title: "My free time",
    italian: "Il mio tempo libero",
    intro: "Write about what you do in your free time.",
    steps: [
      say(
        "In my free time I read a lot and listen to music.",
        "Nel (mio) tempo libero leggo molto e ascolto (la) musica.",
      ),
      say(
        "I often play tennis with my friends.",
        "Gioco spesso a tennis con [i miei|gli] amici.",
      ),
      say("On Saturdays I go to the cinema.", "[Il|Di] sabato vado al cinema."),
      say(
        "On Sundays I sleep until ten.",
        "[La|Di] domenica dormo fino alle dieci.",
      ),
      say("I never watch TV.", "Non guardo mai la [TV|televisione]."),
      say(
        "I like cooking, but I don't like dancing.",
        "Mi piace cucinare, ma non mi piace ballare.",
      ),
    ],
  },
  {
    id: "weekend-plans",
    lesson: 4,
    format: "dialogue",
    title: "Plans for the weekend",
    italian: "Cosa fai nel fine settimana?",
    intro: "Your friend Sara asks about your weekend.",
    steps: [
      cue(
        "Sara",
        "Cosa fai nel fine settimana?",
        "What do you do at the weekend?",
      ),
      say(
        "On Saturday morning I go swimming.",
        "(Il) sabato mattina vado a nuotare.",
      ),
      cue("Sara", "E la sera?", "And in the evening?"),
      say(
        "In the evening I go out with friends.",
        "(La) sera esco con [gli|i miei] amici.",
      ),
      say("Do you like going to the cinema?", "Ti piace andare al cinema?"),
      cue(
        "Sara",
        "Sì, molto! Andiamo insieme sabato?",
        "Yes, a lot! Shall we go together on Saturday?",
      ),
      say("Yes! What time?", "Sì! A che ora?"),
      cue("Sara", "Alle otto e mezza?", "At half past eight?"),
      say(
        "Perfect, see you at half past eight.",
        "Perfetto, ci vediamo alle otto e [mezza|mezzo].",
      ),
    ],
  },
  {
    id: "what-time",
    lesson: 4,
    format: "drill",
    title: "Times and days",
    italian: "Che ore sono?",
    intro: "Ask and tell the time, and say when you do things.",
    steps: [
      say("What time is it?", ["Che ore sono?", "Che ora è?"]),
      say("It's one o'clock.", "È l'una."),
      say("It's quarter past three.", "Sono le tre e [un quarto|quindici]."),
      say("It's half past seven.", "Sono le sette e [mezza|mezzo|trenta]."),
      say("It's midday.", "È mezzogiorno."),
      say("The film starts at nine.", "Il film [comincia|inizia] alle nove."),
      say("I work from Monday to Friday.", "Lavoro dal lunedì al venerdì."),
    ],
  },
];
