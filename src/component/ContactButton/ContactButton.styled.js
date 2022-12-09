import styled from "styled-components";

export const ContactButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.height ?? '50px'};
    height: ${props => props.height ?? '50px'};
    border-radius: 10px;
    fill: white;
    color: ${props => props.color ?? 'white'};
    background: ${props => props.background};
    transition: 0.2s;
    cursor: pointer;

    &:hover {
            transform: scale(1.1);
    }
`;

