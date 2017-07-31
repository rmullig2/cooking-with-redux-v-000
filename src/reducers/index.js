import { combineReducers } from 'redux';
import ingredientsReducer from './ingredients'
import recipesReducer from './recipes'
import recipeFormReducer from './recipeForm'

var rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer,
  recipeForm: recipeFormReducer
});

export default rootReducer
//export const store = createStore(rootReducer);
//
//export default function rootReducer(state = 'default', action){
//  return state;
//}
