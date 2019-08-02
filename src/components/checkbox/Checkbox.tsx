import * as React from "react";
import styled from "styled-components";
import { fontUIPos } from "../../mixins";
import { border_radius_small, figma_black, figma_blue, figma_white } from "../../variables";

const Root = styled.label`
    display: flex;
    flex-direction: row;

    height: 28px;

    cursor: default;
`;

const Container = styled.div`
    position: relative;

    width: 32px;
    height: 32px;
`;

const Mark = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;

    width: 12px;
    height: 12px;

    border: 1px solid ${figma_black};
    border-radius: ${border_radius_small};
    background-color: ${figma_white};

    &:after {
        position: absolute;

        width: 12px;
        height: 12px;

        content: "";

        background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: 2px 2px;
    }
`;

const Box = styled.input`
    position: absolute;

    width: 0;
    height: 0;

    opacity: 0;

    &:checked ~ ${Mark} {
        border: 1px solid ${figma_blue};
        background-color: ${figma_blue};
    }

    &:checked ~ ${Mark}:after {
        display: block;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;

    padding-top: 4px;

    ${fontUIPos("small", "normal")};
`;

export const checkboxComponents = {
    Root,
    Container,
    Box,
    Mark,
    Label
};

export const Checkbox = (props: { checked?: boolean; name?: string; onChange?: (value: boolean) => void }) => {
    const { checked, name, onChange, ...otherProps } = props;
    return (
        <Root {...otherProps}>
            <Container>
                <Box type="checkbox" checked={checked} onChange={e => onChange && onChange(!!e.target.value)} />
                <Mark />
            </Container>
            <Label>{name}</Label>
        </Root>
    );
};
