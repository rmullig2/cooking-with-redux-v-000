import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {
  
  isSelected(ingredient, index) {
    //console.log("unselected ingredients length: " + this.props.unselectedIngredients.length)
    //console.log("ingredient: " + ingredient)
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
    console.log("ingredient list: " + this.props.ingredients)
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
  //var array_keys = new Array();
  //var array_values = new Array();
  //for (var key in state) { array_keys.push(key); array_values.push(state[key])}
  //console.log("state keys: " + array_keys)
  //console.log("state values: " + array_values)
  return {ingredients: state.ingredients, recipeForm: state.recipeForm}
}

export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)
//export const ConnectedAddIngredients =  AddIngredients
