// @flow
import {TextStyles} from "../typography";
import React from "react";

export const TextStyleDecorator = (story: () => any) => <>
    <TextStyles />
    {story()}
</>;
