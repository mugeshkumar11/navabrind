import React from "react";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useReducer } from "react";
import { stateReducer } from "./pages/context/Reduce";
import { statecontext } from "./pages/context/Context";
import Details from "./pages/details/Details";
const App = () => {
  const [state, dispatch] = useReducer(stateReducer, { event: [] });
  console.log("statereduce", state, dispatch);
  return (
    <statecontext.Provider value={{ state, dispatch }}>
      <div>
        {state.Authenticated ? (
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route> */}
             
              <Route path="/" element={<Home />}></Route>
              <Route path="/details" element={<Details />}></Route>
              <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Navigate to={"/login"} />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </statecontext.Provider>
  );
};

export default App;
