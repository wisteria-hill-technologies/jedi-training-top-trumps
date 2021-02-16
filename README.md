# Jedi Training - Star Wars Top Trumps Game
You can have a look at the app by visiting https://jedi-training-top-trumps.vercel.app/

## What is it?
Simple Star Wars Top Trumps game

• The user can choose to play with either people or starships.

• The app makes a GraphQL query to fetch two random resources
of that type (people/starships).

• If the player has chosen people the app compares height else if
they have chosen starship it compares hyperdrive_rating.

• The two resources are then rendered on the screen as “cards” with
some of their attributes displayed and the resource with the highest
value for that attribute declared the winner.

• The user should then be able to play again using a button that re-
peats the same request.

• The user should also be able to go to a route which displays the
history of the results.

Extras

• Add functionality to enable more than two players.

• Deploy two applications with different colour themes.

## Basic Wireframe/UI Flow
![alt ui-flow](https://user-images.githubusercontent.com/7132281/107884849-07152f00-6eef-11eb-9f13-9e59452db89d.png)

## Tech Stack
## Frontend

- Typescript

- React

- GraphQL with Apollo

- Styled Components

- Styled System

- Nextjs
  
- Routing (Nextjs)

- Function components with hooks (React)

- Real time Update in Game History Page (taking advantage of Hasura GraphQL subscription and apollo client)

## Backend
- Hasura GraphQL Server
  Hasura GraphQL acts as a gateway graphQL api for the below:
  - SWAPI endpoint `https://swapi-graphql.netlify.app/.netlify/functions/index`
  - PostgreSQL Database
    
- PostgreSQL Database
    
    This is to store Game Records.

    ```sql
    create type game_mode as enum ('Single Player', 'Two Players');
    create type category as enum ('People', 'Starships');
    
    create table game_records(
        record_id serial primary key,
        record_date timestamptz not null default current_timestamp,
        game_mode game_mode not null,
        category category not null,
        winner varchar(20) not null default '',
        loser varchar(20) not null default ''
    );
    ```

## Project Management
### Github Repo and Project (Kanban Board)
Repo: https://github.com/nfabacus/jedi-training-top-trumps

Project: Includes all the tasks tracked and done for this project.
https://github.com/nfabacus/jedi-training-top-trumps/projects/1

## Deployments
Deployed App (Color Theme 1): ```https://jedi-training-top-trumps.vercel.app/```

Deployed App (Color Theme 2): ```https://jedi-training-top-trumps.nobyfujioka.vercel.app/```

- Front end app is hosted on Vercel.
- Hasura is hosted on Heroku.

## To Run the App Locally

1. Git clone this repository.
2. Then, in the project root folder, run the below in the terminal:
```bash
yarn run dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests
```bash
```bash
yarn run test
```
ToDo: Some tests are skipped as they broke when subscription was introduced to the app.  These to be fixed.
