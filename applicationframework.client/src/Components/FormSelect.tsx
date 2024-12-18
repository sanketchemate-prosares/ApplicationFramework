/* eslint-disable @typescript-eslint/no-explicit-any*/
import { Form, Select } from "antd";

export function FormSelect({
  id,
  label,
  options,
  placeholder = "Select an option",
  required,
  ...rest
}: any) {
  return (
    <Form.Item
      label={label}
      name={id}
      rules={[
        {
          required: required,
          message: `Please select ${label.toLowerCase()}!`,
        },
      ]}
    >
      <Select placeholder={placeholder} options={options} {...rest} />
    </Form.Item>
  );
}
