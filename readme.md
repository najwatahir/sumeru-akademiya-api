# Sumeru Akademiya API 🤓🏫🌴

Sumeru Akademiya API is a simple Express project using Prisma, providing endpoints to manage students, darshans (faculty) and users.

## Problem 🧐

The Sumeru Akademiya case problem involves managing student data for an academy. The API provides CRUD operations for student entities. Refer to the API documentation for detailed information on each endpoint and their use cases.

## Table of Contents 🧾

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features 📐

- CRUD operations for students
- User authentication with JWT
- Hashed password storage using bcrypt
- Prisma ORM for database interaction

## Requirements 📃

- Node.js (v14 or higher)
- npm or yarn
- SQLite database
- ORM Prisma
- ExpressJS

## Installation 📥

1. Clone the repository:

   ```bash
   git clone https://github.com/najwatahir/sumeru-akademiya-api.git
   ```

2. Navigate to project directory

`cd sumeru-akademiya-api`

3. Install depedencies
   `npm install`

4. Run Database migrations

```npx prisma migrate dev```

5. Start the server
   `npm run dev`

## Configuration 📭

Update the .env file with your database connection URL, JWT secret, and any other configuration variables.

```DATABASE_URL="postgresql://username:password@localhost:5432/sumeru_akademiya"
JWT_SECRET="your_jwt_secret_key"
```

## Usage 🖊

Access the API at http://localhost:3000 or the specified port in your .env file.

You can use tools like Postman or curl to interact with the API.

## API Endpoints 🔐

GET /students: Retrieve all students.
GET /students/:id: Retrieve a specific student by ID.
POST /students: Create a new student.
PUT /students/:id: Update a student by ID.
DELETE /students/:id: Delete a student by ID.
POST /login: Authenticate and obtain a JWT token.

## Contribution 🗞

Feel free to contribute by opening issues or creating pull requests. Follow the contribution guidelines for more information.

## License 🔖

Make sure to replace placeholders like `yourusername`, `username:password@localhost:5432/sumeru_akademiya`, and `"your_jwt_secret_key"` with your actual details.

## API documentation 📓

visit this link to see the documentation on postman: https://documenter.getpostman.com/view/29807114/2s9YXk52Ug
