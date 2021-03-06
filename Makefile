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
fstart:
	docker-compose run react yarn start
finstall:
	docker-compose run react yarn install
fbuild:
	docker-compose run react yarn build
fclean:
	rm -rf front/node_modules front/yarn.lock front/yarn-error.log
db-seed:
	docker-compose run ruby rails db:seed
db-drop:
	docker-compose run ruby rails db:drop
db-reload:
	 docker-compose run ruby rails db:drop && docker-compose run ruby rails db:create && docker-compose run ruby rails db:migrate && docker-compose run ruby rails db:seed
db-create:
	docker-compose run ruby rails db:create

#bundler
bdl-up:
	docker-compose run ruby bundle install
bdl-update:
	docker-compose run ruby bundle update
