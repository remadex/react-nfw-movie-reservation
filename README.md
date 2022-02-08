# Installation du projet

```bash
mkdir project-movie
cd project-movie
npx degit https://github.com/remadex/movie_project.git .
```

## Mise en place du docker

```bash
cd db-docker
docker-compose up
```

## Mise en place du back

```bash
cd back
yarn
yarn start:dev
```

## Mise en place du front

```bash
cd front
yarn
yarn dev
```
