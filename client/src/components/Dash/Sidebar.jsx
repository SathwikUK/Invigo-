import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings, IoBookSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
        .brand,
        .links>ul>li:nth-of-type(1),
        .links>ul>li:nth-of-type(2),
        .links>ul>li:nth-of-type(3),
        .links>ul>li:nth-of-type(4),
        .links>ul>li:nth-of-type(5),
        .links>ul>li:nth-of-type(6),
        .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <IoBookSharp />
            <span>INVIGO</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={(e) => {
                e.stopPropagation();
                setNavbarState(true);
              }} />
            )}
          </div>
          <div className="links">
            <ul>
              <li className={currentLink === 1 ? "active" : ""} onClick={() => setCurrentLink(1)}>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>
              <li className={currentLink === 2 ? "active" : ""} onClick={() => setCurrentLink(2)}>
              <Link to="/faculty"> {/* Link to /faculty */}
                <RiDashboard2Fill />
                <span> Faculty Details</span>
              </Link>
              </li>
              <li className={currentLink === 3 ? "active" : ""} onClick={() => setCurrentLink(3)}>
                <Link to="/download">
                  <FaAddressCard />
                  <span>  Allocation</span>
                  </Link>
              </li>
              <li className={currentLink === 4 ? "active" : ""} onClick={() => setCurrentLink(4)}>
                <a href="#">
                  <GiTwirlCenter />
                  <span> Past Invigilations</span>
                </a>
              </li>
              <li className={currentLink === 5 ? "active" : ""} onClick={() => setCurrentLink(5)}>
                <a href="#">
                  <BsFillChatTextFill />
                  <span> Announcements</span>
                </a>
              </li>
              <li className={currentLink === 6 ? "active" : ""} onClick={() => setCurrentLink(6)}>
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li className={currentLink === 1 ? "active" : ""} onClick={() => setCurrentLink(1)}>
              <a href="#">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </a>
            </li>
            <li className={currentLink === 2 ? "active" : ""} onClick={() => setCurrentLink(2)}>
            <Link to="/faculty"> {/* Link to /faculty */}
                <RiDashboard2Fill />
                <span> Faculty Details</span>
              </Link>
            </li>
            <li className={currentLink === 3 ? "active" : ""} onClick={() => setCurrentLink(3)}>
              <a href="#">
                <FaAddressCard />
                <span> Upcoming exams and allocation</span>
              </a>
            </li>
            <li className={currentLink === 4 ? "active" : ""} onClick={() => setCurrentLink(4)}>
              <a href="#">
                <GiTwirlCenter />
                <span> Past Invigilations</span>
              </a>
            </li>
            <li className={currentLink === 5 ? "active" : ""} onClick={() => setCurrentLink(5)}>
              <a href="#">
                <BsFillChatTextFill />
                <span> Announcements</span>
              </a>
            </li>
            <li className={currentLink === 6 ? "active" : ""} onClick={() => setCurrentLink(6)}>
              <a href="#">
                <IoSettings />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }

    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        font-size: 2rem;
      }
    }

    .links {
      display: flex;
      justify-content: center;

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          display: flex;
          gap: 1rem;
          width:80%;
          cursor: pointer;

          a {
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 1rem;
            color: white;
          }

          &:hover {
            background-color: #ffc107;
            
            a {
              color: black;
            }
          }

          &.active {
            background-color: #ffc107;

            a {
              color: black;
            }
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    &:hover {
      background-color: #da0037;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;

      .toggle {
        display: block;
        svg {
          color: #ffc107;
          font-size: 1.4rem;
        }
      }

      .brand {
        gap: 1rem;
        justify-content: flex-start;
        svg {
          font-size: 1.5rem;
        }
        span {
          font-size: 1.5rem;
        }
      }
    }

    .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: 60%;
  display: flex;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s ease-in-out;

  &.show {
    right: 0;
    opacity: 1;
    visibility: visible;
  }

  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;

      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        display: flex;
        gap: 1rem;
        cursor: pointer;

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: white;
        }

        &:hover {
          background-color: #ffc107;

          a {
            color: black;
          }
        }

        &.active {
          background-color: #ffc107;

          a {
            color: black;
          }
        }
      }
    }
  }
`;
