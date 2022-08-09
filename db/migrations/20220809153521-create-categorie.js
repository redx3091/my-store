'use strict';

const {
  CategorieSchema,
  CATEGORIE_TABLE,
} = require('./../models/categorie.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORIE_TABLE, CategorieSchema);
  },

  async down(queryInterface) {
    await queryInterface.drop(CATEGORIE_TABLE);
  },
};
