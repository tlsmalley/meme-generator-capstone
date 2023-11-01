/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, PasswordField } from "@aws-amplify/ui-react";
export default function CaptionInput(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CaptionInput")}
      {...rest}
    >
      <PasswordField
        width="300px"
        height="unset"
        shrink="0"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        hideShowPassword={true}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
    </Flex>
  );
}
