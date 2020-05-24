import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ContentContainer = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 0.5rem;
    border-radius: 0.25rem 0 0 0.25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 0.25rem 0.25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMessage = styled.p`
    display: block;
    font-size: 0.65rem;
    color:#ff0000;
    font-weight: 600;
    margin-top: 1rem;
`;
