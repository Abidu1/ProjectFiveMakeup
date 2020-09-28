import React, { Component } from 'react';

class DropDown extends Component {
    constructor() {
      super();
      this.state = {
        userSelection: ""
      }
    }
  
    userpicks = (event) => {
      this.setState({
        userSelection: event.target.value
      })
    }
  
    render() {
      return(
        <main>
          <div class="wrapper">
            <form>
              <div class="dropDownForm">
                <label htmlFor="makeupProduct"></label>
                <select onChange={ this.userpicks } name="makeupProduct" id="makeupProduct">
                  <option value="lipstick">Lipstick</option>
                  <option value="eyeshadow">EyeShadow</option>
                  <option value="blush">Blush</option>
                </select>
                
                <button class="submitButton"
                  onClick={ (event) => this.props.getProduct(event, this.state.userSelection) }
                > Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      )
    }
  }
  
  export default DropDown;