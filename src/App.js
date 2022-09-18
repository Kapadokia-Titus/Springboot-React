import React, { Component} from 'react';
import Container from './Container';
import { LoadingOutlined } from '@ant-design/icons';
import { 
  Table,
  Avatar, 
  Spin

} from "antd";
import './App.css';
// import the client 
import {getAllStudents} from './client'; 


const antIcon= () => {
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
  };
class  App extends Component{

  state ={
    students:[],
    isFetching:false
  }

  componentDidMount(){
    this.fetchStudents();
  }
  fetchStudents=()=>{
    // set loader on
    this.setState({
      isFetching:true
    });
    getAllStudents()
    .then(res => res.json())
    .then(students => {
      console.log(students);
      this.setState({
        students, 
        isFetching:false
      })
    })
  }

 render(){
  // get students details from state
  const {students,isFetching} = this.state;
  // calling spin, if fetching
  if(isFetching){
  return(
    <Container>
    <Spin indicator={antIcon()}/>
  </Container>
  ) 
  }
  //check if students exists before rendering it 
  if (students && students.length){ 
    // define an array of objects
    const objects = [
      //give each student an avatar:: something like an icon, i'd be fun to identify them thatway
      {
        title:'',
        key:'avatar',
        render:(text, student)=>(
          <Avatar size='large'> 
          {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
          </Avatar>
        )
      },
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

    return (
    // use the container here
    <Container>
       <Table dataSource={students} 
            columns={objects} 
            rowKey='studentId'
            pagination={false} // removes pagination from the page
            />
    </Container>
   );
   
  }

  return <h1>Nothing found</h1>
 }
   
}

export default App;
