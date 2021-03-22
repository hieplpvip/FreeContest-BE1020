# BE1020 - Backend Entry Task 2

### Install dependencies

```
npm install
```

### Start server

```
npm start
```

By default, server runs on port 5000.

### Usage

- Get current timestamp:

```shell
curl -X GET "localhost:5000/timestamp"
```

- Create a user:

```shell
curl -H "Content-Type: application/json" \
     -d '{"username":"hieplpvip","displayed_name":"Le Bao Hiep","password":"123456"}' \
     -X POST "localhost:5000/registrations"
```

- Create another user:

```shell
curl -H "Content-Type: application/json" \
     -d '{"username":"mbfibat","displayed_name":"Nguyen Quang Long","password":"abcdef"}' \
     -X POST "localhost:5000/registrations"
```

- Get all users:

```shell
curl -X GET "localhost:5000/registrations"
```
