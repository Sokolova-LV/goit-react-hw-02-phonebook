import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ItemName = styled.p`
    margin: 0;
    font-weight: 500;
`;

export const ItemNumber = styled.p`
    margin-left: 10px;
`;

export const Btn = styled.button`
    display: flex;
    border-radius: 10px;
    padding: 16px 20px;
    margin-top: 15px;
    cursor: pointer;
    background-color: white;
    border-color: transparent;
    color: black;
    font-size: 16px;
    border: 2px solid green;
    font-weight: 700;
    background-color: lightGreen;

    :hover,
    :focus {
        color: black;
        background-color: violet;
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid violet;
    }
`;