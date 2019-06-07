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

To run seeds

```
make db-seed
```

To destroy database
```
make db-drop
```
To install project gems
````
make bdl-up
```

To update gems
````

make bdl-update

To add a new gem :

1. Add following to Gemfile
```
gem '<ge-package-name>'
```

2. Run this command:
```
docker-compose run ruby bundle install
```
