import React from "react";
import { Col, Image, Row, Typography } from "antd";
import {
  MoreOutlined,
  ArrowUpOutlined,
  ClockCircleTwoTone,
} from "@ant-design/icons";
import { Table } from "antd";
import { imgAvatar } from "../../Assets";
import { shallowEqual, useSelector } from "react-redux";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
  // height: "210px",
};

const TableDataSatu = () => {
  const dataTable = useSelector(
    (state) => state.tabelDashboard3.data,
    shallowEqual
  );
  const { Title, Text } = Typography;
  // const dataTable = useSelector(
  //   (state) => state.tabelDashboard3.data,
  //   shallowEqual
  // );
  // console.log(dataTable);

  const columns = [
    {
      title: "AO",
      dataIndex: "ao",
      key: "ao",
      align: "center",
    },
    {
      title: "Total Pengajuan",
      dataIndex: "totalPengajuan",
      key: "totalPengajuan",
      align: "center",
    },
  ];

  // const data = [
  //   {
  //     key: "1",
  //     ao: "Muhammad Satrio Pamungkas",
  //     total_pengajuan: 10,
  //   },
  // ];

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
          <Row style={{ ...style, paddingTop: "17px", paddingBottom: "0px" }}>
            <Col span={16}>
              <Table
                columns={columns}
                dataSource={dataTable}
                size="small"
                bordered
                tableLayout="fixed"
                pagination={{
                  pageSize: 3,
                  position: ["bottomCenter"],
                  showTotal: (total, range) =>
                    `${range[0]}-${range[1]} of ${total} items`,
                }}
              />
            </Col>
            <Col span={8}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                <Text
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  AO Terbaik
                </Text>
                <Image
                  src={imgAvatar}
                  style={{
                    height: "105px",
                    width: "115px",
                  }}
                ></Image>
                <Text
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Muhammad Satrio Pamungkas <br /> Total 10 Pengajuan.
                </Text>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={4}>
          <Row style={{ ...style, height: "100%" }}>
            <Col span={12}>
              <ClockCircleTwoTone
                twoToneColor={"#73d13d"}
                style={{ fontSize: "30px" }}
              />
            </Col>
            <Col span={12} style={{ textAlign: "right", fontSize: "20px" }}>
              <MoreOutlined />
            </Col>
            <Row>
              <Title level={5} style={{ color: "#b8acab", marginTop: "0px" }}>
                Loan Approved
              </Title>
              <Text>Rp. 123,456,789</Text>
              <Text style={{ color: "#f5222d" }}>
                <ArrowUpOutlined twoToneColor={"#f5222d"} />
                &nbsp;-14.82%
              </Text>
            </Row>
          </Row>
        </Col>
        <Col className="gutter-row" span={4}>
          <Row style={{ ...style, height: "100%" }}>
            <Col span={12}>
              <ClockCircleTwoTone
                twoToneColor={"#1677ff"}
                style={{ fontSize: "30px" }}
              />
            </Col>
            <Col span={12} style={{ textAlign: "right", fontSize: "20px" }}>
              <MoreOutlined />
            </Col>
            <Row>
              <Title level={5} style={{ color: "#b8acab", marginTop: "0px" }}>
                Loan Rejected
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

export default TableDataSatu;
