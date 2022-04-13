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
    this.toTop=this.toTop.bind(this);
  }

  componentDidMount() {
    let regex = /#[a-z]+$/i;
    let page = window.location.href.match(regex)[0];
    (page == "#input")? page == "Inputs":page="Buttons";
    console.log(window.location.href.match(regex)[0]);
    this.setState({
      currentPage: page,
    })
  }
  
  handlePage(event){
    this.closeButton(this.state.currentBtnId);
    this.showButton(event.target.id);

    this.setState({
      currentPage : event.target.text,
      currentBtnId: event.target.id
    });

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
  
  toTop(){
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render(){
    return(
<div id="nav-main-div">   
<nav id="navbar">
<header><h2><em>Dev</em>challenges.io</h2></header>
<ul style={{ listStyleType: 'none' }}>
    <li><a className="nav-link" id="nav-buttons" onClick={this.handlePage} href="#button">Buttons</a></li>
    <li><a className="nav-link link-active" id="nav-inputs" onClick={this.handlePage} href="#input">Inputs</a></li>
</ul>
</nav>
<main>
  <div id="button">
    <Buttons />
  </div>
  <div id="input">
    <Inputs />
  </div>
</main>
</div>
 
  )
  }
}

ReactDOM.render(<MyApp />, document.getElementById('myApp'));
