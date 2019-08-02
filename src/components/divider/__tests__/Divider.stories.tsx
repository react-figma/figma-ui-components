import * as React from "react";
import { Divider } from "../Divider";
import { storiesOf } from "@storybook/react";

storiesOf("Divider", module)
    .addDecorator(story => (
        <>
            some text
            {story()}
            some text
        </>
    ))
    .add("Divider", () => <Divider />);
