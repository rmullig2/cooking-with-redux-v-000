import React, { Component } from 'react';
import { addRecipe } from '../../actions/recipes';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ConnectedAddIngredients } from '../ingredients/AddIngredients';

export class RecipesInput extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name: '', calories: '', ingredients: []
    };
  }
  
  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  
  handleOnCaloriesChange(event) {
    this.setState({
      calories: event.target.value
    });
  }
  
  handleOnSubmit(event) {
    event.preventDefault();
    let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
    this.props.addRecipe(recipe);
  }
  
  render(){
    return(
      <div>
        Recipes Input
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <p>
            <input type="text" onChange={(event) => this.handleOnNameChange(event)} placeholder="name" />
            <input type="text" onChange={(event) => this.handleOnCaloriesChange(event)} placeholder="calories" />
            <input type="submit" />
          </p>
          <ConnectedAddIngredients />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRecipe: addRecipe
  }, dispatch);
};

function mapStateToProps(state){
  return { selectedIngredients: state.recipeForm.ingredientIds }
} 

export const ConnectedRecipesInput = connect(mapStateToProps,mapDispatchToProps)(RecipesInput)
//export const ConnectedRecipesInput =(RecipesInput)
