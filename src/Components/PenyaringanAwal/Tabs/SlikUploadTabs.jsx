/* eslint-disable react/prop-types */
import { Button, Col, Form, Row, Typography, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
const SlikUploadTabs = ({ ...props }) => {
  const { Title, Text } = Typography;
  // const [form] = Form.useForm();
  const form = props.form;
  const [slikFileList, setSlikFileList] = useState([]);
  const slikHandleChange = ({ fileList: newFileList }) => {
    setSlikFileList(newFileList);
  };
  const onSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    props.onChangeTabs("3");
  };
  return (
    <React.Fragment>
      <Form form={form} onFinish={() => onSubmit()} layout={"vertical"}>
        <div style={{ ...style, paddingBottom: "5px" }}>
          <Row>
            <Col>
              <Title
                level={4}
                style={{ margin: 0, padding: 0, paddingBottom: 10 }}
              >
                SLIK Upload
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Upload SLIK" name={"noAplikasi"}>
                <Upload
                  accept=".doc,.docx,application/pdf"
                  fileList={slikFileList}
                  beforeUpload={() => false}
                  onChange={slikHandleChange}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Text style={{ paddingLeft: "5px", fontSize: "12px" }}>
                Bisa PDF, TXT
              </Text>
            </Col>
          </Row>
          <Row className="slikUpload">
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              <Button htmlType="submit" type="primary">
                Lanjutkan
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default SlikUploadTabs;
