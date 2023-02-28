const dotenv = require('dotenv');
const { path } = require('express/lib/application');
dotenv.config({path: './config.env'});

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_LOCAL,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser: true
}).then(()=>{
    console.log("database connected");
})

const port = process.env.PORT;
const app = require('./app');
const server = app.listen(port, () => {
    console.log(`The port ${port} is listening...`);
  });
  process.on('unhandledRejection',err=>{
      console.log(err.name, err.message);
      console.log("UNHANDLED REJECTION Shuting down");
      server.close(()=>{
          process.exit(1);
      })
  })

