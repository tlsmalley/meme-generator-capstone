/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Loader, TextAreaField, View } from "@aws-amplify/ui-react";
export default function InputBox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="478px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "InputBox")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="247px"
        left="1293px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Generate Memes"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Loader
        position="absolute"
        top="332px"
        left="564px"
        size="large"
        variation="linear"
        {...getOverrideProps(overrides, "Loader")}
      ></Loader>
      <TextAreaField
        width="1034px"
        height="215px"
        label="Enter a Caption"
        position="absolute"
        top="111px"
        left="204px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
    </View>
  );
}
