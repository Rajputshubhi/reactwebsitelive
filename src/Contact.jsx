import React from 'react';

const Contact =()=>{
  
    return(
        <>
        <div className="contact">
        <h1>Contact US</h1>
        <div className="row w-50">
        <div className="col">
        <input type="text" className="form-control form-text  text-muted" placeholder="First Name " />
        </div>
        <div className="col">
        <input type="text" className="form-control form-text  text-muted" placeholder="Last Name" />
        </div>
        <br /><br /><br/>
        <div className="form-group">
        <input type="text" className="form-control " placeholder="Father Name ..." />
        
        </div>
        <br /><br/><br />
        <div className="form-group mt-6">
        <input type="text" className="form-control " placeholder="Mobile No..." />
        </div>
        <br /><br />
        <div className="form-group">
        <input type="checkbox" className="form-check-input " placeholder="Mobile No..." />
       &nbsp; <label className="form-check-label">Check me out</label>
        </div>
        <br />
        <br />
        <button className="btn btn-success">submit</button>
         </div>
        </div>
        
        
        </>
    );

};
export default Contact;