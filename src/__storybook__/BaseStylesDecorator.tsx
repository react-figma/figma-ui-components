import * as React from "react";
import { BaseStyles } from "../base";

export const BaseStyleDecorator = (story: () => any) => (
    <>
        <BaseStyles />
        {story()}
    </>
);
