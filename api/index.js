const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
require('dotenv').config()
const connectMongo = require('./config/mongo.config');
const postRouter = require('./src/routers/post.router')
const bookingRouter = require('./src/routers/booking.router')
const commentRouter = require('./src/routers/comment.router')
const shopRouter = require('./src/routers/shop.router')
const AuthRouter = require('./src/routers/auth.router');
const POST_PREFIX = '/api'
const cors = require('cors')

connectMongo()

app.use(cors())
app.use(express.json());

app.get(POST_PREFIX, (req, res) => {
  res.send('Hello World!')
})

app.use(POST_PREFIX, postRouter)
app.use(POST_PREFIX, bookingRouter)
app.use(POST_PREFIX, commentRouter)
app.use(POST_PREFIX, shopRouter)
app.use('/auth', AuthRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})