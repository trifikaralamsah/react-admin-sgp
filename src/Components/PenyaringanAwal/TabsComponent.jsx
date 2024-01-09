import React from "react";
import { Button, Col, Form, Input, Row, Tabs, Typography, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import PenyaringanAwalTabs from "./Tabs/PenyaringanAwalTabs";
// import SlikUploadTabs from "./Tabs/SlikUploadTabs";
// import SlikReviewTabs from "./Tabs/SlikReviewTabs";
// import UnggahDokumenTabs from "./Tabs/UnggahDokumenTabs";
import TabPane from "antd/es/tabs/TabPane";
// import TabPane from "antd/es/tabs/TabPane";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
const TabsComponent = (form) => {
  const { Title, Text } = Typography;
  // const { form } = Form.useForm();
  // const onChange = (key) => {
  //   console.log(key);
  // };
  const [slikUploadOpen, setslikUploadOpen] = React.useState(true);
  const [slikReviewOpen, setslikReviewOpen] = React.useState(true);
  // const [unggahDokumenOpen, setunggahDokumenOpen] = React.useState(true);

  const handleTabs = (key) => {
    let noAplikasi = form.form.getFieldValue("noAplikasi");
    let nik = form.form.getFieldValue("nik");
    let namaNasabah = form.form.getFieldValue("namaNasabah");
    let tanggalPermintaan = form.form.getFieldValue("tanggalPermintaan");
    let npwp = form.form.getFieldValue("npwp");
    let jenisNasabah = form.form.getFieldValue("jenisNasabah");
    let pilihProdukPembiayaan = form.form.getFieldValue(
      "pilihProdukPembiayaan"
    );

    if (
      noAplikasi === "" ||
      noAplikasi === undefined ||
      nik === "" ||
      nik === undefined ||
      namaNasabah === "" ||
      namaNasabah === undefined ||
      tanggalPermintaan === "" ||
      tanggalPermintaan === undefined ||
      npwp === "" ||
      npwp === undefined ||
      jenisNasabah === "" ||
      jenisNasabah === undefined ||
      pilihProdukPembiayaan === "" ||
      pilihProdukPembiayaan === undefined
    ) {
      alert("Test");
      console.log(
        noAplikasi,
        nik,
        namaNasabah,
        tanggalPermintaan,
        npwp,
        jenisNasabah,
        pilihProdukPembiayaan
      );
    } else {
      if (key === "slikUploadOpen") {
        setslikUploadOpen(false);
      } else if (key === "slikReviewOpen") {
        setslikReviewOpen(false);
      } else if (key === "unggahDokumenOpen") {
        // setunggahDokumenOpen(false);
      }
    }
  };

  // const items = [
  //   {
  //     key: "1",
  //     label: "Penyaringan Awal",
  //     children: <PenyaringanAwalTabs />,
  //   },
  //   {
  //     key: "2",
  //     label: "SLIK Upload",
  //     children: <SlikUploadTabs />,
  //     disabled: !slikUploadOpen ? true : false,
  //   },
  //   {
  //     key: "3",
  //     label: "SLIK Review",
  //     children: <SlikReviewTabs />,
  //     disabled: !slikReviewOpen ? true : false,
  //   },
  //   {
  //     key: "4",
  //     label: "Unggah Dokumen",
  //     children: <UnggahDokumenTabs />,
  //     disabled: !unggahDokumenOpen ? true : false,
  //   },
  // ];
  return (
    <React.Fragment>
      {/* <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        type="card"
      /> */}
      {/* <Form> */}
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Penyaringan Awal" key="PenyaringanAwal">
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
                <Form.Item label="No Aplikasi" name={"noAplikasi"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="NIK" name={"nik"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Nama Nasabah" name={"namaNasabah"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label="Tanggal Permintaan"
                  name={"tanggalPermintaan"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="NPWP" name={"npwp"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Jenis Nasabah" name={"jenisNasabah"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label="Pilih Produk Pembiayaan"
                  name={"pilihProdukPembiayaan"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Upload KTP" required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Upload NPWP" required>
                  <Input placeholder="input placeholder" />
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
                <Button
                  type="primary"
                  onClick={() => handleTabs("slikUploadOpen")}
                >
                  Lanjutkan
                </Button>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab="SLIK Upload" key="SlikUpload" disabled={slikUploadOpen}>
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
                <Form.Item label="Upload SLIK" name={"noAplikasi"} required>
                  <Upload accept=".doc,.docx,application/pdf">
                    <Button
                      icon={<UploadOutlined />}
                      style={{ border: "1px solid" }}
                    >
                      Upload Pilih File
                    </Button>
                  </Upload>
                  <Text style={{ paddingLeft: "5px", fontSize: "12px" }}>
                    Bisa PDF, TXT
                  </Text>
                </Form.Item>
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
                <Button
                  type="primary"
                  onClick={() => handleTabs("slikReviewOpen")}
                >
                  Lanjutkan
                </Button>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab="SLIK Review" key="SlikReview" disabled={slikReviewOpen}>
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
                <Form.Item label="Nama Pemohon" name={"namaPemohon"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="No Identitas" name={"noIdentitas"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Jenis Kelamin" name={"jenisKelamin"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Tempat Lahir" name={"tempatLahir"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Tanggal Lahir" name={"tanggalLahir"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Informasi SLIK"
                  name={"informasiSlik"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="No. Laporan" name={"noLaporan"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label="Tanggal Permintaan"
                  name={"tanggalPermintaan"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Baki Debet" name={"bakiDebet"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Bank Umum" name={"bankUmum"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="BPR/BPRS" name={"bprBprs"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label="Lembaga Pembiyaan"
                  name={"lembagaPembiyaan"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Lainnya" name={"lainnya"} required>
                  <Input placeholder="input placeholder" />
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
                  onClick={() => handleTabs("slikUploadOpen")}
                >
                  Tolak Pengajuan
                </Button>
                <Button
                  type="primary"
                  onClick={() => handleTabs("slikUploadOpen")}
                >
                  Lanjutkan
                </Button>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane
          tab="Unggah Dokumen"
          key="UnggahDokumen"
          disabled={slikUploadOpen}
        >
          <div style={{ ...style, paddingBottom: "5px" }}>
            <Row>
              <Col>
                <Title
                  level={4}
                  style={{ margin: 0, padding: 0, paddingBottom: 10 }}
                >
                  UNGGAH DOKUMEN
                </Title>
              </Col>
            </Row>
            <Row gutter={50}>
              <Col span={8}>
                <Form.Item label="Slip Gaji" name={"slipGaji"} required>
                  <Upload accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg">
                    <Button
                      icon={<UploadOutlined />}
                      style={{ border: "1px solid" }}
                    >
                      Upload Pilih File
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item label="No Identitas" name={"noIdentitas"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Jenis Kelamin" name={"jenisKelamin"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Tempat Lahir" name={"tempatLahir"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Tanggal Lahir" name={"tanggalLahir"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Informasi SLIK"
                  name={"informasiSlik"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="No. Laporan" name={"noLaporan"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                  label="Tanggal Permintaan"
                  name={"tanggalPermintaan"}
                  required
                >
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Baki Debet" name={"bakiDebet"} required>
                  <Input placeholder="input placeholder" />
                </Form.Item>
              </Col>
            </Row>
            <Row className="unggahDokumen">
              <Col
                span={16}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="primary"
                  // onClick={() => handleTabs("slikUploadOpen")}
                >
                  Simpan
                </Button>
              </Col>
            </Row>
          </div>
        </TabPane>
      </Tabs>
      {/* </Form> */}
    </React.Fragment>
  );
};

export default TabsComponent;
