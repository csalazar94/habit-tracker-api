app\:run:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env up -d --build

app\:clean:
	rm -rf node_modules

app\:down:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env down

app\:logs:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env logs -f api

app\:sh:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env exec api sh

db\:logs:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env logs -f db

db\:reset:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env exec api npx prisma migrate reset

db\:studio:
	docker-compose -f docker/docker-compose.yml --project-directory . --env-file ./.env exec api npx prisma studio
