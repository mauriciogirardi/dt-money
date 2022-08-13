import styled, { keyframes } from "styled-components";

const typing = keyframes`
  100%{
    left: 100%;
    margin: 0 -35px 0 35px
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  display: inline-flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme["green-300"]};
  }
`;

export const Dynamic = styled.ul`
  margin-left: 1rem;
  line-height: 20px;
  height: 20px;
  overflow: hidden;

  li {
    color: ${({ theme }) => theme["gray-300"]};
    list-style: none;
    font-size: 20px;
    font-weight: bold;

    span {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        border-left: 2px solid ${({ theme }) => theme["green-300"]};
        animation: ${typing} 3s steps(15) infinite;
        background-color: ${({ theme }) => theme["gray-800"]};
      }
    }
  }
`;
