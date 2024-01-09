import { Row, Typography } from "antd";
import React from "react";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};
const PenyaringanAwalTabs = () => {
  const { Title } = Typography;
  return (
    <React.Fragment>
      <Row style={style}>
        <Title level={4} style={{ margin: 0, padding: 0 }}>
          Penyaringan Awal
        </Title>
      </Row>
    </React.Fragment>
  );
};

export default PenyaringanAwalTabs;
