import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Ingredients extends Component {
  render(){
    let ingredients = this.props.ingredients.map((ingredient, index) => <li key={index}>{ingredient.name}</li>);
    return(
        <div>
          <ul>
            List of Ingredients.
            { ingredients }
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {ingredients: state.ingredients}
}

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)
//export const ConnectedIngredients = (Ingredients)

// store.getState().ingredients