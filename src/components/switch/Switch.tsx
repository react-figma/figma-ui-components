import * as React from "react";
import styled from "styled-components";
import { fontUIPos } from "../../mixins";
import { figma_black, figma_white } from "../../variables";

const Root = styled.label`
    position: relative;

    display: flex;
    align-items: center;
    align-self: 1;
    flex-direction: row;

    cursor: default;
`;

const Container = styled.div`
    position: relative;

    width: 24px;
    height: 12px;
    margin: 10px 16px 10px 8px;
`;

const Label = styled.div`
    ${fontUIPos("small", "normal")}
`;

const Slider = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transition: transform 0.2s;
    transition: background-color 0 0.2s;

    border: 1px solid ${figma_black};
    border-radius: 12px;
    background-color: ${figma_white};

    &::before {
        position: absolute;
        top: -1px;
        left: -1px;

        width: 10px;
        height: 10px;

        content: "";

        transition: transform 0.2s;
        transition: background-color 0 0.2s;

        border: 1px solid ${figma_black};
        border-radius: 50%;
        background-color: white;
    }
`;

const Checkbox = styled.input`
    width: 0;
    height: 0;

    opacity: 0;

    &:checked + ${Slider} {
        background-color: ${figma_black};
    }

    &:focus + ${Slider} {
        outline: none;
        box-shadow: 0 0 1px #2196f3;
    }

    &:checked + ${Slider}:before {
        transform: translateX(12px);
    }
`;

export const SwitchComponents = {
    Root,
    Container,
    Checkbox,
    Slider,
    Label
};

export const Switch = (props: { checked?: boolean; name?: React.ReactNode; onChange?: (value: boolean) => void }) => {
    const { checked, name, onChange, ...otherProps } = props;
    return (
        <Root {...otherProps}>
            <Container>
                <Checkbox type="checkbox" checked={checked} onChange={e => onChange && onChange(!!e.target.value)} />
                <Slider />
            </Container>
            <Label>{name}</Label>
        </Root>
    );
};
