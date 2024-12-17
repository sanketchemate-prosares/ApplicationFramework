/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Checkbox } from "antd";

export function FormCheckbox({ id, label, required, ...rest }: any) {
  return (
    <Form.Item
      name={id}
      valuePropName="checked"
      rules={[
        {
          validator: (_, value) =>
            required && !value
              ? Promise.reject(
                  new Error(`Please accept ${label.toLowerCase()}`)
                )
              : Promise.resolve(),
        },
      ]}
    >
      <Checkbox {...rest}>{label}</Checkbox>
    </Form.Item>
  );
}
