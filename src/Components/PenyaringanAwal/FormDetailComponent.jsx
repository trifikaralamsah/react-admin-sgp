/* eslint-disable react/prop-types */
import { Col, Form, Input, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Redux/Reducers/PenyaringanAwal/penyaringanAwalReducer";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
const FormDetailComponent = ({ form }) => {
  const penyaringan = useSelector((state) => state.penyaringanAwal.data);
  const dispatch = useDispatch();
  const onChangeInput = () => {
    dispatch(
      addData({
        ...penyaringan,
        ao: form.getFieldValue("ao"),
        kodeAo: form.getFieldValue("kodeAo"),
        namaCabang: form.getFieldValue("namaCabang"),
        kodeCabang: form.getFieldValue("kodeCabang"),
      })
    );
  };
  useEffect(() => {
    if (penyaringan.ao) {
      form.setFieldValue("ao", penyaringan.ao);
      form.setFieldValue("kodeAo", penyaringan.kodeAo);
      form.setFieldValue("cabang", penyaringan.cabang);
      form.setFieldValue("kodeCabang", penyaringan.kodeCabang);
    }
  }, [dispatch]);

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
        <Form form={form} layout="vertical">
          <Row gutter={69}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Nama AO"
                required
                name={"ao"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Nama AO Wajib Diisi",
                  },
                ]}
              >
                <Input
                  placeholder="input placeholder"
                  onChange={() => onChangeInput()}
                />
              </Form.Item>
              <Form.Item
                label="Kode AO"
                required
                name={"kodeAo"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Kode AO Wajib Diisi",
                  },
                ]}
              >
                <Input
                  placeholder="input placeholder"
                  onChange={() => onChangeInput()}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Nama Cabang"
                required
                name={"namaCabang"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Nama Cabang Wajib Diisi",
                  },
                ]}
              >
                <Input
                  placeholder="input placeholder"
                  onChange={() => onChangeInput()}
                />
              </Form.Item>
              <Form.Item
                label="Kode Cabang"
                required
                name={"kodeCabang"}
                rules={[
                  {
                    required: true,
                    message: "Kolom Kode Cabang Wajib Diisi",
                  },
                ]}
              >
                <Input
                  placeholder="input placeholder"
                  onChange={() => onChangeInput()}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default FormDetailComponent;
