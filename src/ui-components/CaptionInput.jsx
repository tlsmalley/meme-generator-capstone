/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, TextField } from "@aws-amplify/ui-react";
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
      <TextField
        width="300px"
        height="unset"
        label="Input a Caption"
        placeholder="Making memes is fun!"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </Flex>
  );
}
