import styled, { StyledComponent } from "styled-components";
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

export const Textarea: StyledComponent<"textarea", any, any> = styled.textarea`
    ${fontUIPos("small", "normal")};

    display: flex;
    overflow: hidden;
    align-items: center;
    width: calc(100% - 16px);
    min-height: 62px;
    margin: 1px 8px 1px 8px;
    padding: 7px 4px 7px 7px;

    resize: none;

    color: ${figma_black_8};
    border: 1px solid ${figma_black_1};
    border-radius: ${border_radius_small};
    outline: none;
    background-color: ${figma_white};

    &:active,
    &:focus {
        padding: 6px 4px 6px 6px;

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

    &:disabled {
        color: ${figma_black_3};

        &:focus {
            border: 1px solid ${figma_black_1};
        }
    }
`;
