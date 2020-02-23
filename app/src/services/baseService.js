let notFoundException = null;
let requiredFieldException = null;

class BaseService{

  constructor(repostitory, {NotFoundException, RequiredFieldException}){
    this.repostitory = repostitory;
    notFoundException = NotFoundException;
    requiredFieldException = RequiredFieldException;
  }

  async get(id){
    if(!id){
      throw new requiredFieldException('id');
    }

    const currentEntity = await this.repostitory.get(id);

    if(!currentEntity){
      throw new notFoundException('entidad');
    }

    return currentEntity;
  }

  async getAll(){
    return this.repostitory.getAll();
  }

  async create(entity){
    return this.repostitory.create(entity);
  }

  async update(id, entity){
    if(!id){
      throw new requiredFieldException('id');
    }

    return await this.repostitory.update(id, entity);
  }

  async delete(id){
    if(!id){
      throw new requiredFieldException('id');
    }

    return await this.repostitory.delete(id);
  }
}

module.exports = BaseService;