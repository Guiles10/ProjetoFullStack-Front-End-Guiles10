import styled from 'styled-components';

export const StyledSecHome = styled.section`
    width: 100%;
    position: relative;

    .secHeaderList{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 0;
    }
    
    .divAddList{
        width: 100%;
        padding: 0 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
    }
    .divAddList > p{
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        color: var(--color-grey-0);
    }
    .divAddList > button{
        background-color: var(--color-grey-3);
        width: 30px;
        height: 30px;
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        color: var(--color-grey-0);
    }
    .divAddList > button:hover{
        width: 40px;
        height: 40px;
        color: var(--color-primary);
    }
    .divUl{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        justify-content: center;
    }
    .divCards{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (max-width: 800px) {
        .divUl{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .secHeaderList{
            width: 100%;
            padding: 0;
            padding-top: 20px ;
        }
    }
`;