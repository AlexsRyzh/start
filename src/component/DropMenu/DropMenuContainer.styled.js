import styled from "styled-components";

export const DropMenuContainer = styled.div`
  text-transform: capitalize;
  position: absolute;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
  top: 100%;
  left: 0;
  width: 100%;
  opacity: 1;
  background: ${props => (props.background)};
  box-shadow: 0 20px 40px 0 rgb(0 0 0 / 30%);
  animation: ${props => props.show ? 'drop 0.2s' : 'none'};
  animation-fill-mode: forwards;
  transform-origin: top center;

  @keyframes drop {
    from{
      height: 0;
    }
    to{
      height: 77px;
    }
  }
`;