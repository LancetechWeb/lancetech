import styled from "styled-components";
import { COLORS } from "./COLORS";

export const ErrorStyle = styled.div`
        display:flex; 
        align-items:center; 
        gap:5rem; 
        width:100%;
        background:${COLORS.LightGrey};
        padding-top:15rem;
        padding-bottom:15rem;

        @media only screen and (max-width: 800px) {
            flex-direction: column;
            gap:0rem;
            padding-top:5rem;
            padding-bottom:5rem;
        }

        .errorImage{
            width:50%;
            display:flex;
            justify-content:end;

            @media only screen and (max-width: 800px) {
                justify-content:center;
             }

        }
`