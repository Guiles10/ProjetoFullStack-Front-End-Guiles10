import styled from 'styled-components';

export const StyledSecHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--color-grey-3);

    @media (max-width: 800px) {
        display: flex;
        flex-wrap: nowrap;
    }
    @media (max-width: 900px) { 
        display: flex;
        justify-content: center;
    }
`;