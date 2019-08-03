import * as React from "react";
import * as icons from "../Icon";
import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { boolean, withKnobs } from "@storybook/addon-knobs";

Object.keys(icons).map(iconKey => {
    const Icon = icons[iconKey];
    storiesOf("Icon", module)
        .addDecorator(BaseStyleDecorator)
        .addDecorator(withKnobs)
        .add(iconKey, () => (
            <Icon
                isBlue={boolean("isBlue", false)}
                isBlack3={boolean("isBlack3", false)}
                isButton={boolean("isButton", false)}
                isText={boolean("isText", false)}
            />
        ));
});
