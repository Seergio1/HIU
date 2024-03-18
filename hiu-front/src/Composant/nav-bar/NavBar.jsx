import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ lenis }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  useEffect(() => {
    handleScroll(open);
    const navBarItems = document.querySelectorAll('.nav-bar-item');

    navBarItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'scale(6)';
      });

      item.addEventListener('mouseout', () => {
        const cursor = document.querySelector('.cursor');
        cursor.style.transform = 'none'; // Réinitialiser la transformation
      });
    });
  }, [open]);

  const handleScroll = (stop) => {
    if (stop) lenis.stop();
    else lenis.start();
  };
  return (
    <>
      <div className="nav-bar-container">
        <div className={`nav-bar-header ${open ? "open_nav" : ""}`}>
          <div className="logo-container" onClick={() => {
            navigate('/')
          }}>
            {/* <img src={""} alt="logo" /> */}
            ART-MESIA
          </div>
          <div className="menu-icon " onClick={handleOpen}>
            <div className={`bar ${open ? "up_" : ""}`}></div>
            <div className={`bar ${open ? "down_" : ""}`}></div>
          </div>
        </div>

        <div className={`nav-bar-content ${open ? "open_content" : ""}`}>
          <div className="list_">

            <div className={`nav-bar-item ${open ? "show" : ""}`} onClick={() => {
              handleOpen()
              setTimeout(() => {
                navigate('/Exposition')
              }, 400)
            }}>Exposition</div>

            <div className={`nav-bar-item ${open ? "show" : ""}`} onClick={() => {
              handleOpen()
              setTimeout(() => {
                navigate('/Oeuvre')
                localStorage.setItem('displayOeuvre', 'All')
              }, 400)
            }}>Oeuvre</div>

            <div className={`nav-bar-item ${open ? "show" : ""}`} onClick={() => {
              handleOpen()
              setTimeout(() => {
                navigate('/Evenement')
              }, 400)
            }}>Evenement</div>

            <div className={`nav-bar-item ${open ? "show" : ""}`} onClick={() => {
              handleOpen()
              setTimeout(() => {
                navigate('/Login')
              }, 400)
            }}>Log in</div>

          </div>

        </div>
      </div>
    </>
  );
}

export default NavBar;
