// @flow
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { figma_black_3, figma_black_8, figma_blue, figma_white } from "../../variables";
import { fontUINeg, fontUIPos } from "../../mixins";

export const SecondaryButton = styled(Button)`
    color: ${figma_black_8};
    border: 1px solid ${figma_black_8};
    background-color: ${figma_white};

    ${fontUIPos("small", "medium")};

    &:active,
    &:focus {
        padding: 4px 15px 4px 15px;

        border: 2px solid ${figma_blue};
    }

    &:disabled {
        color: ${figma_black_3};
        border: 1px solid ${figma_black_3};
    }
`;
