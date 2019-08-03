import * as React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const Root = styled.div`
    position: relative;
    width: 100%;

    & ${Input} {
        position: static;
        overflow: auto;
        padding: 8px 4px 8px 0;
        text-indent: 32px;

        &:active,
        &:focus {
            margin-left: -1px;
            padding: 8px 4px 8px 0;
        }
    }
`;

const Icon = styled.div`
    position: absolute;
    top: -1px;
    left: 0;
    width: 32px;
    height: 32px;
`;

export const InputWithIconComponents = {
    Root,
    Icon
};

export const InputWithIcon = (props: { icon: React.ReactNode; input: React.ReactNode }) => {
    const { icon, input } = props;
    return (
        <Root>
            <Icon>{icon}</Icon>
            {input}
        </Root>
    );
};
