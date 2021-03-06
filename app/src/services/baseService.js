const NotFoundException = require('../helpers/notFoundException');
const RequiredFieldException = require('../helpers/requieredFieldException');

class BaseService{

  constructor(repostitory){
    this.repostitory = repostitory;
  }

  async get(id){
    if(!id){
      throw new RequiredFieldException('id');
    }

    const currentEntity = await this.repostitory.get(id);

    if(!currentEntity){
      throw new NotFoundException('entidad');
    }

    return currentEntity;
  }

  async getAll(pageSize, pageNum){
    return this.repostitory.getAll(pageSize, pageNum);
  }

  async create(entity){
    return this.repostitory.create(entity);
  }

  async update(id, entity){
    if(!id){
      throw new RequiredFieldException('id');
    }

    return await this.repostitory.update(id, entity);
  }

  async delete(id){
    if(!id){
      throw new RequiredFieldException('id');
    }

    return await this.repostitory.delete(id);
  }
}

module.exports = BaseService;