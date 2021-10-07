const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser').json();

require('dotenv').config()
require('./helpers/init_mongodb')
require('./helpers/init_redis')

const app = express();
app.use(cors());
app.use(bodyParser)
app.use(express.urlencoded({ extended: true }))



const PORT = 3100;
app.listen(PORT, ()=> {
    console.log(`server running port ${PORT}`)
})



// const express = require('express')
// const morgan = require('morgan')
// const createError = require('http-errors')
// require('dotenv').config()
// require('./helpers/init_mongodb')
// require('./helpers/init_redis')


// const app = express()
// app.use(morgan('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))




// app.use((err, req, res, next) => {
//   res.status(err.status || 500)
//   res.send({
//     error: {
//       status: err.status || 500,
//       message: err.message,
//     },
//   })
// })

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })



