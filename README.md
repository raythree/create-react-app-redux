# create-react-app-redux

Starter app based on ```create-react-app``` and adding these components:

* redux
* redux-logic (middleware for async processing)
* react-router-dom
* react-router-redux
* history
* redux-actions (reduce boilerplate for actions and reducers)
* axios
* simple-console-logger

The structure is:

```
store/
  index.js           (exports configureStore, pulls in ducks style reducers from app components)

logic/
  index.js           (sets up redux-logic middleware)

hello/               (A simple starter component - start here and replace with your components)
  hello.js           (ducks style reducer and actions)
  helloLogic.js      (redux-logic for handling async action)
  hello.test.js      (tests actions/reducers/logic)
  HelloComponent.js  (Component with buttons to say hello and say hello async)
```
