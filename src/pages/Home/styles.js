import styled from 'styled-components';

export const Main = styled.main`
    margin: auto;
    width: 40%;
    height: 30%;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 12px #11111155;
`;

export const Header = styled.header`
    padding-bottom: 10px;
    border-bottom: 1px solid #555;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 100px;
        border-radius: 50%;
    }

    h2 {
        color: #999;
    }
`;

export const Section = styled.header`
    padding-top: 10px;
`;
