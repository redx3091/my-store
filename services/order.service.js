const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {
  constructor() {}

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async create(data) {
    console.log(data);
    const customer = await models.Customer.findOne({
      where: {
        '$user.id$': data,
      },
      include: ['user'],
    });
    if (!customer) {
      throw boom.badRequest('customer not found');
    }
    const newOrder = await models.Order.create({ customerId: customer.id });
    return newOrder;
  }

  async find() {
    const query = 'SELECT * FROM task';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId,
      },
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    return order;
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
