import React, { Component } from 'react';


//Let's use some variables IN THE TEMPLATE WOW OMG LOWL
//in the app component below, create a constructor function (don't 
//forget to call super() since it's a subclass) that declares a variable 
//spaceDawgz. Set it to some wicked cool value. Then, inject
//this component into the application (like we did with Barf) and notice what happens
//in the app! You can pass in variables into the template the application!
//Inject another variable into this component copying the syntax. There's not really 
//an elegant way of doing so with HTML. This is one of the benefits of React.

export default class App extends Component {
  constructor(){
    super();
    this.spaceDawgz = "Hello"
  }

  render() {
    return (
      <div>
        {this.spaceDawgz}
      </div>
    )  
  }
}
