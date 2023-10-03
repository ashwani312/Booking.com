import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Register = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.post("/auth/register", {
            username,
            email,
            password
        });
        console.log(res)
        navigate("/login")
    }
    return (
        <>
            <Navbar />
            <div className='register'>
                <div className="card">
                    <div className="right">
                        <h1>Register</h1>
                        <form>
                            <input type="text" placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} />
                            <input type="email" placeholder='Email' value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="password" placeholder='password' value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div>
                                <button onClick={handleClick}>Register</button>
                            </div>
                        </form>
                        <div className="oauths">

                            <h4>or use one of these options
                            </h4>
                            <div className="oauthitems">
                                <div className="facebook">
                                    <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" />
                                </div>
                                <div className="google">
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
    )
}
