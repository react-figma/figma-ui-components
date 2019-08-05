import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { SelectMenu } from "../SelectMenu";
import { SelectMenuItem } from "../SelectMenuItem";
import { Divider, DividerLabel, DividerLine } from "../Divider";

storiesOf("SelectMenu", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("SelectMenu", () => (
        <SelectMenu isActive={boolean("isActive", false)} label={text("label", "Item 2")}>
            <SelectMenuItem text={"Item 1"} />
            <SelectMenuItem text={"Item 2"} />
            <Divider>
                <DividerLine />
            </Divider>
            <SelectMenuItem isActive text={"Item 3"} />
            <SelectMenuItem text={"Item 4"} />
        </SelectMenu>
    ))
    .add("SelectMenu with groups", () => (
        <SelectMenu isActive={boolean("isActive", false)} label={text("label", "Item 2")}>
            <Divider>
                <DividerLabel isFirst>Group A</DividerLabel>
            </Divider>
            <SelectMenuItem text={"Item 1"} />
            <SelectMenuItem text={"Item 2"} />
            <Divider>
                <DividerLabel>Group B</DividerLabel>
            </Divider>
            <SelectMenuItem isActive text={"Item 3"} />
            <SelectMenuItem text={"Item 4"} />
        </SelectMenu>
    ));
