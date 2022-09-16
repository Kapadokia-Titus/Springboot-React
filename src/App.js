import React, { Component } from 'react';
import './App.css';
// import the client 
import {getAllStudents} from './client'; 

class  App extends Component{

  state ={
    students:[]
  }

  componentDidMount(){
    this.fetchStudents();
  }
  fetchStudents=()=>{
    getAllStudents()
    .then(res => res.json())
    .then(students => {
      console.log(students);
      this.setState({
        students
      })
    })
  }

 render(){
  // get students details from state
  const {students} = this.state;
  //check if students exists before rendering it 
  if (students && students.length){ 
    // if exists, map it to the DOM
   return students.map((student, index)=>{
    // every react requires key
      return (<div key={index}>
        <h2>{student.studentId}</h2>
        <p>{student.firstName}</p>
        <p>{student.lastName}</p>
        <p>{student.gender}</p>
        <p>{student.email}</p>
      </div>
    )})
  }
 
  return <h1>Nothing found</h1>
 }
   
}

export default App;
