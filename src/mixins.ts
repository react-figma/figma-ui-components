// @flow
import { css } from "styled-components";
import {
    font_letterspacing_neg_medium,
    font_letterspacing_neg_small,
    font_letterspacing_neg_xlarge,
    font_letterspacing_pos_medium,
    font_letterspacing_pos_small,
    font_letterspacing_pos_xlarge,
    font_lineheight,
    font_lineheight_large,
    font_size_large,
    font_size_medium,
    font_size_small,
    font_size_xlarge,
    font_stack,
    font_weight_bold,
    font_weight_medium,
    font_weight_normal
} from "./variables";

export const fontUIPos = (size: string, weight: string) => {
    return css`
        font-family: ${font_stack};
    
        //weight 
        font-weight: ${
            weight === "bold" ? font_weight_bold : weight === "medium" ? font_weight_medium : font_weight_normal
        };
    
        //letterspacing + size
        ${size === "small" &&
            css`
                font-size: ${font_size_small};
                line-height: ${font_lineheight};
                letter-spacing: ${font_letterspacing_pos_small};
            `}
        ${size === "medium" &&
            css`
                font-size: ${font_size_medium};
                line-height: ${font_lineheight};
                letter-spacing: ${font_letterspacing_pos_medium};
            `}
        ${size === "large" &&
            css`
                font-size: ${font_size_large};
                line-height: ${font_lineheight_large};
                letter-spacing: ${font_letterspacing_pos_xlarge};
            `}
        ${size === "xlarge" &&
            css`
                font-size: ${font_size_xlarge};
                line-height: ${font_lineheight_large};
                letter-spacing: ${font_letterspacing_pos_xlarge};
            `}
    `;
};

export const fontUINeg = (size: string, weight: string) => {
    return css`
        font-family: ${font_stack};
    
        //weight 
        font-weight: ${
            weight === "bold" ? font_weight_bold : weight === "medium" ? font_weight_medium : font_weight_normal
        };
    
        //letterspacing + size
        ${size === "small" &&
            css`
                font-size: ${font_size_small};
                line-height: ${font_lineheight};
                letter-spacing: ${font_letterspacing_neg_small};
            `}
        ${size === "medium" &&
            css`
                font-size: ${font_size_medium};
                line-height: ${font_lineheight};
                letter-spacing: ${font_letterspacing_neg_medium};
            `}
        ${size === "large" &&
            css`
                font-size: ${font_size_large};
                line-height: ${font_lineheight_large};
                letter-spacing: ${font_letterspacing_neg_xlarge};
            `}
        ${size === "xlarge" &&
            css`
                font-size: ${font_size_xlarge};
                line-height: ${font_lineheight_large};
                letter-spacing: ${font_letterspacing_neg_xlarge};
            `}
    `;
};
