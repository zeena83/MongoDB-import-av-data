var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var memberSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    lgh: {
        nummer: {
            type: Number,
            min: 1,
            max: 12
        },
        yta: Number,
        avgift: Number
    }
})

memberSchema.methods.fullName = function(){
    return this.name.first + " " + this.name.last
}
memberSchema.methods.avgiftPerKvm = function() {
    var apk = this.lgh.avgift/this.lgh.yta
    return apk
}

module.exports = mongoose.model('Member',memberSchema)