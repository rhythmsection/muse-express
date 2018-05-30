const Url = require('../models').Url

module.exports = {
  create(req, res) {
    return Url
      .create({
        longUrl: req.body.longUrl,
        alias: req.body.alias,
        suspect: req.body.suspect
      })
      .then(url => res.status(201).send(url))
      .catch(error => res.status(400).send(error))
  },
  findOne(req, res) {
    return Url
      .findOne({
        where: {alias: req.query.alias}
      })
      .then(url => {
        return url ? res.status(201).send(url) : res.status(201).send({})
      })

  }
}
