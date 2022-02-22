
class MyApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: "0",
    }; 
    this.handlePage=this.handlePage.bind(this);
    this.showPage=this.showPage.bind(this);
  };

  handlePage(event){
    this.setState({
      currentPage : event.target.text,
    });
    
  };
  
  showPage(){
    switch (this.state.currentPage) {
      case 'Inputs': return <Inputs/>;  
      break;
      default: return <Buttons/>;  
    }
  }

  render(){
    return(
<div id="nav-main-div">
<nav id="navbar">
<header><h2><em>Dev</em>challenges.io</h2></header>
<ul style={{ listStyleType: 'none' }}>
    <li><a class="nav-link link-active" id="nav-buttons" value="0" /*onClick={this.handlePage}*/>Buttons</a></li>
    <li><a class="nav-link" id="nav-inputs" value="1" /*onClick={this.handlePage}*/>Inputs</a></li>
</ul>
</nav>
<main>
<Inputs/>  
</main>
</div>

  )
  };
}

ReactDOM.render(<MyApp />, document.getElementById('myApp'));
