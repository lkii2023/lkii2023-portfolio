import React from "react";
import styled, { keyframes } from "styled-components";
import snow from "../images/snow.jpg";
import { Link } from "react-scroll/modules";
// Icons
import { Icon } from "@iconify/react";

// Animations
export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Loading Spinner
export const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--primary);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Titles
export const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-family: "Permanent Marker";
  text-align: center;

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0 auto 1.5rem auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--primary-light), var(--primary-dark))"
        : "linear-gradient(to right, var(--primary-dark), var(--primary-light))"};
  }
`;

// ball
export const StyledBall = styled.div`
  .pl,
  .pl__ball,
  .pl__ball-inner-shadow,
  .pl__ball-side-shadows,
  .pl__ball-texture,
  .pl__inner-ring,
  .pl__outer-ring,
  .pl__track-cover {
    border-radius: 50%;
  }

  .pl {
    position: relative;
    width: 16em;
    height: 16em;
    z-index: -1;
  }

  .pl__ball,
  .pl__ball-inner-shadow,
  .pl__ball-outer-shadow,
  .pl__ball-side-shadows,
  .pl__ball-texture,
  .pl__ball-texture:before,
  .pl__inner-ring,
  .pl__outer-ring,
  .pl__track-cover {
    position: absolute;
  }

  .pl__ball,
  .pl__ball-inner-shadow,
  .pl__ball-outer-shadow,
  .pl__ball-texture:before,
  .pl__track-cover {
    animation: ball 3s linear infinite;
  }

  .pl__ball {
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    transform: rotate(0) translateY(-6.5em);
    width: 2.5em;
    height: 2.5em;
  }

  .pl__ball-inner-shadow {
    animation-name: ballInnerShadow;
    box-shadow: 0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
      0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
      0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
    width: 100%;
    height: 100%;
  }

  .pl__ball-outer-shadow {
    animation-name: ballOuterShadow;
    background-image: linear-gradient(
      hsla(0, 0%, 0%, 0.15),
      hsla(0, 0%, 0%, 0)
    );

    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    filter: blur(2px);
    top: 50%;
    left: 0;
    width: 100%;
    height: 250%;
    transform: rotate(20deg);
    transform-origin: 50% 0;
    z-index: -2;
  }

  .pl__ball-side-shadows {
    background-color: hsla(0, 0%, 0%, 0.1);
    filter: blur(2px);
    width: 100%;
    height: 100%;
    transform: scale(0.75, 1.1);
    z-index: -1;
  }

  .pl__ball-texture {
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);
  }

  .pl__ball-texture:before {
    animation-name: ballTexture;
    animation-duration: 0.25s;
    background: url("${snow}") 0 0 / 50% 100%;
    content: "";
    display: block;
    filter: brightness(1.05);
    top: 0;
    right: 0;
    width: 200%;
    height: 100%;
  }
  .pl__inner-ring {
    box-shadow: 0 -0.25em 0.5em hsla(0, 0%, 100%, 0.4),
      0 0.5em 0.75em hsla(0, 0%, 100%, 0.4) inset,
      0 0.5em 0.375em hsla(0, 0%, 0%, 0.15),
      0 -0.5em 0.75em hsla(0, 0%, 0%, 0.15) inset;
    top: 2.375em;
    left: 2.375em;
    width: calc(100% - 4.75em);
    height: calc(100% - 4.75em);
  }
  .pl__outer-ring {
    box-shadow: 0 -0.45em 0.375em hsla(0, 0%, 0%, 0.15),
      0 0.5em 0.75em hsla(0, 0%, 0%, 0.15) inset,
      0 0.25em 0.5em hsla(0, 0%, 100%, 0.4),
      0 -0.5em 0.75em hsla(0, 0%, 100%, 0.4) inset;
    top: 0.75em;
    left: 0.75em;
    width: calc(100% - 1.5em);
    height: calc(100% - 1.5em);
  }
  .pl__track-cover {
    animation-name: trackCover;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Animations */
  @keyframes ball {
    from {
      transform: rotate(0) translateY(-6.5em);
    }
    50% {
      transform: rotate(180deg) translateY(-6em);
    }
    to {
      transform: rotate(360deg) translateY(-6.5em);
    }
  }
  @keyframes ballInnerShadow {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  @keyframes ballOuterShadow {
    from {
      transform: rotate(20deg);
    }
    to {
      transform: rotate(-340deg);
    }
  }
  @keyframes ballTexture {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(50%);
    }
  }
  @keyframes trackCover {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Back to top link
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;

  .link-icons {
    color: ${({ theme }) => (theme.name === "light" ? "#45413C" : "#F5F2E8")};
  }

  &.show-up {
    visibility: visible;
  }
`;

export function BackToTop({ home }) {
  const [scrollY, setScrollY] = React.useState("");
  const up = React.useRef(null);

  React.useEffect(
    function () {
      function updateScrollY() {
        setScrollY(window.pageYOffset);

        if (scrollY > 500) {
          up.current.classList.add("show-up");
        } else {
          up.current.classList.remove("show-up");
        }
      }

      window.addEventListener("scroll", updateScrollY);

      return () => window.removeEventListener("scroll", updateScrollY);
    },
    [scrollY]
  );

  return (
    <StyledDiv ref={up}>
      <Link
        to={home}
        className="link-icons"
      >
        <Icon icon="fa6-solid:circle-chevron-up" />
      </Link>
    </StyledDiv>
  );
}
