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
flogs:
	docker-compose run react yarn start
finstall:
	docker-compose run react yarn install
fclean:
	rm -rf front/node_modules yarn.lock
