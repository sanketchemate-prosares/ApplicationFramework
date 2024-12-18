/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";

export function FormInput({
  id,
  label,
  type = "text",
  placeholder,
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
          message: `Please input your ${label.toLowerCase()}!`,
        },
      ]}
    >
      <Input type={type} placeholder={placeholder} {...rest} />
    </Form.Item>
  );
}
