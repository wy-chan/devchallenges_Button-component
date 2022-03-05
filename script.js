'use strict';

const e = React.createElement;

class MyApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: "Inputs",
      currentBtnId: "nav-inputs"
    }; 
  }

  render(){
    return e(
<div>
<h1>Heading</h1>
</div>
  )
  }
}


const domContainer = document.querySelector('#myApp');
ReactDOM.render(e(MyApp), domContainer);
