import type {Noun} from "../../types";

/** Things to order at the bar or restaurant (lesson 3). */
export const barItems: Noun[] = [
  {it: "caffè", pl: "caffè", g: "m", en: "coffee", enPl: "coffees"},
  {
    it: "cappuccino",
    pl: "cappuccini",
    g: "m",
    en: "cappuccino",
    enPl: "cappuccinos",
  },
  {it: "tè", pl: "tè", g: "m", en: "tea", enPl: "teas"},
  {it: "cornetto", pl: "cornetti", g: "m", en: "croissant", enPl: "croissants"},
  {it: "panino", pl: "panini", g: "m", en: "sandwich", enPl: "sandwiches"},
  {it: "birra", pl: "birre", g: "f", en: "beer", enPl: "beers"},
  {
    it: "spremuta",
    pl: "spremute",
    g: "f",
    en: "fresh orange juice",
    enPl: "fresh orange juices",
  },
  {
    it: "aranciata",
    pl: "aranciate",
    g: "f",
    en: "orange soda",
    enPl: "orange sodas",
  },
  {
    it: "acqua minerale",
    pl: "acque minerali",
    g: "f",
    en: "mineral water",
    enPl: "mineral waters",
  },
  {
    it: "succo di frutta",
    pl: "succhi di frutta",
    g: "m",
    en: "fruit juice",
    enPl: "fruit juices",
  },
  {it: "insalata", pl: "insalate", g: "f", en: "salad", enPl: "salads"},
  {it: "bistecca", pl: "bistecche", g: "f", en: "steak", enPl: "steaks"},
];

/** Things you like or don't, with plural ones for "mi piacciono". */
export const likeables: {noun: Noun; plural: boolean}[] = [
  {noun: {it: "cinema", g: "m", en: "the cinema"}, plural: false},
  {noun: {it: "musica", g: "f", en: "music"}, plural: false},
  {noun: {it: "pizza", g: "f", en: "pizza"}, plural: false},
  {noun: {it: "caffè", g: "m", en: "coffee"}, plural: false},
  {noun: {it: "sport", g: "m", en: "sport"}, plural: false},
  {noun: {it: "spaghetti", g: "m", en: "spaghetti"}, plural: true},
  {noun: {it: "libri", g: "m", en: "books"}, plural: true},
  {noun: {it: "film italiani", g: "m", en: "Italian films"}, plural: true},
  {noun: {it: "mele", g: "f", en: "apples"}, plural: true},
  {noun: {it: "verdure", g: "f", en: "vegetables"}, plural: true},
];

/** Places in town (lessons 2 and 6). */
export const places: Noun[] = [
  {it: "farmacia", pl: "farmacie", g: "f", en: "pharmacy", enPl: "pharmacies"},
  {it: "banca", pl: "banche", g: "f", en: "bank", enPl: "banks"},
  {it: "stazione", pl: "stazioni", g: "f", en: "station", enPl: "stations"},
  {it: "museo", pl: "musei", g: "m", en: "museum", enPl: "museums"},
  {it: "chiesa", pl: "chiese", g: "f", en: "church", enPl: "churches"},
  {it: "posta", pl: "poste", g: "f", en: "post office", enPl: "post offices"},
  {it: "edicola", pl: "edicole", g: "f", en: "newsstand", enPl: "newsstands"},
  {
    it: "supermercato",
    pl: "supermercati",
    g: "m",
    en: "supermarket",
    enPl: "supermarkets",
  },
  {it: "parco", pl: "parchi", g: "m", en: "park", enPl: "parks"},
  {it: "teatro", pl: "teatri", g: "m", en: "theatre", enPl: "theatres"},
  {it: "ospedale", pl: "ospedali", g: "m", en: "hospital", enPl: "hospitals"},
  {it: "albergo", pl: "alberghi", g: "m", en: "hotel", enPl: "hotels"},
  {it: "piazza", pl: "piazze", g: "f", en: "square", enPl: "squares"},
  {it: "ufficio", pl: "uffici", g: "m", en: "office", enPl: "offices"},
  {it: "scuola", pl: "scuole", g: "f", en: "school", enPl: "schools"},
];

