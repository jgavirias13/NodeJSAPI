class DuplicatedException extends Error{
  constructor(tipoCampo){
    const message = `${tipoCampo} ya existe`;
    super(message);
    this.status = 401;
  }
}

module.exports = DuplicatedException;