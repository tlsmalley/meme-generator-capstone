/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { HeadingProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MemeCardOverridesProps = {
    MemeCard?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "angrycat 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MemeCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: MemeCardOverridesProps | undefined | null;
}>;
export default function MemeCard(props: MemeCardProps): React.ReactElement;
