import React from 'react'
import './Body.css'

export default function Body() {
    return (
    <div className=" conatiner pt-4 ">
<div className="card-group " >
  <div className="card rounded-left innerCard shadow-lg rounded" >
    <div className="card-body text-center">
    <span className="dot"><p className='afya'>AFYA</p></span>
    <br/><br/>
    <h5 className="card-text">143.00</h5>
      <h6 className="card-text">Balance</h6>
    </div>
  </div>
  <div className="card rounded-right innerCard shadow-lg rounded" >
    <div className="card-body text-center">
     <span className="dot"><p className='zar'>ZAR</p></span>
     <br/><br/>
      <h5 className="card-text">R21.00</h5>
      <h6 className="card-text">Equivalent</h6>
    </div>
  </div>
  
  </div>
  <div className="pt-4" >
  <div className="card" style={{backgroundColor:'#f0f4f4'}}>
  <p className="text-left pt-3" style={{color:'blue'}}>Select Currency:</p>
</div>
  </div>
  <div className="pt-2" >
  <div className="input-group mb-3" style={{backgroundColor:'#f0f4f4'}}>
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">AFYA</button>
  </div>
  <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="0.00000001"/>
</div>
  </div>
  <div className="mx-auto pt-1 d-flex justify-content-center">
  <button type="button" className="btn btn-primary mr-5" style={{width:"100px", height: "50px"}}>SEND</button>
  <button type="button" className="btn btn-primary" style={{width:"100px", height: "50px"}}>RECEIVE</button>
  </div>

  <div className="pt-3">
  <div className="card" style={{backgroundColor:'#cccccc'}}>
  <h4 className="text-left pt-2"style={{color:'white'}}>Recent Activity</h4>
</div>
  </div>
  <table className="table">
  <tbody>
    <tr>
      <th scope="row"><i className="fas fa-2x fa-virus"></i></th>
      <td>HIV Blood Draw Test</td>
      <td>A100</td>
    </tr>
    <tr>
      <th scope="row"><i className="fas fa-2x fa-lungs"></i></th>
      <td>TB Radiology XRay</td>
      <td>A30</td>
    </tr>
    <tr>
      <th scope="row"><i className="fas fa-2x fa-user-md"></i></th>
      <td>Blood Pressure Check</td>
      <td>A10</td>
    </tr>
  </tbody>
</table>
<div className="card" style={{backgroundColor:'#cccccc'}}>
  <p className="card-body"></p>
</div>
        </div>
    )
}
