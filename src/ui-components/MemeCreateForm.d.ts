/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MemeCreateFormInputValues = {
    textPrompt?: string;
    temperature?: number;
    imageUrl?: string;
    vote?: boolean;
};
export declare type MemeCreateFormValidationValues = {
    textPrompt?: ValidationFunction<string>;
    temperature?: ValidationFunction<number>;
    imageUrl?: ValidationFunction<string>;
    vote?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MemeCreateFormOverridesProps = {
    MemeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    textPrompt?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    vote?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type MemeCreateFormProps = React.PropsWithChildren<{
    overrides?: MemeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MemeCreateFormInputValues) => MemeCreateFormInputValues;
    onSuccess?: (fields: MemeCreateFormInputValues) => void;
    onError?: (fields: MemeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MemeCreateFormInputValues) => MemeCreateFormInputValues;
    onValidate?: MemeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MemeCreateForm(props: MemeCreateFormProps): React.ReactElement;
