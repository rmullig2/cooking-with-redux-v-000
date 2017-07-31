import uuidV4  from 'uuid/v4';

export default function recipe(state = [], action){
  switch (action.type) {
    case 'ADD_RECIPE':
      let recipe = { name: action.payload.name, calories: action.payload.calories, id: uuidV4() };
      return state.concat(recipe);
    default:
      return state;
  }
}
