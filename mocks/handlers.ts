import { graphql } from 'msw';

interface Variables {
  personID: number;
}

interface Person {
  id: string;
  name: string;
  height: number | null;
  birthYear: string;
  eyeColor: string;
  homeworld: { name: string };
}

interface GameRecord {
  record_id: number;
  record_date: string;
  game_mode: string;
  category: string;
  winner: string | null;
  loser: string | null;
}

interface AllPeopleResponse {
  allPeople: {
    people: Person[];
  };
}

interface PersonResponse {
  person: Person;
}

interface GameRecordsResponse {
  game_records: GameRecord[];
}

let count = 0;
export const handlers = [
  graphql.query<AllPeopleResponse, null>('getPeople', (req, res, ctx) => {
    return res(
      ctx.data({
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjE=',
              name: 'Luke Skywalker',
              height: 172,
              birthYear: '19BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjI=',
              name: 'C-3PO',
              height: 167,
              birthYear: '112BBY',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjM=',
              name: 'R2-D2',
              height: 96,
              birthYear: '33BBY',
              eyeColor: 'red',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjQ=',
              name: 'Darth Vader',
              height: 202,
              birthYear: '41.9BBY',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjU=',
              name: 'Leia Organa',
              height: 150,
              birthYear: '19BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Alderaan'
              }
            },
            {
              id: 'cGVvcGxlOjY=',
              name: 'Owen Lars',
              height: 178,
              birthYear: '52BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjc=',
              name: 'Beru Whitesun lars',
              height: 165,
              birthYear: '47BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjg=',
              name: 'R5-D4',
              height: 97,
              birthYear: 'unknown',
              eyeColor: 'red',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjk=',
              name: 'Biggs Darklighter',
              height: 183,
              birthYear: '24BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjEw',
              name: 'Obi-Wan Kenobi',
              height: 182,
              birthYear: '57BBY',
              eyeColor: 'blue-gray',
              homeworld: {
                name: 'Stewjon'
              }
            },
            {
              id: 'cGVvcGxlOjEx',
              name: 'Anakin Skywalker',
              height: 188,
              birthYear: '41.9BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjEy',
              name: 'Wilhuff Tarkin',
              height: 180,
              birthYear: '64BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Eriadu'
              }
            },
            {
              id: 'cGVvcGxlOjEz',
              name: 'Chewbacca',
              height: 228,
              birthYear: '200BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Kashyyyk'
              }
            },
            {
              id: 'cGVvcGxlOjE0',
              name: 'Han Solo',
              height: 180,
              birthYear: '29BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Corellia'
              }
            },
            {
              id: 'cGVvcGxlOjE1',
              name: 'Greedo',
              height: 173,
              birthYear: '44BBY',
              eyeColor: 'black',
              homeworld: {
                name: 'Rodia'
              }
            },
            {
              id: 'cGVvcGxlOjE2',
              name: 'Jabba Desilijic Tiure',
              height: 175,
              birthYear: '600BBY',
              eyeColor: 'orange',
              homeworld: {
                name: 'Nal Hutta'
              }
            },
            {
              id: 'cGVvcGxlOjE4',
              name: 'Wedge Antilles',
              height: 170,
              birthYear: '21BBY',
              eyeColor: 'hazel',
              homeworld: {
                name: 'Corellia'
              }
            },
            {
              id: 'cGVvcGxlOjE5',
              name: 'Jek Tono Porkins',
              height: 180,
              birthYear: 'unknown',
              eyeColor: 'blue',
              homeworld: {
                name: 'Bestine IV'
              }
            },
            {
              id: 'cGVvcGxlOjIw',
              name: 'Yoda',
              height: 66,
              birthYear: '896BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'unknown'
              }
            },
            {
              id: 'cGVvcGxlOjIx',
              name: 'Palpatine',
              height: 170,
              birthYear: '82BBY',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjIy',
              name: 'Boba Fett',
              height: 183,
              birthYear: '31.5BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Kamino'
              }
            },
            {
              id: 'cGVvcGxlOjIz',
              name: 'IG-88',
              height: 200,
              birthYear: '15BBY',
              eyeColor: 'red',
              homeworld: {
                name: 'unknown'
              }
            },
            {
              id: 'cGVvcGxlOjI0',
              name: 'Bossk',
              height: 197,
              birthYear: '53BBY',
              eyeColor: 'red',
              homeworld: {
                name: 'Trandosha'
              }
            },
            {
              id: 'cGVvcGxlOjI1',
              name: 'Lando Calrissian',
              height: 177,
              birthYear: '31BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Socorro'
              }
            },
            {
              id: 'cGVvcGxlOjI2',
              name: 'Lobot',
              height: 175,
              birthYear: '37BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Bespin'
              }
            },
            {
              id: 'cGVvcGxlOjI3',
              name: 'Ackbar',
              height: 180,
              birthYear: '41BBY',
              eyeColor: 'orange',
              homeworld: {
                name: 'Mon Cala'
              }
            },
            {
              id: 'cGVvcGxlOjI4',
              name: 'Mon Mothma',
              height: 150,
              birthYear: '48BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Chandrila'
              }
            },
            {
              id: 'cGVvcGxlOjI5',
              name: 'Arvel Crynyd',
              height: null,
              birthYear: 'unknown',
              eyeColor: 'brown',
              homeworld: {
                name: 'unknown'
              }
            },
            {
              id: 'cGVvcGxlOjMw',
              name: 'Wicket Systri Warrick',
              height: 88,
              birthYear: '8BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Endor'
              }
            },
            {
              id: 'cGVvcGxlOjMx',
              name: 'Nien Nunb',
              height: 160,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Sullust'
              }
            },
            {
              id: 'cGVvcGxlOjMy',
              name: 'Qui-Gon Jinn',
              height: 193,
              birthYear: '92BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'unknown'
              }
            },
            {
              id: 'cGVvcGxlOjMz',
              name: 'Nute Gunray',
              height: 191,
              birthYear: 'unknown',
              eyeColor: 'red',
              homeworld: {
                name: 'Cato Neimoidia'
              }
            },
            {
              id: 'cGVvcGxlOjM0',
              name: 'Finis Valorum',
              height: 170,
              birthYear: '91BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Coruscant'
              }
            },
            {
              id: 'cGVvcGxlOjM1',
              name: 'Padmé Amidala',
              height: 185,
              birthYear: '46BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjM2',
              name: 'Jar Jar Binks',
              height: 196,
              birthYear: '52BBY',
              eyeColor: 'orange',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjM3',
              name: 'Roos Tarpals',
              height: 224,
              birthYear: 'unknown',
              eyeColor: 'orange',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjM4',
              name: 'Rugor Nass',
              height: 206,
              birthYear: 'unknown',
              eyeColor: 'orange',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjM5',
              name: 'Ric Olié',
              height: 183,
              birthYear: 'unknown',
              eyeColor: 'blue',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjQw',
              name: 'Watto',
              height: 137,
              birthYear: 'unknown',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Toydaria'
              }
            },
            {
              id: 'cGVvcGxlOjQx',
              name: 'Sebulba',
              height: 112,
              birthYear: 'unknown',
              eyeColor: 'orange',
              homeworld: {
                name: 'Malastare'
              }
            },
            {
              id: 'cGVvcGxlOjQy',
              name: 'Quarsh Panaka',
              height: 183,
              birthYear: '62BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjQz',
              name: 'Shmi Skywalker',
              height: 163,
              birthYear: '72BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjQ0',
              name: 'Darth Maul',
              height: 175,
              birthYear: '54BBY',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Dathomir'
              }
            },
            {
              id: 'cGVvcGxlOjQ1',
              name: 'Bib Fortuna',
              height: 180,
              birthYear: 'unknown',
              eyeColor: 'pink',
              homeworld: {
                name: 'Ryloth'
              }
            },
            {
              id: 'cGVvcGxlOjQ2',
              name: 'Ayla Secura',
              height: 178,
              birthYear: '48BBY',
              eyeColor: 'hazel',
              homeworld: {
                name: 'Ryloth'
              }
            },
            {
              id: 'cGVvcGxlOjQ3',
              name: 'Ratts Tyerel',
              height: 79,
              birthYear: 'unknown',
              eyeColor: 'unknown',
              homeworld: {
                name: 'Aleen Minor'
              }
            },
            {
              id: 'cGVvcGxlOjQ4',
              name: 'Dud Bolt',
              height: 94,
              birthYear: 'unknown',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Vulpter'
              }
            },
            {
              id: 'cGVvcGxlOjQ5',
              name: 'Gasgano',
              height: 122,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Troiken'
              }
            },
            {
              id: 'cGVvcGxlOjUw',
              name: 'Ben Quadinaros',
              height: 163,
              birthYear: 'unknown',
              eyeColor: 'orange',
              homeworld: {
                name: 'Tund'
              }
            },
            {
              id: 'cGVvcGxlOjUx',
              name: 'Mace Windu',
              height: 188,
              birthYear: '72BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Haruun Kal'
              }
            },
            {
              id: 'cGVvcGxlOjUy',
              name: 'Ki-Adi-Mundi',
              height: 198,
              birthYear: '92BBY',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Cerea'
              }
            },
            {
              id: 'cGVvcGxlOjUz',
              name: 'Kit Fisto',
              height: 196,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Glee Anselm'
              }
            },
            {
              id: 'cGVvcGxlOjU0',
              name: 'Eeth Koth',
              height: 171,
              birthYear: 'unknown',
              eyeColor: 'brown',
              homeworld: {
                name: 'Iridonia'
              }
            },
            {
              id: 'cGVvcGxlOjU1',
              name: 'Adi Gallia',
              height: 184,
              birthYear: 'unknown',
              eyeColor: 'blue',
              homeworld: {
                name: 'Coruscant'
              }
            },
            {
              id: 'cGVvcGxlOjU2',
              name: 'Saesee Tiin',
              height: 188,
              birthYear: 'unknown',
              eyeColor: 'orange',
              homeworld: {
                name: 'Iktotch'
              }
            },
            {
              id: 'cGVvcGxlOjU3',
              name: 'Yarael Poof',
              height: 264,
              birthYear: 'unknown',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Quermia'
              }
            },
            {
              id: 'cGVvcGxlOjU4',
              name: 'Plo Koon',
              height: 188,
              birthYear: '22BBY',
              eyeColor: 'black',
              homeworld: {
                name: 'Dorin'
              }
            },
            {
              id: 'cGVvcGxlOjU5',
              name: 'Mas Amedda',
              height: 196,
              birthYear: 'unknown',
              eyeColor: 'blue',
              homeworld: {
                name: 'Champala'
              }
            },
            {
              id: 'cGVvcGxlOjYw',
              name: 'Gregar Typho',
              height: 185,
              birthYear: 'unknown',
              eyeColor: 'brown',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjYx',
              name: 'Cordé',
              height: 157,
              birthYear: 'unknown',
              eyeColor: 'brown',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjYy',
              name: 'Cliegg Lars',
              height: 183,
              birthYear: '82BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Tatooine'
              }
            },
            {
              id: 'cGVvcGxlOjYz',
              name: 'Poggle the Lesser',
              height: 183,
              birthYear: 'unknown',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Geonosis'
              }
            },
            {
              id: 'cGVvcGxlOjY0',
              name: 'Luminara Unduli',
              height: 170,
              birthYear: '58BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Mirial'
              }
            },
            {
              id: 'cGVvcGxlOjY1',
              name: 'Barriss Offee',
              height: 166,
              birthYear: '40BBY',
              eyeColor: 'blue',
              homeworld: {
                name: 'Mirial'
              }
            },
            {
              id: 'cGVvcGxlOjY2',
              name: 'Dormé',
              height: 165,
              birthYear: 'unknown',
              eyeColor: 'brown',
              homeworld: {
                name: 'Naboo'
              }
            },
            {
              id: 'cGVvcGxlOjY3',
              name: 'Dooku',
              height: 193,
              birthYear: '102BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Serenno'
              }
            },
            {
              id: 'cGVvcGxlOjY4',
              name: 'Bail Prestor Organa',
              height: 191,
              birthYear: '67BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Alderaan'
              }
            },
            {
              id: 'cGVvcGxlOjY5',
              name: 'Jango Fett',
              height: 183,
              birthYear: '66BBY',
              eyeColor: 'brown',
              homeworld: {
                name: 'Concord Dawn'
              }
            },
            {
              id: 'cGVvcGxlOjcw',
              name: 'Zam Wesell',
              height: 168,
              birthYear: 'unknown',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Zolan'
              }
            },
            {
              id: 'cGVvcGxlOjcx',
              name: 'Dexter Jettster',
              height: 198,
              birthYear: 'unknown',
              eyeColor: 'yellow',
              homeworld: {
                name: 'Ojom'
              }
            },
            {
              id: 'cGVvcGxlOjcy',
              name: 'Lama Su',
              height: 229,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Kamino'
              }
            },
            {
              id: 'cGVvcGxlOjcz',
              name: 'Taun We',
              height: 213,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Kamino'
              }
            },
            {
              id: 'cGVvcGxlOjc0',
              name: 'Jocasta Nu',
              height: 167,
              birthYear: 'unknown',
              eyeColor: 'blue',
              homeworld: {
                name: 'Coruscant'
              }
            },
            {
              id: 'cGVvcGxlOjc1',
              name: 'R4-P17',
              height: 96,
              birthYear: 'unknown',
              eyeColor: 'red, blue',
              homeworld: {
                name: 'unknown'
              }
            },
            {
              id: 'cGVvcGxlOjc2',
              name: 'Wat Tambor',
              height: 193,
              birthYear: 'unknown',
              eyeColor: 'unknown',
              homeworld: {
                name: 'Skako'
              }
            },
            {
              id: 'cGVvcGxlOjc3',
              name: 'San Hill',
              height: 191,
              birthYear: 'unknown',
              eyeColor: 'gold',
              homeworld: {
                name: 'Muunilinst'
              }
            },
            {
              id: 'cGVvcGxlOjc4',
              name: 'Shaak Ti',
              height: 178,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Shili'
              }
            },
            {
              id: 'cGVvcGxlOjc5',
              name: 'Grievous',
              height: 216,
              birthYear: 'unknown',
              eyeColor: 'green, yellow',
              homeworld: {
                name: 'Kalee'
              }
            },
            {
              id: 'cGVvcGxlOjgw',
              name: 'Tarfful',
              height: 234,
              birthYear: 'unknown',
              eyeColor: 'blue',
              homeworld: {
                name: 'Kashyyyk'
              }
            },
            {
              id: 'cGVvcGxlOjgx',
              name: 'Raymus Antilles',
              height: 188,
              birthYear: 'unknown',
              eyeColor: 'brown',
              homeworld: {
                name: 'Alderaan'
              }
            },
            {
              id: 'cGVvcGxlOjgy',
              name: 'Sly Moore',
              height: 178,
              birthYear: 'unknown',
              eyeColor: 'white',
              homeworld: {
                name: 'Umbara'
              }
            },
            {
              id: 'cGVvcGxlOjgz',
              name: 'Tion Medon',
              height: 206,
              birthYear: 'unknown',
              eyeColor: 'black',
              homeworld: {
                name: 'Utapau'
              }
            }
          ]
        }
      })
    );
  }),
  graphql.query<PersonResponse, Variables>('getPerson', (req, res, ctx) => {
    const dataArr = [
      {
        person: {
          id: 'cGVvcGxlOjI=',
          name: 'C-3PO',
          height: 167,
          birthYear: '112BBY',
          eyeColor: 'yellow',
          homeworld: {
            name: 'Tatooine'
          }
        }
      },
      {
        person: {
          id: 'cGVvcGxlOjU=',
          name: 'Leia Organa',
          height: 150,
          birthYear: '19BBY',
          eyeColor: 'brown',
          homeworld: {
            name: 'Alderaan'
          }
        }
      },
      {
        person: {
          id: 'cGVvcGxlOjY=',
          name: 'Owen Lars',
          height: 178,
          birthYear: '52BBY',
          eyeColor: 'blue',
          homeworld: {
            name: 'Tatooine'
          }
        }
      },
      {
        person: {
          id: 'cGVvcGxlOjk=',
          name: 'Biggs Darklighter',
          height: 183,
          birthYear: '24BBY',
          eyeColor: 'brown',
          homeworld: {
            name: 'Tatooine'
          }
        }
      },
      {
        person: {
          id: 'cGVvcGxlOjI0',
          name: 'Bossk',
          height: 999,
          birthYear: '53BBY',
          eyeColor: 'red',
          homeworld: {
            name: 'Trandosha'
          }
        }
      },
      {
        person: {
          id: 'cGVvcGxlOjI3',
          name: 'Ackbar',
          height: 777,
          birthYear: '41BBY',
          eyeColor: 'orange',
          homeworld: {
            name: 'Mon Cala'
          }
        }
      }
    ];

    const dataToSend = dataArr[count];
    count += 1;
    if (count === dataArr.length) count = 0;
    return res(ctx.data(dataToSend));
  }),
  graphql.query<GameRecordsResponse, null>('gameRecords', (req, res, ctx) => {
    return res(
      ctx.data({
        game_records: [
          {
            record_id: 137,
            record_date: '2021-02-17T22:34:08.995474+00:00',
            game_mode: 'Two Players',
            category: 'People',
            winner: 'Jedi Player 1',
            loser: 'Jedi Player 2'
          },
          {
            record_id: 136,
            record_date: '2021-02-17T22:34:08.948477+00:00',
            game_mode: 'Single Player',
            category: 'People',
            winner: 'Darth Vader',
            loser: 'Jedi Player 1'
          }
        ]
      })
    );
  })
];
