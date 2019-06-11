#docker
up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
enter:
	docker-compose run ruby bash

#database
db-migrate:
	docker-compose run ruby rails db:migrate
db-reset:
	docker-compose run ruby rails db:reset
db-seed:
	docker-compose run ruby rails db:seed
db-drop:
	docker-compose run ruby rails db:drop

#bundler
bdl-up:
	docker-compose run ruby bundle install
bdl-update:
	docker-compose run ruby bundle update
