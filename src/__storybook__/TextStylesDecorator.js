// @flow
import { TypographyStyles } from "../typography";
import React from "react";

export const TextStyleDecorator = (story: () => any) => (
    <>
        <TypographyStyles />
        {story()}
    </>
);
