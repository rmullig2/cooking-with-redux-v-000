export const createIngredient = (ingredient) => {
  return {
    type: 'CREATE_INGREDIENT', 
    payload: ingredient
  };
};

export const addIngredient = (ingredientId) => {
  return {
    type: 'ADD_INGREDIENT',
    payload: ingredientId
  }
}