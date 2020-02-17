const container = require('./app/src/startup/container');
const server = container.resolve('App');
const config = container.resolve('Config');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose
    .connect(config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    })
    .then(() => {
      console.log('**** Conexión a base de datos exitosa'.success);
      server.start();
    })
    .catch(err => {
      console.log(
        '****************************************************************'.error
      );
      console.log(
        'Ha ocurrido un error al tratar de conectar con la base de datos'.error
      );
      console.log(
        '****************************************************************'.error
      );
      console.log(err);
    });

  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'DB connection error:'.error));