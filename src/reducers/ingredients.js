import uuidV4  from 'uuid/v4';

export default function ingredients(state = [], action){
  switch (action.type) {
    case 'CREATE_INGREDIENT':
      let ingredient = { name: action.payload.name, calories: action.payload.calories, id: uuidV4() };
      return state.concat(ingredient);
    default:
      return state;
  }
}
