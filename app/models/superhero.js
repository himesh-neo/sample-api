var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperheroSchema = new Schema({
  name: String,
  realName: String,
  trigger: String,
  canFly: Boolean
})

module.exports = mongoose.model('Superhero', SuperheroSchema);
