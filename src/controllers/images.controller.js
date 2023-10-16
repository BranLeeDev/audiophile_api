const ImagesService = require("../services/images.service");

const service = new ImagesService();

const getAllImages = async (req, res, next) => {
  try {
    const rta = await service.findAll();
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const getOneImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.findOne(id);
    return res.json(rta);
  } catch (error) {
    next(error);
  }
};

const createImage = async (req, res, next) => {
  try {
    const body = req.body;
    const rta = await service.create(body);
    return res.status(201).json({
      message: "Image created",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const updateImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const rta = await service.update(id, body);
    return res.json({
      message: "Image updated",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

const deleteImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.destroy(id);
    return res.json({
      message: "Image deleted",
      data: rta,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllImages,
  getOneImage,
  createImage,
  updateImage,
  deleteImage,
};
