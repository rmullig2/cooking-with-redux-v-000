import { createStore } from 'redux'
import rootReducer from './reducers/index'
import ReactDOM from 'react-dom';

if (typeof window === 'undefined') {
    global.window = {}
}
export function configureStore(){
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = configureStore()
