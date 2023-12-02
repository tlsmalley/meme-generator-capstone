/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarHeaderMemeHero(props) {
  const { siteContent, overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="105px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 13px 32px"
      backgroundColor="rgba(39,159,87,1)"
      {...getOverrideProps(overrides, "NavBarHeaderMemeHero")}
      {...rest}
    >
      <Image
        width="184px"
        height="139px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://i.imgur.com/44D2UZz.png"
        overflow="clip"
        {...getOverrideProps(overrides, "lol 2")}
      ></Image>
      <Flex
        gap="32px"
        direction="row"
        width="603px"
        height="57px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Generate Your Meme"
          {...getOverrideProps(overrides, "Generate Your Meme")}
        ></Text>
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
          {...getOverrideProps(overrides, "Frame 437")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="38.5px"
            left="12px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact"
            {...getOverrideProps(overrides, "Contact")}
          ></Text>
        </View>
        <Text
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Privacy & Safety"
          {...getOverrideProps(overrides, "Privacy & Safety")}
        ></Text>
      </Flex>
    </Flex>
  );
}
