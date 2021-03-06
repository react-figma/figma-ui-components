import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { Checkbox } from "../Checkbox";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";

storiesOf("Checkbox", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("Checkbox", () => <Checkbox checked={boolean("checked", false)} name={text("name", "Label")} />);
