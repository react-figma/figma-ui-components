import styled from "styled-components";
import { fontUIPos } from "../../mixins";
import {
    border_radius_small,
    figma_black,
    figma_black_1,
    figma_black_3,
    figma_black_8,
    figma_blue,
    figma_blue_3,
    figma_white
} from "../../variables";

export const Input = styled.input`
    ${fontUIPos("small", "normal")};

    position: relative;
    display: flex;
    overflow: visible;
    align-items: center;
    width: 100%;
    height: 30px;
    margin: 1px 0 1px 0;
    padding: 8px 4px 8px 7px;

    color: ${figma_black_8};
    border: 1px solid transparent;
    border-radius: ${border_radius_small};
    outline: none;
    background-color: ${figma_white};

    &:hover {
        color: ${figma_black_8};
        border: 1px solid ${figma_black_1};
    }

    &:active,
    &:focus {
        padding: 8px 4px 8px 6px;

        color: ${figma_black};
        border: 2px solid ${figma_blue};
        border-radius: ${border_radius_small};
    }

    &::selection {
        color: ${figma_black};
        background-color: ${figma_blue_3};
    }

    &::placeholder {
        color: ${figma_black_3};
    }

    &:not(:disabled):not(:hover):placeholder-shown {
        background: linear-gradient(90deg, transparent 6px, rgba(0, 0, 0, 0.1) 0);
        background-repeat: repeat-x;
        background-position: left bottom -1px;
        background-size: calc(100% - 6px) 1px;
    }

    &:disabled {
        color: ${figma_black_3};
    }

    &:disabled:hover {
        border: 1px solid transparent;
    }
`;
