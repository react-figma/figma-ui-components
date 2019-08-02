import styled from "styled-components";
import { Button } from "./Button";
import { figma_black_3, figma_blue, figma_white } from "../../variables";
import { fontUINeg } from "../../mixins";

export const PrimaryButton = styled(Button)`
    color: ${figma_white};
    background-color: ${figma_blue};

    ${fontUINeg("small", "medium")};

    &:active,
    &:focus {
        border: 2px solid ${figma_black_3};
    }

    &:disabled {
        background-color: ${figma_black_3};
    }
`;
