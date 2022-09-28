# Binar Challenge Chapter 7

Creating a fullstack game website application "janken game". In this chapter 7, we implemented the MVC architecture and made the game available for multiplayer (still limited and WIP).

### Stack :

- Javascript
- Node JS (Express JS)
- EJS View Engine
- Bcrypt
- Passport auth
- JWT
- Sequelize
- Postgres

### How to use :

Requirement to install :
-Sequelize-cli
-gitYarn
-Database Postgres created

- <code>yarn</code>
- <code>sequelize db:migrate</code>
- <code>sequelize db:seed:all</code>
- <code>yarn start</code>
- Login as admin to access admin dashboard
  - Username : admin
  - Password : admin

### Nodes/Path

### API

- Get all users : GET <code>/api/v1/users</code>
- Get selected user : GET <code>/api/v1/user/:id</code>
- Create user : POST <code>/api/v1/auth/register</code>
- Edit a user : PUT <code>/api/v1/user/edit/:id</code>
- Delete a user : DELETE <code>/api/v1/user/delete/:id</code>

#### User Table (User, Biodata, History)

### Task List

- [x] Design Pattern MVC & MCR
- [ ] Implement the passport authetication (at least, someone can login)
- [ ] Implement the JWT strategy
- [ ] Create room feature :weary:
- [ ] Connect profile table to database
- [ ] Connect game history table to database
- [ ] Multiplayer feature (not sure if this feature will come online, probably 5 years later :sad:)

### Old Bug Fixing

- [ ] Fixing bug cannot redirect when login
- [ ] Fixing bug where user can click the janken button again even if it's already selected
- [ ] Fixing routers that can't be shown
- [ ] Add EJS title, make it cleaner
- [ ] other bugs will come for sure~ :tada:
