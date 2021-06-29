const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/prodmgr", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection established to database"))
    .catch(err => console.log("Error connecting to database", err))
