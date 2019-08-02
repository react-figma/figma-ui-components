import * as React from "react";
import { TypographyStyles } from "../typography";

export const TextStyleDecorator = (story: () => any) => (
    <>
        <TypographyStyles />
        {story()}
    </>
);
