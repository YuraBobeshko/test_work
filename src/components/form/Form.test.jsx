import React from "react";
import { shallow } from 'enzyme';
import Form from "./Form";

describe('<Form />', () => {
  const wrapper = shallow(<Form />);
  const wrapperInput = wrapper.find('div').children().find('form').children().find('Input');

  test("usual case", () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  test("usual case", () => {
    expect(wrapper.find('div').children().find('form')).toHaveLength(1);
  });

  test("usual case", () => {
    expect(wrapper.find('div').children().find('form').children().find('button')).toHaveLength(1);
  });

  test("usual case", () => {
    expect(wrapperInput).toHaveLength(3);
  });
  
});