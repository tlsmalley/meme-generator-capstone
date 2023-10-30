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
export default function MemeUpdateForm(props) {
  const {
    id: idProp,
    meme: memeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    untitledfield: "",
    caption: "",
    image1_url: "",
    image1_downloaded: false,
    image1_rating: "",
    image2_url: "",
    image2_downloaded: false,
    image2_rating: "",
    image3_url: "",
    image3_downloaded: false,
    image3_rating: "",
  };
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [caption, setCaption] = React.useState(initialValues.caption);
  const [image1_url, setImage1_url] = React.useState(initialValues.image1_url);
  const [image1_downloaded, setImage1_downloaded] = React.useState(
    initialValues.image1_downloaded
  );
  const [image1_rating, setImage1_rating] = React.useState(
    initialValues.image1_rating
  );
  const [image2_url, setImage2_url] = React.useState(initialValues.image2_url);
  const [image2_downloaded, setImage2_downloaded] = React.useState(
    initialValues.image2_downloaded
  );
  const [image2_rating, setImage2_rating] = React.useState(
    initialValues.image2_rating
  );
  const [image3_url, setImage3_url] = React.useState(initialValues.image3_url);
  const [image3_downloaded, setImage3_downloaded] = React.useState(
    initialValues.image3_downloaded
  );
  const [image3_rating, setImage3_rating] = React.useState(
    initialValues.image3_rating
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = memeRecord
      ? { ...initialValues, ...memeRecord }
      : initialValues;
    setUntitledfield(cleanValues.untitledfield);
    setCaption(cleanValues.caption);
    setImage1_url(cleanValues.image1_url);
    setImage1_downloaded(cleanValues.image1_downloaded);
    setImage1_rating(cleanValues.image1_rating);
    setImage2_url(cleanValues.image2_url);
    setImage2_downloaded(cleanValues.image2_downloaded);
    setImage2_rating(cleanValues.image2_rating);
    setImage3_url(cleanValues.image3_url);
    setImage3_downloaded(cleanValues.image3_downloaded);
    setImage3_rating(cleanValues.image3_rating);
    setErrors({});
  };
  const [memeRecord, setMemeRecord] = React.useState(memeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Meme, idProp)
        : memeModelProp;
      setMemeRecord(record);
    };
    queryData();
  }, [idProp, memeModelProp]);
  React.useEffect(resetStateValues, [memeRecord]);
  const validations = {
    untitledfield: [],
    caption: [],
    image1_url: [],
    image1_downloaded: [],
    image1_rating: [],
    image2_url: [],
    image2_downloaded: [],
    image2_rating: [],
    image3_url: [],
    image3_downloaded: [],
    image3_rating: [],
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
          untitledfield,
          caption,
          image1_url,
          image1_downloaded,
          image1_rating,
          image2_url,
          image2_downloaded,
          image2_rating,
          image3_url,
          image3_downloaded,
          image3_rating,
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
          await DataStore.save(
            Meme.copyOf(memeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MemeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              untitledfield: value,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextField>
      <TextField
        label="Caption"
        isRequired={false}
        isReadOnly={false}
        value={caption}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption: value,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.caption ?? value;
          }
          if (errors.caption?.hasError) {
            runValidationTasks("caption", value);
          }
          setCaption(value);
        }}
        onBlur={() => runValidationTasks("caption", caption)}
        errorMessage={errors.caption?.errorMessage}
        hasError={errors.caption?.hasError}
        {...getOverrideProps(overrides, "caption")}
      ></TextField>
      <TextField
        label="Image1 url"
        isRequired={false}
        isReadOnly={false}
        value={image1_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url: value,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image1_url ?? value;
          }
          if (errors.image1_url?.hasError) {
            runValidationTasks("image1_url", value);
          }
          setImage1_url(value);
        }}
        onBlur={() => runValidationTasks("image1_url", image1_url)}
        errorMessage={errors.image1_url?.errorMessage}
        hasError={errors.image1_url?.hasError}
        {...getOverrideProps(overrides, "image1_url")}
      ></TextField>
      <SwitchField
        label="Image1 downloaded"
        defaultChecked={false}
        isDisabled={false}
        isChecked={image1_downloaded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded: value,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image1_downloaded ?? value;
          }
          if (errors.image1_downloaded?.hasError) {
            runValidationTasks("image1_downloaded", value);
          }
          setImage1_downloaded(value);
        }}
        onBlur={() =>
          runValidationTasks("image1_downloaded", image1_downloaded)
        }
        errorMessage={errors.image1_downloaded?.errorMessage}
        hasError={errors.image1_downloaded?.hasError}
        {...getOverrideProps(overrides, "image1_downloaded")}
      ></SwitchField>
      <TextField
        label="Image1 rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={image1_rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating: value,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image1_rating ?? value;
          }
          if (errors.image1_rating?.hasError) {
            runValidationTasks("image1_rating", value);
          }
          setImage1_rating(value);
        }}
        onBlur={() => runValidationTasks("image1_rating", image1_rating)}
        errorMessage={errors.image1_rating?.errorMessage}
        hasError={errors.image1_rating?.hasError}
        {...getOverrideProps(overrides, "image1_rating")}
      ></TextField>
      <TextField
        label="Image2 url"
        isRequired={false}
        isReadOnly={false}
        value={image2_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url: value,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image2_url ?? value;
          }
          if (errors.image2_url?.hasError) {
            runValidationTasks("image2_url", value);
          }
          setImage2_url(value);
        }}
        onBlur={() => runValidationTasks("image2_url", image2_url)}
        errorMessage={errors.image2_url?.errorMessage}
        hasError={errors.image2_url?.hasError}
        {...getOverrideProps(overrides, "image2_url")}
      ></TextField>
      <SwitchField
        label="Image2 downloaded"
        defaultChecked={false}
        isDisabled={false}
        isChecked={image2_downloaded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded: value,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image2_downloaded ?? value;
          }
          if (errors.image2_downloaded?.hasError) {
            runValidationTasks("image2_downloaded", value);
          }
          setImage2_downloaded(value);
        }}
        onBlur={() =>
          runValidationTasks("image2_downloaded", image2_downloaded)
        }
        errorMessage={errors.image2_downloaded?.errorMessage}
        hasError={errors.image2_downloaded?.hasError}
        {...getOverrideProps(overrides, "image2_downloaded")}
      ></SwitchField>
      <TextField
        label="Image2 rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={image2_rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating: value,
              image3_url,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image2_rating ?? value;
          }
          if (errors.image2_rating?.hasError) {
            runValidationTasks("image2_rating", value);
          }
          setImage2_rating(value);
        }}
        onBlur={() => runValidationTasks("image2_rating", image2_rating)}
        errorMessage={errors.image2_rating?.errorMessage}
        hasError={errors.image2_rating?.hasError}
        {...getOverrideProps(overrides, "image2_rating")}
      ></TextField>
      <TextField
        label="Image3 url"
        isRequired={false}
        isReadOnly={false}
        value={image3_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url: value,
              image3_downloaded,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image3_url ?? value;
          }
          if (errors.image3_url?.hasError) {
            runValidationTasks("image3_url", value);
          }
          setImage3_url(value);
        }}
        onBlur={() => runValidationTasks("image3_url", image3_url)}
        errorMessage={errors.image3_url?.errorMessage}
        hasError={errors.image3_url?.hasError}
        {...getOverrideProps(overrides, "image3_url")}
      ></TextField>
      <SwitchField
        label="Image3 downloaded"
        defaultChecked={false}
        isDisabled={false}
        isChecked={image3_downloaded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded: value,
              image3_rating,
            };
            const result = onChange(modelFields);
            value = result?.image3_downloaded ?? value;
          }
          if (errors.image3_downloaded?.hasError) {
            runValidationTasks("image3_downloaded", value);
          }
          setImage3_downloaded(value);
        }}
        onBlur={() =>
          runValidationTasks("image3_downloaded", image3_downloaded)
        }
        errorMessage={errors.image3_downloaded?.errorMessage}
        hasError={errors.image3_downloaded?.hasError}
        {...getOverrideProps(overrides, "image3_downloaded")}
      ></SwitchField>
      <TextField
        label="Image3 rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={image3_rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              untitledfield,
              caption,
              image1_url,
              image1_downloaded,
              image1_rating,
              image2_url,
              image2_downloaded,
              image2_rating,
              image3_url,
              image3_downloaded,
              image3_rating: value,
            };
            const result = onChange(modelFields);
            value = result?.image3_rating ?? value;
          }
          if (errors.image3_rating?.hasError) {
            runValidationTasks("image3_rating", value);
          }
          setImage3_rating(value);
        }}
        onBlur={() => runValidationTasks("image3_rating", image3_rating)}
        errorMessage={errors.image3_rating?.errorMessage}
        hasError={errors.image3_rating?.hasError}
        {...getOverrideProps(overrides, "image3_rating")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || memeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || memeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
