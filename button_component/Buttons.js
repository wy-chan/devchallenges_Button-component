
class Buttons extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <section id="buttons-div">
    <h1>Buttons</h1>
    <div className="button-group">
  
     <div className="button-box">
     <p>&lt; Button /&gt;</p> 
     <button class="btn btn-default">Default</button>
     </div>
  
     <div className="button-box">
     <p className="notes">&:hover, &:focus</p> 
     <button className="btn btn-default default-hover">Default</button>
     </div>
  
</div>
  
<div className="button-group">
  
 <div className="button-box">
     <p>&lt; Button variant=”outline”/&gt;</p> 
     <button className="btn btn-outline-primary">Default</button>
     </div>
   <div className="button-box">
     <p className="notes">&:hover, &:focus</p> 
     <button className="btn btn-outline-primary primary-focus">Default</button>
     </div>
  
  
</div>
<div className="button-group">
  
     <div className="button-box">
     <p>&lt;Button variant=”text” &gt;</p> 
     <button className="btn btn-link">Default</button>
     </div>
   <div className="button-box">
     <p className="notes">&:hover, &:focus</p> 
     <button className="btn btn-link link-hover">Default</button>
     </div>

</div>
  
<div className="button-group">
     <div className="button-box">
     <p>&lt;Button disableShadow &gt;</p> 
     <button className="btn btn-primary no-shadow">Default</button>
     </div>
</div>

  <div className="button-group">
     <div className="button-box">
     <p>&lt;Button disabled / &gt;</p> 
     <button className="btn btn-default" disabled>Default</button>
     </div>

     <div className="button-box">
     <p>&lt;Button variant=”text” disabled&gt;</p> 
     <button className="btn btn-link" disabled>Default</button>
     </div>
</div>
<div className="button-group">
     <div className="button-box-L">
     <p>&lt;Button startIcon=”local_grocery_store”&gt;</p> 
     <button className="btn btn-primary btn-icon">
       <span className="material-icons">local_grocery_store</span>
       Default</button>
     </div>
     <div className="button-box-L">
     <p>&lt;Button endIcon=”local_grocery_store”&gt;</p> 
     <button className="btn btn-primary btn-icon">Default
       <span className="material-icons">local_grocery_store</span>
       </button>
     </div>
</div>
<div className="button-group">
     <div className="button-box">
     <p>&lt;Button size=”sm”&gt;</p> 
     <button className="btn btn-primary btn-sm">Default</button>
     </div>
     <div className="button-box">
     <p>&lt;Button size=”md”&gt;</p> 
     <button className="btn btn-primary btn-md">Default</button>
     </div>
     <div className="button-box">
     <p>&lt;Button size=”lg”&gt;</p> 
     <button className="btn btn-primary btn-lg">Default</button>
     </div>
</div>
<div className="button-group">
     <div className="button-box">
     <p>&lt;Button color=”default”&gt;</p> 
     <button className="btn btn-default">Default</button>
     </div>
     <div className="button-box">
     <p>&lt;Button color=”primary”&gt;</p> 
     <button className="btn btn-primary">Default</button>
     </div>
     <div className="button-box">
     <p>&lt;Button color=”secondary”&gt;</p> 
     <button className="btn btn-secondary">Default</button>
     </div>
     <div className="button-box">
     <p>&lt;Button color=”danger”&gt;</p> 
     <button className="btn btn-danger">Default</button>
     </div>
</div> 
<div className="button-group">
     <div className="button-box">
     <p className="notes">&:hover, &:focus</p> 
     <button className="btn btn-default default-hover">Default</button>
     </div>
     <div className="button-box">
     <p style={{opacity:"0"}} className="notes">&:hover, &:focus</p> 
     <button className="btn btn-primary primary-hover">Default</button>
     </div>
     <div className="button-box" >
     <p style={{opacity:"0"}} className="notes">&:hover, &:focus</p> 
     <button className="btn btn-secondary secondary-hover">Default</button>
     </div>
     <div className="button-box">
     <p style={{opacity:"0"}} className="notes">&:hover, &:focus</p> 
     <button className="btn btn-danger danger-hover">Default</button>
     </div>
</div> 
<p className="notes">Icons: https://material.io/resources/icons/?style=round</p>
</section>
    )
  }
}


