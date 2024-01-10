/* eslint-disable react/prop-types */
import { Button, Col, Input, Modal, Row, Space, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import React from "react";

// eslint-disable-next-line react/prop-types
function DeleteModal({ openModal, data, handleOk, handleCancel }) {
  const { Text } = Typography;
  return (
    <React.Fragment>
      <Modal
        title="Peringatan"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Row style={{ padding: "10px", paddingBottom: "30px" }}>
          <Col span={24}>
            <Text>Apakah Anda yakin ingin menghapus Data ini?</Text>
            <Input value={data?.key} disabled style={{ display: "none" }} />
          </Col>
        </Row>
        <Row justify="end">
          <Space>
            <Button onClick={handleCancel}>Batal</Button>
            <Button onClick={handleOk} type="primary">
              <CheckCircleFilled /> Konfirmasi
            </Button>
          </Space>
        </Row>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteModal;
