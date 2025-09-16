import React from "react";
import type { BaseInputProps, InputVariant } from "./types";
import CurrencyInput from "./variants/CurrencyInput";
import DateInput from "./variants/DateInput";
import DropDownInput from "./variants/DropDownInput";
import NumberInput from "./variants/NumberInput";
import TextInput from "./variants/TextInput";
import TimeInput from "./variants/TimeInput";
import type dayjs from "dayjs";

interface InputProps extends BaseInputProps {
  variant?: InputVariant;
  list?: string[];
  disablePast?: boolean;
  minDate?: dayjs.Dayjs;
  minTime?: dayjs.Dayjs;
  maxTime?: dayjs.Dayjs;
  time?: dayjs.Dayjs | null;
}

const Input = React.memo((props: InputProps) => {
  const {
    variant = "text",
    label,
    value,
    onChange,
    disabled,
    className,
    placeholder,
    name,
    list,
    disablePast,
    minDate,
    minTime,
    maxTime,
    time,
  } = props;

  const commonProps = {
    label,
    value,
    disabled,
    className,
    name,
  };

  switch (variant) {
    case "currency":
      return (
        <CurrencyInput {...commonProps} onChange={ typeof onChange === "function" && onChange.length === 1
              ? (onChange as (e: React.ChangeEvent<unknown>) => void)
              : undefined
          }
        />
      );

    case "number":
      return (
        <NumberInput {...commonProps} placeholder={placeholder} onChange={ typeof onChange === "function" && onChange.length === 1
              ? (onChange as (e: React.ChangeEvent<unknown>) => void)
              : undefined
          }
        />
      );

    case "date":
      return (
        <DateInput {...commonProps} disablePast={disablePast} minDate={minDate} onChange={
            typeof onChange === "function" && onChange.length === 1
              ? (onChange as (value: dayjs.Dayjs | null) => void)
              : undefined
          }
        />
      );

    case "time":
      return (
        <TimeInput {...commonProps} minTime={minTime}
          maxTime={maxTime}
          time={time}
          onChange={
            typeof onChange === "function" && onChange.length === 1
              ? (onChange as (value: dayjs.Dayjs | null) => void)
              : undefined
          }
        />
      );

    case "dropdown":
      return (
        <DropDownInput {...commonProps} list={list}
          onChange={
            typeof onChange === "function" && onChange.length === 1
              ? (onChange as (e: React.ChangeEvent<unknown>) => void)
              : undefined
          }
        />
      );

    case "text":
    default:
      return (
        <TextInput
          {...commonProps}
          placeholder={placeholder}
          onChange={
            typeof onChange === "function" && onChange.length === 1
              ? (onChange as (e: React.ChangeEvent<unknown>) => void)
              : undefined
          }
        />
      );
  }
});

export default Input;
