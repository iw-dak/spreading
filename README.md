# Installation

Run all containers

```
make up
```

Install all front dependencies

```
make finstall
```

Clean all front dependencies

```
make fclean
```

React App URL

[http://localhost:3000](http://localhost:3000)

API URL

[http://localhost:8000](http://localhost:8000)

To stop all containers

```
make down
```

# Others commands

To see **front** logs during development

```
make fstart
```

To build project when you change **Dockerfile**

```
make build
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
