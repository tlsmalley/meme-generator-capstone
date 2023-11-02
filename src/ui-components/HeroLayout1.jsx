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
          src="https://meme-generator-capstone-storage-bd19ed8215530-master.s3.us-west-2.amazonaws.com/public/image-%281%29.png?AWSAccessKeyId=ASIAQNFUSBNIEQPAU3FN&Expires=1698914378&Signature=34OGmRrc2mDsyDcvDywXuG78h%2Bg%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4NVBpFpRqNWvqqCUK7tzGIhNS8EZZv9aURnnYVdsoyAiARPWEhuxDXobP2A%2BHXqixqkaoYU7pypyERuPtJxKJnnSrEBAgqEAAaDDAyODI5NTk1NzMyOCIMBfZW2Q8zDZfwcKcMKqEEdN39PzArzW1CUpyaOSCRswdwha6ffXSI%2BY9GqR8nzZI5oXR1KF73OowvQm%2BkvwMlg2wLY25YOTWrsqigeLSJRfLusWbHSP7oFrLRmarSGaBBqI0PBXfyzMpxzBlvw5n7RLjHc5dXvQifgzFY%2B1IV%2BIV5tjbwMDXbFD9feg2otTsyrAYokv3LetzJM3sdjXnPYaK9LmAlmwI2DNE%2FP7hJ0QzJ5eu5NsOV1EC2sTF2OZHoakApp6JruYu9wAIaBN4kIR%2BpY28Wi1JFhTe8EvIxT6vftqcBp4gj53vZq7UJD5QrCcSnxZQr%2BFEWnaf%2B9ZSiSzFuaWlg5P%2BimfjQxcs0FExJ%2FL4vWg%2BIqabHk6%2BEk%2FfDBnvTueI3M1jnwG0%2Fajm2n0scVEuQzdIBs%2BGZ7hpi3wQgqgI3JzAFyBs12AgLqjhwiL2MSqAnr%2BFa26YZFSS%2Fz%2BsWMsyXF1cXqKJmeAodCYhjCAWh2eMqbTbrBxrOVTKjkyYdT6bVvF39SRVlC9jJEj%2Bg%2F%2BlW88HpCaFF6x1xkq7vq3fJvJVPzkSUpfqgu0PRmBBevRxiZZBUGaN6Bywh%2BBZnzWppD%2FXHAnQsQEMnDvycXJINfo1PIwn%2FDRnpIuzbiwxFHO1QWur7PvGYMMVoQnMX%2FNOmNnZ4DNyRd6BkvASQnYxF5%2Fkswa4Mw%2FiwxVNEVJMG54GA%2Bsitu1QmEZRfQuiimThsR8%2FNS5kSY%2FnhQU0wt72NqgY6hgLdLzqQIkQclkhFqsLGeR%2F6su0Vpkw%2Bo%2F7xz%2BgWoAl13Yy0%2FhR1XtUWKLwQCXbMMwYs515IygkgKg04SU9y2r6nZTVoisxVfuzNqw5PqbUPwopH4OKqOpamAF1TFCsT3a6tZsGM8ACr2M%2BaD1Yc3NBnbkLWPEmDlHdVl6NrhQQ%2FtZdrLyStFhPtARAAxyFt89nVq8JGQpwpvWMXou5j98ezVlCAjPfTRU803rvZ1HAvn9gW4dM0%2FgCYaIcX2QEzRp9xEBIp6jr%2F%2BpeevjwrMTpqOXS4eEpSYrPSiUyKzCiW6EyPZSR9bRD0SfvfZyd0MfL5%2Bcz7i9EXnZb%2F9sK7NowxAkPpxpXp"
          overflow="clip"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
