const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(3000, (req, res) => {
//   res.send(console.log('Server IS running'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
