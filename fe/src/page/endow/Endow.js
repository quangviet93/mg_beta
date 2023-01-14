import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./endow.css";
function Endow() {
  const arrFree = [
    "Áp khuyến mãi trực tiếp lên khách hàng đăng ký trang đối tác thông qua trang chúng tôi, hiện có 4 khuyến mãi .",
    "1/ Hoàn 10-30% số tiền khách thua tính theo các mốc thua/tuần",
    "==>( lưu ý: tiền mặt banking qua ngân hàng , momo )",
    "✅ mốc 1 từ (1 triệu - 50 triệu) = 10%.",
    "✅ mốc 2 từ (50 triệu - 150 triệu) = 15% ",
    "==>(lưu ý: 50 tới 70 triệu chỉ nhận 11% , trên 70 triệu mới tính mốc 2)",
    "✅ mốc 3 từ (150 triệu - 400 triệu) = 20% ",
    "==>(lưu ý: từ 150 tới 200 triệu chỉ nhận 16% , trên 200 triệu mới tính mốc 3)",
    "✅ mốc 4 từ (400 triệu - 1 tỷ) = 25% = 25%",
    "==>(lưu ý: từ 400 tới 600 triệu chỉ nhận 21% , trên 600 triệu tính mốc 4)",
    "✅ mốc 5 vip (từ 1 tỷ - vô hạn) = 30% ==>(lưu ý: từ 1 tới 5 tỷ chỉ nhận 26% , trên 5 tỷ tính mốc 5)",
    "(kèm được phép yêu cầu giao tiền tận nơi khách , hoặc khách dến nhận có đội ngũ An Ninh Chuyên Nghiệp hộ tống về tận nhà áp dụng trên 3 miền Tổ Quốc )",
  ];
  const arrNoFree = [
    "2/ Khách tham gia liên tục thua 5-10-15 ngày Hoàn thêm theo mốc 5%-10%-15% , số tiền thua tối thiêu 1 triệu/1 ngày ",
    "==>(lưu ý: tiền này sẽ được trực tiếp + vao trang thua)",
    "3/ Khách tham gia chơi tổng tiền thua/tuần liên tục 4 tuần hoàn 10% chuyển khoản !",
    "==>(lưu ý: nếu bị ngắt quãng , tính lại từ đầu, tối thiểu 5 triệu / tuân )",
    "4/ Khách  mãi đặc biệt---> Hoàn đến 100% tiền thua/tháng",
    "==>(lưu ý: Sẽ có dự đoán kết quả xổ sô ngày 30 hàng tháng tính theo giải Độc Đắc/miền bắc vào 18h15 giờ Việt Nam )",
    "==> (lưu ý: đơn vị tính *4 con số đuôi* mỗi người chỉ được 1 dãy số gồm 4 con ) sẽ chiếu trực tiếp trên tivi của Trang !)",
  ];
  const about = [];
  return (
    <div className='main-detail'>
      <div className='title-detail animate-down-up'>
        Chi Tiết Về Chúng Tôi Liên Hệ 0782 465 465.
      </div>
      <div>
        <div className='animate-down-up title-content'>
          <strong>Ưu Đãi Khách Hàng Cá NHân</strong>
        </div>
        <div className='content-detail'>
          {arrFree.map((e, i) => (
            <p key={i} className='animate-down-up'>
              {e}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className='content-detail'>
          {arrNoFree.map((e, i) => (
            <p key={i} className='animate-down-up'>
              {e}
            </p>
          ))}
        </div>
      </div>
      <div className='back-page'>
        <a href='/'>
          <Button>Trở Lại</Button>
        </a>
      </div>
    </div>
  );
}
export default Endow;
