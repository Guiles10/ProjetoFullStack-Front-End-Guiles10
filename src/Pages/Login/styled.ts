import styled from "styled-components";

export const StyledSec = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1200px;
    margin: 0 auto;
    padding-top: 150px;
    max-width: 800px;

    .divForm{
        max-width: 500px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding: 24px;
        border: 1px solid var(--color-grey-0);
        border-radius: 8px;
        margin-right: 40px;
    }
    .divForm > h1 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        color: var(--color-grey-0);
        margin-bottom: 15px;
    }
    .divForm > form {
        display: flex;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .divForm > form > label {
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        color: var(--color-grey-0);
        margin-bottom: 1px;
        padding-left: 8px;
    }
    .divForm > form > input{
        border: 1px solid var(--color-grey-3);
        color: var(--color-grey-3);
        width: 100%;
        margin-bottom: 4px;
        padding-left: 10px;
        height: 35px;
        border-radius: 4px;
    }
    .btn_submit{
        background-color: var(--color-primary);
        height: 45px;
        margin-bottom: 25px;
        margin-top: 25px;

        font-size: 16px;
        line-height: 26px;
        font-weight: 500;
        color: white;
        border-radius: 4px;
    }
    .btn_submit:hover{
        opacity: 75%;
    }
    .div_SmallLogin {
        display: flex;
        justify-content: center;
    }
    .div_SmallLogin > small{
        max-width: 70%;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: var(--color-grey-2);
        margin-bottom: 20px;
        text-align: center;
    }

    a{
        width: 100%;
        background-color: var(--color-grey-0);
        height: 45px;
        text-decoration: none;
        text-align: center;
        padding: 10px;

        font-size: 16px;
        line-height: 26px;
        font-weight: 500;
        color: var(--color-grey-2);
        border-radius: 4px;
    }
    a:hover{
        background-color: var(--color-grey-1);
    }

    .pError{
        margin: 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        color: var(--color-error);
    }

    .divInfo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 400px;
    }
    .divInfo > h1 {
        color: var(--color-grey-2);
        margin: 15px;
        font-size: 35px;
    }
    .divInfo > h1 > small {
        color: var(--color-primary);
        font-size: 35px;
    }
    .divInfo > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color-grey-1);
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 35px;
    }
    .divInfo > div > p {
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
        color: var(--color-grey-0);
    }
    .divInfo > div > p > small {
        font-size: 14px;
        line-height: 22px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    .divInfo > div > div{
        background-color: var(--color-primary);
        border-radius: 8px;
        padding: 8px;
        margin-right: 25px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column-reverse;

        .pontinhos{
            display: none;
        }
        .divForm{
            width: 100%;
            margin: 0;
            margin-bottom: 35px;
        }
        .divInfo{
            display: flex;
            width: 100%;
            align-items: center;
        }
        .divInfo > .logo {
            align-items: center;
        }
    }

`


