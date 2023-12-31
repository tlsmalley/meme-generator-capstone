/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, TextAreaField, View } from "@aws-amplify/ui-react";
export default function InputBox(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="1440px"
      height="399px"
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
        top="278px"
        left="624px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Generate Memes"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <TextAreaField
        width="1034px"
        height="215px"
        label="Enter a Caption"
        position="absolute"
        top="84px"
        left="203px"
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
