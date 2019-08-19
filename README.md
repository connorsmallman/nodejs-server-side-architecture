  
# 3 Layer architecture

The idea is to use the principle of separation of concerns to move the business logic away from the node.js API Routes.

Moves business logic into services, to prevent spaghetti code, and to prevent unit tests requiring complex mocks for req or res express.js objects. It also makes it's easier to re-use it from a Cron job.

Services don't return anything related to the HTTP transport layer like a status code or headers. 

I've add the pub/sub pattern as a simple node.js API endpoint that dispatches and event when we get a video, may want to call third-party services, maybe to an analytics service, or maybe start an email sequence.

Sooner than later, that simple operation will be doing several things, and you will end up with 1000 lines of code, all in a single function.

That violates the principle of single responsibility.

So, it's better to separate our responsibilities from the start, so code remains maintainable.

Dependency Injection is a common pattern that will help us organization our code, by 'injecting' or passing through the constructor the dependencies of your class or function.

By doing this way we will gain the flexibility to inject a 'compatible dependency' when, for example, you write the unit tests for the service, or when the service is used in another context.

## Scaffolding

```
  src
  │   app.js          # App entry point
  └───api             # Express route controllers for all the endpoints of the app
  └───config          # Environment variables and configuration related stuff
  └───jobs            # Jobs definitions for cron
  └───loaders         # Split the startup process into modules
  └───models          # Database models
  └───services        # All the business logic is here
  └───subscribers     # Event handlers for async tasks
  └───utils           # Application wide utils, for example `Logger`
```
