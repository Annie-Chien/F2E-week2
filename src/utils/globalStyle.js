import styled, { createGlobalStyle, css } from 'styled-components';
import fontLink from '../assets/font/GenJyuuGothicX-Monospace-Medium.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gen Jyuu Gothic P';
        font-weight: medium;
        src: url(${fontLink}) format("truetype");
    }
    /* CSS Variables */
    :root{
        //COLORS
        --clr-primary: rgb(183,236,93);
        --clr-primary-dark: rgb(100,141,30);
        --clr-primary-tint:  rgba(183, 236, 93, 0.3);
        --gradient-primary: linear-gradient(180deg, rgba(183, 236, 93, 0) -6.5%, rgba(183, 236, 93, 0.1) 85.58%, rgba(183, 236, 93, 0.3) 100%);
        --clr-secondary: rgb(77, 77, 77);
        --clr-secondary-dark:rgb(34, 34, 34);
        --clr-secondary-light: rgb(245, 245, 245);
        --clr-success: rgb(183,236,93);
        --clr-success-dark: rgb(100,141,30);
        --clr-success-tint: rgb(217,255,153);
        --clr-danger:rgb(249, 56, 25);
        --clr-danger-dark:rgb(160, 22, 0);
        --clr-danger-tint:rgb(255, 163, 148);
        --clr-pen-black: rgb(0, 0, 0);
        --clr-pen-blue: rgb(0, 102, 255);
        --clr-pen-red:rgb(249, 56, 25);
        --clr-black: rgb(0, 0, 0);
        --clr-gray-90:rgb(26, 26, 26);
        --clr-gray-80:rgb(51, 51, 51);
        --clr-gray-70:rgb(77, 77, 77);
        --clr-gray-60: rgb(102, 102, 102);
        --clr-gray-50: rgb(128, 128, 128);
        --clr-gray-40: rgb(153, 153, 153);
        --clr-gray-30: rgb(179, 179, 179);
        --clr-gray-20: rgb(204, 204, 204);
        --clr-gray-10: rgb(230, 230, 230);
        --clr-white: rgb(255,255, 255);
        //FONT SIZES
        --fz-h1: 5rem;
        --fz-h2: 4rem;
        --fz-h3: 3.2rem;
        --fz-h4: 2.8rem;
        --fz-h5: 2.4rem;
        --fz-cap: 1.4rem;
        }
    
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Gen Jyuu Gothic P';
        color: var(--clr-secondary);
    }

   h1,h2,h3,h4,h5{
    font-weight: 500;
   }

   h1{
    font-size: var(--fz-h1);
   }

   h2{
    font-size: var(--fz-h2);
   }

   h3{
    font-size: var(--fz-h3);
   }

   h4{
    font-size: var(--fz-h4);
   }

   h5{
    font-size: var(--fz-h5);
   }

   img{
        display: block;
        max-width: 100%;
    }

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;

export const highlightText = css`
  font-size: 1.8rem;
  font-weight: bold;
`;
