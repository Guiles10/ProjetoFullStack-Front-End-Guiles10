import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    button{ 
        cursor: pointer;
        /* border: none; */
    }

    #root{
        max-width: 1280px;
        width: 100%;
        margin: 0 auto; 
        padding: 0 10px;

        display: flex;
        justify-content: center;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-op: #27AE60;
        --color-secondary: #EB5757;
    
        --color-grey-3: #333333;
        --color-grey-2: #828282;
        --color-grey-1: #E0E0E0;
        --color-grey-0: #F5F5F5;

        --color-grey-3-op: rgb(51,51,51, 0.5);
        
        --color-error: #E60000;
        --colot-warning: #FFCD07;
        --colot-sucess: #168821;
        --colot-information: #155BCB;

        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    }
    
    ::-webkit-scrollbar{
        background-color: var(--color-grey-1);
        width: 5px;
        height: 5px;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
        width: 5px;
        border-radius: 8px;
    }


    @media (max-width: 800px) {
        
    }
`;