import React, { useState } from "react";
import { Row, Table } from "antd";
import "../../Styles/Dashboard/TableDataSatu.css";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};

const TableDataDua = () => {
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
      dataIndex: "jenis_nasabah",
      key: "jenis_nasabah",
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
      dataIndex: "status_aplikasi",
      key: "status_aplikasi",
      align: "center",
    },
    {
      title: "Kelengkapan Dokumen",
      dataIndex: "kelengkapan_dokumen",
      key: "kelengkapan_dokumen",
      align: "center",
    },
    {
      title: "Dibuat Pada",
      dataIndex: "dibuat_pada",
      key: "dibuat_pada",
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
  const data = [
    {
      key: "1",
      no_application: "01",
      ao: "Muhammad Satrio",
      jenis_nasabah: "Lembaga",
      plafon: "Rp. 200.000.000",
      status_aplikasi: "Disetujui",
      kelengkapan_dokumen: "Lengkap",
      dibuat_pada: "2023-02-09",
    },
    {
      key: "2",
      no_application: "02",
      ao: "Muhammad Taufik",
      jenis_nasabah: "Perorangan",
      plafon: "Rp. 33.003.797,45",
      status_aplikasi: "Unggah Dokumen",
      kelengkapan_dokumen: "Belum Lengkap",
      dibuat_pada: "2023-02-10",
    },
    {
      key: "3",
      no_application: "03",
      ao: "Muhammad Iqbal",
      jenis_nasabah: "Lembaga",
      plafon: "Rp. 33.003.797,45",
      status_aplikasi: "Disetujui",
      kelengkapan_dokumen: "Lengkap",
      dibuat_pada: "2023-02-11",
    },
    {
      key: "4",
      no_application: "04",
      ao: "Tafarel Agustino",
      jenis_nasabah: "Perorangan",
      plafon: "Rp. 100.000.000",
      status_aplikasi: "Dokumen Review",
      kelengkapan_dokumen: "Sedang Direview",
      dibuat_pada: "2023-02-12",
    },
    {
      key: "5",
      no_application: "05",
      ao: "Tri Fikar Alamsah",
      jenis_nasabah: "Perorangan",
      plafon: "Rp. 100.000.000",
      status_aplikasi: "Dokumen Review",
      kelengkapan_dokumen: "Sedang Direview",
      dibuat_pada: "2024-01-08",
    },
  ];
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
          dataSource={data}
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
