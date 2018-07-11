### BeanBook
BeanBook is a mobile web app built with react-native-web. Its mission is to create a space to rememeber and share the best beans and brews with friends and the global community.

Objectives:
1. Gorgeous, intuive UI
2. Easy-to-update coffee diary
3. Account creation with the ability follow friends
4. A tagging system to allow searching by roaster, cafe, and type of bean

---

Prospective GraphQL scheme highlighting data organization methods:
```
{
  users {
    user {
      experiences {
        experience {
          date
          coffee {
            origin
            roaster
          }
          brew method
          brewer (cafe or self)
          rating (on a ten point scale)
          overview (basic thoughts)
          characteristics (
            body
            acidity
            flavor notes (available from flavor wheel and add your own)
            taints (if any)
          )
        }
      }
      friends (list of friends)
    }
  }
}
}
```
