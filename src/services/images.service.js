const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class ImagesService {
  async findAll() {
    const rta = models.Image.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = models.Image.findByPk(id);
    if (!rta) throw boom.notFound("Image not Found");
    return rta;
  }

  async create(body) {
    const rta = models.Image.create(body);
    return rta;
  }

  async update(id, changes) {
    const image = await this.findOne(id);
    const rta = await image.update(changes);
    return rta;
  }

  async destroy(id) {
    const image = await this.findOne(id);
    await image.destroy();
    return image;
  }
}

module.exports = ImagesService;
