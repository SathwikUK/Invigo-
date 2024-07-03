import React, { useEffect } from "react";
import styled from "styled-components";
import Analytics from "./Analytics";


import Navbar from "./Navbar";


import scrollreveal from "scrollreveal";
export default function Dashboard() {
  useEffect(() => {
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
  return (<div className="dash" id="dash">
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          
        </div>
        
      </div>
    </Section>
    </div>
  );
}

const Section = styled.section`
  position: fixed; /* or absolute if it should be relative to a containing element */
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
    width:100%;
    gap: 1rem;
    margin-top: 2rem;

    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }

    .row__two {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Changed to 2 columns for better layout */
      gap: 1rem;
      height: 50%;
    }
  }

  .card {
    background-color: #212121;
    color: white;
    padding: 1rem;
    border-radius: 0.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added box shadow for better visuals */
  }

  .card.highlight {
    background-color: #ffc107;
    color: black;
  }

  .card .icon {
    font-size: 2rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    padding: 1rem; /* Adjust padding for smaller screens */
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;