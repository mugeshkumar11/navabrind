import React, { useState, useContext } from "react";
import "./login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { statecontext } from "../context/Context";
const Login = () => {
  const [getlocaldata, setlocaldata] = useState([]);
  const [validate, setvalidate] = useState({
    employeeid: "",
    employeepassword: "",
  });
  const [error, seterror] = useState("");
  const Navigate = useNavigate();
  console.log("validate", validate);

  const { state, dispatch } = useContext(statecontext);
  console.log("statecontext", state.event);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("update"));
    setlocaldata(localStorageData);
  }, []);

  console.log("set", getlocaldata);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (validate.employeeid === "" && validate.employeepassword === "") {
      seterror("please enter id and password");
      return;
    } else if (validate.employeepassword === "") {
      seterror("please enter the password ");
    } else if (validate.employeeid === "") {
      seterror("please enter the id ");
    } else {
      getlocaldata.find((item) => {
        if (
          validate.employeeid === item.employeeid &&
          validate.employeepassword === item.employeepassword
        ) {
          alert("welcome to the our company");
          Navigate("/Home");
          return item;
        }
      });
    }

    dispatch({ type: "login", payload: state.isAuthenticated });

    sessionStorage.setItem("islogged", JSON.stringify(true));
  };
  const handleregister = () =>{
    Navigate("/Register")
  }
  return (
    <div className="loginpage">
      <section className="container1">
        <div className="logflex">
          <h3>Login page</h3>
          <div className="usercredent">
            <input
              type="number"
              placeholder={"EmployeeId"}
              value={validate.employeeid}
              onChange={(eve) =>
                setvalidate({ ...validate, employeeid: eve.target.value })
              }
            ></input>
            <input
              type="password"
              placeholder={"EmployeePassword"}
              value={validate.employeepassword}
              onChange={(eve) =>
                setvalidate({ ...validate, employeepassword: eve.target.value })
              }
            ></input>
            <button onClick={handlesubmit}>Signup</button>
            <button onClick={handleregister}>Register</button>
            <h4>{error}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
