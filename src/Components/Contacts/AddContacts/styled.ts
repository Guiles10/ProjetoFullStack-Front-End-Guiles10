import styled from 'styled-components';

export const StyledModal = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--color-grey-4-op);
    position: absolute;
    margin: 0 auto;
    padding-top: 150px;
    z-index: 999;

    section{
        width: 95%;
        max-width: 300px;
        display: flex;
        align-items: center;
        flex-direction: column; 
        margin: 0 auto;
        border: 2px solid var(--color-primary);
    }
    div{
        padding: 5px 15px;
        background-color: var(--color-grey-2);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div > p {
        font-size: 12px;
        line-height: 28px;
        font-weight: 600;
        color: var(--color-grey-0);
    }
    button {
        width: 30px;
        background-color: var(--color-grey-4);
        font-size: 12px;
        line-height: 28px;
        font-weight: 600;
        color: var(--color-grey-0);
        border-radius: 4px;
    }
    button:hover {
        background-color: var(--color-grey-3);
    }

    form{
        padding: 15px;
        background-color: var(--color-grey-3);
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column; 
    }
    label{
        font-size: 13px;
        line-height: 20px;
        font-weight: 400;
        color: var(--color-grey-0);
        margin-bottom: 5px;
        margin-top: 15px;
    }
    input{
        width: 100%;
        margin-bottom: 4px;
        padding-left: 10px;
        height: 25px;
        border-radius: 4px;
        border: 0;
    }
    select{
        width: 100%;
        height: 25px;
        margin-bottom: 4px;
        border-radius: 4px;
    }
    .btn_submit{
        margin-top: 20px;
        width: 100%;
        background-color: var(--color-primary);
        font-size: 1=6px;
        line-height: 28px;
        font-weight: 600;
        color: var(--color-grey-0);
    }
    .btn_submit:hover{
        background-color: var(--color-primary-focus);
    }
    .pError{
        margin: 0;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        color: var(--color-primary);
    }
`;