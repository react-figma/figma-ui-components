import styled, { css, StyledComponent } from "styled-components";
import { figma_white_2, figma_white_4 } from "../../variables";
import { fontUINeg } from "../../mixins";

export const Divider = styled.div`
    margin: 0;
`;

export const DividerLine = styled.div`
    display: block;

    height: 1px;
    margin: 8px 0 7px;

    background-color: ${figma_white_2};
`;

export const DividerLabel: StyledComponent<"div", any, { isFirst?: boolean }> = styled.div`
    display: flex;
    align-items: center;

    height: 32px;
    margin-top: 8px;
    padding: 8px 8px 0 32px;

    color: ${figma_white_4};
    border-top: 1px solid ${figma_white_2};

    ${fontUINeg("medium", "normal")};

    ${(props: any) =>
        props.isFirst &&
        css`
            height: 24px;
            margin-top: 0;
            padding: 0 8px 0 32px;

            border-top: none;
        `}
`;

export const SelectMenuDivider = {
    Divider,
    DividerLine,
    DividerLabel
};
