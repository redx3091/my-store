const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class OrderService {

  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM task';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;