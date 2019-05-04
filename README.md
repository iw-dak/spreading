To run all containers, run :

```
make up
```

Access to front :

```
[http://localhost:7000](http://localhost:7000)
```

API URL :
```
[http://localhost:3000](http://localhost:3000)
```

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
