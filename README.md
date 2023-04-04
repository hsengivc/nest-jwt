## **Authentication Service with NestJS and PostgreSQL**

This is a simple authentication service that provides sign up, sign in, and logout functionalities. It uses NestJS, a powerful Node.js framework, and PostgreSQL, a popular open-source relational database. The service provides a secure way to authenticate users and manage their sessions.

**Requirements**

To run this authentication service, you will need the following installed on your machine:

- Node.js (v18.15.0 LTS or later)
- yarn (v1.22.19 or later)
- PostgreSQL (v12 or later)

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
