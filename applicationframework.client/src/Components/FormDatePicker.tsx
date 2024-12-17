/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, DatePicker } from "antd";

export function FormDatePicker({ id, label, required, ...rest }: any) {
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
      <DatePicker style={{ width: "100%" }} {...rest} />
    </Form.Item>
  );
}
