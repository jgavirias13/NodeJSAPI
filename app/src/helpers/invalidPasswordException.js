class InvalidPasswordException extends Error{
  constructor(){
    const message = `Password Incorrecto`;
    super(message);
    this.status = 401;
  }
}

module.exports = InvalidPasswordException;