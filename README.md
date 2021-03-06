# Installation
- Run/build all containers `make build`
- Install api database `make db-migrate`
- [Optional] Populate database `make db-seed`
- Install front dependencies `make finstall`
- Launch react app front server `make fstart`

## Add a new gem
1. Add following to Gemfile `gem '<ge-package-name>'`
2. Run this command : `docker-compose run ruby bundle install`

## Applications access
- API URL [http://localhost:8000](http://localhost:8000)
- React App URL [http://localhost:3000](http://localhost:3000)
- PHPMyAdmin [http://localhost:9000](http://localhost:9000)

## Database password
- user `user` or `root`
- password `password` or `root`

For more informations see `docker-compose.yml`

# Adding new packages to the project with yarn
docker-compose run react yarn add package_name

# Useful commands
- Launch all containers if you have already installed application `make up`
- If error occur, clean all front dependencies `make fclean`
- To see **front** logs during development `make fstart`
- To enter into **api** containers `make enter`
- To build project when you change **Dockerfile** `make build`
- To stop all containers `make down`
- To run rails command use with necessary parameters `docker-compose run ruby rails <parameters>`
- To create new model serializer  `docker-compose run ruby rails g serializer <entity-name>`
- To migrate database `make db-migrate`
- To reset database `make db-reset`
- To run seeds `make db-seed`
- To destroy database `make db-drop`
- To install project gems `make bdl-up`
- To update gems `make bdl-update`

# Useful links
- [Faker](https://github.com/stympy/faker)
- [Présentation](https://docs.google.com/presentation/d/1EdJ9RuN295nIDB6EZX5bQ_jPawAIPYZnDys8b_dM2do/edit?usp=drive_web&ouid=108341744930756447103)
