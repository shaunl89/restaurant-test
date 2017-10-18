# 2359 Restaurant

## Getting Started

This project is built on Node.js with Express framework and Yarn package manager with a Model-View-Controller(MVC) architecture with PostgreSQL and Sequelize.

To install the dependencies, run ``yarn install``.

To run migrations:

```
yarn global add sequelize-cli
sequelize init
sequelize db:migrate
```

Database configuration can be found in ``/config/config.json``.
```
{
  "development": {
    "username": "shaun",
    "password": null,
    "database": "2359restaurant_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "shaun",
    "password": null,
    "database": "2359restaurant_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "shaun",
    "password": null,
    "database": "2359restaurant_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

``yarn start`` to run the project on localhost.

## ERD
Project ERD is as follows,

![](/readme_images/ERD.png)

## Admin CMS
The CMS can be found in the URI http://localhost:3000/admin which would include the CRUD functionality for the admin user while displaying all dishes and their information below.

Sample data can be added into the database through the create function in the CMS.

## Customers API
There are 3 Customer API Endpoints:

1) Register a customer `POST localhost:3000/api/customer`

Sample Request:
```
{
	"name": "John",
	"tableNumber": 2,
	"pax": 4
}
```

2) View Restaurant Dishes ``GET localhost:3000/api/customer/dish``

3) Make an Order ``POST localhost:3000/api/order``

Sample Request:
```
{
	"customerId": 1,
	"dishes": [
		{
			"id": 1,
			"portions": 1
		},
		{
			"id": 8,
			"portions": 2
		}
	]
}
```

![](/readme_images/postman.png)

## Chefs API

There is only 1 Chef Endpoint:

To get the next dish: ``GET localhost:3000/api/chef/dish``
