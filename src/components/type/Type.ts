import styled from "styled-components";
import { figma_black_8, figma_white } from "../../variables";
import { fontUINeg, fontUIPos } from "../../mixins";

const Type = styled.span`
    margin: 0;
    padding: 0;
`;

export const Type11Pos = styled(Type)`
    color: ${figma_black_8};

    ${fontUIPos("small", "normal")};
`;

export const Type11PosMedium = styled(Type)`
    color: ${figma_black_8};

    ${fontUIPos("small", "medium")};
`;

export const Type11PosBold = styled(Type)`
    color: ${figma_black_8};

    ${fontUIPos("small", "bold")};
`;

export const Type12Pos = styled(Type)`
    color: ${figma_black_8};

    ${fontUIPos("medium", "normal")};
`;

export const Type12PosMedium = styled(Type)`
    color: ${figma_black_8};

    ${fontUIPos("medium", "medium")};
`;

export const Type12PosBold = styled(Type)`
    color: ${figma_black_8};

    ${fontUIPos("medium", "bold")};
`;

export const Type11Neg = styled(Type)`
    color: ${figma_white};

    ${fontUINeg("small", "normal")};
`;

export const Type11NegMedium = styled(Type)`
    color: ${figma_white};

    ${fontUINeg("small", "medium")};
`;

export const Type11NegBold = styled(Type)`
    color: ${figma_white};

    ${fontUINeg("small", "bold")};
`;

export const Type12Neg = styled(Type)`
    color: ${figma_white};

    ${fontUINeg("medium", "normal")};
`;

export const Type12NegMedium = styled(Type)`
    color: ${figma_white};

    ${fontUINeg("medium", "medium")};
`;

export const Type12NegBold = styled(Type)`
    color: ${figma_white};

    ${fontUINeg("medium", "bold")};
`;
