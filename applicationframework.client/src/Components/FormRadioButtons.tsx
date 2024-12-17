/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Radio } from "antd";

export function FormRadioGroup({
  id,
  label,
  options,
  defaultValue,
  required,
  ...rest
}: any) {
  return (
    <Form.Item
      label={label}
      name={id}
      initialValue={defaultValue}
      rules={[
        {
          required: required,
          message: `Please select ${label.toLowerCase()}!`,
        },
      ]}
    >
      <Radio.Group>
        {options.map((option: any) => (
          <Radio key={option.value} value={option.value} {...rest}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}
