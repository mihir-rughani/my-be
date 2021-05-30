# CIA Points Pilot

This application is a simple graphql API developed using nodejs v10.15.3 and express server. The API connects to Firebase firestore document database using the firebase token - points-pilot.json to connect.

     
  
[GraphQL](http://graphql.org/) and express-graphql backend API's developed in [TypeScript](https://www.typescriptlang.org/) and with [Express.js](http://expressjs.com/) framework.  
  
This seed repository has a complete GraphQL starter kit written in TypeSciprt. For building our API we use various gulp-tasks. We will use Jest for our unit-testing.  
  
## Getting Started  
### Prerequisites  
Install [Node.js](http://nodejs.org)  
* on OSX use [homebrew](http://brew.sh) `brew install node`  
* OR  
* [node.js](https://nodejs.org/en/download/)  
  
## Installing  
* `clone` this repo  
* `npm install` to install all dependencies  
* `npm start` to start the server  
  
## Running the app 

After you have installed all dependencies you can now run the app.  
Run `npm start` to start a local server using `nodemon` which will watch for changes and then will restart the sever.  
The port will be displayed to you as `http://0.0.0.0:3500`. All app configuration settings are defined in the ./src/config folder. 

### Config

#### Env

Please note that we use a `.env` file for defining our environment variables, dotenv is used to preload these variables on application start up. 
You will need the following values:

```
FIREBASE_PROJECT_ID=
FIREBASE_CREDENTIALS=
```

#### Firebase

##### Security

Firebase's security is very permissive by default. Make sure you add the following permissons ("Rules") to it.

Cloud Firestore:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Real-time Database:

```
{
  "rules": {
    ".read": "false",
    ".write": "false"
  }
}
```

##### Credentials

Get the firebase credentials from one of the devs and place them into `src/config/points-pilot.json`.

These credentials are initially generated from the "service accounts" settings screen of your project: <https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk?pli=1>
  

## Scripts / Commands  

### Install  
* Install all dependencies with `npm install`  
  
  
### Building the project and running it  

* Run `npm build` to generated all JavaScript files from your TypeScript sources. After this step you can deploy the app on any server.  
* To start the builded app set NODE_ENV=production and use `npm start`.  
  
### Docs 

* Run `npm run docs` to generate all doc files and serve it on `http://0.0.0.0:8080`  

## Exploring the boilerplate

* It was agreed that to keep the application maintainable going forward we would change the structure of the application to make it more modular. We found that having Interface, helper and Type files in disparate locations was making it difficult for devs to find the information they needed which created the potential for duplicate code.  The structure now looks like the following, please note the refactor is not entirely complete but the main section is the addition of a modules folder which contains each module and the supporting files. So the User module will contain all information related to User features:

```
modules
 |-- User
      |--__tests__
      |-- userResolver 
      |-- userServices
      |-- userTypes
    
```

### Structure
```
express-graphql-typescript-boilerplate
 |-- docs/                                      * our generated doc files
 |
 |-- src/                                       * our source files that will be compiled to javascript  
 |    |-- config/                               * all config files - we may also refactor this at some point
 |    |
 |    |-- core/                                 * our core functionalities
 |    |    |-- environment.ts                   * gets us the configuration for the given environment
 |    |    |-- graphQLErrorHandling.ts          * our error handling
 |    |    |-- logger.ts                        * our logger configurations
 |    |    |-- server.ts                        * our server error handling
 |    |
 |    |-- graphql/                              * our graphql schema definitions
 |    |    |-- enums/                           * our graphql enum definitions                             
 |    |
 |    |
 |    |-- modules
 |    |     |-- User                            * this pattern is used for all modules going forward
 |    |         |--__tests__
 |    |         |-- userResolver 
 |    |         |-- userServices
 |    |         |-- userTypes
 |    |    
 |    |      |-- Answer
 |    |          |--__tests__
 |    |          |-- answerResolver 
 |    |          |-- answerServices
 |    |          |-- answerTypes    
 |    |
 |    |      |-- Session
 |    |          |--__tests__
 |    |          |-- sessionResolver 
 |    |          |-- sessionServices
 |    |          |-- sessionTypes    
 |    |
 |    |-- routes/                               * defines our application routes
 |    |    |-- validations                      * define middlewares validation
 |    |    |-- defaultRoutes.ts                 * defines all express api routes for s3 and file upload
 |    |    |-- graphQLRoutes.ts                 * defines the graphQL route and generate the schema
 |    |
 |    |-- index.ts                              * main entry point for our application
 |
 |
 |-- gulpfile.js                                * entry point for our gulp tasks
 |-- nodemon.json                               * nodemon setup, so that it uses typescript and runs tslint
 |-- package.json                               * what npm uses to manage it's dependencies
 |-- tslint.json                                * typescript lint config
 |-- typedoc.json                               * typescript documentation generator
 |-- tsconfig.json                              * typescript config
```


## Related Projects and Libraries

The main libraries used by the server side code are the following:

### dotenv

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env). Storing configuration in the environment separate from code is based on [The Twelve-Factor App](http://12factor.net/config) methodology.


### firebase 

firebase client SDK for authentication api calls
[https://firebase.google.com/]

### express-graphql

[https://github.com/graphql/express-graphql]

### GraphQL HTTP Server Middleware

Create a GraphQL HTTP server with any HTTP web framework that supports connect styled middleware, including [Connect](https://github.com/senchalabs/connect) itself, [Express](http://expressjs.com) and [Restify](http://restify.com/).

### winston logger

[https://github.com/winstonjs/winston]
A logger for just about everything.

### winston-splunk-httplogger 

[https://github.com/adrianhall/winston-splunk-httplogger]	
  
A [Winston] transport for logging to [Splunk] with a [HTTP Event Collector].

### GraphQL

* [GraphQL.js](http://graphql.org/) — The JavaScript reference implementation for GraphQL  


---
Made with ♥ by Mihir Rughani
# new-tennisPlay-be
