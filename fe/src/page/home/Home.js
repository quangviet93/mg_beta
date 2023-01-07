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
} from "@ant-design/icons";
import "./home.css";
import avatar from "../../image/ThongtinQuangcao.png";
import Modal from "antd/es/modal/Modal";

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
    icon: <MailOutlined />,
  },
  {
    label: "CHIẾT KHẤU , ƯU ĐÃI",
    key: "3",
    icon: <MailOutlined />,
  },
];
const items2 = [
  { name: "BXH VIP", icon: UserOutlined },
  { name: "Đang hoạt động", icon: LaptopOutlined },
  { name: "Tổng người dùng", icon: NotificationOutlined },
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
    " Chúng tôi không thuộc bất kỳ nhà cái hay đại lý nào,chúng tôi là nhóm độc lập.Lưu ý chỉ sử dụng duy nhất 1 số điện thoại này 0782 465 465.";
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='container'>
      <Header className='header'>
        <div className='logo'>
          <img src={logoPage} alt='logo' />
        </div>
        <Menu theme='dark' mode='horizontal' items={items} />
        <div className='btn-n'>
          {current === true && <Button type='primary'>Nạp Tiền</Button>}
        </div>
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
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
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
            <marquee>{title}</marquee>
            <div>
              <Row className='row-content'>
                <Col span={8}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={8}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={8}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
              </Row>
              <Row className='row-content'>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
              </Row>
              <Row className='row-content'>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='avatar-content'>
                    <img src={avatar} alt='content' />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          ></Content> */}
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
