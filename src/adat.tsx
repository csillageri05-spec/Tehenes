export type ZeneMufaj =
  | "EDM"
  | "folk-psychedelic"
  | "Indie Pop"
  | "Rock"
  | "Hip-Hop"
  | "Pop"
  | "Metal"
  | "Filmzene";

export interface ZeneTipus {
  readonly id: number;
  cim: string;
  eloado: string;
  mufaj: ZeneMufaj;
  kiadasEve: number;
  leiras: string;
}

export const ZENELISTA: ZeneTipus[] = [
  {
    id: 1,
    cim: "Gdzie jest biały węgorz ? (Zejście)",
    eloado: "Cypis",
    mufaj: "EDM",
    kiadasEve: 2015,
    leiras: "Az interneten 'Polish Cow' néven elhíresült dal, amely egy táncoló lengyel tehént ábrázoló mém révén vált világhírűvé. A vidám dallam mögött valójában egy elég sötét témájú szöveg húzódik meg.",
  },
  {
    id: 2,
    cim: "Szabadabb",
    eloado: "BalkanVIP",
    mufaj: "folk-psychedelic",
    kiadasEve: 2026,
    leiras: "A magyar rendszerváltást ünnepli a BalkanVIP zenekar 'Szabadabb' című dala, amely a szabadság és a változás iránti vágyat fejezi ki. A dal a balkáni zenei elemeket ötvözi a pszichedelikus hangzással, így egyedi és emlékezetes élményt nyújt.",
  },
  {
    id: 3,
    cim: "Toxic",
    eloado: "BoyWithUke",
    mufaj: "Indie Pop",
    kiadasEve: 2021,
    leiras: "Egy fülbemászó, ukulele alapú alternatív pop dal, amely a toxikus barátságokról és kapcsolatokról szól. A TikTokon robbant be, és az egész világon sláger lett.",
  },
  {
    id: 4,
    cim: "Bohemian Rhapsody",
    eloado: "Queen",
    mufaj: "Rock",
    kiadasEve: 1975,
    leiras: "Minden idők egyik leghíresebb és legkomplexebb rockdala, amely operai elemeket, balladákat és kőkemény rockot ötvöz egyetlen epikus műben.",
  },
  {
    id: 5,
    cim: "Lose Yourself",
    eloado: "Eminem",
    mufaj: "Hip-Hop",
    kiadasEve: 2002,
    leiras: "A 8 Mérföld című film betétdala, amely Oscar-díjat is nyert. A dal a motivációról, a kitartásról és a nagy lehetőségek megragadásáról szól.",
  },
  {
    id: 6,
    cim: "Master of Puppets",
    eloado: "Metallica",
    mufaj: "Metal",
    kiadasEve: 1986,
    leiras: "A thrash metal egyik alapköve. A gyors tempó, a bonyolult riffek és a sötét szövegvilág teszi a műfaj egyik legmeghatározóbb alkotásává.",
  },
  {
    id: 7,
    cim: "Time",
    eloado: "Hans Zimmer",
    mufaj: "Filmzene",
    kiadasEve: 2010,
    leiras: "Az Eredet (Inception) című film lenyűgöző zárótétele. Az egyszerű gitárdallamból fokozatosan felépülő, hatalmas zenekari katarzisig jutó mestermű.",
  },
  {
    id: 8,
    cim: "Blinding Lights",
    eloado: "The Weeknd",
    mufaj: "Pop",
    kiadasEve: 2019,
    leiras: "A 80-as évek szintipopját idéző sláger, amely hónapokon keresztül uralta a toplistákat, és a világ egyik legtöbbet streamelt dalává vált.",
  }
];