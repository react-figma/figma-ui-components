import * as React from "react";
import styled, { css, StyledComponent } from "styled-components";
import { figma_black_3, figma_black_8, figma_blue } from "../../variables";
import { fontUIPos } from "../../mixins";
import { VisibleIcon } from "../..";

const Root: StyledComponent<"div", any, { isHidden?: boolean; isLight?: boolean; isPt5?: boolean }> = styled.div`
display: flex;
	align-items: top;
	flex-direction: row;

	padding: 0 16px 0 0;
	
	
	${(props: any) =>
        props.isHidden &&
        css`
            display: none;
        `}
	
	${(props: any) =>
        props.isLight &&
        css`
            color: ${figma_black_3};
        `}
	
	${(props: any) =>
        props.isPt5 &&
        css`
            padding-top: 8px;
        `}
	
	
`;

const Icon = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`;

const Msg = styled.div`
    padding: 8px 0 8px 0;

    color: ${figma_black_8};

    ${fontUIPos("small", "normal")};

    a:link,
    a:hover,
    a:active,
    a:visited {
        text-decoration: none;

        color: ${figma_blue};
    }
`;

export const OnboardingTipComponents = {
    Root,
    Icon,
    Msg
};

export const OnboardingTip = (props: {
    isHidden?: boolean;
    isLight?: boolean;
    isPt5?: boolean;
    children: React.ReactNode;
}) => {
    const { children, ...otherProps } = props;
    return (
        <Root {...otherProps}>
            <Icon>
                <VisibleIcon />
            </Icon>
            <Msg>{children}</Msg>
        </Root>
    );
};
