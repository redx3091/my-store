const faker = require('faker');

const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');

class CategorieService {
  constructor() {
    this.categories = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newCategorie = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newCategorie);
    return newCategorie;
  }

  async find() {
    const rta = await models.Categorie.findAll();
    return rta;
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
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
