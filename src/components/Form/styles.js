import styled from 'styled-components';

export const FormStyled = styled.form`
    box-shadow: 0 0 12px #11111122;
    margin: 0 auto;
    padding: 100px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
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
