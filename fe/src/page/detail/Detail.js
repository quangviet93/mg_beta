import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./detail.css";
function detail() {
  const arrFree = [
    "Áp sự kiện của trang lên người chơi !",
    "Giao dịch trao đổi data khách hàng với sale hoặc đại lý đối tác 0 đồng !",
    "Chạy ADS, kéo men, đăng tường, quét data, chuyển đường dẫn tới link đối tác !",
    "Hỗ trợ tăng cường thúc đẩy đại lý trực tiếp doanh thu 3 tháng vượt hiện tại 10 -> 30% !",
  ];
  const arrNoFree = [
    "Nhận làm chi tiêu khách thật 100% (ảo hoàn trả 200%) !",
    "Hỗ trợ làm các gọi tổng âm, tổng cược, tổng nạp !",
    "Tivi được chạy quảng cáo mạnh !",
    "Hỗ trợ tăng cường thúc đẩy đại lý trực tiếp doanh thu 3 tháng vượt hiện tại 50% trở lên !",
  ];
  return (
    <div className="main-detail">
      <div className="title-detail animate-down-up">
        Chi Tiết Về Chúng Tôi Liên Hệ 0782 465 465.
      </div>
      <div>
        <div className="animate-down-up title-content">Miễn Phí</div>
        <div className="content-detail">
          {arrFree.map((e, i) => (
            <p key={i} className="animate-down-up">
              <CheckOutlined />
              {e}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className="animate-down-up title-content">Thu Phí</div>
        <div className="content-detail">
          {arrNoFree.map((e, i) => (
            <p key={i} className="animate-down-up">
              <CheckOutlined />
              {e}
            </p>
          ))}
        </div>
      </div>
      <div className="back-page">
        <a href="/">
          <Button>Trở Lại</Button>
        </a>
      </div>
    </div>
  );
}
export default detail;
