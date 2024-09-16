const BaseController = require('./baseController');
const { User } = require('../models');

class UserController extends BaseController {
  constructor() {
    super(User);
  }

  // If there are any methods specific to User, you can add them here
}

module.exports = new UserController();