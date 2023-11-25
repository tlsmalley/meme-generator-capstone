/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ViewProps } from "@aws-amplify/ui-react";
import { NavBarHeaderMemeHeroProps } from "./NavBarHeaderMemeHero";
import { HeroLayout1Props } from "./HeroLayout1";
import { CaptionInputProps } from "./CaptionInput";
import { TemperatureSliderProps } from "./TemperatureSlider";
import { GeneratedMemeProps } from "./GeneratedMeme";
import { MarketingFooterProps } from "./MarketingFooter";
import { InputBoxProps } from "./InputBox";
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
export declare type HomePageOverridesProps = {
    HomePage?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "NavBarHeader-MemeHero"?: NavBarHeaderMemeHeroProps;
    HeroLayout1?: HeroLayout1Props;
    CaptionInput?: CaptionInputProps;
    TemperatureSlider?: TemperatureSliderProps;
    GeneratedMeme?: GeneratedMemeProps;
    MarketingFooter?: MarketingFooterProps;
    "Frame 4381"?: PrimitiveOverrideProps<ViewProps>;
    InputBox?: InputBoxProps;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    Logo?: String;
} & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
