import React, { Component } from 'react'
import EmployeeData from './EmployeeData'
import './style.css'

 class EmployeeForm extends Component {

    state={
        name: '',
        department:'',
        rating: '',

        user:[],

        showDetails: true,
    }

 changingInput=(event)=>{
       this.setState({
        [event.target.name] : event.target.value
      })
 }

    clicksubmit=(event)=>{
      event.preventDefault();
      // console.log(this.state);
     
     const tempObj={
       name:this.state.name,
       department:this.state.department,
       rating:this.state.rating
     } 
    //  console.log(tempObj);

      const tempArr= this.state.user
      tempArr.push(tempObj)

      this.setState({
        user:tempArr
      })

      this.setState({name:'',department:'',rating:''})
        this.setState({showDetails: !this.state.showDetails})
        console.log(this.state.user);
     
    }

    BackFile = ()=>{
      this.setState({showDetails: !this.state.showDetails});
    }



      render() {
    return (
      <>
          {this.state.showDetails? 

   <div>
            <h1>EMPLOYEE FEEDBACK FORM </h1>
          <form onSubmit={this.clicksubmit} >
             
             <label htmlFor="name">Name: </label>
             <input type="text" id='name' name='name' value={this.state.name} onChange={this.changingInput}/> <br /><br />

             <label htmlFor="dept">Department: </label>
             <input type="text" id='dept' name='department' value={this.state.department} onChange={this.changingInput}/> <br/><br />
             
             <label htmlFor="rate">Rating: </label>
             <input type="text" id='rate' name='rating' value={this.state.rating} onChange={this.changingInput}/> <br /><br />

              <button onClick={this.clicksubmit} className='btnSub'>submit</button>
          </form>

          </div>

     

       : <EmployeeData feedback={this.state.user}  toggleFunc={this.BackFile} />
      }


      </>
    )
  }
}

export default EmployeeForm
