import styled from 'styled-components';


export const StyledCardTechs = styled.li`
    background-color: var(--color-grey-2);
    width: 90%;
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
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        font-size: 14px;
        line-height: 22px;
        font-weight: 700;
        color: var(--color-grey-0);
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
    .divIcon{
        width: 10%;
    }
    .divIcon svg{
        color: white;
        width: 15px;
        cursor: pointer;
    }
    .divIcon svg:hover{
        width: 25px;
    }
    .divImg{
        display: flex;
        justify-content: flex-end;
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

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
    }
        .div{
            width: 100%;
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

    @media (min-width: 450px) {
        .div{
            width: 50%;
        }
        .divIcon{
            width: 40%;
        }
    }

`;