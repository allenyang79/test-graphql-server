// server.js
import express from 'express';
import bodyParser from 'body-parser';
import { graphql } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
}
from 'graphql/type';

import schema from "./schema";


let app = express();
app.use(bodyParser.text({ type: 'application/graphql' }));
let PORT = 3000;

app.get('/', (req, res) => {
  res.send('test graph SQL');
});

app.post('/graphql', (req, res) => {

  graphql(schema, req.body)
    .then((result) => {
      res.send(JSON.stringify(result, null, 2));
    });
});

let server = app.listen(PORT, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});

