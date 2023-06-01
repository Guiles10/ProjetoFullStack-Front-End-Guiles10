import styled from 'styled-components';

export const StyledSecPerfil = styled.section`
    width: 100%;
    display: flex;
    padding: 45px 0;

    border-top: 1px solid var(--color-primary);
    border-bottom: 1px solid var(--color-primary);

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 25px;
        line-height: 35px;
        font-weight: 700;
        color: var(--color-grey-1);
        margin-bottom: 20px;
    }
    p{
        font-size: 18px;
        line-height: 25px;
        font-weight: 600;
        color: var(--color-grey-2);
        margin-right: 15px;
        margin-left: 15px;
    }

    .infoUser > div > p{
        display: flex;

    }

    .divFone{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .divEmail{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .divBtn > button{
        background-color: var(--color-grey-3);
        padding: 5px;
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        color: var(--color-grey-0);
    }
    .divBtn > button:hover{
        transform: scale(1.1);
        color: var(--color-primary);
    }

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;

        div{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        h1{
            margin-bottom: 5px;
        }
        a{
            margin-top: 15px;
        }
    }

`;