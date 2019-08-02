import * as React from "react";
import styled, { css, StyledComponent } from "styled-components";
import { fontUIPos } from "../../mixins";
import { figma_black_8, figma_silver, figma_white } from "../../variables";

const Item = styled.li`
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid ${figma_silver};
    background-color: ${figma_white};

    ${fontUIPos("small", "normal")};

    &:last-child {
        border-bottom: 1px solid transparent;
    }
`;

const Label: StyledComponent<"div", any, { isSection?: boolean; isExpanded?: boolean }> = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    height: 32px;
    padding: 0 8px 0 24px;

    cursor: default;

    color: ${figma_black_8};

    ${(props: { isSection?: boolean }) => fontUIPos("small", props.isSection ? "bold" : "normal")}

    &:before {
        position: absolute;
        top: 8px;
        left: 4px;

        display: block;

        width: 16px;
        height: 16px;

        content: "";

        opacity: 0.3;
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m11%208-4-3v6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: center center;

        ${(props: any) =>
            props.isExpanded &&
            css`
                opacity: 0.8;
                background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9%2010%203-4h-6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E");
            `}
    }

    &:hover {
        &:before {
            opacity: 0.8;
        }
    }
`;

const Content: StyledComponent<"div", any, { isExpanded?: boolean }> = styled.div`
    display: ${(props: any) => (props.isExpanded ? "block" : "none")};

    padding: 8px 8px 8px 24px;

    color: ${figma_black_8};

    ${fontUIPos("small", "normal")};
`;

export const DisclosureItemComponents = {
    Item,
    Label,
    Content
};

export const DisclosureItem = (props: {
    isExpanded?: boolean;
    isSection?: boolean;
    label: React.ReactNode;
    content?: React.ReactNode;
    onClick?: () => void;
}) => {
    const { isExpanded, isSection, label, content, onClick, ...otherProps } = props;
    return (
        <Item {...otherProps}>
            <Label isSection={isSection} isExpanded={isExpanded} onClick={onClick}>
                {label}
            </Label>
            <Content isExpanded={isExpanded}>{content}</Content>
        </Item>
    );
};
