const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'xyz',
  fields: {
    codeimprove: {
      type: new GraphQLList(userType),
      resolve(parent, args) {
        let Data = [
          { id: 12, name: 'abc', email: 'a@gmail.com', phone: '12345678989' },
          { id: 11, name: 'xyz', email: 'z@gmail.com', phone: '000000000' },
        ];
        return Data;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
