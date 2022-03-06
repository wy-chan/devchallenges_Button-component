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

export default Buttons;
