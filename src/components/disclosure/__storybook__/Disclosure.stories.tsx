import * as React from "react";
import { storiesOf } from "@storybook/react";
import { TextStyleDecorator } from "../../../__storybook__/TextStylesDecorator";
import { withKnobs } from "@storybook/addon-knobs";
import { Disclosure } from "../Disclosure";
import { DisclosureItem } from "../DisclosureItem";

storiesOf("Disclosure", module)
    .addDecorator(TextStyleDecorator)
    .addDecorator(withKnobs)
    .add("Disclosure", () => (
        <Disclosure>
            <DisclosureItem isExpanded label={"Label"} content={"Panel content here"} />
            <DisclosureItem isSection label={"Label"} content={"Panel content here"} />
            <DisclosureItem label={"Label"} content={"Panel content here"} />
            <DisclosureItem isSection isExpanded label={"Label"} content={"Panel content here"} />
        </Disclosure>
    ));
