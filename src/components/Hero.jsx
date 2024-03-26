import styled from "styled-components";
import { StyledBall } from "./globalStyledComponents";
// Icons
import { Light } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--bs-light));
    z-index: -2;
  }

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
  }

  body {
    background-color: hsl(223, 90%, 95%);
    font: 1em/1.5 sans-serif;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .down-container {
    height: 10rem;
  }

  @media screen and (max-width: 1920px) {
    &::before {
      background-size: 100vw auto;
      background-position: center;
      background: url(${Light}) top center fixed no-repeat;
    }
  }

  @media screen and (max-width: 768px) {
    &::before {
      background: url(${Light}) top center fixed no-repeat;
      background-size: cover;
    }

    .mobile-content {
      font-size: 1.5rem;
      color: var(--bs-dark);
    }

    .pl__inner-ring {
      display: none;
      color: transparent;
    }

    .pl__outer-ring {
      display: none;
      color: transparent;
    }
    .pl__track-cover {
      display: none;
    }

    .pl__ball {
      display: none;
      color: transparent;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col className="d-block d-md-block display-5 mobile-content">
            <StyledBall>
              <div className="pl mobile-content">
                <div className="pl__outer-ring mobile-content"></div>
                <div className="pl__inner-ring d-flex align-items-center justify-content-center mobile-content">
                  <Col className="d-block align-items-center justify-content-center text-center">
                    <h1 className=" display-4 title mobile-content">
                      Jean Sebastien <br /> Calixte
                    </h1>
                    <h3 className="description mobile-content mt-3">
                      Developpeur Web
                    </h3>
                  </Col>
                </div>

                <div className="pl__track-cover"></div>
                <div className="pl__ball">
                  <div className="pl__ball-texture"></div>
                  <div className="pl__ball-outer-shadow"></div>
                  <div className="pl__ball-inner-shadow"></div>
                  <div className="pl__ball-side-shadows"></div>
                </div>
              </div>
            </StyledBall>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
