/* eslint-disable react/prop-types */
import { Button, Col, Form, Row, Typography, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataDashboard3 } from "../../../Redux/Reducers/Dashboard/tabelDashboard3";
import { addData } from "../../../Redux/Reducers/PenyaringanAwal/penyaringanAwalReducer";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { setData } from "../../../Redux/Reducers/PenyaringanAwal/validateFormReducer";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
// eslint-disable-next-line react/prop-types
function UnggahDokumenTabs({ ...props }) {
  const validateFormReducer = useSelector((state) => state.validateForm.data);
  const penyaringan = useSelector((state) => state.penyaringanAwal.data);
  const dispatch = useDispatch();
  const { Title } = Typography;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  // Unggah Dokumen
  const [fileListSlipGaji, setFileListSlipGaji] = useState([]);
  const [fileListKartuKeluarga, setFileListKartuKeluarga] = useState([]);
  const [fileListKartuPegawai, setFileListKartuPegawai] = useState([]);
  const [fileListSkPengankatan, setFileListSkPengankatan] = useState([]);
  const [fileListSertifikasiProfesi, setFileListSertifikasiProfesi] = useState(
    []
  );
  const [
    fileListSuratPersetujuanPasangan,
    setFileListSuratPersetujuanPasangan,
  ] = useState([]);
  const [fileListBukuTabungan, setFileListBukuTabungan] = useState([]);
  const [fileListKartuAtm, setFileListKartuAtm] = useState([]);
  const [fileListFotoInstitusi, setFileListFotoInstitusi] = useState([]);
  const [fileListFotoNasabah, setFileListFotoNasabah] = useState([]);
  const [fileListFotoAtasan, setFileListFotoAtasan] = useState([]);
  const [fileListSuratRekomendasi, setFileListSuratRekomendasi] = useState([]);
  const [fileListRekomendasiBendahara, setFileListRekomendasiBendahara] =
    useState([]);
  const handleChangeSlipGaji = ({ fileList: newFileList }) => {
    setFileListSlipGaji(newFileList);
  };
  const handleChangeKartuKeluarga = ({ fileList: newFileList }) => {
    setFileListKartuKeluarga(newFileList);
  };
  const handleChangeKartuPegawai = ({ fileList: newFileList }) => {
    setFileListKartuPegawai(newFileList);
  };
  const handleChangeSkPengangkatan = ({ fileList: newFileList }) => {
    setFileListSkPengankatan(newFileList);
  };
  const handleChangeSertifikasiProfesi = ({ fileList: newFileList }) => {
    setFileListSertifikasiProfesi(newFileList);
  };
  const handleChangeSuratPersetujuanPasangan = ({ fileList: newFileList }) => {
    setFileListSuratPersetujuanPasangan(newFileList);
  };
  const handleChangeBukuTabungan = ({ fileList: newFileList }) => {
    setFileListBukuTabungan(newFileList);
  };
  const handleChangeKartuAtm = ({ fileList: newFileList }) => {
    setFileListKartuAtm(newFileList);
  };
  const handleChangeFotoInstitusi = ({ fileList: newFileList }) => {
    setFileListFotoInstitusi(newFileList);
  };
  const handleChangeFotoNasabah = ({ fileList: newFileList }) => {
    setFileListFotoNasabah(newFileList);
  };
  const handleChangeFotoAtasan = ({ fileList: newFileList }) => {
    setFileListFotoAtasan(newFileList);
  };
  const handleChangeSuratRekomendasi = ({ fileList: newFileList }) => {
    setFileListSuratRekomendasi(newFileList);
  };
  const handleChangeRekomendasiBendahara = ({ fileList: newFileList }) => {
    setFileListRekomendasiBendahara(newFileList);
  };

  const onSubmit = () => {
    props.valdatefformDetail(); // Check validation all form props

    if (penyaringan.ao && penyaringan.nik) {
      dispatch(setData(true));
      const currentDate = dayjs();
      const formattedDate = currentDate.format("YYYY-MM-DD");
      dispatch(
        addDataDashboard3({
          ...penyaringan,
          key: Math.random().toString(10).slice(2),
          totalPengajuan: 1,
          plafon: "Rp. 1.000.000",
          statusAplikasi: "Dokumen Review",
          kelengkapanDokumen: "Sedang Direview",
          dibuatPada: formattedDate,
          tugas: "SLIK Review",
          status: "Sedang Dikerjakan",
          catatan: penyaringan.informasiSlik,
        })
      );
      messageApi.open({
        type: "success",
        content: `Data Berhasil Ditambahkan!`,
      });

      setTimeout(() => {
        form.resetFields();
        dispatch(addData({ key: "abc123" }));
        navigate("/");
        props.onChangeTabs("1");
      }, 2000);
    }
  };
  // End Unggah Dokumen

  useEffect(() => {
    console.log("aja", validateFormReducer);
  }, [validateFormReducer, dispatch]);

  return (
    <React.Fragment>
      {contextHolder}
      <Form layout={"vertical"} form={form} onFinish={() => onSubmit()}>
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
              <Form.Item label="Slip Gaji" name={"slipGaji"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListSlipGaji}
                  beforeUpload={() => false}
                  onChange={handleChangeSlipGaji}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Kartu Keluarga" name={"kartuKeluarga"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListKartuKeluarga}
                  beforeUpload={() => false}
                  onChange={handleChangeKartuKeluarga}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Kartu Pegawai" name={"kartuPegawai"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListKartuPegawai}
                  beforeUpload={() => false}
                  onChange={handleChangeKartuPegawai}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="SK Pengangkatan" name={"skPengangkatan"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListSkPengankatan}
                  beforeUpload={() => false}
                  onChange={handleChangeSkPengangkatan}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Sertifikasi Profesi"
                name={"sertifikasiProfesi"}
              >
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListSertifikasiProfesi}
                  beforeUpload={() => false}
                  onChange={handleChangeSertifikasiProfesi}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Surat Persetujuan Pasangan"
                name={"suratPersetujuanPasangan"}
              >
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListSuratPersetujuanPasangan}
                  beforeUpload={() => false}
                  onChange={handleChangeSuratPersetujuanPasangan}
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
            <Col span={8}>
              <Form.Item
                label="Buku Tabungan / Rekening Koran"
                name={"bukuTabungan"}
              >
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListBukuTabungan}
                  beforeUpload={() => false}
                  onChange={handleChangeBukuTabungan}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Kartu ATM" name={"kartuAtm"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListKartuAtm}
                  beforeUpload={() => false}
                  onChange={handleChangeKartuAtm}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Foto Institusi" name={"fotoInstitusi"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListFotoInstitusi}
                  beforeUpload={() => false}
                  onChange={handleChangeFotoInstitusi}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Foto Nasabah" name={"fotoNasabah"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListFotoNasabah}
                  beforeUpload={() => false}
                  onChange={handleChangeFotoNasabah}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Foto Salah Satu Atasan" name={"fotoAtasan"}>
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListFotoAtasan}
                  beforeUpload={() => false}
                  onChange={handleChangeFotoAtasan}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Surat Rekomendasi Atasan, Rekomendasi Kepala Sekolah"
                name={"suratRekomendasi"}
              >
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListSuratRekomendasi}
                  beforeUpload={() => false}
                  onChange={handleChangeSuratRekomendasi}
                >
                  <Button
                    icon={<UploadOutlined />}
                    style={{ border: "1px solid" }}
                  >
                    Upload Pilih File
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Rekomendasi Bendahara Korwil / UPDT"
                name={"rekomendasiBendahara"}
              >
                <Upload
                  accept=".doc,.docx,application/pdf,image/png,image/jpg,image/jpeg"
                  fileList={fileListRekomendasiBendahara}
                  beforeUpload={() => false}
                  onChange={handleChangeRekomendasiBendahara}
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
                htmlType="submit"
                // onClick={() => handleTabs("slikUploadOpen")}
              >
                Simpan
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    </React.Fragment>
  );
}

export default UnggahDokumenTabs;
