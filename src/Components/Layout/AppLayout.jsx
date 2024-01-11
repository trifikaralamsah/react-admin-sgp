import { useEffect, useState } from "react";
import {
  DesktopOutlined,
  ReadOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Col, Layout, Menu, Row, Typography } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../Styles/AppLayout.css";
// import Clock from "react-live-clock";

const AppLayout = () => {
  const Text = Typography.Text;
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const backgroundColor = "#c9c5c5";
  const colorBgContainer = "#fff";
  const { Header, Content, Footer, Sider } = Layout;
  const items = [
    {
      key: "/",
      label: "Dashboard",
      icon: <DesktopOutlined />,
      onClick: () => {
        navigate("/");
      },
    },
    {
      key: "/PenyaringanAwal",
      label: "Penyaringan Awal",
      icon: <ReadOutlined />,
      onClick: () => {
        navigate("/PenyaringanAwal");
      },
    },
  ];
  // clock
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const logOut = async () => {
    try {
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "black",
      }}
    >
      <Sider
        collapsible
        collapsed={screen.width < 501 ? true : collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ background: backgroundColor }}>
        <Header
          style={{
            padding: "0px 20px",
            background: backgroundColor,
          }}
        >
          <Row
            justify="space-between"
            style={{ backgroundColor: colorBgContainer }}
          >
            <Col>
              <Text style={{ fontSize: 15, marginLeft: 25 }}>
                {screen.width < 501
                  ? time.toLocaleString("id-ID", {
                      dateStyle: "short",
                      timeStyle: "short",
                      hour12: false,
                    })
                  : time.toLocaleString("id-ID", {
                      dateStyle: "full",
                      timeStyle: "long",
                      hour12: false,
                    })}
              </Text>
            </Col>
            <Col>
              <Menu
                mode="horizontal"
                style={screen.width < 501 ? {} : { width: 256 }}
                items={[
                  {
                    label: "Muhammad Satrio Pamungkas",
                    key: 1,
                    icon: <UserOutlined />,
                    children: [
                      {
                        label: (
                          <a
                            onClick={logOut}
                            style={{
                              fontSize: "15px",
                              color: "red",
                            }}
                          >
                            <LogoutOutlined /> Logout
                          </a>
                        ),
                        key: 2,
                      },
                    ],
                  },
                ]}
              />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "0 16px",
            padding: "5px",
            background: backgroundColor,
          }}
        >
          <Breadcrumb
            style={{
              margin: "5px 0",
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item> */}
            {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          Tri Fikar Alamsah ©{new Date().getFullYear()} Created by Fikar
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
