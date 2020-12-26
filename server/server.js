const { ApolloServer, PubSub } = require("apollo-server")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const isAuth = require("./middlewares/index")

const typeDefs = require("./typeDefs/index")
const resolvers = require("./resolvers/index")

require("dotenv-safe/config")

// // CORS configuration
// const corsOptions = {
//   origin: "http://localhost:8080",
//   credentials: true,
// }

//Create the DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
)

const pubsub = new PubSub()

const server = new ApolloServer({
  // // not recommended as it will open to xss attacks
  // cors: false,
  // cors: {
  //   credentials: true,
  //   origin: (origin, callback) => {
  //     const whitelist = [
  //       "http://localhost",
  //       // "https://site2.com"
  //     ]

  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error("Not allowed by CORS"))
  //     }
  //   },
  // },
  cors: {
    credentials: true,
    origin: "http://localhost:8080",
  },
  typeDefs,
  resolvers,
  context: async ({ req, res, connection }) => {
    if (req) req = await isAuth.tokenVerify(req)
    return { req, res, pubsub }
  },
})

// // will work with the use of express or apollo-esrver-express
// server.applyMiddleware({ cors: corsOptions })

server.listen().then(({ url }) => console.log(`Server runs on ${url}`))
