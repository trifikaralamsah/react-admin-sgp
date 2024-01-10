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
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { addData } from "../../../Redux/Reducers/PenyaringanAwal/penyaringanAwalReducer";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
function SlikReviewTabs({ ...props }) {
  // console.log(props.form);
  const penyaringan = useSelector((state) => state.penyaringanAwal.data);
  const dispatch = useDispatch();
  const { Title, Text } = Typography;
  // const [form] = Form.useForm();
  const form = props.form;
  const dateFormat = "YYYY-MM-DD";
  const [isModalTolakPengajuan, setIsModalTolakPengajuan] = useState(false);

  // SLIK Review
  const handleCancel = () => {
    setIsModalTolakPengajuan(false);
  };
  const onReset = () => {
    // eslint-disable-next-line react/prop-types
    form.resetFields();
    dispatch(addData({ key: "abc123" }));
    setIsModalTolakPengajuan(false);
  };
  const handleClickTolakPengajuan = () => {
    showModalTolakPengajuan();
  };
  const showModalTolakPengajuan = () => {
    setIsModalTolakPengajuan(true);
  };
  const handleOkTolakPengajuan = () => {
    setIsModalTolakPengajuan(false);
  };
  const handleCancelTolakPengajuan = () => {
    setIsModalTolakPengajuan(false);
  };
  const onSubmit = () => {
    form
      .validateFields()
      .then((value) => {
        dispatch(
          addData({
            ...penyaringan,
            namaPemohon: value.namaPemohon,
            noIdentitas: value.noIdentitas,
            jenisKelamin: value.jenisKelamin,
            tempatLahir: value.tempatLahir,
            tanggalLahir: value.tanggalLahir,
            informasiSlik: value.informasiSlik,
            noLaporan: value.noLaporan,
            tanggalPermintaanSlikReview: value.tanggalPermintaanSlikReview,
            bakiDebet: value.bakiDebet,
            bankUmum: value.bankUmum,
            bprBprs: value.bprBprs,
            lembagaPembiyaan: value.lembagaPembiyaan,
            lainnya: value.lainnya,
            kolektabilitasTertinggi: value.kolektabilitasTertinggi,
            kesimpulan: value.kesimpulan,
          })
        );
        props.onChangeTabs("4");
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  useEffect(() => {
    if (penyaringan.namaPemohon) {
      form.setFieldsValue(penyaringan);
    }
    console.log(penyaringan);
  }, [dispatch]);
  return (
    <React.Fragment>
      <Form form={form} layout="vertical" onFinish={() => onSubmit()}>
        <div style={{ ...style, paddingBottom: "5px" }}>
          <Row>
            <Col>
              <Title
                level={4}
                style={{ margin: 0, padding: 0, paddingBottom: 10 }}
              >
                SLIK REVIEW
              </Title>
            </Col>
          </Row>
          <Row gutter={50}>
            <Col span={8}>
              <Title
                level={5}
                style={{ margin: 0, padding: 0, paddingBottom: 10 }}
              >
                Data Debitur
              </Title>
            </Col>
            <Col span={8}>&nbsp;</Col>
            <Col span={8}>
              <Title
                level={5}
                style={{ margin: 0, padding: 0, paddingBottom: 10 }}
              >
                Jumlah Kreditur
              </Title>
            </Col>
          </Row>
          <Row gutter={50}>
            <Col span={8}>
              <Form.Item
                label="Nama Pemohon"
                name={"namaPemohon"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Nama Pemohon Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="Nama Pemohon" />
              </Form.Item>
              <Form.Item
                label="No Identitas"
                name={"noIdentitas"}
                rules={[
                  {
                    required: true,
                    message: "Kolom No Identitas Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="No Identitas" />
              </Form.Item>
              <Form.Item
                label="Jenis Kelamin"
                name={"jenisKelamin"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Jenis Kelamin Wajib Diisi",
                  },
                ]}
                required
              >
                <Select placeholder="Jenis Kelamin">
                  <Select.Option value="Laki-laki">Laki-laki</Select.Option>
                  <Select.Option value="Perempuan">Perempuan</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Tempat Lahir"
                name={"tempatLahir"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Tempat Lahir Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="Tempat Lahir" />
              </Form.Item>
              <Form.Item
                label="Tanggal Lahir"
                name={"tanggalLahir"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Tanggal Lahir Wajib Diisi",
                  },
                ]}
                getValueProps={(i) => (i ? { value: dayjs(i) } : {})}
                required
              >
                <DatePicker
                  format={dateFormat}
                  style={{ border: "1px solid #8d918e", width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Informasi SLIK"
                name={"informasiSlik"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Informasi SLIK Wajib Diisi",
                  },
                ]}
                required
              >
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder="Informasi SLIK"
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                />
              </Form.Item>
              <Form.Item
                label="No. Laporan"
                name={"noLaporan"}
                rules={[
                  {
                    required: true,
                    message: "Kolom No Laporan Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="No Laporan" />
              </Form.Item>
              <Form.Item
                label="Tanggal Permintaan"
                name={"tanggalPermintaanSlikReview"}
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
                label="Baki Debet"
                name={"bakiDebet"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Baki Debet Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="Baki Debet" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Bank Umum"
                name={"bankUmum"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Bank Umum Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="Bank Umum" />
              </Form.Item>
              <Form.Item
                label="BPR/BPRS"
                name={"bprBprs"}
                rules={[
                  {
                    required: true,
                    message: "Kolom BPR/BPRS Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="BPR/BPRS" />
              </Form.Item>
              <Form.Item
                label="Lembaga Pembiyaan"
                name={"lembagaPembiyaan"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Lembaga Pembiyaan Wajib Diisi",
                  },
                ]}
                required
              >
                <Input placeholder="Lembaga Pembiyaan" />
              </Form.Item>
              <Form.Item label="Lainnya" name={"lainnya"}>
                <Input placeholder="Lainnya" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Title level={5}>Hasil Penyaringan</Title>
          </Row>
          <Row gutter={50}>
            <Col span={8}>
              <Form.Item
                label="Kolektabilitas Tertinggi"
                name={"kolektabilitasTertinggi"}
              >
                <Input placeholder="Kolektabilitas Tertinggi" />
              </Form.Item>
            </Col>
            <Col span={8}>&nbsp;</Col>
            <Col span={8}>
              <Form.Item label="Kesimpulan" name={"kesimpulan"}>
                <Input placeholder="Kesimpulan" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="slikReview">
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                paddingBottom: "10px",
                gap: "15px",
              }}
            >
              <Button
                style={{ color: "white", backgroundColor: "red" }}
                onClick={handleClickTolakPengajuan}
              >
                Tolak Pengajuan
              </Button>
              <Button type="primary" htmlType="submit">
                Lanjutkan
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
      <Modal
        open={isModalTolakPengajuan}
        onOk={handleOkTolakPengajuan}
        onCancel={handleCancelTolakPengajuan}
        footer={false}
      >
        <Row style={{ padding: "10px", paddingBottom: "30px" }}>
          <Col span={24}>
            <Text>Apakah anda yakin ingin menolak Data Ini ?</Text>
          </Col>
        </Row>
        <Row justify="end">
          <Space>
            <Button onClick={handleCancel}>Batal</Button>
            <Button onClick={() => onReset()} type="primary">
              <CheckCircleFilled /> Konfirmasi
            </Button>
          </Space>
        </Row>
      </Modal>
    </React.Fragment>
  );
}

export default SlikReviewTabs;
