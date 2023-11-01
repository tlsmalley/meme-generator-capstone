/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavBarHeaderMemeHero from "./NavBarHeaderMemeHero";
import HeroLayout1 from "./HeroLayout1";
import InputBox from "./InputBox";
import GeneratedMeme from "./GeneratedMeme";
import CTASection from "./CTASection";
import MarketingFooter from "./MarketingFooter";
import { Flex, View } from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { Logo, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <NavBarHeaderMemeHero
        display="flex"
        gap="40px"
        direction="row"
        width="1440px"
        height="209px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader-MemeHero")}
      ></NavBarHeaderMemeHero>
      <HeroLayout1
        display="flex"
        gap="0"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, "HeroLayout1")}
      ></HeroLayout1>
      <InputBox
        width="1440px"
        height="430px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "InputBox39611732")}
      ></InputBox>
      <GeneratedMeme
        width="600px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "GeneratedMeme")}
      ></GeneratedMeme>
      <CTASection
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        height="288px"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="160px 160px 160px 160px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "CTASection")}
      ></CTASection>
      <MarketingFooter
        display="flex"
        gap="32px"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="40px 40px 40px 40px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "MarketingFooter")}
      ></MarketingFooter>
      <View
        width="100px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 4381")}
      >
        <InputBox
          width="1440px"
          height="478px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="100px"
          left="-64px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "InputBox39611748")}
        ></InputBox>
      </View>
    </Flex>
  );
}
