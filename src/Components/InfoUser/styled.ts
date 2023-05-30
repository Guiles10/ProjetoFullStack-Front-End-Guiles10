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

    .divLink{
        display: flex;
        align-items: center;
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