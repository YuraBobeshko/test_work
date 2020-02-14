import React from "react";
import { useForm } from "react-hook-form";

import Input from "../Input/Input";
import "./form.scss";

const Form: React.FC = () => {
  const { handleSubmit, register, errors } = useForm({});
  const onSubmit = (values: any) => {
    console.info(values);
  };

  return (
    <div className={"wrapper-form"}>
      <p className={"form__heading"}>Log in to Example</p>
      <a className={"form__link-head"} href="/">
        or create an account
      </a>
      <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name={"e.g.john.doe@gmail.com"}
          type={"text"}
          label={"E-mail"}
          errors={errors}
          register={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "error email"
            }
          })}
        />
        <Input
          name={"●●●●●●●●●●●●●"}
          type={"password"}
          label={"Password"}
          errors={errors}
          register={register({
            required: "Required",
            minLength: {
              value: 8,
              message: "error password"
            },
            max: {
              value: 20,
              message: "error password"
            }
          })}
        />
        <Input
          name={"checkbox"}
          type={"checkbox"}
          customLabel={<p>Agree with <a href={'/'}>Terms & Conditions</a></p>}
          errors={errors}
          register={register({
            required: "is required"
          })}
        />
        <button className={"form-btn"} type="submit">
          Login
        </button>
      </form>
      <a className={"form__link"} href="/" onClick={() => alert("it's not my problem")}>Forgotten password?</a>
    </div>
  );
};

export default Form;
