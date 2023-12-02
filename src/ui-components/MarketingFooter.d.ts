/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    Divider39413816?: PrimitiveOverrideProps<DividerProps>;
    "Frame 40529766988"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    Products?: PrimitiveOverrideProps<TextProps>;
    MemeHero?: PrimitiveOverrideProps<TextProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    Privacy?: PrimitiveOverrideProps<TextProps>;
    "Privacy Policy"?: PrimitiveOverrideProps<TextProps>;
    "Frame 40539413972"?: PrimitiveOverrideProps<FlexProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Divider39413869?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: PrimitiveOverrideProps<ViewProps>;
    "\u00A9 2023 AWS Amplify UI. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
