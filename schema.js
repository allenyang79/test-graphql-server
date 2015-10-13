// schema.js
import {
  GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList
}
from 'graphql/type';

let count = 0;
let jobs = [];
let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        description: 'The count!',
        resolve: function() {
          console.log(`==resolve: query(count)==`)
          return new Promise(function(resolve,reject){
            console.log("async promise")
            resolve(count);
          })
        }
      },
      foo: {
        type: GraphQLInt,
        description: 'this is description about Foo!',
        resolve: function() {
          console.log(`==resolve: query(foo)==`)
          return count * count
        }
      },
      bar: {
        type: GraphQLInt,
        description: 'this is description about bar!',
        resolve: function() {
          console.log(`==resolve: query(bar)==`)
          return count * count * count
        }
      },
      tasks: {
        type: new GraphQLList(GraphQLInt),
        description: 'tasks',
        resolve: function() {
          console.log(`==resolve: query(tasks)==`)
          return [0,1,2]
        }
      },
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: GraphQLInt,
        description: 'Updates the count',
        resolve: function() {
          console.log(`==resolve: mutation(updateCount)==`)
          return new Promise(function(resolve,reject){
            setTimeout(function(){
              count += 1;
              resolve(count);
            },200)
          })
        }
      },
      hello:{
        type: GraphQLString,
        description: "hello ",
        args: {
          name: {
            name: 'name',
            type: GraphQLString,
            description: 'The name of the person to say Hello to'
          }
        },
        resolve: function(root, {name}){
          return `Hello, ${name}`
        }
      }
    }
  })
});
export
default schema;

