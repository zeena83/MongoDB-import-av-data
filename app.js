var mongoose = require('mongoose'),
    Member = require('./models/memberModel.js'),
    startTid,
    slutTid

startTid = Date.now()

// Koppla upp mot en databas
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/brfGrantoppen', {
    useMongoClient: true
});

// Lista alla medlemmar. Namn samt avgift per kvm.
Member.find({}, function (err, data) {
    if (err)
        console.log(err)
    else
        console.log("Medlemslista, namn och avgift/kvm")
        // Sortera arrayen.
    
        data.sort(function (a, b) {
            return a.avgiftPerKvm() - b.avgiftPerKvm();
        });
        data.forEach(function(medlem){
            console.log(medlem.fullName() + ", avgift: " + medlem.avgiftPerKvm().toFixed(2))
            // .toFixed() ger antal decimaler.
        })
})
slutTid = Date.now()
let millis = slutTid - startTid
console.log("Körningen tog: " + millis + " ms")