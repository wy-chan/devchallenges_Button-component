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
        return <Inputs/>;
      break;
      default: return <Buttons />
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

class Buttons extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <section id="buttons-div">
    <h1>Buttons</h1>
    <div class="button-group">
  
     <div class="button-box">
     <p>&lt; Button /&gt;</p> 
     <button class="btn btn-default">Default</button>
     </div>
  
     <div class="button-box">
     <p class="notes">&:hover, &:focus</p> 
     <button class="btn btn-default default-hover">Default</button>
     </div>
  
</div>
  
<div class="button-group">
  
 <div class="button-box">
     <p>&lt; Button variant=”outline”/&gt;</p> 
     <button class="btn btn-outline-primary">Default</button>
     </div>
   <div class="button-box">
     <p class="notes">&:hover, &:focus</p> 
     <button class="btn btn-outline-primary primary-focus">Default</button>
     </div>
  
  
</div>
<div class="button-group">
  
     <div class="button-box">
     <p>&lt;Button variant=”text” &gt;</p> 
     <button class="btn btn-link">Default</button>
     </div>
   <div class="button-box">
     <p class="notes">&:hover, &:focus</p> 
     <button class="btn btn-link link-hover">Default</button>
     </div>

</div>
  
<div class="button-group">
     <div class="button-box">
     <p>&lt;Button disableShadow &gt;</p> 
     <button class="btn btn-primary no-shadow">Default</button>
     </div>
</div>

  <div class="button-group">
     <div class="button-box">
     <p>&lt;Button disabled / &gt;</p> 
     <button class="btn btn-default" disabled>Default</button>
     </div>

     <div class="button-box">
     <p>&lt;Button variant=”text” disabled&gt;</p> 
     <button class="btn btn-link" disabled>Default</button>
     </div>
</div>
<div class="button-group">
     <div class="button-box-L">
     <p>&lt;Button startIcon=”local_grocery_store”&gt;</p> 
     <button class="btn btn-primary btn-icon">
       <span class="material-icons">local_grocery_store</span>
       Default</button>
     </div>
     <div class="button-box-L">
     <p>&lt;Button endIcon=”local_grocery_store”&gt;</p> 
     <button class="btn btn-primary btn-icon">Default
       <span class="material-icons">local_grocery_store</span>
       </button>
     </div>
</div>
<div class="button-group">
     <div class="button-box">
     <p>&lt;Button size=”sm”&gt;</p> 
     <button class="btn btn-primary btn-sm">Default</button>
     </div>
     <div class="button-box">
     <p>&lt;Button size=”md”&gt;</p> 
     <button class="btn btn-primary btn-md">Default</button>
     </div>
     <div class="button-box">
     <p>&lt;Button size=”lg”&gt;</p> 
     <button class="btn btn-primary btn-lg">Default</button>
     </div>
</div>
<div class="button-group">
     <div class="button-box">
     <p>&lt;Button color=”default”&gt;</p> 
     <button class="btn btn-default">Default</button>
     </div>
     <div class="button-box">
     <p>&lt;Button color=”primary”&gt;</p> 
     <button class="btn btn-primary">Default</button>
     </div>
     <div class="button-box">
     <p>&lt;Button color=”secondary”&gt;</p> 
     <button class="btn btn-secondary">Default</button>
     </div>
     <div class="button-box">
     <p>&lt;Button color=”danger”&gt;</p> 
     <button class="btn btn-danger">Default</button>
     </div>
</div> 
<div class="button-group">
     <div class="button-box">
     <p class="notes">&:hover, &:focus</p> 
     <button class="btn btn-default default-hover">Default</button>
     </div>
     <div class="button-box">
     <p style={{opacity:"0"}} class="notes">&:hover, &:focus</p> 
     <button class="btn btn-primary primary-hover">Default</button>
     </div>
     <div class="button-box" >
     <p style={{opacity:"0"}} class="notes">&:hover, &:focus</p> 
     <button class="btn btn-secondary secondary-hover">Default</button>
     </div>
     <div class="button-box">
     <p style={{opacity:"0"}} class="notes">&:hover, &:focus</p> 
     <button class="btn btn-danger danger-hover">Default</button>
     </div>
</div> 
<p class="notes">Icons: https://material.io/resources/icons/?style=round</p>
</section>
    )
  }
}

class Inputs extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
    <section id="input">
    <h1>Inputs</h1> 
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input /&gt;</p> 
      <div class="input-label-box">
      <input placeholder="Placeholder" class="input-default" />
      <label class="label" id="input-default">Label</label> 
    </div>
      </div>
      <div class="input-box">
      <p class="notes">&:hover</p> 
             <div class="input-label-box"> 
     <input placeholder="Placeholder" class="input-default input-default-hover"/> 
        <label class="label" id="input-default">Label</label> 
    </div>
      </div>
      <div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-default-focus"/> 
      <label class="label" id="input-default">Label</label> 
    </div>
     </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-error"/> 
      <label class="label" id="input-default">Label</label> 
    </div>
     </div>
      <div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-error-hover"/> 
      <label class="label" id="input-default">Label</label> 
    </div>
     </div><div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-error input-error-focus"/> 
      <label class="label" id="input-default">Label</label> 
    </div>
     </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input disabled /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="input-default" disabled/>
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input helperText=”Some interesting text” /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="input-default"/>
    </div>
      <div class="input-box">
      <p class="notes">&lt;Input helperText=”Some interesting text” error /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="input-default"/> 
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input startIcon /&gt;</p> 
      <p class="label">Label</p> 
       <div class="input-default">
       <span class="material-icons">call</span>
     <input placeholder="call" class="input-with-icon"/>
       </div>
    </div>
      <div class="input-box">
      <p class="notes">&lt;Input endIcon /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="input-default"/> 
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input value=”text” /&gt;</p> 
      <p class="label">Label</p> 
     
     <input placeholder="Placeholder" value="Text" class="input-default"/>
      </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input size=”sm”  /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="form-control form-control-sm" />
    </div>
      <div class="input-box">
      <p class="notes">&lt;Input size=”md” /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="form-control form-control-md" /> 
    </div>
      <div class="input-box">
      <p class="notes">&lt;Input size=”lg” /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class="form-control form-control-lg" /> 
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input fullWidth /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" value="Text" class=""/>
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input multiline row=”4” /&gt;</p> 
      <p class="label">Label</p> 
     <input placeholder="Placeholder" class=""/>
    </div>
    </div>
    </section>
    )
  }
}

ReactDOM.render(<MyApp />, document.getElementById('myApp'));
