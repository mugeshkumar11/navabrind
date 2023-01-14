import React, { useState ,useEffect} from 'react'
import './details.css';
import image from './details.jpg'
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
const Details = () => {
    const [data , setdata] = useState([]);
   
  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem("update"))
    setdata(localStorageData);
  },[])
  console.log("data",data);

  const [param] = useSearchParams();
   console.log(param.get,"para");
   console.log(param,"ara");

  return (
    <div className='detailpage'>
         {data.map((item)=>(
      <section className='details'>
        <div className='detailsflex'>
            <div className='detailleft'>
                <h2>React js</h2>
                <img src={image}></img>
                <h3>Welcome,</h3>
                <h3>{item.employeename}</h3>
                <h4>Therefore, employees are the most valuable assets an organization has. It's their abilities, knowledge, and experience that can't be replaced. So, going forward, organizations need to place emphasis and importance on the contribution that employees that they have in order to propel themselves ahead.</h4>
            </div>
            <div className='detailright'>
            <table>
          <tr>
            <th>EmployeeId</th>
            <th>EmployeeName</th>
            <th>EmployeeDesignation</th>
            <th>EmployeeMobile</th>
          </tr>
          <tr>
             <td>{item.employeeid}</td>
             <td>{item.employeename}</td>
             <td>{item.employeedesgination}</td>
             <td>{item.employeemobile}</td>
          </tr>
         
        </table>
            </div>
        </div>
      </section>
      
          ))};
    </div>
  )
}

export default Details