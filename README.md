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

### Nodes

### API

- Get all users : GET <code>/api/v1/users</code>
- Get selected user : GET <code>/api/v1/user/:id</code>
- Create user : POST <code>/api/v1/auth/register</code>
- Edit a user : PUT <code>/api/v1/user/edit/:id</code>
- Delete a user : DELETE <code>/api/v1/user/delete/:id</code>

#### User Table (User, Biodata, History)

### Task List

- [x] Design Pattern MVC
- [ ] Implement the passport authetication
- [ ] Implement the JWT
- [ ] Add profile table for users
- [ ] Add game history table for users
- [ ] Make the create room feature
- [ ] Multiplayer feature
- [ ] Fixing bug cannot redirect when login
- [ ] Fixing bug where user can click the janken button again even if it's already selected
- [ ] Fixing routers that can't be shown
- [ ] Fixing EJS especially the title
- [ ] other fixing :tada:
