import React, { useState } from "react";
import logoPage from "../../image/logoPage.png";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button, Col, Row } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";
import "./home.css";
import bn from "../../image/12.png";
import bm from "../../image/13.png";
import bb from "../../image/14.png";
import mot from "../../image/mot.jpeg";
import hai from "../../image/hai.jpg";
import bon from "../../image/bon.jpg";
import ba from "../../image/ba.jpeg";
import nam from "../../image/nam.png";
import sau from "../../image/ThongtinQuangcao.png";
import bay from "../../image/new-animated-gif-icon-2.gif";
import empty from "../../image/pngtree-happy-new-year-rabbit-year-2023-new-year-lantern-ingot-picture-image_1916429.jpg";
import logo from "../../image/logo.webp";

import Modal from "antd/es/modal/Modal";
import { Footer } from "antd/es/layout/layout";

const { Header, Content, Sider } = Layout;
const items = [
  {
    label: "ĐẠI LÝ , SALE , DỊCH VỤ",
    key: "1",
    icon: <MailOutlined />,
  },
  {
    label: "TRAO ĐỔI MUA BÁN",
    key: "2",
    icon: <LaptopOutlined />,
  },
  {
    label: "CHIẾT KHẤU , ƯU ĐÃI",
    key: "3",
    icon: <StrikethroughOutlined />,
  },
];
const items2 = [
  { name: "BXH VIP", icon: UserOutlined },
  { name: "Online", icon: LaptopOutlined },
  { name: "Số lượng", icon: NotificationOutlined },
].map((item, index) => {
  const key = String(index + 1);
  return {
    key: `sub${index}`,
    icon: React.createElement(item.icon),
    label: item.name,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `Vip ${subKey}`,
      };
    }),
  };
});

const Home = () => {
  const [current, setCurrent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setCurrent(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const arr = [
    "ĐẠI LÝ , SALE , DỊCH VỤ",
    "TRAO ĐỔI MUA BÁN",
    "CHIẾT KHẤU , ƯU ĐÃI",
  ];
  const title =
    " Chúng tôi không thuộc bất kỳ nhà cái hay đại lý nào,chúng tôi là nhóm độc lập.Lưu ý chỉ sử dụng duy nhất 1 số điện thoại này";
  const sdt = "0782 465 465.";
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='container'>
      <Header className='header'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <Menu theme='dark' mode='horizontal' items={items} />

        {current === true && (
          <div className='btn-n'>
            <Button type='primary'>Nạp Tiền</Button>{" "}
          </div>
        )}

        <div className='btn-d'>
          {!current ? (
            <Button type='primary' onClick={showModal} danger>
              Đăng Kí
            </Button>
          ) : (
            <Button type='primary' danger>
              Tên User
            </Button>
          )}
          <Modal
            title='Basic Modal'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Tên Người Dùng</p>
            <p>Số Điện Thoại</p>
            <p>Email</p>
          </Modal>
        </div>
      </Header>
      <Layout>
        <Sider
          className='sider'
          width={170}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            className='side-bar'
            mode='inline'
            theme='dark'
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub0"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          className='main'
          style={{
            padding: "0 24px 24px",
          }}
        >
          <div className='des-design'>
            <marquee>
              {title} <strong>{sdt}</strong>
            </marquee>
            <div>
              <Row className='row-content vip-1'>
                <Col className='main-banner' lg={8} md={12}>
                  <div className='avatar-content'>
                    <img src={bn} alt='content' />
                    <img className='avatar-new' src={bay} alt='new' />
                  </div>
                </Col>
                <Col className='main-banner' lg={8} md={12}>
                  <div className='avatar-content'>
                    <img src={bb} alt='content' />
                    <img className='avatar-new' src={bay} alt='new' />
                  </div>
                </Col>
                <Col className='main-banner' lg={8} md={12}>
                  <div className='avatar-content'>
                    <img src={bm} alt='content' />
                    <img className='avatar-new' src={bay} alt='new' />
                  </div>
                </Col>
              </Row>
              <Row className='row-content'>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
              </Row>
              <Row className='row-content'>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
                <Col lg={6} md={8} sm={12} sx={24}>
                  <div className='avatar-content'>
                    <img src={empty} alt='content' />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Layout>
      </Layout>
      <Footer className='footer' style={{ textAlign: "center" }}>
        <span>
          <strong>Hotline</strong> : 0782 465 465
        </span>
        <strong>M - A </strong> ©2023 Created by <strong> V - I - T</strong>
      </Footer>
    </Layout>
  );
};
export default Home;
