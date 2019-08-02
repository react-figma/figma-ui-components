// @flow
import React from "react";
import styled from "styled-components";
import { border_radius_large } from "../../variables";

export const Button = styled.button`
    display: inline-block;
    flex-shrink: 0;

    margin: 1px 0 1px 0;
    padding: 5px 16px 5px 16px;

    border: 2px solid transparent;
    border-radius: ${border_radius_large};
    outline: none;
`;
