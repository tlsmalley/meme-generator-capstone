/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function CallAPI(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CallAPI")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Button"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
