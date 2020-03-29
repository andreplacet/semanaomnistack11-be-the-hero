const  connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    index (request, response) {
        const ongs = connection('ongs').select('*')
    
        return response.json(ongs)
    },

    create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body
        const id = crypto.randomBytes(4).toString('HEX')

            connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })

        return response.json({ id })
    }
}