/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeaderMemeHeroProps } from "./NavBarHeaderMemeHero";
import { HeroLayout1Props } from "./HeroLayout1";
import { InputBoxProps } from "./InputBox";
import { GeneratedMemeProps } from "./GeneratedMeme";
import { CTASectionProps } from "./CTASection";
import { MarketingFooterProps } from "./MarketingFooter";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
    "NavBarHeader-MemeHero"?: NavBarHeaderMemeHeroProps;
    HeroLayout1?: HeroLayout1Props;
    InputBox39611732?: InputBoxProps;
    GeneratedMeme?: GeneratedMemeProps;
    CTASection?: CTASectionProps;
    MarketingFooter?: MarketingFooterProps;
    "Frame 4381"?: PrimitiveOverrideProps<ViewProps>;
    InputBox39611748?: InputBoxProps;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<FlexProps> & {
    Logo?: String;
} & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
