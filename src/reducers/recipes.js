import uuidV4  from 'uuid/v4';

export default function recipe(state = [], action){
  switch (action.type) {
    case 'ADD_RECIPE':
      let ingredientIds = Object.assign([], state.ingredientIds, action.payload.ingredientIds)
      console.log("Payload is:" + ingredientIds.length)
      console.log("ingredientsIds are: " + ingredientIds[0])
      let recipe = { name: action.payload.name, calories: action.payload.calories, id: uuidV4(), ingredientsIds: ingredientIds };
      return state.concat(recipe);
    default:
      return state;
  }
}
