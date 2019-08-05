import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { VisualBell } from "../VisualBell";

storiesOf("VisualBell", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("VisualBell", () => (
        <VisualBell
            isLoading={boolean("isLoading", false)}
            isError={boolean("isError", false)}
            text={text("text", "Loading...")}
        />
    ));
