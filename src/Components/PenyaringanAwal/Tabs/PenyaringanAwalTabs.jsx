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
  Typography,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../Redux/Reducers/PenyaringanAwal/penyaringanAwalReducer";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
// eslint-disable-next-line react/prop-types
const PenyaringanAwalTabs = ({ ...props }) => {
  const { Title, Text } = Typography;
  // const [form] = Form.useForm();
  const form = props.form;
  // Penyaringan Awal
  const penyaringan = useSelector((state) => state.penyaringanAwal.data);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cariNoAplikasi, setCariNoAplikasi] = useState("");
  const dateFormat = "YYYY-MM-DD";
  const [fileListUploadKtp, setFileListUploadKtp] = useState([]);
  const [fileListUploadNpwp, setFileListUploadNpwp] = useState([]);

  const handleChangeUploadKtp = ({ fileList: newFileList }) => {
    setFileListUploadKtp(newFileList);
  };
  const handleChangeUploadNpwp = ({ fileList: newFileList }) => {
    setFileListUploadNpwp(newFileList);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCari = () => {
    // eslint-disable-next-line react/prop-types
    setCariNoAplikasi(form.getFieldValue("noAplikasi"));
    showModal();
  };
  const handleOnFinish = (value) => {
    dispatch(
      addData({
        ...penyaringan,
        jenisNasabah: value.jenisNasabah,
        npwp: value.npwp,
        noAplikasi: value.noAplikasi,
        nik: value.nik,
        namaNasabah: value.namaNasabah,
        pilihProdukPembiayaan: value.pilihProdukPembiayaan,
        tanggalPermintaanPenyaringan: value.tanggalPermintaanPenyaringan,
      })
    );
    props.onChangeTabs("2");
  };
  useEffect(() => {
    if (penyaringan.namaNasabah) {
      form.setFieldsValue(penyaringan);
    }
    // console.log("first", penyaringan);
  }, [dispatch]);
  return (
    <React.Fragment>
      <Form layout="vertical" form={form} onFinish={handleOnFinish}>
        <div style={{ ...style, paddingBottom: "5px" }}>
          <Row>
            <Col>
              <Title
                level={4}
                style={{ margin: 0, padding: 0, paddingBottom: 10 }}
              >
                Penyaringan Awal
              </Title>
            </Col>
          </Row>
          <Row gutter={69}>
            <Col span={12}>
              <Form.Item label="No Aplikasi" name={"noAplikasi"}>
                <Space.Compact style={{ width: "100%" }}>
                  <Input placeholder="No Aplikasi" />
                  <Button
                    style={{
                      border: "1px solid #8d918e",
                    }}
                    onClick={handleCari}
                  >
                    Cari
                  </Button>
                </Space.Compact>
              </Form.Item>
              <Form.Item
                label="NIK"
                name={"nik"}
                required
                rules={[{ required: true, message: "Kolom Nik Wajib Diisi" }]}
              >
                <Input placeholder="NIK" />
              </Form.Item>
              <Form.Item
                label="Nama Nasabah"
                name={"namaNasabah"}
                required
                rules={[
                  {
                    required: true,
                    message: "Kolom Nama Nasabah Wajib Diisi",
                  },
                ]}
              >
                <Input placeholder="Nama Nasabah" />
              </Form.Item>
              <Form.Item
                label="Tanggal Permintaan"
                name={"tanggalPermintaanPenyaringan"}
                getValueProps={(i) => (i ? { value: dayjs(i) } : {})}
                rules={[
                  {
                    required: true,
                    message: "Kolom Tanggal Permintaan Wajib Diisi",
                  },
                ]}
                required
              >
                <DatePicker
                  format={dateFormat}
                  style={{ border: "1px solid #8d918e", width: "100%" }}
                />
              </Form.Item>
              <Form.Item
                label="NPWP"
                name={"npwp"}
                rules={[
                  {
                    required: true,
                    message: "Kolom NPWP Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="NPWP" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Jenis Nasabah"
                name={"jenisNasabah"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Jenis Nasabah Wajib Diisi",
                  },
                ]}
                required
              >
                <Select placeholder="Jenis Nasabah">
                  <Select.Option value="Lembaga">Lembaga</Select.Option>
                  <Select.Option value="Perorangan">Perorangan</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Pilih Produk Pembiayaan"
                name={"pilihProdukPembiayaan"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Tanggal Produk Pembiayaan Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="Produk Pembiayaan" />
              </Form.Item>
              <Form.Item label="Upload KTP">
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListUploadKtp}
                  beforeUpload={() => false}
                  onChange={handleChangeUploadKtp}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Upload NPWP">
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListUploadNpwp}
                  beforeUpload={() => false}
                  onChange={handleChangeUploadNpwp}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Row className="penyaringanAwal">
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              <Button type="primary" htmlType="submit">
                Lanjutkan
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Text>Maaf Data {cariNoAplikasi} Tidak Ditemukan</Text>
      </Modal>
    </React.Fragment>
  );
};

export default PenyaringanAwalTabs;
