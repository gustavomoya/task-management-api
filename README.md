# Task Management API

A RESTful task management API built with **NestJS**, **TypeScript**, **TypeORM**, and **MySQL**.

This project is being developed as a backend portfolio project to demonstrate clean architecture, REST API design, database management, validation, authentication, testing, and modern backend development practices.

## Tech Stack

* **Node.js**
* **NestJS**
* **TypeScript**
* **TypeORM**
* **MySQL**
* **class-validator**
* **class-transformer**
* **bcrypt**
* **Vitest**
* **Swagger** *(planned)*
* **Docker** *(planned)*

## Features

### Current

* User registration
* Request validation
* Password hashing with bcrypt
* Duplicate email validation
* MySQL database integration
* TypeORM entities and migrations
* Environment-based database configuration

### Planned

* JWT authentication
* Passport authentication strategies
* Protected routes
* Project management
* Project members and roles
* Task management
* Comments
* Pagination and filtering
* Swagger/OpenAPI documentation
* Unit and integration tests
* Docker support
* CI/CD

## Project Structure

```text
src/
├── database/
│   ├── data-source.ts
│   └── migrations/
│
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── user-response.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
│
├── app.module.ts
└── main.ts
```

## Database

The application currently uses MySQL and TypeORM migrations.

The initial database model includes:

```text
users
```

The project will progressively introduce:

```text
users
   │
   ├── projects
   │
   ├── project_members
   │
   ├── tasks
   │
   └── comments
```

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MySQL

### Clone the repository

```bash
git clone https://github.com/gustavomoya/task-management-api.git

cd task-management-api
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=task_management
PORT=3000
```

Do not commit your `.env` file.

A `.env.example` file can be used as a template:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=task_management
PORT=3000
```

### Database

Create the database in MySQL:

```sql
CREATE DATABASE task_management;
```

Run the TypeORM migrations:

```bash
npm run migration:run
```

### Start the application

Development:

```bash
npm run start:dev
```

Production:

```bash
npm run build
npm run start:prod
```

The API will be available at:

```text
http://localhost:3000
```

## API

### Register User

```http
POST /users
```

Request:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "Password123"
}
```

Response:

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "isActive": true
}
```

Passwords are never stored in plain text. They are hashed using **bcrypt** before being persisted.

## Validation

The API uses NestJS `ValidationPipe` together with `class-validator` and `class-transformer`.

Example validation rules include:

* First name: 2–150 characters
* Last name: 2–150 characters
* Valid email format
* Password: 8–100 characters
* Unknown properties are rejected

## Database Migrations

Database schema changes are managed using TypeORM migrations.

Typical commands:

```bash
npm run migration:generate
npm run migration:run
npm run migration:revert
```

> Migration commands may vary depending on the project's configured npm scripts.

## Testing

Tests are implemented using **Vitest**.

Run the test suite:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

Coverage:

```bash
npm run test:cov
```

## Architecture

The application follows NestJS's modular architecture:

```text
Controller
    │
    ▼
Service
    │
    ▼
Repository
    │
    ▼
MySQL
```

Responsibilities are separated between:

* **Controllers** — HTTP requests and responses
* **DTOs** — request validation and data contracts
* **Services** — business logic
* **Entities** — database models
* **Repositories** — database access
* **Modules** — feature organization and dependency management

## Goals

This project focuses on demonstrating practical backend development skills, including:

* RESTful API design
* Clean separation of responsibilities
* Dependency injection
* Database modeling
* ORM usage
* Database migrations
* Authentication and authorization
* Input validation
* Error handling
* Automated testing
* API documentation
* Containerization

## License

This project is for educational and portfolio purposes.
