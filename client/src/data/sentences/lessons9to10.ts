import type {Scenario} from "../../types";
import {cue, say} from "./steps";

export const scenariosLessons9to10: Scenario[] = [
  // Lezione 9
  {
    id: "my-day",
    lesson: 9,
    format: "text",
    title: "A normal day",
    italian: "Una giornata normale",
    intro: "Describe a normal weekday for a blog about daily life.",
    steps: [
      say("I usually wake up at seven.", "Di solito mi sveglio alle sette."),
      say(
        "First I have a shower, then I get dressed.",
        "Prima mi faccio la doccia, poi mi vesto.",
      ),
      say(
        "I have breakfast at home and I go to the office by bus.",
        "Faccio colazione a casa e vado in ufficio in autobus.",
      ),
      say(
        "I have lunch at one with my colleagues.",
        "Pranzo all'una con i [miei |]colleghi.",
      ),
      say(
        "In the evening I rest and watch TV.",
        "La sera mi riposo e guardo la [TV|televisione].",
      ),
      say(
        "I normally go to bed at eleven.",
        "[Normalmente|Di solito] vado a letto alle undici.",
      ),
    ],
  },
  {
    id: "saturday-plans",
    lesson: 9,
    format: "dialogue",
    title: "What do you do on Saturdays?",
    italian: "Il sabato",
    intro: "A friend asks you to go to the mountains on Saturday.",
    steps: [
      cue(
        "Angela",
        "Vieni in montagna sabato prossimo?",
        "Are you coming to the mountains next Saturday?",
      ),
      say(
        "No, sorry, you always leave so early!",
        "No, scusa, (voi) partite sempre così presto!",
      ),
      cue("Angela", "Ma scusa, quando ti alzi?", "But when do you get up?"),
      say(
        "On Saturdays I never get up before eleven.",
        "Il sabato non mi alzo mai prima delle undici.",
      ),
      cue(
        "Angela",
        "E la mattina non fai niente?",
        "And you don't do anything in the morning?",
      ),
      say(
        "I go running, then I have a nice hot shower.",
        "Vado a correre, poi mi faccio una bella doccia calda.",
      ),
      say(
        "In the afternoon I sometimes go to the cinema with my girlfriend.",
        "Il pomeriggio qualche volta vado al cinema con la mia ragazza.",
      ),
      cue(
        "Angela",
        "Io invece vado sempre fuori città.",
        "Whereas I always go out of town.",
      ),
      say("Do you have fun?", "Ti diverti?"),
    ],
  },
  {
    id: "best-wishes",
    lesson: 9,
    format: "drill",
    title: "Wishes for every occasion",
    italian: "Tanti auguri!",
    intro: "Say the right thing for each occasion.",
    steps: [
      say("Happy birthday, Marco!", "[Buon compleanno|Tanti auguri], Marco!"),
      say("Merry Christmas and happy New Year!", "Buon Natale e buon anno!"),
      say("Happy Easter to everyone!", "Buona Pasqua a tutti!"),
      say("Have a good holiday!", "Buone vacanze!"),
      say(
        "Do you have an exam tomorrow? Good luck!",
        "Domani hai un esame? In bocca al lupo!",
      ),
      say(
        "You got married? Congratulations!",
        "Ti sei [sposato|sposata]? Congratulazioni!",
      ),
    ],
  },

  // Lezione 10
  {
    id: "my-family",
    lesson: 10,
    format: "dialogue",
    title: "How many of you are there?",
    italian: "Quanti siete in famiglia?",
    intro: "A new friend asks you about your family.",
    steps: [
      cue(
        "Laura",
        "Quanti siete in famiglia?",
        "How many are there in your family?",
      ),
      say(
        "There are four of us: my parents, my sister and me.",
        "Siamo in quattro: i miei genitori, mia sorella e io.",
      ),
      cue(
        "Laura",
        "Tua sorella è più grande o più piccola?",
        "Is your sister older or younger?",
      ),
      say(
        "She's older. She's married and she lives in Milan.",
        "È più grande. È sposata e [vive|abita] a Milano.",
      ),
      cue("Laura", "Ha figli?", "Does she have children?"),
      say("Yes, her son is three.", "Sì, suo figlio ha tre anni."),
      cue("Laura", "E i tuoi nonni?", "And your grandparents?"),
      say(
        "My grandmother is the oldest in the family: she's ninety!",
        "Mia nonna è la più anziana della famiglia: ha novant'anni!",
      ),
    ],
  },
  {
    id: "a-special-email",
    lesson: 10,
    format: "text",
    title: "A special email",
    italian: "Una mail speciale",
    intro: "Write to a friend about your brother's wedding last weekend.",
    steps: [
      say("Hi Giulia, how are you?", "Ciao Giulia, come stai?"),
      say(
        "Last Saturday my brother got married.",
        "Sabato scorso mio fratello si è sposato.",
      ),
      say(
        "His wife is called Chiara and she's very nice.",
        "Sua moglie si chiama Chiara ed è molto simpatica.",
      ),
      say(
        "All our relatives came, even my cousins from Australia.",
        "Sono venuti tutti i nostri parenti, anche i miei cugini dall'Australia.",
      ),
      say(
        "We had a lot of fun and we went to bed at three.",
        "Ci siamo [divertiti|divertite] molto e siamo [andati|andate] a letto alle tre.",
      ),
      say("When are you coming to see me?", "Quando vieni a trovarmi?"),
    ],
  },
  {
    id: "whose-is-it",
    lesson: 10,
    format: "drill",
    title: "Whose is it?",
    italian: "I possessivi",
    intro: "Talk about people and their things.",
    steps: [
      say(
        "Paolo lives with his girlfriend.",
        "Paolo [vive|abita] con la sua ragazza.",
      ),
      say("Anna is going out with her friends.", "Anna esce con i suoi amici."),
      say(
        "My parents live in Rome.",
        "I miei genitori [vivono|abitano] a Roma.",
      ),
      say("Their daughter is a doctor.", "La loro figlia è medico."),
      say("Is this your car? (informal)", "È la tua macchina?"),
      say(
        "On Sunday I'm going to see my grandmother.",
        "Domenica vado a trovare mia nonna.",
      ),
    ],
  },
];
