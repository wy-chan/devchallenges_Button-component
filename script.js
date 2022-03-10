

class MyApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: "Inputs",
      currentBtnId: "nav-inputs"
    }; 
    this.handlePage=this.handlePage.bind(this);
    this.showPage=this.showPage.bind(this);
    this.closeButton=this.closeButton.bind(this);
    this.showButton=this.showButton.bind(this);
  }

  handlePage(event){
    this.closeButton(this.state.currentBtnId);
    this.showButton(event.target.id);

    this.setState({
      currentPage : event.target.text,
      currentBtnId: event.target.id
    });
    
    this.showPage();
  }
  
  showPage(){
    switch(this.state.currentPage){
      case"Inputs": 
      return <Inputs />;
      break;
      default:  return <Buttons />;
    }
  }
 
  closeButton(id){
    var e=document.getElementById(id);
    e.classList.remove("link-active");
  }
  showButton(id){
    var e=document.getElementById(id);
    e.classList.add("link-active");
    
  }
  

  render(){
    return(
<div id="nav-main-div">   
<nav id="navbar">
<header><h2><em>Dev</em>challenges.io</h2></header>
<ul style={{ listStyleType: 'none' }}>
    <li><a class="nav-link" id="nav-buttons" onClick={this.handlePage}>Buttons</a></li>
    <li><a class="nav-link link-active" id="nav-inputs" onClick={this.handlePage}>Inputs</a></li>
</ul>
</nav>
<main>
{this.showPage()}
</main>
</div>
 
  )
  }
}

ReactDOM.render(<MyApp />, document.getElementById('myApp'));
