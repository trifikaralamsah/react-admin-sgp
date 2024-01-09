import { Col, Form, Input, Row, Typography } from "antd";
import React from "react";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
  // height: "180px",
};
const FormDetailComponent = () => {
  const { Title } = Typography;
  return (
    <React.Fragment>
      <div style={{ ...style, paddingBottom: "5px" }}>
        <Row>
          <Col>
            <Title
              level={4}
              style={{ margin: 0, padding: 0, paddingBottom: 10 }}
            >
              DETAIL AO
            </Title>
          </Col>
        </Row>
        {/* <Form form={form} layout="vertical"> */}
        <Row gutter={69}>
          <Col span={12}>
            <Form.Item label="Nama AO" required>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Kode AO" required>
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Nama Cabang" required>
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Kode Cabang" required>
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>
        {/* </Form> */}
      </div>
    </React.Fragment>
  );
};

export default FormDetailComponent;
