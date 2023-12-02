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
    textPrompt?: string;
    temperature?: number;
    imageUrl?: string;
    vote?: boolean;
};
export declare type MemeUpdateFormValidationValues = {
    textPrompt?: ValidationFunction<string>;
    temperature?: ValidationFunction<number>;
    imageUrl?: ValidationFunction<string>;
    vote?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemeUpdateFormOverridesProps = {
    MemeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    textPrompt?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    vote?: PrimitiveOverrideProps<SwitchFieldProps>;
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
