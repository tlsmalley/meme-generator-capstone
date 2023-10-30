/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Meme } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MemeUpdateFormInputValues = {
    untitledfield?: string;
    caption?: string;
    image1_url?: string;
    image1_downloaded?: boolean;
    image1_rating?: number;
    image2_url?: string;
    image2_downloaded?: boolean;
    image2_rating?: number;
    image3_url?: string;
    image3_downloaded?: boolean;
    image3_rating?: number;
};
export declare type MemeUpdateFormValidationValues = {
    untitledfield?: ValidationFunction<string>;
    caption?: ValidationFunction<string>;
    image1_url?: ValidationFunction<string>;
    image1_downloaded?: ValidationFunction<boolean>;
    image1_rating?: ValidationFunction<number>;
    image2_url?: ValidationFunction<string>;
    image2_downloaded?: ValidationFunction<boolean>;
    image2_rating?: ValidationFunction<number>;
    image3_url?: ValidationFunction<string>;
    image3_downloaded?: ValidationFunction<boolean>;
    image3_rating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemeUpdateFormOverridesProps = {
    MemeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
    caption?: PrimitiveOverrideProps<TextFieldProps>;
    image1_url?: PrimitiveOverrideProps<TextFieldProps>;
    image1_downloaded?: PrimitiveOverrideProps<SwitchFieldProps>;
    image1_rating?: PrimitiveOverrideProps<TextFieldProps>;
    image2_url?: PrimitiveOverrideProps<TextFieldProps>;
    image2_downloaded?: PrimitiveOverrideProps<SwitchFieldProps>;
    image2_rating?: PrimitiveOverrideProps<TextFieldProps>;
    image3_url?: PrimitiveOverrideProps<TextFieldProps>;
    image3_downloaded?: PrimitiveOverrideProps<SwitchFieldProps>;
    image3_rating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MemeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MemeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meme?: Meme;
    onSubmit?: (fields: MemeUpdateFormInputValues) => MemeUpdateFormInputValues;
    onSuccess?: (fields: MemeUpdateFormInputValues) => void;
    onError?: (fields: MemeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemeUpdateFormInputValues) => MemeUpdateFormInputValues;
    onValidate?: MemeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MemeUpdateForm(props: MemeUpdateFormProps): React.ReactElement;
