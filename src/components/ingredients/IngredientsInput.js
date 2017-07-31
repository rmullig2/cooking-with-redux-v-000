import React, { Component } from 'react';
import { createIngredient } from '../../actions/ingredients';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class IngredientsInput extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name: '', calories: ''
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
    this.props.createIngredient(this.state);
  }
  
  render(){
    return(
      <div>
        Ingredients Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input type="text" onChange={(event) => this.handleOnNameChange(event)} placeholder="name" />
            <input type="text" onChange={(event) => this.handleOnCaloriesChange(event)} placeholder="calories" />
            <input type="submit" />
          </p>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createIngredient: createIngredient
  }, dispatch);
};

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)
//export const ConnectedIngredientsInput = IngredientsInput
