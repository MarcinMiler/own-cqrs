dev-dockerfile := -f docker-compose.dev.yml
prod-dockerfile := -f docker-compose.prod.yml

build-dev:
	docker-compose $(dev-dockerfile) build
	$(MAKE) dev

dev:
	docker-compose $(dev-dockerfile) up $(variadic_args)

build-prod:
	docker-compose $(prod-dockerfile) build
	$(MAKE) prod

prod:
	docker-compose $(prod-dockerfile) up -d