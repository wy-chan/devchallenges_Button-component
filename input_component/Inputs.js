import React from 'react';

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
      <input placeholder="Placeholder" class="input-default input-default-size" />
      <label class="label">Label</label> 
    </div>
      </div>
      <div class="input-box">
      <p class="notes">&:hover</p> 
             <div class="input-label-box"> 
     <input placeholder="Placeholder" class="input-default input-default-size input-default-hover"/> 
        <label class="label">Label</label> 
    </div>
      </div>
      <div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-default-size input-default-focus"/> 
      <label class="label">Label</label> 
    </div>
     </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input error /&gt;</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-default-size input-error"/> 
      <label class="label">Label</label> 
    </div>
     </div>
      <div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-default-size input-error-hover"/> 
      <label class="label">Label</label> 
    </div>
     </div><div class="input-box">
      <p class="notes">&:focus</p> 
              <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default input-default-size input-error input-error-focus"/> 
      <label class="label">Label</label> 
    </div>
     </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input disabled /&gt;</p> 
      <p class="label">Label</p> 
      <input placeholder="Placeholder" class="input-default input-default-size" disabled/>
    </div>
    </div>
    <div class="button-group">
   <div class="input-box-L">
      <p class="notes">&lt;Input helperText=”Some interesting text” /&gt;</p> 
      <div class="input-label-box">
      <span class="help-block">Some interesting text</span>
      <input placeholder="Placeholder" class="input-default input-default-size" />
      <label class="label">Label</label> 
    </div>
      </div>
      <div class="input-box-L">
      <p class="notes">&lt;Input helperText=”Some interesting text” error /&gt;</p> 
   <div class="input-label-box">
      <span class="help-block help-text-error">Some interesting text</span>
      <input placeholder="Placeholder" class="input-default input-default-size input-error input-error-focus" />
      <label class="label">Label</label> 
    </div>
      </div>
    </div>
    <div class="button-group">
    <div class="input-box-L">
      <p class="notes">&lt;Input startIcon /&gt;</p>
      <div class="input-label-box">
      <div class="input-icon-box">
      <span class="material-icons input-icon input-icon-start">call</span>
      </div>
      <input placeholder="Placeholder" class="input-default input-default-size input-with-icon-start"/>
      <label class="label">Label</label> 
      </div>
    </div>
      <div class="input-box-L">
      <p class="notes">&lt;Input endIcon /&gt;</p> 
      <div class="input-label-box">
      <div class="input-icon-box">
      <span class="material-icons input-icon input-icon-end">lock</span>
      </div>
      <input placeholder="Placeholder" class="input-default input-default-size"/>
      <label class="label">Label</label> 
    </div>
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input value=”text” /&gt;</p> 
      <div class="input-label-box">
      <input placeholder="Placeholder" defaultValue="Text" class="input-default input-default-size"/>
      <label class="label">Label</label> 
      </div>
    </div>
    </div>
    <div class="button-group">
    <div class="input-box">
      <p class="notes">&lt;Input size=”sm”  /&gt;</p> 
      <div class="input-label-box">
     <input placeholder="Placeholder" class="input-default form-control form-control-sm" />
        <label class="label">Label</label> 
      </div>
      </div>
      <div class="input-box">
      <p class="notes">&lt;Input size=”md” /&gt;</p> 
      <div class="input-label-box">
      <input placeholder="Placeholder" class="input-default form-control form-control-md" />
      <label class="label">Label</label> 
      </div>
      </div>
      <div class="input-box">
      <p class="notes">&lt;Input size=”lg” /&gt;</p> 
      <div class="input-label-box">
      <input placeholder="Placeholder" class="input-default form-control form-control-lg" /> 
      <label class="label">Label</label> 
      </div>
      </div>
    </div>
    <div class="button-group">
       <div class="input-box-f">
      <p class="notes">&lt;Input fullWidth /&gt;</p> 
      <div class="input-label-box">
      <input placeholder="Placeholder" class="input-default input-fullwidth" />
      <label class="label">Label</label> 
    </div>
      </div>
    </div>
    <div class="button-group">
       <div class="">
      <p class="notes">&lt;Input multiline row=”4” /&gt;</p> 
      <div class="input-label-box">
      <textarea placeholder="Placeholder" class="form-control input-default textarea" rows="4" ></textarea>
      <label class="label">Label</label> 
      </div>
      </div>
    </div>
    </section>
    )
  }
}

export default Inputs;
