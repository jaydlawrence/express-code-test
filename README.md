# Node Express Coding Test

## The brief

Create an express.js REST API with this route table to act as a standalone server with own
port
- id (GET) Returns universally unique identifier without delay (expected < 50ms)
- user (GET) Returns user details (expected response time ~300 ms)
- user (POST) Returns success. Emulate saving to a database with 50% chance of
failing to save. (Hint: create a separate mock DB API)

Write unit tests for all endpoints (Jest is preferred)

## Comments

There are a few parts to this that I don't understand the purpose of.


### Id endpoint

I don't understand the purpose of an endpoint to return just an id.
If it is to use on the frontend to create a new record on the frontend, it gives me pause.
This seems like a potentially dangerous president to set.
I normally live by the philosophy of not trusting the user/frontend.
I would feel more comfortable to have the frontend POST the user object (without id) and the backend get/generate an id and validate user input rather than trust the whole object passed from the frontend.


### 50% failure rate

I am also not sure of the purpose of making the post fail, other than forcing the person taking the test to handle errors.
But then the endpoint tests are going to fail half of the time. So I am probably missing part of the purpose of this requirement.

I did think about writing unit tests just around the model and swapping out the fake DB that was causing the error for a mocked DB, but the instructions say "for all endpoints", so that makes me think that full endpoint tests are wanted, although that is not strictly what a "unit" test is.



Outside of the constraints of a coding test, I would definitely ask for clarification and intentions for the above requirements.


## Install

```
yarn install
```

## Run server

```
yarn start
```

## run tests

```
yarn test
```

*Note:* 3rd test fails 50% of the time