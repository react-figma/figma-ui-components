import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { Textarea } from "../Textarea";

storiesOf("Textarea", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("Textarea", () => <Textarea rows="2" value={text("value", "")} />);
