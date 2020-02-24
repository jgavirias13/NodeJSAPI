class NotAuthorizedException extends Error{
  constructor(){
    const message = 'No autorizado, token invalido';
    super(message);
    this.status = 401;
  }
}

module.exports = NotAuthorizedException;
