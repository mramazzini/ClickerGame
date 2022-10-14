const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Clicker Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};
  
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`Port initiated. Now listening at ${PORT}!`);
    });
  });