import * as React from "react";
import styled, { css, StyledComponent } from "styled-components";
import { figma_blue, figma_white } from "../../variables";
import { fontUINeg } from "../../mixins";

const Icon = styled.div`
    display: block;
    flex-shrink: 0;

    width: 24px;
    height: 24px;

    opacity: 0;
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center center;
`;

const Root: StyledComponent<"li", any, { isActive: boolean }> = styled.li`
    display: flex;
    align-items: center;

    width: 100%;
    height: 24px;
    padding: 0 8px 0 4px;

    color: ${figma_white};

    ${fontUINeg("medium", "normal")};

    ${(props: any) =>
        props.isActive &&
        css`
            & ${Icon} {
                opacity: 1 !important;
            }
        `}

    &:hover {
        background-color: ${figma_blue};
    }
`;

const Text = styled.span`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0 0 0 4px;
`;

export const SelectMenuItemComponents = {
    Root,
    Icon,
    Text
};

export const SelectMenuItem = (props: { isActive?: boolean; text?: string }) => {
    const { isActive, text, ...otherProps } = props;
    return (
        <Root isActive={isActive || false} {...otherProps}>
            <Icon />
            <Text>{text}</Text>
        </Root>
    );
};
