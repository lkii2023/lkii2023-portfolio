import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url } = useSelector(selectData);

  return (
    <Element
      name={"About"}
      id="about"
    >
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-left mb-5">
              <Container>
                <p>
                  I am a motivated junior web developer passionate about
                  creating interactive websites and applications. Having
                  recently completed my training on OpenClassroom, I am eager to
                  put my skills into practice and continue learning in a
                  professional environment. <br /> My passion for web
                  development is fueled by my insatiable curiosity and constant
                  desire for improvement. I am excited about the opportunity to
                  contribute to innovative projects and collaborate with dynamic
                  teams. <br />
                  Outside of development, I enjoy exploring new technologies,
                  solving problems, and participating in online communities to
                  broaden my knowledge and share my experiences. I am convinced
                  that continuous learning is the key to success in this
                  ever-evolving field.
                </p>
              </Container>
            </Col>
            <Col className="d-md-block text-center ">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{
                  width: "15rem",
                  height: "15rem",
                }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
