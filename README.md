# Macro Polo & Invoice Number Parser

This is an API printing out correct result for Macro Polo Game from 1 to 1,000,000 with 1,000 numbers per line & on other hand it is also enabling user to upload invoice number file over an API and getting real number as it's output.

### Installation

```
npm install
```

### Running Instructions

```
npm run start // production mode is not stable at the moment
```

```
npm test
```

### Tech Stack

* BodyParser
* Node.js with Express
* lodash

### TODO / WIP

* Tests: Add tests with mocha.js
*API for MarcoPolo: localhost:3000/marcopolo/:n "here n will be the max number for Marco Polo game"
*POST API for Parsing Invoice: localhost:3000/invoiceparser "This is a POST call accepting txt file as input and returning location as API call for retrieving file data."
*GET API to Retrieve Decrypted Invoice Data: localhost:3000/invoiceparser/:filename "This is a GET call to retrieve Invoice Data from filename given in parameter."
Ans 2. As we all know using Node.JS in building data intensive apps. The reason to that are as follow:
 1. It's "worker" solution is really planned mostly for http server scaling not for CPU bound use cases.
 2. It's not suited to use cases that "block" the event loop (such as synchronous xml parsing), or when you know you'll need some kind of threading model you can reason about