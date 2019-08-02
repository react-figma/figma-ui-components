// @flow
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { figma_black_3, figma_red, figma_white } from "../../variables";
import { fontUINeg } from "../../mixins";

export const PrimaryDestructiveButton = styled(Button)`
    color: ${figma_white};
    background-color: ${figma_red};

    ${fontUINeg("small", "medium")};

    &:active,
    &:focus {
        border: 2px solid ${figma_black_3};
    }

    &:disabled {
        opacity: 0.4;
    }
`;
