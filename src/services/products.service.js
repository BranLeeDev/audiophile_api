const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ProductsService {
  async findAll() {
    const rta = models.Product.findAll({
      include: [{ association: "category", attributes: ["id", "name"] }],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return rta;
  }

  async findOne(id) {
    const rta = models.Product.findByPk(id, {
      include: ["category", "images"],
    });
    if (!rta) throw boom.notFound("Product not Found");
    return rta;
  }

  async create(body) {
    const rta = models.Product.create(body);
    return rta;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async destroy(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return product;
  }
}

module.exports = ProductsService;
