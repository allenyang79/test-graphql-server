ref:
```
https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2
```

### operation ###
query
```
query RootQueryType {
  count
}
```
mutation
```
mutation RootMutationType {
  updateCount
}
// or
mutation RootMutationType {
    a:updateCount
    b:updateCount
    c:updateCount
}
// or
mutation RootMutationType {
    hello(name:"qqq")

}
```



other usage
```
query RootQueryType { count,foo,bar,tasks }
```


### Schema ###

```
{
  __schema {
    mutationType {
      name,
      fields {
        name,
        description
      }
    }
  }
}
```
```
{
  __schema {
    queryType {
      name,
      fields {
        name,
        description
      }
    }
    mutationType {
      name,
      fields {
        name,
        description
      }
    }
  }
}
```
