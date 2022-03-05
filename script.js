class MyApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: "Inputs",
      currentBtnId: "nav-inputs"
    }; 
  }

  render(){
    return(
<div>
<h1>Heading</h1>
</div>
  )
  }
}
ReactDOM.render(<MyApp />, document.getElementById('myApp'));
