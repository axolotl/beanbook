const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Subscription = require('./resolvers/Subscription')
const Feed = require('./resolvers/Feed')

// resolvers
// let links = [{
//   id: 'link-0',
//   url: 'www.howtographql.com',
//   description: 'Fullstack tutorial for GraphQL'
// }]

// let idCount = links.length
// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`,
//     feed: () => links,
//   },
//   Mutation: {
//     post: (root, args) => {
//        const link = {
//         id: `link-${idCount++}`,
//         description: args.description,
//         url: args.url,
//       }
//       links.push(link)
//       return link
//     }
//   },
// }

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription,
  Feed,
}

// server
const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'server/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/samuel-machat-cd22fd/database/dev',
      secret: 'secretkitchensink',
      debug: true,
    })
  })
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
