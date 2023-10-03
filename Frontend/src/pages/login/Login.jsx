import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()


  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username,
        password
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  const googleAuth = () =>{
    window.open("http://localhost:8800/api/auth/google", "_self")
  }


  return (
    <>
      <Navbar />
      <div className='register'>
        <div className="card">
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username' value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input type="password" placeholder='password' value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button onClick={handleClick}>login</button>
              </div>
            </form>
            <div className="oauths">

              <h4>or use one of these options
              </h4>
              <div className="oauthitems">
                <div className="facebook">
                  <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" />
                </div>
                <div className="google" onClick={googleAuth}>
                  <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />
                </div>
                <div className="twitter">
                  <img src="https://cdn-icons-png.flaticon.com/128/732/732221.png" alt="" />
                </div>
              </div>

            </div>


          </div>

        </div>
      </div>
    </>
  );
};

export default Login;

// {error && <span>{error.message}</span>}