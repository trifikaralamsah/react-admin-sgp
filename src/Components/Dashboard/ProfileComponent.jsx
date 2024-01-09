import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";
import {
  CreditCardTwoTone,
  MoreOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { imgActivity } from "../../Assets";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
  // height: "180px",
};
const { Paragraph, Title, Text } = Typography;

const ProfileComponent = () => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <Row style={style}>
            <Col span={16}>
              <Title level={4} style={{ color: "#52c41a", marginTop: "0px" }}>
                Welcome Muhammad Satrio Pamungkas!
              </Title>
              <Paragraph style={{ fontSize: "16px" }}>
                You have 10 works todo! Check your tickets in your profile. Keep
                up the good work!
              </Paragraph>
              <Button
                style={{
                  color: "#52c41a",
                  borderColor: "#52c41a",
                  fontWeight: "bold",
                }}
              >
                View Tickets
              </Button>
            </Col>
            <Col
              span={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Row
                style={{
                  height: "140px",
                  width: "170px",
                }}
              >
                <Image
                  src={imgActivity}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                ></Image>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={4}>
          <Row style={{ ...style, height: "100%" }}>
            <Col span={12}>
              <CreditCardTwoTone
                twoToneColor={"#73d13d"}
                style={{ fontSize: "30px" }}
              />
            </Col>
            <Col span={12} style={{ textAlign: "right", fontSize: "20px" }}>
              <MoreOutlined />
            </Col>
            <Row>
              <Title level={5} style={{ color: "#b8acab", marginTop: "0px" }}>
                UMKM Loans
              </Title>
              <Text>Rp. 123,456,789</Text>
              <Text style={{ color: "#52c41a" }}>
                <ArrowUpOutlined twoToneColor={"#52c41a"} />
                &nbsp;+72.80%
              </Text>
            </Row>
          </Row>
        </Col>
        <Col className="gutter-row" span={4}>
          <Row style={{ ...style, height: "100%" }}>
            <Col span={12}>
              <CreditCardTwoTone
                twoToneColor={"#faad14"}
                style={{ fontSize: "30px" }}
              />
            </Col>
            <Col span={12} style={{ textAlign: "right", fontSize: "20px" }}>
              <MoreOutlined />
            </Col>
            <Row>
              <Title level={5} style={{ color: "#b8acab", marginTop: "0px" }}>
                KPR Loans
              </Title>
              <Text>Rp. 123,456,789</Text>
              <Text style={{ color: "#52c41a" }}>
                <ArrowUpOutlined twoToneColor={"#52c41a"} />
                &nbsp;+72.80%
              </Text>
            </Row>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProfileComponent;
