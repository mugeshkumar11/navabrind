import React, { useState ,useEffect, useContext} from 'react'
import './details.css';
import image from './details.jpg';
import { statecontext } from '../context/Context';
import { useSearchParams } from 'react-router-dom';
const Details = () => {
    
  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);

   const [param] = useSearchParams();
   console.log(param.get("id"));
   let temp = param.get("id")
  return (
    <div className='detailpage'>
         {state.event[temp].index}
      <section className='details'>
        <div className='detailsflex'>
            <div className='detailleft'>
                <h2>React js</h2>
                <img src={image}></img>
                <h3>Welcome,</h3>
                <h3>{state.event[temp].employeename}</h3>
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
             <td>{state.event[temp].employeeid}</td>
             <td>{state.event[temp].employeename}</td>
             <td>{state.event[temp].employeedesgination}</td>
             <td>{state.event[temp].employeemobile}</td>
          </tr>
         
        </table>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Details