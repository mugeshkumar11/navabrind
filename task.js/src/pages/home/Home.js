import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { useState, useEffect, useContext } from "react";
import { createSearchParams } from "react-router-dom";
import { statecontext } from "../context/Context";
const Home = () => {
  const [getlocaldata, setlocaldata] = useState([]);
  const Navigate = useNavigate();

  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("update"));
    setlocaldata(localStorageData);
  }, []);

  console.log("home", getlocaldata);
  const handleaction = (index) => {
    // e.preventDefault()
    Navigate({
      pathname: "/Details",
      search: createSearchParams({
        id: index,
      }).toString(),
    });
    const easy = getlocaldata[index];
    console.log("eve", easy);

    dispatch({ type: "add", payload: [...state.event, easy] });
  };

  return (
    <div className="homepage">
      <section className={"nav"}>
        <div className={"navbarflex"}>
          <div className={"navlogo"}>
            <Link to={"/Home"}>
              {" "}
              <h2>Welcome to the page our company wep page</h2>
            </Link>
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
        {getlocaldata.map((item, index) => (
          <tr key={index}>
            <td>{item.employeeid}</td>
            <td>{item.employeename}</td>
            <td>{item.employeedesgination}</td>
            <td>{item.employeemobile}</td>
            <td>
              <button className="actionbtn" onClick={() => handleaction(index)}>
                action
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
