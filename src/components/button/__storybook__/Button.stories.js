// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../Button";
import { PrimaryButton } from "../PrimaryButton";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { PrimaryDestructiveButton } from "../PrimaryDestructiveButton";
import { SecondaryButton } from "../SecondaryButton";
import { SecondaryDestructiveButton } from "../SecondaryDestructiveButton";

storiesOf("Button", module)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("PrimaryButton", () => <PrimaryButton disabled={boolean("disabled")}>Label</PrimaryButton>)
    .add("PrimaryDestructiveButton", () => (
        <PrimaryDestructiveButton disabled={boolean("disabled")}>Label</PrimaryDestructiveButton>
    ))
    .add("SecondaryButton", () => <SecondaryButton disabled={boolean("disabled")}>Label</SecondaryButton>)
    .add("SecondaryDestructiveButton", () => (
        <SecondaryDestructiveButton disabled={boolean("disabled")}>Label</SecondaryDestructiveButton>
    ));
