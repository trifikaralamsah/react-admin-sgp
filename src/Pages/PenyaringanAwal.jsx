import React, { useEffect } from "react";
import FormDetailComponent from "../Components/PenyaringanAwal/FormDetailComponent";
import { Button, Col, Flex, Form, Modal, Row, Space, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import TabsComponent from "../Components/PenyaringanAwal/TabsComponent";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../Redux/Reducers/PenyaringanAwal/validateFormReducer";

const PenyaringanAwal = () => {
  const { Text } = Typography;
  const validateFormReducer = useSelector((state) => state.validateForm.data);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const validateFormDetail = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("fikarcoba", values);
        dispatch(setData(true));
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
        dispatch(setData(false));
      });
  };
  const handleCancel = () => {
    dispatch(setData(true));
  };
  useEffect(() => {}, [dispatch, validateFormReducer]);
  return (
    <React.Fragment>
      <Flex gap={10} vertical>
        <FormDetailComponent form={form} />
        <TabsComponent
          form={form}
          validateFormDetail={() => validateFormDetail()}
        />
      </Flex>
      <Modal open={!validateFormReducer} footer={false}>
        <Row style={{ padding: "30px", paddingBottom: "30px" }}>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Text>Oops, Masih Ada Kolom Wajib Yang Belum Diisi!</Text>
          </Col>
        </Row>
        <Row justify="center">
          <Space>
            <Button type="primary" onClick={handleCancel}>
              <CheckCircleFilled /> OK
            </Button>
          </Space>
        </Row>
      </Modal>
    </React.Fragment>
  );
};

export default PenyaringanAwal;
