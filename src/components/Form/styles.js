import styled from 'styled-components';
import { SiInfluxdb } from 'react-icons/si';

export const LogoAnimation = styled(SiInfluxdb)`
    animation: rotateAnimation 4s ease-in-out infinite alternate;

    @keyframes rotateAnimation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

export const FormStyled = styled.form`
    box-shadow: 0 0 12px #11111122;
    margin: 0 auto;
    padding: 100px 0;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 50px;
    background: transparent;
    backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
        box-shadow: none;
    }
`;

export const FormContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #333;
    margin-bottom: 25px;

    svg {
        font-size: 60px;
        color: #61dafb;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 24px;

        span:nth-child(1) {
            color: #61dafb;
            text-shadow: 0 0 3px #00000015;
        }
    }
`;

export const PStyled = styled.p`
    position: absolute;
    text-align: center;
    color: #9b9b9b;
    left: 50%;
    transform: translateX(-50%);
    ${props => (props.top ? 'top: 25px;' : 'bottom: 25px;')}

    a {
        color: #61dafb;
        text-shadow: 0 0 3px #00000015;
        transition: all 0.15s ease-in-out;
        text-decoration: underline;

        &:hover {
            color: #116399;
            text-shadow: none;
        }
    }
`;
