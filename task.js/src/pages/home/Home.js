import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import { useState, useEffect} from 'react';
const Home = () => {
  const [getlocaldata , setlocaldata] = useState([]);

  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem("update"))
    setlocaldata(localStorageData);
  },[])
  
  console.log("home",getlocaldata)

  return (
    <div>
       <section className={'nav'}>
            <div className={'navbarflex'}>
                <div className={'navlogo'}>
                    <Link to={"/Home"}> <h2>Welcome to the page</h2></Link>
                </div>
                <div className={'navbarlist'}>
                 <ul>
                  <input type="search" placeholder='search'></input>
                     <Link to={"/Details"}><li>Details</li></Link>    
                  </ul>
                </div>
            </div>
      </section>
        <table>
          <tr>
            <th>EmployeeId</th>
            <th>EmployeeName</th>
            <th>EmployeeDesignation</th>
            <th>EmployeeMobile</th>
            <th>Action</th>
          </tr>
          {getlocaldata.map((item)=>(
          <tr>
             <td>{item.employeeid}</td>
             <td>{item.employeename}</td>
             <td>{item.employeedesgination}</td>
             <td>{item.employeemobile}</td>
             <td><button className='actionbtn'>action</button></td>
          </tr>
           ))}
        </table>
     
    </div>
  )
}

export default Home