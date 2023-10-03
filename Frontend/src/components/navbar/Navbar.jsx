import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
faUser, faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  position: 'absolute',
  top: '10%',
  right: '10%',
  width: 140,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  borderRadius : 5,
  display : "flex",
  flexDirection : "column",
  gap : "5px"
};
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenClose = () => setOpen(!open);
  const { user, dispatch } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>

        {user ? (<div className="userItems">
          <div className="flag">
            <span>INR</span>
            <img src="https://img.icons8.com/?size=1x&id=esGVrxg9VCJ1&format=png" alt="" />
          </div>
          <div className="user" onClick={handleOpenClose}>
            <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="" />
            <span>{user.username}</span>
            <Modal
              open={open}
              onClose={handleOpenClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{display: 'flex',gap : "10px"}}>
                <FontAwesomeIcon icon={faUser} />
                  <span
                  style={{
                 fontSize : "12px",
                 cursor : "pointer"
                  }}
                  >Manage Account</span>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{display: 'flex',gap : "10px"}}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                 <span style={{
                   fontSize : "12px",
                   cursor : "pointer"}}
                   onClick={()=>dispatch({type : "LOGOUT", payload : null})}
                   >Sign Out</span>
                </Typography>
              </Box>
            </Modal>
          </div>

        </div>)


          : (
            <div className="navItems">
              <div className="flag">
                <span>INR</span>
                <img src="https://img.icons8.com/?size=1x&id=esGVrxg9VCJ1&format=png" alt="" />
              </div>
              <Link to={`/register`}>
                <button className="navButton">Register</button>
              </Link>
              <Link to={`/login`}>
                <button className="navButton">Login</button>
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default Navbar;
