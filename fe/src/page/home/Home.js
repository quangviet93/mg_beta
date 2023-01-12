import { useState, useRef, useEffect } from "react";
import { LaptopOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Button, Col, Row } from "antd";
import {
  MailOutlined,
  StrikethroughOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./home.css";

import imageDefault from "../../image/ThongtinQuangcao.png";
import banner_footer from "../../image/hinh-anh-dong-chuc-mung-nam-moi-gif-15.gif";

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
import Navbar from "../../components/Navbar";

const Home = () => {
  const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const projectsRef = useRef(null);

  const [spliceItem, setSpliceItem] = useState(true);

  const title =
    " Chúng tôi không thuộc bất kỳ nhà cái hay đại lý nào,chúng tôi là nhóm độc lập.Lưu ý chỉ sử dụng duy nhất 1 số điện thoại này";
  const sdt = "0782 465 465.";
  const handleLoadMoreToggle = (e) => {
    setSpliceItem(!spliceItem);
    if (e.target.innerText === "Thu Lại") {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // const myFunction = () => {
  //   var video = document.getElementById("myVideo");
  //   var btn = document.getElementById("myBtn");
  //   if (video.paused) {
  //     video.play();
  //     btn.innerHTML = "Pause";
  //   } else {
  //     video.pause();
  //     btn.innerHTML = "Play";
  //   }
  // };
  // myFunction();
  return (
    <Layout className="container" ref={projectsRef}>
      <div>
        <Navbar />
      </div>
      <Layout>
        <div className="sider">
          <Layout
            className="main"
            style={{
              padding: "0 24px 24px",
            }}>
            <div className="des-design">
              <marquee>
                {title} <strong>{sdt}</strong>
              </marquee>
              <div>
                <Row className="container-qc">
                  <Col className="qc-left" lg={3} md={3} sm={3} xs={3}>
                    <Row>
                      <img src={qc} alt="content" />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt="content" />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt="content" />
                    </Row>
                  </Col>
                  <Col
                    className="video-qc qc-center"
                    lg={18}
                    md={18}
                    sm={18}
                    xs={18}>
                    <video id="myVideo" autoPlay muted controls>
                      <source
                        src="https://res.cloudinary.com/quangviet93/video/upload/v1657944051/Netfix/y2mate.com_-_REVIEW_PHIM_BI%E1%BB%86T_%C4%90%E1%BB%98I_SI%C3%8AU_ANH_H%C3%99NG_1_AVENGERS_SAKURA_REVIEW_360p_vstzxl.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </Col>
                  <Col className="qc-left" lg={3} md={3} sm={3} xs={3}>
                    <Row>
                      <img src={qc} alt="content" />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt="content" />
                    </Row>{" "}
                    <Row>
                      <img src={qc} alt="content" />
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row className="row-content">
                <div className="title-slot">
                  Liên Hệ Chúng Tôi Bạn Sẽ Có Tất Cả
                </div>
              </Row>
              <div>
                <Row className="row-vip vip-1">
                  <Col className="main-banner" lg={8} md={12}>
                    <div className="avatar-vip bounce">
                      <img src={bb} alt="content" />
                      <img className="avatar-new" src={bay} alt="new" />
                    </div>
                  </Col>
                  <Col className="main-banner" lg={8} md={12}>
                    <div className="avatar-vip bounce">
                      <img src={bm} alt="content" />
                      <img className="avatar-new" src={bay} alt="new" />
                    </div>
                  </Col>
                  <Col className="main-banner" lg={8} md={12}>
                    <div className="avatar-vip bounce">
                      <img src={bb} alt="content" />
                      <img className="avatar-new" src={bay} alt="new" />
                    </div>
                  </Col>
                </Row>
                <Row className="row-content">
                  <div className="title-slot">
                    --------- Slot Game ---------
                  </div>
                </Row>

                <Row className="row-content">
                  {spliceItem
                    ? arrTest.slice(0, 4).map(() => (
                        <Col lg={6} md={6} sm={6} sx={6}>
                          <div className="avatar-content bounce">
                            <img src={imageDefault} alt="content" />
                          </div>
                        </Col>
                      ))
                    : arrTest.map(() => (
                        <Col lg={6} md={6} sm={6} sx={6}>
                          <div className="avatar-content bounce">
                            <img src={imageDefault} alt="content" />
                          </div>
                        </Col>
                      ))}
                </Row>
                <div className="load-more">
                  <Button onClick={handleLoadMoreToggle}>
                    {spliceItem ? "Xem Thêm" : "Thu Lại"}
                  </Button>
                </div>
              </div>
              {[1, 2, 3].map(() => (
                <div className="row-qc">
                  <div>
                    <ul>
                      <p>
                        <CheckOutlined />
                        Mẫu content thu hút là nội dung của một sự việc
                      </p>
                      <p>
                        <CheckOutlined />
                        Một vấn đề thu hút được ngay thị hiếu khách hàng
                      </p>
                      <p>
                        <CheckOutlined />
                        Nội dung này có thể được sử dụng để truyền tải các thông
                        điệp
                      </p>
                      <p>
                        <CheckOutlined />
                        Câu chuyện của bạn để chạm đến trái tim khách hàng để
                        hướng đến mục đích PR
                      </p>
                      <p>
                        <CheckOutlined />
                        Quảng cáo cho sản phẩm/dịch vụ của doanh nghiệp, review
                        về các tin tức/sản phẩm,… hiện nay.
                      </p>
                    </ul>
                  </div>
                  <img src={banner_footer} alt="content" />
                </div>
              ))}
            </div>
          </Layout>
        </div>
      </Layout>
      <Footer className="footer" style={{ textAlign: "center" }}>
        <span>
          <strong>Hotline</strong> : 0782 465 465
        </span>
        <strong>M - A </strong> ©2023 Created by <strong> V - I - T</strong>
      </Footer>
    </Layout>
  );
};
export default Home;
