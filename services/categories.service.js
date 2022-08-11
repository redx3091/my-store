const { models } = require('../libs/sequelize');

class CategorieService {
  constructor() {}

  async create(data) {
    const newCategorie = await models.Category.create(data);
    return newCategorie;
  }

  async find() {
    const rta = await models.Category.findAll();
    return rta;
  }

  findOne(id) {
    const category = models.Category.findByPk(id, {
      include: ['products'],
    });
    return category;
  }

  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }
    const categorie = this.categories[index];
    this.categories[index] = {
      ...categorie,
      ...changes,
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategorieService;
