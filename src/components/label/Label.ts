import styled from "styled-components";
import { figma_black_3, figma_white } from "../../variables";
import { fontUIPos } from "../../mixins";

export const Label = styled.div`
    display: flex;
    align-items: center;

    height: 32px;
    padding: 8px 4px 8px 8px;

    color: ${figma_black_3};
    background-color: ${figma_white};

    ${fontUIPos("small", "normal")};
`;
