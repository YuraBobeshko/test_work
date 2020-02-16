import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";

import Form from "./Form";

afterEach(cleanup);

const wrapper = shallow(<Form />);
const wrapperForm = wrapper.find("form").children();
const wrapperInput = wrapper
  .find("form")
  .children()
  .find("Input")
  .children();
const FormComponent = renderer.create(<Form />).toJSON();
const FormComponentError = renderer.create(<Form />).toJSON();

describe("should structure <Form /> be correct", () => {
  test("is form", () => {
    expect(wrapper.find("form")).toHaveLength(1);
  });

  test("is button", () => {
    expect(wrapperForm.find("button")).toHaveLength(1);
  });

  test("all 3 <Input />", () => {
    expect(wrapperForm.find("Input")).toHaveLength(3);
  });

  test("all 3 input", () => {
    wrapperInput.find("Input").forEach(node => {
      expect(
        node
          .find("div")
          .children()
          .find("input")
      ).toHaveLength(1);
    });
  });
});

describe("should luck correct", () => {
  expect(FormComponent).toMatchSnapshot();
});

describe("Form changes the text after click", () => {
  test("is form with error", () => {
    wrapperForm.find("button").simulate("click");
    wrapperInput.find("Input").forEach(node => {
      expect(
        node
          .find("div")
          .children()
          .find("span.error")
      ).toHaveLength(1);
    });
    expect(FormComponentError).toMatchSnapshot();
  });
});
