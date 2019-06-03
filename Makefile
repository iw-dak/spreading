up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
db-migrate:
	docker-compose run ruby rails db:migrate
db-reset:
	docker-compose run ruby rails db:reset
front:
	docker-compose run react yarn start
