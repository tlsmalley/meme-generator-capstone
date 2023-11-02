/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { siteContent, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Eyebrow: {},
        Heading: {},
        Body: {},
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: {},
        image: {},
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        Eyebrow: { fontFamily: "Inter", color: "rgba(188,236,245,1)" },
        Heading: {
          color: "rgba(255,255,255,1)",
          children: "MemeMe is for You!",
        },
        Body: {
          fontFamily: "Inter",
          color: "rgba(255,255,255,1)",
          children:
            "Enter a caption and receive 3, unique, never-before-seen memes to download or share with friends!",
        },
        Message: {},
        Button: {},
        HeroMessage: {},
        Left: { backgroundColor: "rgba(13,26,38,1)" },
        image: { width: "unset", alignSelf: "stretch" },
        Right: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="16px"
              fontWeight="700"
              color="rgba(64,170,191,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Welcome"
              {...getOverrideProps(overrides, "Eyebrow")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="MemeHero is for You!"
              {...getOverrideProps(overrides, "Heading")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Enter a caption and receive 3, unique, never before seen memes to download or share with friends - it’s that easy!"
              {...getOverrideProps(overrides, "Body")}
            ></Text>
          </Flex>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Get started"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Right")}
      >
        <Image
          width="720px"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          src="https://meme-generator-capstone-storage-bd19ed8215530-master.s3.us-west-2.amazonaws.com/public/image-%281%29.png?AWSAccessKeyId=ASIAQNFUSBNIG2MBINVG&Expires=1698911613&Signature=HLWREses1aXVOwFo0OVDCg%2FiyGc%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnnzjSjT4V7BM1PT4H6k5EO%2F6d%2Fkl05ktsy4nRCHLoUQIgI%2BYVNpZs3FOL2H9LLxPSXzZqD9fIwR1zGbWE7F5cCIAqxAQIKRAAGgwwMjgyOTU5NTczMjgiDL5DWhH9RtkPqkQM1SqhBOA5pxBDYJd6uaM189LVN6we%2BYRYtEs9dmXdNyg8%2B8c7AGdP8G9mg1WvX4AVL43M6gCfIJJfq934qAYWBTTRRX1RWWkUo3S7TEwyKsYTmE21NFQvfRzCA5nHYlnZjWe5so1aNkl8Xw5LGKtqSLPmq9LZpid4hGaTLiuDPTHxoWBBWTDS4TN%2BKKgSUIYMV63FDH0Mz5mkXavutJV%2Fw8QNEsa%2FDf3e9kKHSJUSxqXRb4BfQ800hc93mo2AXA3i2acYV%2BX1W4DBLlcPAMl7PTo9GnJ6dCjgmAhTbh3sq3CicD18MNE0xpDos9UqTHonb70suun6%2FAgO9up2p0DXVZ%2F08LwYtbKmUDVJAEhVq09l0njDwRBGsqP7t61TXS3Y4YhHYHAsL1%2BjZ5n%2FJgxjS%2F%2FVzsVgDqbx6ujV1v%2FabN0vMPhzHS2t0nIeV%2BScv0X9kwf3O6lG1653n9sI0FBxkbEr3Sfj98jt%2FTOI52aoVO%2BkcoVFIDwsIg7L3AmnSEvzRc3d5YJomAORiYC6oK1hCi2TxunSBrah811xvTBZAL%2BK8qF6nGpyi1pWHexgDepHhisBgNticHBPOzg6e5WC7ohKq8xQPct2NOpZ4%2F87kkY9vz73RSCqUO6cgua6%2BDfAD%2BeG00Ipi0J2OAMb8vcCvqsAQflxEUxxo0SISSsTn2n4XjVaNvKdp%2Bcd%2BMqL0UGHr7azoeat2oIWjfEqQHgijO9EifH1MJekjaoGOoUCHnXpQCmQoYRXu6qSAuawwk%2FGHysDax1AmvrepiOq%2FdmLCIudCsZH7a87yhfgdynQgI5VZC3qW1Gwi5hnaznD%2FxoQCgBW7JMeV8Z8eqCTTHncx8aT3f9css1%2FM%2FxB1FQgsUh3tcNZvGpiQv7tSwkJKSy2x3kVtPVGnGO0rEDfacKWS6IhEVus2tNGwZFtVau32M%2BB3%2Fa4xRuYV5N9jYH%2FAzPqrXmxAZ5a83nn8NivaOl1SmEC9Vr1I5kCylegAwPyzpNORU0YmdNVClkzsJA1sXdulr%2FNh5uhnCkKG9R7mRlBrTEGo12RaT9TgsjXTTBV2OeqOEIMg3l16%2BpVY%2FORsBSZP1J3"
          overflow="clip"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
