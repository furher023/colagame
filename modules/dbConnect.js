const mongoose = require('mongoose');

//Connecting to the database
const options= {   useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: false,
    useCreateIndex: true 
  };

mongoose.connect('mongodb://localhost:27017/cola',options,(error)=>{ 
    if(error){
        console.log(error);
    }
    else{
        console.log("Successfully connected to database");
    }
});


module.exports= mongoose;