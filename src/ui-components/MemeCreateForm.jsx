/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Meme } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MemeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    textPrompt: "",
    temperature: "",
    imageUrl: "",
    vote: false,
  };
  const [textPrompt, setTextPrompt] = React.useState(initialValues.textPrompt);
  const [temperature, setTemperature] = React.useState(
    initialValues.temperature
  );
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [vote, setVote] = React.useState(initialValues.vote);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTextPrompt(initialValues.textPrompt);
    setTemperature(initialValues.temperature);
    setImageUrl(initialValues.imageUrl);
    setVote(initialValues.vote);
    setErrors({});
  };
  const validations = {
    textPrompt: [],
    temperature: [],
    imageUrl: [],
    vote: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          textPrompt,
          temperature,
          imageUrl,
          vote,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Meme(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MemeCreateForm")}
      {...rest}
    >
      <TextField
        label="Text prompt"
        isRequired={false}
        isReadOnly={false}
        value={textPrompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              textPrompt: value,
              temperature,
              imageUrl,
              vote,
            };
            const result = onChange(modelFields);
            value = result?.textPrompt ?? value;
          }
          if (errors.textPrompt?.hasError) {
            runValidationTasks("textPrompt", value);
          }
          setTextPrompt(value);
        }}
        onBlur={() => runValidationTasks("textPrompt", textPrompt)}
        errorMessage={errors.textPrompt?.errorMessage}
        hasError={errors.textPrompt?.hasError}
        {...getOverrideProps(overrides, "textPrompt")}
      ></TextField>
      <TextField
        label="Temperature"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={temperature}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              textPrompt,
              temperature: value,
              imageUrl,
              vote,
            };
            const result = onChange(modelFields);
            value = result?.temperature ?? value;
          }
          if (errors.temperature?.hasError) {
            runValidationTasks("temperature", value);
          }
          setTemperature(value);
        }}
        onBlur={() => runValidationTasks("temperature", temperature)}
        errorMessage={errors.temperature?.errorMessage}
        hasError={errors.temperature?.hasError}
        {...getOverrideProps(overrides, "temperature")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              textPrompt,
              temperature,
              imageUrl: value,
              vote,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <SwitchField
        label="Vote"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vote}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              textPrompt,
              temperature,
              imageUrl,
              vote: value,
            };
            const result = onChange(modelFields);
            value = result?.vote ?? value;
          }
          if (errors.vote?.hasError) {
            runValidationTasks("vote", value);
          }
          setVote(value);
        }}
        onBlur={() => runValidationTasks("vote", vote)}
        errorMessage={errors.vote?.errorMessage}
        hasError={errors.vote?.hasError}
        {...getOverrideProps(overrides, "vote")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
