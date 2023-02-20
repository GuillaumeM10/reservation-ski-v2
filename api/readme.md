# Instructions
You can import the file "Reservation Ski.postman_collection.json" in Postman to test the API.\
This file is not up to date.

# .ENV
Like it's a local project, you can use the .env.example file to create your .env file.\
here is the .env data:
```bash
MONGO_INITDB_ROOT_USERNAME=mongoroot
MONGO_INITDB_ROOT_PASSWORD=mongoroot
MONGO_INITDB_DATABASE=test
MONGO_PORT=27017
MONGO_HOST=localhost
PORT=8000
ACCESS_TOKEN_SECRET="secret"
```

# Start project (dev)
```bash
docker-compose up -d
npm run start:dev
```
# Clean docker
```bash
docker-compose down
// stop all containers
docker stop $(docker ps -a -q)
// remove all containers
docker rm $(docker ps -a -q)
// remove all images
docker rmi $(docker images -q)
// remove all volumes
docker volume rm $(docker volume ls -q)
```

(note: you can use the make file to run the commands)