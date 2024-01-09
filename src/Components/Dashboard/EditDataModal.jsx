/* eslint-disable react/prop-types */
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
} from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import React, { useEffect } from "react";
import { editData } from "../../Redux/Reducers/Dashboard/tabelDashboard3";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
function EditDataModal({ openModal, data, handleOk, handleCancel }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const dateFormat = "YYYY/MM/DD";

  const handleSubmitDataEdit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        dispatch(editData(values));
        handleOk();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [form, data]);

  return (
    <React.Fragment>
      <Modal
        width={800}
        title="Edit Data"
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 18 }}
          autoComplete="off"
          layout="vertical"
          form={form}
          onFinish={handleSubmitDataEdit}
        >
          <Row gutter={16} style={{ paddingBottom: "30px" }}>
            <Col span={12} style={{ borderRight: "1px solid #000" }}>
              <Form.Item label="Key" name={"key"} required hidden>
                <Input value={data?.key} disabled />
              </Form.Item>
              <Form.Item
                label="AO"
                name={"ao"}
                rules={[{ required: true, message: "Kolom ini Wajib Diisi" }]}
              >
                <Input value={data?.ao} />
              </Form.Item>
              <Form.Item label="Tugas" name={"tugas"} required>
                <Input value={data?.tugas} />
              </Form.Item>
              <Form.Item label="Status" name={"status"} required>
                <Select value={data?.status}>
                  <Select.Option value="Belum Dikerjakan">
                    Belum Dikerjakan
                  </Select.Option>
                  <Select.Option value="Sedang Dikerjakan">
                    Sedang Dikerjakan
                  </Select.Option>
                  <Select.Option value="Selesai">Selesai</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingLeft: "5%" }}>
              <Form.Item label="Catatan" name={"catatan"} required>
                <Input value={data?.catatan} />
              </Form.Item>
              <Form.Item
                label="Dibuat Pada"
                name={"dibuat_pada"}
                required
                defaultValue={dayjs(data?.dibuat_pada)}
                getValueProps={(i) => ({ value: dayjs(i) })}
              >
                <DatePicker format={dateFormat} onChange={onChange} />
              </Form.Item>
              {/* <Form.Item label="Dibuat Pada" name={"dibuat_pada"} required>
              </Form.Item> */}
            </Col>
          </Row>
          <Row justify="end">
            <Space>
              <Button onClick={handleCancel}>Batal</Button>
              <Button htmlType="submit" type="primary">
                <CheckCircleFilled /> Konfirmasi
              </Button>
            </Space>
          </Row>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default EditDataModal;
