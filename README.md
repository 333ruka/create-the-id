# create-simple-id

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)

Create simple unique random id and with support of TypeScript.

## Use Case
For example you can use this package for `creating user id`, `creating product id` and many other thing that you can set with an id.

## Install
```bash
npm install create-simple-id
```

<br/>

## In JavaScript
```javascript
const createID = require('create-simple-id');

// Without argument (default digit 6)
const id = createID(); // Result -> z5k1c9

// With argument, you can set any digits on the argument
const id = createID(14);
// It will return id with 14 digits
// Return -> r9m2c3s7p2k8b5

// Example

const user = {
    id: `usr-${createID(10)}`, // Return -> usr-c3s8x0k2f7
    email: "user_example@mail.com",
    username: "user_example",
};

await db.registerUser(user);
```

## In TypeScript
```typescript
import createID from 'create-simple-id';

// Without argument (default digit 6)
const id: string = createID(); // Result -> z5k1c9

// With argument, you can set any digits on the argument
const id: string = createID(14);
// It will return id with 14 digits
// Return -> r9m2c3s7p2k8b5

// Example

const user = {
    id: `usr-${createID(10)}`, // Return -> usr-c3s8x0k2f7
    email: "user_example@mail.com",
    username: "user_example",
};

await db.registerUser(user);
```