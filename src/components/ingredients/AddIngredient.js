import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addIngredient } from '../../actions/ingredients';

export class AddIngredient extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    //console.log("id: " + this.props.id)
    //this.props.recipeForm.ingredientIds.push(ingredient.id)
    this.props.addIngredient(this.props.id);
    //console.log("recipeForm: " + this.props.recipeForm.ingredientsId)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>this.props.name</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {recipeForm: state.recipeForm}
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
     addIngredient: addIngredient
   }, dispatch)
 }

export const ConnectedAddIngredient = connect(mapStateToProps, mapDispatchToProps)(AddIngredient)
//export const ConnectedAddIngredient = AddIngredient
