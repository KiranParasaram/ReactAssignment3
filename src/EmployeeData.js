import React, { Component } from 'react'


 class EmployeeData extends Component {
  render() {
    return (
      <div>
          <h1>EMPLOYEE FEEDBACK DATA</h1>
         
       <div className='outerbox'>
            {this.props.feedback.map((item,index)=>{
           return(
             <div key={index} className='valuein'>
              Name: {item.name} || Department: {item.department} || Rating: {item.rating}

              
             </div>
           )
         })}
      </div>

      <div>
      <button onClick={this.props.toggleFunc} className='btnSub'>GO BACK</button>
      </div>
      
      </div>
    )
  }
}

export default EmployeeData


