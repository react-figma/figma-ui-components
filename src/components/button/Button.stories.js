// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { PrimaryButton } from "./PrimaryButton";
import { TextStyleDecorator } from "../../storybook/TextStylesDecorator";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { PrimaryDestructiveButton } from "./PrimaryDestructiveButton";

storiesOf("Button", module)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("Button", () => <Button>Label</Button>)
    .add("PrimaryButton", () => <PrimaryButton disabled={boolean("disabled")}>Label</PrimaryButton>)
    .add("PrimaryDestructiveButton", () => (
        <PrimaryDestructiveButton disabled={boolean("disabled")}>Label</PrimaryDestructiveButton>
    ));
