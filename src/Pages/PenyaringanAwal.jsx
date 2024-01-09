import React from "react";
import FormDetailComponent from "../Components/PenyaringanAwal/FormDetailComponent";
import { Flex, Form } from "antd";
import TabsComponent from "../Components/PenyaringanAwal/TabsComponent";

const PenyaringanAwal = () => {
  // const formValueChange = async (value) => {
  //   console.log(value);
  // };
  const [form] = Form.useForm();

  // console.log(form.getFieldValue());

  return (
    <React.Fragment>
      {/* <Form layout="vertical" onFieldsChange={(e) => formValueChange(e)}> */}
      <Form layout="vertical" form={form}>
        <Flex gap={10} vertical>
          <FormDetailComponent />
          <TabsComponent form={form} />
        </Flex>
      </Form>
    </React.Fragment>
  );
};

export default PenyaringanAwal;
