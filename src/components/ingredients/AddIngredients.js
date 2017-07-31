import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {
  
  isSelected(ingredient, index) {
    if (!!this.props.unselectedIngredients.find((unselected) => unselected.id === ingredient.id))
      //return <li key={index}>{ingredient.name}<ConnectedAddIngredient ingredient={ingredient} /></li>
      return <ConnectedAddIngredient key={index} ingredient={ingredient} />
    else
      return <li key={index}>{ingredient.name}</li>
  }
    
  render(){
    //{console.log("Selected ingredients: " + this.props.selectedIngredients.length)}
    //{console.log("Unselected ingredients: " + this.props.unselectedIngredients.length)}
    //{console.log("Ingredients: " + this.props.ingredients.length)}
    
    let ingredients = this.props.ingredients.map((ingredient, index) => this.isSelected(ingredient, index))
   
    return(
      <div>
          Add More Ingredients
          { ingredients }
      </div>
    )
  }
}

AddIngredients.defaultProps = {
  selectedIngredients: [],
  unselectedIngredients: [],
}

function mapStateToProps(state){
  return {ingredients: state.ingredients, recipeForm: state.recipeForm}
}

export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)
//export const ConnectedAddIngredients =  AddIngredients
