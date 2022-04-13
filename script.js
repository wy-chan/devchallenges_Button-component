class MyApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: "",
      currentBtnId: ""
    }; 
    this.handlePage=this.handlePage.bind(this);
    this.showPage=this.showPage.bind(this);
    this.closeButton=this.closeButton.bind(this);
    this.showButton=this.showButton.bind(this);
    this.toTop=this.toTop.bind(this);
  }

  componentDidMount() {
    let regex = /#[a-z]+$/i;
    let page ="Buttons";
    let btn = "nav-buttons";
    (window.location.href.match(regex))? 
    page = window.location.href.match(regex)[0]: null;
    if (page == "#input"){
      page ="Inputs";
      btn="nav-inputs";
    };
    this.setState({
      currentPage: page,
      currentBtnId: btn
    });
    this.showButton(btn);
    this.showPage(page);
    this.toTop();
  }
  
  handlePage(event){
    this.closeButton(this.state.currentBtnId);
    this.showButton(event.target.id);

    this.setState({
      currentPage : event.target.text,
      currentBtnId: event.target.id
    });
    this.toTop();
  }

  showPage(page){
    switch(page){
      case"Inputs": 
      return (this.state.currentPage == "Inputs")?<Inputs />: null;
      break;
      default: return (this.state.currentPage != "Inputs")?<Buttons />: null;
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
    <li><a className="nav-link" id="nav-inputs" onClick={this.handlePage} href="#input">Inputs</a></li>
</ul>
</nav>
<main>
  <div id="button">
   {this.showPage("Buttons")} 
  </div>
  <div id="input">
   {this.showPage("Inputs")} 
  </div>
</main>
</div>
 
  )
  }
}

ReactDOM.render(<MyApp />, document.getElementById('myApp'));
