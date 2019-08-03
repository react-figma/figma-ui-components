import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { SectionTitle } from "../SectionTitle";

storiesOf("SectionTitle", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("SectionTitle", () => <SectionTitle>{text("children", "Section title")}</SectionTitle>);
