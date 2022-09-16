import React, { Component } from 'react';
import { Table } from "antd";
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
    // define an array of objects
    const objects = [
      {
      title:'Student Id', 
      dataIndex:'studentId',
      key:'studentId'
      },
      {
        title:'First Name', 
        dataIndex:'firstName',
        key:'firstName'
      },
      {
        title:'Last Name', 
        dataIndex:'lastName',
        key:'lastName'
      },
      {
        title:'Email', 
        dataIndex:'email',
        key:'email'
      }, 
      {
        title:'Gender', 
        dataIndex:'gender',
        key:'gender'
      }
    ];

    return (<Table dataSource={students} 
            columns={objects} rowKey='studentId'/>);
   
  }

  return <h1>Nothing found</h1>
 }
   
}

export default App;
