import React, { useEffect, useState } from "react";
import { Row, Space, Table, message } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DeleteModal from "./DeleteDataModal";
import { deleteData } from "../../Redux/Reducers/Dashboard/tabelDashboard3";
import EditDataModal from "./EditDataModal";

const style = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #e8e8e8",
  borderRadius: "7px",
};

const TableDataTiga = () => {
  const dataTable = useSelector(
    (state) => state.tabelDashboard3.data,
    shallowEqual
  );
  const [page, setPage] = useState(1);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({ modal: "", isOpen: false });
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSelectedModal = (data, modal) => {
    setSelectedData(data);
    setIsModalOpen({ modal: modal, isOpen: true });
  };
  const handleOk = (modal) => {
    if (modal === "delete") {
      dispatch(deleteData(selectedData.key));
      setIsModalOpen({ modal: "", isOpen: false });
      messageApi.open({
        type: "success",
        content: `Data Dengan AO : ${selectedData.ao} Berhasil Dihapus!`,
      });
    } else if (modal === "edit") {
      setIsModalOpen({ modal: "", isOpen: false });
      messageApi.open({
        type: "success",
        content: `Data Dengan AO : ${selectedData.ao} Berhasil Diubah!`,
      });
    } else {
      setIsModalOpen({ modal: "", isOpen: false });
      messageApi.open({
        type: "warning",
        content: "Maaf terjadi kesalahan, silahkan coba lagi!",
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen({ modal: "", isOpen: false });
  };

  // const dateIndo = (timeStamps) => {
  //   const currentDate = timeStamps; // Replace this with your actual date

  //   const options = { day: "2-digit", month: "long", year: "numeric" };
  //   const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
  //     currentDate
  //   );
  //   return formattedDate;
  // };

  const dateIndo2 = (data) => {
    const date = new Date(data);
    const day = date.getDate();
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // console.log(dateIndo2(new Date("2023-05-01")));

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
      width: "5%",
      // render: (_, record, index) =>
      //   index.toString().length < 2 ? `0${index + 1}` : index + 1,
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
      width: "15%",
    },
    {
      title: "Tugas",
      dataIndex: "tugas",
      key: "tugas",
      align: "center",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      width: "15%",
    },
    {
      title: "Catatan",
      dataIndex: "catatan",
      key: "catatan",
      align: "center",
      //   width: "20%",
    },
    {
      title: "Dibuat Pada",
      dataIndex: "dibuatPada",
      key: "dibuatPada",
      align: "center",
      width: "15%",
      render: (_, record) => <p>{dateIndo2(record.dibuatPada)}</p>,
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <a
            style={{ fontWeight: "bold" }}
            onClick={() => handleSelectedModal(record, "edit")}
          >
            UBAH {record.name}
          </a>
          <a
            style={{ fontWeight: "bold", color: "#b52812" }}
            onClick={() => handleSelectedModal(record, "delete")}
          >
            HAPUS
          </a>
        </Space>
      ),
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     no: "01",
  //     ao: "Muhammad Satrio",
  //     tugas: "Penyaringan Awal",
  //     status: "Selesai",
  //     catatan: "-",
  //     dibuatPada: "2023-02-09",
  //   },
  // ];

  useEffect(() => {}, [selectedData]);

  return (
    <React.Fragment>
      {contextHolder}
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

      <EditDataModal
        openModal={isModalOpen.modal === "edit" && isModalOpen.isOpen}
        data={selectedData}
        handleOk={() => handleOk("edit")}
        handleCancel={handleCancel}
      />
      <DeleteModal
        openModal={isModalOpen.modal === "delete" && isModalOpen.isOpen}
        data={selectedData}
        handleOk={() => handleOk("delete")}
        handleCancel={handleCancel}
      />
    </React.Fragment>
  );
};

export default TableDataTiga;
