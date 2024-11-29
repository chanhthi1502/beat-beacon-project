## INSTRUCTION FOR BACKEND
### Build modules
`yarn install`

### Run the server in  the local. (ts-node-dev allows watching the changes and reload)
> This is beneficial if only cares for backend code and not involve with database
`yarn run dev`

---

## READY TO DEPLOY (WITHOUT DOCKER CONTAINERS)
### Build the production
`yarn build`
### Start the production
`yarn start`

---

## RUN THE APP WITH DOCKER CONTAINER
`yarn docker-up` to build docker image and containers
`yarn docker-down` to bring stop containers

---

# Using PgAdmin 4
Register a new Server with these information below (It can be change if docker-compose.yml is different, check that file instead for latest information)
- Name: BeatBeaconProject
- Hostname/address: postgres 
> If using pgadmin outside of docker (in WSL 2 Linux distro), then Hostname is localhost as PostgreSQL container is exposed to your machine via port 5432, which is localhost
- Port: 5432
- Maintenance database: postgres
- Username: postgres
- Password: postgres