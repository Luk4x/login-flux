import styled from 'styled-components';

export const HeaderStyled = styled.header`
    padding-bottom: 10px;
    border-bottom: 1px solid #555;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2px;

    svg {
        font-size: 70px;
        color: #9d9d9d;
    }

    h2 {
        font-weight: 500;
        color: #333;
        font-size: 25px;
    }
`;

export const SectionStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const MainStyled = styled.main`
    box-shadow: 0 0 12px #11111122;
    margin: 0 auto;
    padding: 30px 15px;
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    position: relative;
    background: transparent;
    backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

    div {
        position: absolute;
        top: 5px;
        left: 5px;
        color: #61dafb;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;

        span {
            font-size: 15px;
            text-shadow: 0 0 3px #00000015;
        }
    }

    @media (max-width: 600px) {
        box-shadow: none;

        ${HeaderStyled} {
            flex-direction: column;
        }
    }

    @media (max-width: 490px) {
        ${SectionStyled} {
            flex-direction: column;
            gap: 0;
            padding: 0 20px;
        }
    }
`;
