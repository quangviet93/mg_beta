import React, { useState } from "react";
import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Button, Col, Row } from "antd";
import {
  MailOutlined,
  StrikethroughOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
import qc from "../../image/1NGUON-GIFver2-900x900-1.gif";
import s1 from "../../image/s1.jpeg";
import s2 from "../../image/s2.jpeg";
import s3 from "../../image/s3.jpeg";
import s4 from "../../image/s4.jpeg";
import s5 from "../../image/s5.jpeg";
import s6 from "../../image/s6.jpeg";
import s7 from "../../image/s7.jpeg";
import s8 from "../../image/s8.jpeg";

import Modal from "antd/es/modal/Modal";
import { Footer } from "antd/es/layout/layout";

const { Header, Content, Sider } = Layout;
const items = [
  {
    label: "ĐẠI LÝ / SALE / DỊCH VỤ",
    key: "1",
    icon: <MailOutlined />,
  },
  {
    label: "TRAO ĐỔI MUA BÁN",
    key: "2",
    icon: <LaptopOutlined />,
  },

  {
    label: "CHIẾT KHẤU / ƯU ĐÃI",
    key: "3",
    icon: <StrikethroughOutlined />,
  },
];
const items2 = [{ name: "BXH VIP", icon: UserOutlined }].map((item, index) => {
  const key = String(index + 1);
  return {
    key: `sub${index}`,
    icon: React.createElement(item.icon),
    label: item.name,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = j + 1;
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
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
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
        {/* <div className='logo'>
          <img src={logo} alt='logo' />
        </div> */}
        <Menu theme='dark' mode='horizontal' items={items} />

        {/* {current === true && (
          <div className='btn-n'>
            <Button type='primary'>Nạp Tiền</Button>{" "}
          </div>
        )} */}

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
        <div className='sider'>
          <Button
            className='btn-sider'
            type='primary'
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            triggerSubMenuAction='click'
            mode='inline'
            theme='dark'
            inlineCollapsed={!collapsed}
            items={items2}
          />
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
                <Row className='container-qc'>
                  <Col className='qc-left' lg={3} md={3} sm={3} xs={3}>
                    <Row>
                      <img src={qc} alt='content' />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt='content' />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt='content' />
                    </Row>
                  </Col>
                  <Col
                    className='video-qc qc-center'
                    lg={18}
                    md={18}
                    sm={18}
                    xs={18}
                  >
                    <video id='myVideo' controls>
                      <source
                        src='https://res.cloudinary.com/quangviet93/video/upload/v1657944051/Netfix/y2mate.com_-_REVIEW_PHIM_BI%E1%BB%86T_%C4%90%E1%BB%98I_SI%C3%8AU_ANH_H%C3%99NG_1_AVENGERS_SAKURA_REVIEW_360p_vstzxl.mp4'
                        type='video/mp4'
                      />
                    </video>
                  </Col>
                  <Col className='qc-left' lg={3} md={3} sm={3} xs={3}>
                    <Row>
                      <img src={qc} alt='content' />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt='content' />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt='content' />
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row className='row-content'>
                <div className='title-slot'>
                  Liên Hệ Chúng Tôi Bạn Sẽ Có Tất Cả
                </div>
              </Row>
              <div>
                <Row className='row-content vip-1'>
                  <Col className='main-banner' lg={8} md={12}>
                    <div className='avatar-content'>
                      <img src={bm} alt='content' />
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
                  <div className='title-slot'>
                    --------- Slot Game ---------
                  </div>
                </Row>
                <Row className='row-content'>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s1} alt='content' />
                    </div>
                  </Col>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s2} alt='content' />
                    </div>
                  </Col>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s3} alt='content' />
                    </div>
                  </Col>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s4} alt='content' />
                    </div>
                  </Col>
                </Row>
                <Row className='row-content'>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s5} alt='content' />
                    </div>
                  </Col>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s6} alt='content' />
                    </div>
                  </Col>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s7} alt='content' />
                    </div>
                  </Col>
                  <Col lg={6} md={8} sm={12} sx={24}>
                    <div className='avatar-content'>
                      <img src={s8} alt='content' />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Layout>
        </div>
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
