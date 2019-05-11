const connection = require('../connection');
const Schema = connection.Schema;
const HeroSchema = new Schema({
    "response": String,
    "id": String,
    "name": String,
    "powerstats": {
    "intelligence": String,
    "strength": String,
    "speed": String,
    "durability": String,
    "power": String,
    "combat": String
    },
    "biography": {
    "full-name" : String,
    "alter-egos": String,
    "aliases": [String],
    "place-of-birth": String,
    "first-appearance": String,
    "publisher": String,
    "alignment": String
    },
    "appearance": {
    "gender": String,
    "race": String,
    "height": [String],
    "weight": [String],
    "eye-color": String,
    "hair-color": String
    },
    "work": {
    "occupation": String,
    "base": String
    },
    "connections": {
    "group-affiliation": String,
    "relatives": String
    },
    "image": {
     "url": String
    }
});
const HeroModel = connection.model('heroes',HeroSchema);
module.exports = HeroModel;
