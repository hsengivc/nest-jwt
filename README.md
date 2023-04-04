## **Authentication Service with NestJS and PostgreSQL**

This is a simple authentication service that provides sign up, sign in, and logout functionalities. It uses NestJS, a powerful Node.js framework, and PostgreSQL, a popular open-source relational database. The service provides a secure way to authenticate users and manage their sessions.

**Requirements**

To run this authentication service, you will need the following installed on your machine:

- Node.js (v18.15.0 LTS or later)
- yarn (v1.22.19 or later)
- PostgreSQL (v12 or later)
- Docker Desktop

Installation

Clone the repository:

```markdown
git clone https://github.com/hsengivc/nest-jwt.git
```

Install the dependencies:

```markdown
cd nest-jwt
yarn install
```

Rename .env.copy file to .env and update the necessary keys and credentials

Run the Docker compose

```markdown
docker compose up
```

Prisma migration and DB push

```markdown
npx prisma migrate dev --create-only

npx prisma db push
```

View the database using Prisma Studio

```markdown
npx prisma studio
```

Start the application

```markdown
yarn start
```

API Endpoints

POST /auth/v1/signup
<br />
Creates a new user account.

Request body:
```json
{
    "email": "email@email.com",
    "password": "password123"
}
```

Response body:
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIi..."
}
```

POST /auth/v1/signin
<br />
Authenticates a user and creates a new session.

Request body:
```json
{
    "email": "email@email.com",
    "password": "password123"
}
```

Response body:
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIi..."
}
```

POST /auth/v1/logout
<br />
Revokes the current user's session.

Request body:
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIi..."
}
```

Response body:
```json
{
    "message": "Session revoked"
}
```

POST /auth/v1/refresh
<br />
Refresh the current user's session.

Request body:
```json
{
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIi..."
}
```

Response body:
```json
{
    "message": "Session revoked"
}
```
Future updates:
- Logger
- Dockerizing
- Unit test
