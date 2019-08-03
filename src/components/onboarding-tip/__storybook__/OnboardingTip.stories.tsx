import { storiesOf } from "@storybook/react";
import { BaseStyleDecorator } from "../../../__storybook__/BaseStylesDecorator";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import * as React from "react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { OnboardingTip } from "../OnboardingTip";

storiesOf("OnboardingTip", module)
    .addDecorator(BaseStyleDecorator)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("OnboardingTip", () => (
        <OnboardingTip
            isHidden={boolean("isHidden", false)}
            isLight={boolean("isLight", false)}
            isPt5={boolean("isPt5", false)}>
            {text("children", "Your onboarding tip goes here.")}
        </OnboardingTip>
    ));
