import React from 'react'
import './Body.css'

export default function Body() {
    return (
    <div className=" conatiner" id="body">
<div className="card" >
  <div className="card rounded-left innerCard shadow-lg rounded" >
    <div className="card-body text-center">
    <h5 className="card-text">WALLET BALANCE:</h5>
    <h5 className="card-text">TOKEN BALANCE:</h5>
    <h5 className="card-text">NAIRA BALANCE:</h5>

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
    <button className="btn btn-outline-secondary " type="button" >TOKEN</button>
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
    <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <th scope="row">1/1/21</th>
      <th scope="row">Sent</th>
      <th scope="row">N100.00</th>
    </tr>
    <tr>
      <th scope="row">2/2/21</th>
      <th scope="row">Receive</th>
      <th scope="row">N200.00</th>
    </tr>
    <tr>
      <th scope="row">3/3/21</th>
      <th scope="row">Sent</th>
      <th scope="row">N300.00</th>
    </tr>
  </tbody>
</table>
<div className="card" style={{backgroundColor:'#cccccc'}}>
  <p className="card-body"></p>
</div>
        </div>
    )
}
