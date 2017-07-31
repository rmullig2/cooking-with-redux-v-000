export default function recipeForm(state = {ingredientIds: []}, action){
  switch (action.type) {
    case 'ADD_INGREDIENT':
      //console.log("Ingredients are: " + state.ingredientsIds)
      //console.log("Payload is: " + action.payload)
      let ingredientIds = state.ingredientIds.concat(action.payload)
      return Object.assign({}, state, { ingredientIds: ingredientIds })
    default:
      return state;
  }
}
