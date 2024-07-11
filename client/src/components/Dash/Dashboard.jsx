// Dashboard.js
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import scrollreveal from "scrollreveal";

const cardStyles = css`
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 1rem;
  background-color: #212121;
  color: white;
`;

export default function Dashboard() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('fullname');
    if (name) {
      setUserName(name);
    }

    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <DashboardSection>
      <Nav>
        <div className="title">
        <h4>Hi <span style={{ marginLeft: '10px' }}>{userName}</span>,</h4>

          <h1>
            Welcome to <span>Invigo</span>
          </h1>
        </div>
        <div className="search">
          <BiSearch />
          <input type="text" placeholder="Search" />
        </div>
      </Nav>
      <div className="grid">
        <div className="row__one">
          <Section>
            
            
            <div className="analytic">
              <div className="logo">
                <BiGroup />
              </div>
              <div className="content">
                <h5>Total Faculty</h5>
                <h2>321</h2>
              </div>
            </div>
            
          </Section>
        </div>
      </div>
    </DashboardSection>
  );
}

const DashboardSection = styled.section`
  position: fixed;
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: grey;
  color: #333;

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;

    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 1rem;
    .grid {
      .row__one {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    width:70%;
    height:40%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 1rem;
  max-width: 70%;
  border-radius: 0.6rem;
  background-color: #212121;

  .title {
    width: 40%;
    max-width: 300px;

    h1 {
      font-size: 1.5rem;
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }

    h4 {
      margin: 0;
      
      span{
      color:#ffc107;
      font-size:1.5rem;
      }
    }
  }

  .search {
    background-color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;

    svg {
      color: #ffc107;
      font-size: 1.5rem;
    }

    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.1rem;
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
      &:focus {
        outline: none;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    .search {
      input {
        width: 50%;
      }
    }
  }
`;
