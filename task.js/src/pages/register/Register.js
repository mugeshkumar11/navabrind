import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setregister] = useState({
    employeedesgination: "",
    employeeid: "",
    employeename: "",
    employeepassword: "",
    employeemobile: "",
  });
  const [update, setupdate] = useState([]);
  const [error, seterror] = useState("");
  console.log("register", register);
  console.log(update);
  const navigate = useNavigate();

  const handlesignup = (e) => {
    setupdate([...update, register]);
    e.preventDefault();

    if (
      register.employeename === "" &&
      register.employeeid === "" &&
      register.employeedesgination === "" &&
      register.employeepassword === "" &&
      register.employeemobile === ""
    ) {
      seterror("please enter input data");
      return;
    } else if (register.employeename === "") {
      seterror("please enter input data");
      return;
    } else if (register.employeeid === "") {
      seterror("please enter input data");
      return;
    } else if (register.employeedesgination === "") {
      seterror("please enter input data");
      return;
    } else if (register.employeemobile === "") {
      seterror("please enter input data");
      return;
    } else if (register.employeepassword === "") {
      seterror("please enter input data");
      return;
    } else if (JSON.parse(localStorage.getItem("update")) === null) {
      localStorage.setItem("update", JSON.stringify([register]));
    } else {
      let data = JSON.parse(localStorage.getItem("update"));
      data.push(register);
      localStorage.setItem("update", JSON.stringify(data));
    }
    navigate("/Login");
  };

  return (
    <div className="loginpage">
      <section className="container">
        <div className="loginflex">
          <h3>Register page</h3>
          <div className="usercredent">
            <input
              type="number"
              placeholder={"EmployeeId"}
              value={register.employeeid}
              onChange={(eve) =>
                setregister({ ...register, employeeid: eve.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder={"EmployeeName"}
              value={register.employeename}
              onChange={(eve) =>
                setregister({ ...register, employeename: eve.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder={"EmployeeDesgination"}
              value={register.employeedesgination}
              onChange={(eve) =>
                setregister({
                  ...register,
                  employeedesgination: eve.target.value,
                })
              }
            ></input>
            <input
              type="number"
              placeholder={"Employeemobile"}
              value={register.employeemobile}
              onChange={(eve) =>
                setregister({ ...register, employeemobile: eve.target.value })
              }
            ></input>
            <input
              type="password"
              placeholder={"EmployeePassword"}
              value={register.employeepassword}
              onChange={(eve) =>
                setregister({ ...register, employeepassword: eve.target.value })
              }
            ></input>
            <button onClick={handlesignup}>signup</button>
            <h4>{error}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
