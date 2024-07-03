import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi user,</h4>
        <h1>
          Welcome to <span>Invigo</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 1rem;
  max-width:70%;
  border-radius: 0.6rem;
  background-color: #212121;

  .title {
    width: 40%; /* Reduced width to 40% */
    max-width: 300px; /* Optional: Set a max-width to limit width further */
    
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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;

    .title {
      width: 100%; /* Full width on smaller screens */
      max-width: none; /* Reset max-width */
      margin-bottom: 1rem;

      h1 {
        font-size: 1.2rem;

        span {
          display: block;
          margin: 0.5rem 0;
          letter-spacing: 0;
        }
      }

      h4 {
        font-size: 1rem;
      }
    }

    .search {
      width: 100%;
      padding: 0.5rem;
      svg {
        font-size: 1.2rem;
      }
      input {
        width: 100%;
        font-size: 1rem;
        letter-spacing: 0.05rem;
      }
    }
  }
`;
