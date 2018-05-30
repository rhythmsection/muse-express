const urlsController = require('../controllers').urls

module.exports = (app) => {
  app.get('/api', urlsController.findOne)

  app.post('/api/urls', urlsController.create)
}
