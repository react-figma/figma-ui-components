import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { Label } from "../Label";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";

storiesOf("Label", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("Label", () => <Label>{text("children", "Label")}</Label>);
