// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import {Button} from "./Button";
import {PrimaryButton} from "./PrimaryButton";
import {TextStyleDecorator} from "../../storybook/TextStylesDecorator";

storiesOf("Button", module)
    .addDecorator(TextStyleDecorator)
    .add("Button", () => <Button>Label</Button>)
    .add("PrimaryButton", () => <PrimaryButton>Label</PrimaryButton>);
