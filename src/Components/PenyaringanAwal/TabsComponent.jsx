/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Tabs } from "antd";
import PenyaringanAwalTabs from "./Tabs/PenyaringanAwalTabs";
import SlikUploadTabs from "./Tabs/SlikUploadTabs";
import SlikReviewTabs from "./Tabs/SlikReviewTabs";
import UnggahDokumenTabs from "./Tabs/UnggahDokumenTabs";
import { tabData } from "../../Redux/Reducers/PenyaringanAwal/tabReducer";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function TabsComponent({ ...props }) {
  // console.log(props);
  const dispatch = useDispatch();
  const tabReducer = useSelector((state) => state.tabReducer.tab);

  const onChangeTabs = (key) => {
    dispatch(tabData(key));
  };

  const items = [
    {
      key: "1",
      label: "Penyaringan Awal",
      children: (
        <PenyaringanAwalTabs form={props.form} onChangeTabs={onChangeTabs} />
      ),
    },
    {
      key: "2",
      label: "SLIK Upload",
      children: (
        <SlikUploadTabs form={props.form} onChangeTabs={onChangeTabs} />
      ),
    },
    {
      key: "3",
      label: "SLIK Review",
      children: (
        <SlikReviewTabs form={props.form} onChangeTabs={onChangeTabs} />
      ),
    },
    {
      key: "4",
      label: "Unggah Dokumen",
      children: (
        <UnggahDokumenTabs
          valdatefformDetail={props.validateFormDetail}
          onChangeTabs={onChangeTabs}
        />
      ),
    },
  ];
  useEffect(() => {}, [dispatch]);
  return (
    <React.Fragment>
      <Tabs
        defaultActiveKey={tabReducer}
        activeKey={tabReducer}
        items={items}
        onChange={onChangeTabs}
        type="card"
      />
    </React.Fragment>
  );
}

export default TabsComponent;
