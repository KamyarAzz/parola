import type {Scenario} from "../../types";
import {cue, say} from "./steps";

export const scenariosLessons5to8: Scenario[] = [
  // Lezione 5
  {
    id: "booking-a-room",
    lesson: 5,
    format: "dialogue",
    title: "Booking a room by phone",
    italian: "Prenotare una camera",
    intro: "You call a hotel in Florence to book a room.",
    steps: [
      cue(
        "Receptionist",
        "Hotel Bellavista, buongiorno.",
        "Hotel Bellavista, good morning.",
      ),
      say(
        "Good morning, I'd like to book a double room.",
        "Buongiorno, vorrei prenotare una camera doppia.",
      ),
      cue("Receptionist", "Per quando?", "For when?"),
      say(
        "From 10 to 13 May, for three nights.",
        "Dal dieci al tredici maggio, per tre notti.",
      ),
      say(
        "Is breakfast included?",
        "[La colazione è compresa|È compresa la colazione|La colazione è inclusa|È inclusa la colazione]?",
      ),
      cue(
        "Receptionist",
        "Sì, certo. C'è anche il parcheggio.",
        "Yes, of course. There's parking too.",
      ),
      say(
        "Great. Is there air conditioning in the room?",
        "[Benissimo|Perfetto|Ottimo]. C'è l'aria condizionata [in camera|nella camera]?",
      ),
      cue("Receptionist", "Sì. A che nome?", "Yes. Under what name?"),
      say("Under the name Rossi.", "A nome Rossi."),
    ],
  },
  {
    id: "my-details",
    lesson: 5,
    format: "text",
    title: "Giving your details",
    italian: "I miei dati",
    intro: "Write to a hotel to book a room and give your personal details.",
    steps: [
      say(
        "Good morning, my name is Laura Bianchi.",
        "Buongiorno, [mi chiamo|sono] Laura Bianchi.",
      ),
      say("My address is Via Roma 25, Florence.", [
        "Il mio indirizzo è via Roma venticinque, (a) Firenze.",
        "Abito in via Roma venticinque, a Firenze.",
      ]),
      say("We are two adults and a child.", "Siamo due adulti e un bambino."),
      say(
        "I'd like to book a single room with a bathroom.",
        "Vorrei prenotare una camera singola con bagno.",
      ),
      say(
        "I arrive on 3 June and I leave on 5 June.",
        "Arrivo il tre giugno e parto il cinque (giugno).",
      ),
      say("Can I bring my dog?", "Posso portare il (mio) cane?"),
      say("Thank you and best regards.", "Grazie e cordiali saluti."),
    ],
  },
  {
    id: "hotel-complaint",
    lesson: 5,
    format: "dialogue",
    title: "Something's wrong in the room",
    italian: "Un reclamo",
    intro: "You go down to reception because your room has problems.",
    steps: [
      say(
        "Excuse me, the shower in my room doesn't work.",
        "Scusi, la doccia [in camera mia|nella mia camera|in camera] non funziona.",
      ),
      cue(
        "Receptionist",
        "Mi dispiace! Mando subito qualcuno.",
        "I'm sorry! I'll send someone right away.",
      ),
      say("And there are no towels.", "E non ci sono (gli) asciugamani."),
      say(
        "The air conditioning doesn't work either.",
        "Anche l'aria condizionata non funziona.",
      ),
      say("Can I change room?", "Posso cambiare camera?"),
      cue(
        "Receptionist",
        "Certo, c'è una camera libera al terzo piano.",
        "Of course, there's a free room on the third floor.",
      ),
      say("Thank you very much!", "[Grazie mille|Grazie tante|Molte grazie]!"),
    ],
  },

  // Lezione 6
  {
    id: "asking-the-way",
    lesson: 6,
    format: "dialogue",
    title: "Asking the way",
    italian: "Scusi, dov'è…?",
    intro: "You're a tourist looking for a pharmacy.",
    steps: [
      say(
        "Excuse me, is there a pharmacy near here?",
        "Scusi, c'è una farmacia qui vicino?",
      ),
      cue("Passante", "Sì, in piazza Garibaldi.", "Yes, in Piazza Garibaldi."),
      say(
        "How do I get to Piazza Garibaldi?",
        "[Come arrivo|Come si arriva] in piazza Garibaldi?",
      ),
      cue(
        "Passante",
        "Allora, va dritto fino al semaforo e poi gira a destra.",
        "So, go straight on to the traffic lights and then turn right.",
      ),
      say(
        "Straight on to the traffic lights and then right?",
        "Dritto fino al semaforo e poi a destra?",
      ),
      cue(
        "Passante",
        "Esatto. La farmacia è accanto alla banca.",
        "Exactly. The pharmacy is next to the bank.",
      ),
      say("Is it far?", "È [lontano|lontana]?"),
      cue(
        "Passante",
        "No, sono cinque minuti a piedi.",
        "No, it's five minutes on foot.",
      ),
      say(
        "Thanks a lot, goodbye!",
        "[Grazie mille|Grazie tante], arrivederci!",
      ),
    ],
  },
  {
    id: "my-town",
    lesson: 6,
    format: "text",
    title: "Describe your town",
    italian: "La mia città",
    intro: "Write a few lines about the town where you live.",
    steps: [
      say(
        "I live in Verona, a small and quiet town.",
        "(Io) abito a Verona, una [città piccola e tranquilla|piccola città tranquilla].",
      ),
      say(
        "In the centre there is a very beautiful square.",
        "[In|Nel] centro c'è una piazza molto bella.",
      ),
      say(
        "There are many churches and an old bridge.",
        "Ci sono [molte|tante] chiese e un ponte antico.",
      ),
      say(
        "The station is near the centre.",
        "La stazione è [vicino|vicina] al centro.",
      ),
      say(
        "Opposite my house there is a park.",
        "Di fronte a casa mia c'è un parco.",
      ),
      say(
        "There isn't a theatre, but there is a cinema.",
        "Non c'è un teatro, ma c'è un cinema.",
      ),
    ],
  },

  // Lezione 7
  {
    id: "last-weekend",
    lesson: 7,
    format: "text",
    title: "Last weekend",
    italian: "Il mio fine settimana",
    intro: "Tell the story of your weekend in the past tense.",
    steps: [
      say(
        "Last weekend I went to the sea with my friends.",
        "[Lo scorso fine settimana|Il fine settimana scorso|Lo scorso weekend|Il weekend scorso] sono [andato|andata] al mare con [i miei|gli] amici.",
        "andare takes essere",
      ),
      say(
        "On Saturday we swam and slept on the beach.",
        "Sabato abbiamo nuotato e (abbiamo) dormito [in|sulla] spiaggia.",
      ),
      say(
        "In the evening we ate fish in a restaurant.",
        "La sera abbiamo mangiato (il) pesce [in un|al] ristorante.",
      ),
      say(
        "On Sunday it rained, so we visited a museum.",
        "Domenica [è|ha] piovuto, [così|allora|quindi] abbiamo visitato un museo.",
      ),
      say("We came back home on Sunday evening.", [
        "Siamo [tornati|tornate] a casa domenica sera.",
        "Domenica sera siamo [tornati|tornate] a casa.",
      ]),
      say(
        "It was a lovely weekend!",
        "È stato un bel [fine settimana|weekend]!",
      ),
    ],
  },
  {
    id: "holiday-chat",
    lesson: 7,
    format: "dialogue",
    title: "How was your holiday?",
    italian: "Com'è andata la vacanza?",
    intro: "Back at work, your colleague Luca asks about your holiday.",
    steps: [
      cue(
        "Luca",
        "Ciao! Dove sei stato in vacanza?",
        "Hi! Where did you go on holiday?",
      ),
      say(
        "I was in Sicily for two weeks.",
        "Sono [stato|stata] in Sicilia per due settimane.",
      ),
      cue("Luca", "Che bello! Cosa hai fatto?", "How lovely! What did you do?"),
      say("I visited Palermo and Taormina.", "Ho visitato Palermo e Taormina."),
      say(
        "I ate a lot and went to the beach every day.",
        "Ho mangiato [molto|tanto] e sono [andato|andata] [in spiaggia|al mare] ogni giorno.",
      ),
      cue("Luca", "E il tempo?", "And the weather?"),
      say(
        "The weather was always good.",
        "[Ha fatto sempre|Ha sempre fatto] bel tempo.",
      ),
      say("And you? What did you do?", "E tu? [Cosa|Che cosa|Che] hai fatto?"),
    ],
  },
  {
    id: "essere-or-avere",
    lesson: 7,
    format: "drill",
    title: "Past tense: essere or avere?",
    italian: "Passato prossimo",
    intro: "Say what happened. Watch the helper verb and the ending.",
    steps: [
      say(
        "Yesterday I worked until seven.",
        "Ieri ho lavorato fino alle sette.",
      ),
      say(
        "Maria went to Rome last week.",
        "Maria è andata a Roma la [settimana scorsa|scorsa settimana].",
      ),
      say("On Friday we ate pizza.", [
        "Venerdì abbiamo mangiato la pizza.",
        "Abbiamo mangiato la pizza venerdì.",
      ]),
      say(
        "What did you do yesterday evening?",
        "[Cosa|Che cosa|Che] hai fatto ieri sera?",
      ),
      say(
        "They arrived two days ago.",
        "(Loro) sono [arrivati|arrivate] due giorni fa.",
      ),
      say(
        "I read a book and wrote an email.",
        "Ho letto un libro e (ho) scritto [una mail|un'email|una email].",
      ),
      say("Did you see the film? (informal)", "Hai visto il film?"),
      say("I took the train at eight.", "Ho preso il treno alle otto."),
    ],
  },

  // Lezione 8
  {
    id: "at-the-market",
    lesson: 8,
    format: "dialogue",
    title: "At the market",
    italian: "Al mercato",
    intro: "You're buying fruit and vegetables at a market stall.",
    steps: [
      cue(
        "Fruttivendolo",
        "Buongiorno, desidera?",
        "Good morning, what would you like?",
      ),
      say(
        "Good morning, I'd like a kilo of tomatoes.",
        "Buongiorno, vorrei un chilo di pomodori.",
      ),
      cue("Fruttivendolo", "Ecco. Altro?", "Here you are. Anything else?"),
      say(
        "Yes, half a kilo of apples, please.",
        "Sì, mezzo chilo di mele, per favore.",
      ),
      say("Do you also have eggs?", "[Avete|Ha] anche [delle |le |]uova?"),
      cue(
        "Fruttivendolo",
        "Sì, quante ne vuole?",
        "Yes, how many would you like?",
      ),
      say(
        "Six, please. How much is it altogether?",
        "Sei, per favore. [Quant'è|Quanto costa|Quanto fa|Quanto viene] in tutto?",
      ),
      cue("Fruttivendolo", "Sono 7 euro e 50.", "That's 7 euros 50."),
      say(
        "Here you are. Thank you, goodbye!",
        "Ecco (a Lei). Grazie, arrivederci!",
      ),
    ],
  },
  {
    id: "shopping-list",
    lesson: 8,
    format: "text",
    title: "Shopping for dinner",
    italian: "La spesa per la cena",
    intro: "Leave a note for your flatmate about tonight's dinner shopping.",
    steps: [
      say(
        "Tonight I'm cooking pasta with tomatoes.",
        "Stasera cucino (la) pasta [al pomodoro|con i pomodori].",
      ),
      say(
        "Can you buy two hundred grams of ham?",
        "Puoi comprare due etti di prosciutto?",
        "200 g = due etti",
      ),
      say(
        "Can you also get a litre of milk and some bread?",
        "Puoi [prendere anche|anche prendere|comprare anche|anche comprare] un litro di latte e (del) pane?",
      ),
      say("There isn't any sugar.", "Non c'è (più) zucchero."),
      say("The wine? I'll buy it.", "Il vino? Lo compro io."),
      say("See you later!", "A dopo!"),
    ],
  },
];
