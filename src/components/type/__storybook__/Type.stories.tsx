import * as React from "react";
import * as types from "../Type";
import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { text, withKnobs } from "@storybook/addon-knobs";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import styled from "styled-components";

const Background = styled.div`
    padding: 50px;
    background: lightgray;
`;

Object.keys(types).map(typeKey => {
    const Type = types[typeKey];
    storiesOf("Type", module)
        .addDecorator(BaseStyleDecorator)
        .addDecorator(TextStyleDecorator)
        .addDecorator(withKnobs)
        .addDecorator(story => <Background>{story()}</Background>)
        .add(typeKey, () => <Type>{text("children", "Some text")}</Type>);
});
