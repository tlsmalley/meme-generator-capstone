/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Heading, Image, View } from "@aws-amplify/ui-react";
export default function MemeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="1760px"
      height="939px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MemeCard")}
      {...rest}
    >
      <Heading
        width="346px"
        height="80px"
        position="absolute"
        top="26px"
        left="15px"
        level="1"
        children={home?.price}
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Image
        width="857px"
        height="571px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="184px"
        left="451px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "angrycat 1")}
      ></Image>
    </View>
  );
}
