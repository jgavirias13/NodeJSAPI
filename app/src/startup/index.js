const express = require('express');
const colors = require('colors');

colors.setTheme({
  info: 'green',
  help: 'magenta',
  warn: 'yellow',
  success: 'cyan',
  error: 'red'
});

let app = null;
let config = null;

class Server{
  constructor({Config, IndexRoute}){
    config = Config;
    app = express();
    app.use(IndexRoute);
  }

  start(){
    return new Promise(resolve => {
      app.listen(config.PORT, () => {
        console.log('======================================================================================'.info);
        console.log(`**** ${config.APPLICATION_NAME} corriendo en puerto ${config.PORT}`.success);
        console.log('======================================================================================'.info);
      })
    })
  }
}

module.exports = Server;