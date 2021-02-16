import { graphql } from 'msw';

interface Variables {
  personID: number;
}

interface Person {
  id: string;
  name: string;
  height: number;
  birthYear: string;
  eyeColor: string;
  homeworld: { name: string };
}

interface Response {
  person: Person;
}

export const handlers = [
  graphql.query<Response, Variables>('person', (req, res, ctx) => {
    const { personID } = req.variables;
    return res(
      ctx.data({
        person: {
          id: 'abc',
          name: 'Kickass',
          height: 172,
          birthYear: '19XX',
          eyeColor: 'brown',
          homeworld: {
            name: 'Earth'
          }
        }
      })
    );
  })
];
