// @flow
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { figma_red, figma_white } from "../../variables";
import { fontUIPos } from "../../mixins";

export const SecondaryDestructiveButton = styled(Button)`
    color: ${figma_red};
    border: 1px solid ${figma_red};
    background-color: ${figma_white};

    ${fontUIPos("small", "medium")};

    &:active,
    &:focus {
        padding: 4px 15px 4px 15px;

        border: 2px solid ${figma_red};
    }

    &:disabled {
        opacity: 0.4;
    }
`;
