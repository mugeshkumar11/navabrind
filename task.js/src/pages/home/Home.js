import React from 'react'
import { Link , useNavigate} from 'react-router-dom';
import './home.css';
import { useState, useEffect} from 'react';
import { createSearchParams } from 'react-router-dom';
const Home = () => {
  const [getlocaldata , setlocaldata] = useState([]);
  const Navigate = useNavigate();
  

  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem("update"))
    setlocaldata(localStorageData);
  },[])
  
  console.log("home",getlocaldata)
 const handleaction = (eve) =>{
  // e.preventDefault();
  const easy = getlocaldata[eve]
  console.log("eve", easy);
    Navigate({
      pathname:"/Details",
      search:createSearchParams(easy).toString()
    });
 }
  return (
    <div className='homepage'>
       <section className={'nav'}>
            <div className={'navbarflex'}>
                <div className={'navlogo'}>
                    <Link to={"/Home"}> <h2>Welcome to the page our company wep page</h2></Link>
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
          {getlocaldata.map((item,index)=>(
          <tr key={index}>
             <td>{item.employeeid}</td>
             <td>{item.employeename}</td>
             <td>{item.employeedesgination}</td>
             <td>{item.employeemobile}</td>
             <td key={index}><button className='actionbtn' onClick={() => handleaction(index)}>action</button></td>
          </tr>
           ))}
        </table>
     
    </div>
  )
}

export default Home