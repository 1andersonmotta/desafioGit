## How to run
 
1. Run command for create database postgres: docker-compose up  

----

## Dependencies

1. Docker
2. Node version 16.13.1

----

## End Points

1. First Load Git Repository with method POST:  `http://localhost:3000/repositories/load`
2. Load all Git Repository with method GET:  `http://localhost:3000/repositories`
3. Query details with id value in parameter with GET method: `http://localhost:3000/repositories/details/:id`
4. Favorite/Unfavorite with id value and POST method: `http://localhost:3000/repositories/favorite/:id`
5. See your Favorites with GET method: `http://localhost:3000/repositories/favorite`

----

