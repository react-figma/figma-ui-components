import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { Input } from "../Input";
import { InputWithIcon } from "../InputWithIcon";
import { AngleIcon } from "../../..";

storiesOf("Input", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("Input", () => (
        <Input
            value={text("value", null)}
            placeholder={text("placeholder", null)}
            type={select("type", { text: "text", number: "number" }, "text")}
        />
    ))
    .add("InputWithIcon", () => {
        return (
            <InputWithIcon
                icon={<AngleIcon isBlack3 />}
                input={
                    <Input
                        value={text("value", null)}
                        placeholder={text("placeholder", null)}
                        type={select("type", { text: "text", number: "number" }, "text")}
                    />
                }
            />
        );
    });
