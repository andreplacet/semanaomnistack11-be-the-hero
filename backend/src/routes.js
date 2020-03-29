const express = require('express')
const OngController = require('./controllers/ong_controller')
const IncidentController = require('./controllers/incident_controller')
const ProfileController = require('./controllers/profile_controller')
const SessionController = require('./controllers/session_controller')
const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)

routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)

routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes