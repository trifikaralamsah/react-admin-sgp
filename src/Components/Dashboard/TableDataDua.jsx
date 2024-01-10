import React, { useState } from "react";
import { Row, Table } from "antd";
import "../../Styles/Dashboard/TableDataSatu.css";
import { shallowEqual, useSelector } from "react-redux";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};

const TableDataDua = () => {
  const dataTable = useSelector(
    (state) => state.tabelDashboard3.data,
    shallowEqual
  );
  const [page, setPage] = useState(1);

  const dateIndo2 = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const columns = [
    {
      title: "No. Aplikasi",
      dataIndex: "no_application",
      key: "no_application",
      align: "center",
      render: (value, item, index) =>
        ((page - 1) * 4 + index + 1).toString().length < 2
          ? `0${(page - 1) * 4 + index + 1}`
          : `${(page - 1) * 4 + index + 1}`,
    },
    {
      title: "AO",
      dataIndex: "ao",
      key: "ao",
      align: "center",
    },
    {
      title: "Jenis Nasabah",
      dataIndex: "jenisNasabah",
      key: "jenisNasabah",
      align: "center",
    },
    {
      title: "Plafon",
      dataIndex: "plafon",
      key: "plafon",
      align: "center",
    },
    {
      title: "Status Apliasi",
      dataIndex: "statusAplikasi",
      key: "statusAplikasi",
      align: "center",
    },
    {
      title: "Kelengkapan Dokumen",
      dataIndex: "kelengkapanDokumen",
      key: "kelengDokumen",
      align: "center",
    },
    {
      title: "Dibuat Pada",
      dataIndex: "dibuatPada",
      key: "dibuatPada",
      align: "center",
      render: (value) => dateIndo2(value),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     no_application: "01",
  //     ao: "Muhammad Satrio",
  //     jenis_nasabah: "Lembaga",
  //     plafon: "Rp. 200.000.000",
  //     status_aplikasi: "Disetujui",
  //     kelengkapan_dokumen: "Lengkap",
  //     dibuat_pada: "2023-02-09",
  //   },
  // ];
  return (
    <React.Fragment>
      <Row
        style={{
          ...style,
          paddingTop: "15px",
          paddingBottom: "0px",
          width: "100%",
        }}
      >
        <Table
          columns={columns}
          dataSource={dataTable}
          pagination={{
            pageSize: 4,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            onChange(current) {
              setPage(current);
            },
          }}
          size="medium"
          style={{ width: "100%" }}
        />
      </Row>
    </React.Fragment>
  );
};

export default TableDataDua;
