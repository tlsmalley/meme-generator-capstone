/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, SliderField } from "@aws-amplify/ui-react";
export default function TemperatureSlider(props) {
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
      {...getOverrideProps(overrides, "TemperatureSlider")}
      {...rest}
    >
      <SliderField
        height="92px"
        label="Temperature"
        shrink="0"
        defaultValue="50"
        isDisabled={false}
        labelHidden={false}
        isValueHidden={false}
        size="large"
        {...getOverrideProps(overrides, "SliderField")}
      ></SliderField>
    </Flex>
  );
}