/** Hotel room things for c'è / ci sono (lesson 5). */
export const roomThings: Noun[] = [
  {it: "frigobar", g: "m", en: "minibar"},
  {it: "doccia", g: "f", en: "shower"},
  {it: "televisore", pl: "televisori", g: "m", en: "TV", enPl: "TVs"},
  {it: "asciugamano", pl: "asciugamani", g: "m", en: "towel", enPl: "towels"},
  {it: "cuscino", pl: "cuscini", g: "m", en: "pillow", enPl: "pillows"},
  {it: "coperta", pl: "coperte", g: "f", en: "blanket", enPl: "blankets"},
  {it: "letto", pl: "letti", g: "m", en: "bed", enPl: "beds"},
];

/** Food from the market, with the unit you'd buy it in (lesson 8). */
export const groceries: {
  noun: Noun;
  plural: boolean;
  unit: string;
  enUnit: string;
  /** The unit is a number, so there's no "di" (sei uova) */
  counted?: boolean;
}[] = [
  {
    noun: {it: "mele", g: "f", en: "apples"},
    plural: true,
    unit: "un chilo",
    enUnit: "a kilo",
  },
  {
    noun: {it: "pomodori", g: "m", en: "tomatoes"},
    plural: true,
    unit: "mezzo chilo",
    enUnit: "half a kilo",
  },
  {
    noun: {it: "patate", g: "f", en: "potatoes"},
    plural: true,
    unit: "due chili",
    enUnit: "two kilos",
  },
  {
    noun: {it: "prosciutto", g: "m", en: "ham"},
    plural: false,
    unit: "due etti",
    enUnit: "200 grams",
  },
  {
    noun: {it: "formaggio", g: "m", en: "cheese"},
    plural: false,
    unit: "un etto",
    enUnit: "100 grams",
  },
  {
    noun: {it: "latte", g: "m", en: "milk"},
    plural: false,
    unit: "un litro",
    enUnit: "a litre",
  },
  {
    noun: {it: "vino rosso", g: "m", en: "red wine"},
    plural: false,
    unit: "una bottiglia",
    enUnit: "a bottle",
  },
  {
    noun: {it: "acqua", g: "f", en: "water"},
    plural: false,
    unit: "una bottiglia",
    enUnit: "a bottle",
  },
  {
    noun: {it: "pasta", g: "f", en: "pasta"},
    plural: false,
    unit: "un pacco",
    enUnit: "a packet",
  },
  {
    noun: {it: "riso", g: "m", en: "rice"},
    plural: false,
    unit: "un pacco",
    enUnit: "a packet",
  },
  {
    noun: {it: "zucchero", g: "m", en: "sugar"},
    plural: false,
    unit: "un pacco",
    enUnit: "a packet",
  },
  {
    noun: {it: "olio", g: "m", en: "oil"},
    plural: false,
    unit: "una bottiglia",
    enUnit: "a bottle",
  },
  {
    noun: {it: "uova", g: "f", en: "eggs"},
    plural: true,
    unit: "sei",
    enUnit: "six",
    counted: true,
  },
  {
    noun: {it: "pane", g: "m", en: "bread"},
    plural: false,
    unit: "mezzo chilo",
    enUnit: "half a kilo",
  },
];

export const months = [
  {it: "gennaio", en: "January"},
  {it: "febbraio", en: "February"},
  {it: "marzo", en: "March"},
  {it: "aprile", en: "April"},
  {it: "maggio", en: "May"},
  {it: "giugno", en: "June"},
  {it: "luglio", en: "July"},
  {it: "agosto", en: "August"},
  {it: "settembre", en: "September"},
  {it: "ottobre", en: "October"},
  {it: "novembre", en: "November"},
  {it: "dicembre", en: "December"},
];

export const days = [
  {it: "lunedì", en: "Monday"},
  {it: "martedì", en: "Tuesday"},
  {it: "mercoledì", en: "Wednesday"},
  {it: "giovedì", en: "Thursday"},
  {it: "venerdì", en: "Friday"},
  {it: "sabato", en: "Saturday"},
  {it: "domenica", en: "Sunday"},
];
