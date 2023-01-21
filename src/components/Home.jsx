import React, { useEffect, useState } from "react";
import {Table} from 'semantic-ui-react';
import axios from 'axios'

const Home = () => {
      const [user, setUser] = useState([]);

  const fetchData
    = ()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then(
          (response)=>{
              console.log(response.data);
              setUser(response.data);
          }
      ).catch()
  }
  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>

 <section class="Background">
      
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col ">
            <div class="card card-table" >
              <div class="row g-0">
              <div class="d-flex justify-content-center pt-3">
              <h1 class="fw-Bolder mb-3 pb-3 headeing" >Employee List</h1>
              </div>
              <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>

 {user.map(userObj=>{
return(
  <Table.Row key={userObj.id.toString()}>
        <Table.Cell>{userObj.id}</Table.Cell>
        <Table.Cell>{userObj.name}</Table.Cell>
        <Table.Cell>{userObj.email}</Table.Cell>
        
      </Table.Row>
)

     })}
    
    </Table.Body>
   
  </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

  </section>





    </div>
  )
}

export default Home