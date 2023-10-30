/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, ImageProps, RatingProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GeneratedMemeOverridesProps = {
    GeneratedMeme?: PrimitiveOverrideProps<ViewProps>;
    "angrycat 1"?: PrimitiveOverrideProps<ImageProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
} & EscapeHatchProps;
export declare type GeneratedMemeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GeneratedMemeOverridesProps | undefined | null;
}>;
export default function GeneratedMeme(props: GeneratedMemeProps): React.ReactElement;
