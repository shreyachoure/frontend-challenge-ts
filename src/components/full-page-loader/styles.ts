import styled from 'styled-components'

export const FullScreenLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(256, 256, 256, 0.45);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 36px;
    margin-bottom: 12px;
  }

  .loader {
    position: relative;
    width: 10vw;
    height: 5vw;
    padding: 1.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader span {
    position: absolute;
    height: 0.8vw;
    width: 0.8vw;
    border-radius: 50%;
    background-color: black;
  }

  .loader span:nth-child(1) {
    animation: loading-dotsA 0.5s infinite linear;
  }

  .loader span:nth-child(2) {
    animation: loading-dotsB 0.5s infinite linear;
  }

  @keyframes loading-dotsA {
    0% {
      transform: none;
    }
    25% {
      transform: translateX(2vw);
    }
    50% {
      transform: none;
    }
    75% {
      transform: translateY(2vw);
    }
    100% {
      transform: none;
    }
  }

  @keyframes loading-dotsB {
    0% {
      transform: none;
    }
    25% {
      transform: translateX(-2vw);
    }
    50% {
      transform: none;
    }
    75% {
      transform: translateY(-2vw);
    }
    100% {
      transform: none;
    }
  }
`
