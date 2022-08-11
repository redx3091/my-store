'use strict';

const { OrderSchema, ORDER_TABLE } = require('../models/oder.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  donw: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
