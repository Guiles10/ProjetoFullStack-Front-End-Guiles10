import styled from 'styled-components';

export const StyledSecHeader = styled.section`
    background-color: var(--color-grey-4);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;    
    justify-content: space-between;

    .divHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 35px 0;
        background-color: var(--color-grey-4);
        border: 1px solid var(--color-grey-4);
    }

    .divHeader > a{
        text-decoration: none;
        background-color: var(--color-grey-2);
        font-size: 12px;
        line-height: 28px;
        font-weight: 600;
        color: white;
        padding: 6px 17px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        height: 50px;
    }
    .divHeader > a:hover{
        background-color: var(--color-grey-1);
        color: var(--color-grey-3);
    }

    .divHeader > h1 {
        color: var(--color-grey-1);
        margin: 15px;
        font-size: 30px;
    }
    .divHeader > h1 > small {
        color: var(--color-primary);
        font-size: 30px;
    }
`;