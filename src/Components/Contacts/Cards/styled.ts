import styled from 'styled-components';


export const StyledCardTechs = styled.li`
    background-color: var(--color-grey-2);
    width: 45%;
    display: flex;
    padding: 13px 22px;
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid var(--color-grey-1);

    display: flex;
    justify-content: space-between;
    animation: animationLI 3s alternate;
    margin: 10px;

    :hover{
        background-color: var(--color-grey-2);
    }

    .div{
        width: 150px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    .div > h2 {
        font-size: 14px;
        line-height: 22px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    .trash{
        cursor: pointer;
    }
    .trash:hover{
        color: red;
        transform: scale(1.6);
    }

    .pen{
        cursor: pointer;
    }

    .pen:hover{
        color: var(--color-primary);
        transform: scale(1.4);
    }

    
    p{
        font-size: 12px;
        line-height: 22px;
        font-weight: 400;
        color: var(--color-grey-1);
    }
    small{
        font-size: 12px;
        line-height: 22px;
        font-weight: 400;
        color: var(--color-grey-1);
    }

    .divImg{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        gap: 30px;
    }
    img{
        z-index: 0;
        height: 15px;
        cursor: pointer;
        position: relative;
        top: 0;
        left: 0;
    }
    img:hover{
        height: 20px;
    }
    img: {
        height: 20px;
    }

    @media (max-width: 650px) {
        width: 90%;
    }
    @keyframes animationLI {
        0% {
            transform: translateX(0px);
            opacity: 0
        }
        100% {
            transform: translateX(0px);
            opacity: 100%;
        }
    }

`;