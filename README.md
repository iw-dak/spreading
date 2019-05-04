To run all containers, run :

```
make up
```
Front :

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

API URL :

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To see, front logs during development, run :

```
docker-compose run react yarn start
```

To stop all containers, run :

```
make down
```

To run rails command use with necessary parameters:
```
docker-compose run ruby rails <parameters>
```


To migrate database

```
make db-migrate
```

To reset database

```
make db-reset
```
