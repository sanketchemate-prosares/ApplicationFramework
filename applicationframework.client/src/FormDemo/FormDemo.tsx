import { FormInput } from "../Components/FormInputs";
import { FormSelect } from "../Components/FormSelect";
import { FormRadioGroup } from "../Components/FormRadioButtons";
import { FormDatePicker } from "../Components/FormDatePicker";
import { FormCheckbox } from "../Components/FormCheckbox";
import { Form, Button, Card } from "antd";
const FormDemo = () => {
  const departmentOptions = [
    { value: "engineering", label: "Engineering" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  return (
    <Card
      title="Personal Information"
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormInput
          id="name"
          label="Full Name"
          placeholder="John Doe"
          required
        />

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
        />

        <FormRadioGroup
          id="gender"
          label="Gender"
          options={genderOptions}
          defaultValue="male"
          required
        />

        <FormSelect
          id="department"
          label="Department"
          options={departmentOptions}
          placeholder="Select department"
          required
          mode="multiple"
        />

        <FormDatePicker id="birthDate" label="Date of Birth" required />

        <FormCheckbox
          id="terms"
          label="I agree to the terms and conditions"
          required
        />

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormDemo;
