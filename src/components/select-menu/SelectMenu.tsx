import styled, { css, StyledComponent } from "styled-components";
import {
    border_radius_small,
    figma_black_1,
    figma_black_8,
    figma_blue,
    figma_hud,
    figma_white,
    figma_white_2,
    figma_white_4,
    shadow_hud
} from "../../variables";
import { fontUINeg, fontUIPos } from "../../mixins";

const Root = styled.select`
    position: relative;

    display: block;

    box-sizing: border-box;
    width: 100%;

    cursor: default;
`;

const Icon = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 30px;
    height: 30px;

    opacity: 0;
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20width%3D%2230%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m15%2016.7071-3-3%20.7071-.7071%202.6465%202.6464%202.6464-2.6464.7071.7071-3%203-.3535.3536z%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center center;
`;

const Button: StyledComponent<"button", any, { isActive: boolean }> = styled.button`
    position: relative;

    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 30px;
    margin: 1px 0 1px 0;
    padding: 6px 0 6px 8px;

    cursor: default;

    color: ${figma_black_8};
    border: 1px solid transparent;
    border-radius: ${border_radius_small};
    background-color: ${figma_white};

    ${fontUIPos("small", "normal")};

    &:hover {
        border: 1px solid ${figma_black_1};

        span:after {
            opacity: 0;
        }

        ${Icon} {
            opacity: 1;
        }
    }

    &:focus,
    &:active {
        width: 100%;
        padding: 5px 0 5px 7px;

        border: 2px solid ${figma_blue};
        outline: none;

        span:after {
            opacity: 0;
        }

        ${Icon} {
            opacity: 1;
        }
    }

    ${(props: any) =>
        props.isActive &&
        css`
            &:hover {
                width: 100%;
                padding: 5px 0 5px 7px;

                border: 2px solid ${figma_blue};
                outline: none;
            }
        `}
`;

const Label = styled.div`
    display: inline-block;

    text-align: left;

    &:after {
        display: inline-block;

        width: 7px;
        height: 5px;
        margin-top: 6px;
        margin-left: 6px;

        content: "";

        background-color: transparent;
        background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%225%22%20viewBox%3D%220%200%207%205%22%20width%3D%227%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m3%203.70711-3-3.000003.707107-.707107%202.646443%202.64645%202.64645-2.64645.70711.707107-3%203.000003-.35356.35355z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    }
`;

const List: StyledComponent<"ul", any, { isActive: boolean }> = styled.ul`
    position: absolute;
    z-index: 2;

    display: none;
    flex-direction: column;

    width: 100%;
    margin: 0;
    padding: 8px 0 8px 0;

    border-radius: ${border_radius_small};
    background-color: ${figma_hud};
    box-shadow: ${shadow_hud};

    ${(props: any) =>
        props.isActive &&
        css`
            display: flex;
        `}
`;

const LightItemIcon = styled.div`
    display: block;
    flex-shrink: 0;

    width: 24px;
    height: 24px;

    opacity: 0;
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: center center;
`;

const ListItem: StyledComponent<"li", any, { isActive: boolean }> = styled.li`
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
            & ${LightItemIcon} {
                opacity: 1 !important;
            }
        `}

    &:hover {
        background-color: ${figma_blue};
    }
`;

const LightItemText = styled.span`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0 0 0 4px;
`;

const Divider = styled.div`
    margin: 0;
`;

const DividerLine = styled.div`
    display: block;

    height: 1px;
    margin: 8px 0 7px;

    background-color: ${figma_white_2};
`;

const DividerLabel: StyledComponent<"div", any, { isFirst: boolean }> = styled.div`
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
