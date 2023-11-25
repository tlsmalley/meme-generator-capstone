/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SiteContent } from "../models";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderMemeHeroOverridesProps = {
    NavBarHeaderMemeHero?: PrimitiveOverrideProps<FlexProps>;
    "lol 2"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    "Generate Your Meme"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    "Privacy & Safety"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderMemeHeroProps = React.PropsWithChildren<Partial<FlexProps> & {
    siteContent?: SiteContent;
} & {
    overrides?: NavBarHeaderMemeHeroOverridesProps | undefined | null;
}>;
export default function NavBarHeaderMemeHero(props: NavBarHeaderMemeHeroProps): React.ReactElement;
