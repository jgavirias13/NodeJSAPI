class NotAuthorizedException extends Error{
  constructor(){
    const message = 'No autorizado, token invalido';
    this.status = 401;
    super(message);
  }
}

module.exports = NotAuthorizedException;
