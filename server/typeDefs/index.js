const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    getUser(email: String!): User
    getAllUser: [User!]
    login(userInfo: LoginInput): Login
    pokemon(id: ID!): pokemon
    pokemons(first: Int!): [pokemon]
  }
  type pokemon {
    id: ID!
    name: String!
    number: ID!
    image: String!
    classification: String!
    types: [String!]
    resistant: [String!]
    weaknesses: [String!]
    weight: WeightHeight!
    height: WeightHeight!
    fleeRate: Float!
    evolutionRequirements: EvolutionRequirements
    evolutions: [Evolutions!]
    maxCP: Int!
    maxHP: Int!
    attacks: Attacks!
  }
  type WeightHeight {
    minimum: String!
    maximum: String!
  }
  type EvolutionRequirements {
    amount: Int!
    name: String!
  }
  type Evolutions {
    id: ID!
    name: String!
  }
  type Attacks {
    fast: [BaseAttack!]
    special: [BaseAttack!]
  }
  type BaseAttack {
    name: String!
    type: String!
    damage: Int!
  }
  type User {
    id: ID!
    email: String
  }
  type UpdateUser {
    email: String!
    username: String
  }
  type Login {
    token: String
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input UserInfo {
    password: String!
    email: String!
  }
  input GetUserInput {
    email: String!
  }
  input UpdateUserInfo {
    username: String
    password: String
    email: String!
  }
  type Mutation {
    createUser(userInfo: UserInfo): User
    updateUser(userInfo: UpdateUserInfo): UpdateUser
    deleteUser(email: String!): String
  }
  type Subscription {
    loginUser: User
  }
`

module.exports = typeDefs
