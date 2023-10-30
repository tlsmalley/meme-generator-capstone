/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Image, Rating, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function GeneratedMeme(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="600px"
      height="600px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "GeneratedMeme")}
      {...rest}
    >
      <Image
        width="515px"
        height="343.44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="58px"
        left="42px"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        {...getOverrideProps(overrides, "angrycat 1")}
      ></Image>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="437px"
        left="151px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Download"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Rating
        width="199px"
        height="24px"
        position="absolute"
        top="446px"
        left="327px"
        size="default"
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
      <MyIcon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="515px"
        left="242px"
        padding="0px 0px 0px 0px"
        type="twitter"
        {...getOverrideProps(overrides, "MyIcon39523746")}
      ></MyIcon>
      <MyIcon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="515px"
        left="288px"
        padding="0px 0px 0px 0px"
        type="instagram"
        {...getOverrideProps(overrides, "MyIcon39523747")}
      ></MyIcon>
      <MyIcon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="515px"
        left="334px"
        padding="0px 0px 0px 0px"
        type="email"
        {...getOverrideProps(overrides, "MyIcon39523748")}
      ></MyIcon>
    </View>
  );
}
