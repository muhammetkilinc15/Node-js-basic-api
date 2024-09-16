class BaseController {
    constructor(model) {
      this.model = model;
    }
  
    getAll = async (req, res) => {
      try {
        const items = await this.model.findAll();
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    getById = async (req, res) => {
      const { id } = req.params;
      try {
        const item = await this.model.findByPk(id);
        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    create = async (req, res) => {
      try {
        const newItem = await this.model.create(req.body);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    update = async (req, res) => {
      const { id } = req.params;
      try {
        const [updated] = await this.model.update(req.body, { where: { id } });
        if (updated) {
          const updatedItem = await this.model.findByPk(id);
          res.status(200).json(updatedItem);
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    delete = async (req, res) => {
      const { id } = req.params;
      try {
        const deleted = await this.model.destroy({ where: { id } });
        if (deleted) {
          res.status(200).json({ message: 'Item deleted successfully' });
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = BaseController;