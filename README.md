ref:
```
https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2
```

*** operation ***
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
```

*** Schema ***

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
