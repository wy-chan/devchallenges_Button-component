

class Inputs extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
    <section id="input">
    <h1>Inputs</h1> 
    <div className="button-group">
    <div className="input-box">
      <p className="notes">&lt;Input /&gt;</p> 
      <div className="input-label-box">
      <input placeholder="Placeholder" className="input-default input-default-size" />
      <label className="label">Label</label> 
    </div>
      </div>
      <div className="input-box">
      <p className="notes">&:hover</p> 
             <div className="input-label-box"> 
     <input placeholder="Placeholder" className="input-default input-default-size input-default-hover"/> 
        <label className="label">Label</label> 
    </div>
      </div>
      <div className="input-box">
      <p className="notes">&:focus</p> 
              <div className="input-label-box">
     <input placeholder="Placeholder" className="input-default input-default-size input-default-focus"/> 
      <label className="label">Label</label> 
    </div>
     </div>
    </div>
    <div className="button-group">
    <div className="input-box">
      <p className="notes">&lt;Input error /&gt;</p> 
              <div className="input-label-box">
     <input placeholder="Placeholder" className="input-default input-default-size input-error"/> 
      <label className="label">Label</label> 
    </div>
     </div>
      <div className="input-box">
      <p className="notes">&:focus</p> 
              <div className="input-label-box">
     <input placeholder="Placeholder" className="input-default input-default-size input-error-hover"/> 
      <label className="label">Label</label> 
    </div>
     </div><div className="input-box">
      <p className="notes">&:focus</p> 
              <div className="input-label-box">
     <input placeholder="Placeholder" className="input-default input-default-size input-error input-error-focus"/> 
      <label className="label">Label</label> 
    </div>
     </div>
    </div>
    <div className="button-group">
    <div className="input-box">
      <p className="notes">&lt;Input disabled /&gt;</p> 
      <p className="label">Label</p> 
      <input placeholder="Placeholder" className="input-default input-default-size" disabled/>
    </div>
    </div>
    <div className="button-group">
   <div className="input-box-L">
      <p className="notes">&lt;Input helperText=”Some interesting text” /&gt;</p> 
      <div className="input-label-box">
      <span className="help-block">Some interesting text</span>
      <input placeholder="Placeholder" className="input-default input-default-size" />
      <label className="label">Label</label> 
    </div>
      </div>
      <div className="input-box-L">
      <p className="notes">&lt;Input helperText=”Some interesting text” error /&gt;</p> 
   <div className="input-label-box">
      <span className="help-block help-text-error">Some interesting text</span>
      <input placeholder="Placeholder" className="input-default input-default-size input-error input-error-focus" />
      <label className="label">Label</label> 
    </div>
      </div>
    </div>
    <div className="button-group">
    <div className="input-box-L">
      <p className="notes">&lt;Input startIcon /&gt;</p>
      <div className="input-label-box">
      <div className="input-icon-box">
      <span className="material-icons input-icon input-icon-start">call</span>
      </div>
      <input placeholder="Placeholder" className="input-default input-default-size input-with-icon-start"/>
      <label className="label">Label</label> 
      </div>
    </div>
      <div className="input-box-L">
      <p className="notes">&lt;Input endIcon /&gt;</p> 
      <div className="input-label-box">
      <div className="input-icon-box">
      <span className="material-icons input-icon input-icon-end">lock</span>
      </div>
      <input placeholder="Placeholder" className="input-default input-default-size"/>
      <label className="label">Label</label> 
    </div>
    </div>
    </div>
    <div className="button-group">
    <div className="input-box">
      <p className="notes">&lt;Input value=”text” /&gt;</p> 
      <div className="input-label-box">
      <input placeholder="Placeholder" defaultValue="Text" className="input-default input-default-size"/>
      <label className="label">Label</label> 
      </div>
    </div>
    </div>
    <div className="button-group">
    <div className="input-box">
      <p className="notes">&lt;Input size=”sm”  /&gt;</p> 
      <div className="input-label-box">
     <input placeholder="Placeholder" className="input-default form-control form-control-sm" />
        <label className="label">Label</label> 
      </div>
      </div>
      <div className="input-box">
      <p className="notes">&lt;Input size=”md” /&gt;</p> 
      <div className="input-label-box">
      <input placeholder="Placeholder" className="input-default form-control form-control-md" />
      <label className="label">Label</label> 
      </div>
      </div>
      <div className="input-box">
      <p className="notes">&lt;Input size=”lg” /&gt;</p> 
      <div className="input-label-box">
      <input placeholder="Placeholder" className="input-default form-control form-control-lg" /> 
      <label className="label">Label</label> 
      </div>
      </div>
    </div>
    <div className="button-group">
       <div className="input-box-f">
      <p className="notes">&lt;Input fullWidth /&gt;</p> 
      <div className="input-label-box">
      <input placeholder="Placeholder" className="input-default input-fullwidth" />
      <label className="label">Label</label> 
    </div>
      </div>
    </div>
    <div className="button-group">
       <div className="">
      <p className="notes">&lt;Input multiline row=”4” /&gt;</p> 
      <div className="input-label-box">
      <textarea placeholder="Placeholder" className="form-control input-default textarea" rows="4" ></textarea>
      <label className="label">Label</label> 
      </div>
      </div>
    </div>
    </section>
    )
  }
}

