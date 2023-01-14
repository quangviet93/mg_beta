import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./detail.css";
function detail() {
  const arrFree = [
    "✅ Chúng tôi là nhóm chuyên làm về Sự Kiện gôm nhiều thành viên chuyên làm tổ chức , sáng tạo , thiêt kế sự kiện mọi lãnh vực khác nhau.đên với chúng tôi các bạn sẽ được trải nghiệm sự kiện là như thế nào.",
    "✅ Nhiều người không hiểu cứ nghĩ SƯ KIỆN và SEO  là 2 cái riêng biệt , nhưng quan điểm  chúng tôi lại khác , bạn có 1 đội seo giỏi , không thể thiếu 1 đội sự kiện mang tính bức phá , chúng tôi có những tài năng trẻ , suy nghĩ vô cùng táo bạo.",
    "✅ Con đường chúng tôi chọn , là hướng đi mới , sự bộc phá mạnh mẽ , hay hiệu ứng mạnh nhưng không mất đi cái mục tiêu chính , đội SEO bế tắc ,không phải do SEO mà chính là do người làm SỰ KIỆN như chúng tôi chưa đủ giỏi , ngược lại SỰ KIỆN GIỎI ko có SEO GIỎI cũng không làm gì được trừ khi cả 2 cùng 1 chiến tuyến hiệu quả không phải chỉ x2 mà có thể x10 x 20 ( đây là quan điểm cá nhân của chúng tôi , xin mọi người đừng cười chê )",
    "✅ Chúng tôi tạo ra sân chơi giành riêng cho SEO , thương hiệu riêng , ai nói 1 mình không có thương hiệu , đến với chúng tôi , tôi sẽ làm cho các bạn thấy điều cá nhân vẫn có thể làm được mà không cần phải có 1 đội hay tập thể .",
    "✅ Nguyên tắc là cá nhân giỏi chung lại tập thể giỏi , nhưng tập thể giỏi không thể tạo ra cá nhân giỏi được , họ không có đất để phát triển.",
    "✅ Chúng tôi sẽ tạo ra sân chơi cho các SEO , mang thương hiệu riêng từng người , sau này dù các bạn làm công ty nào , chỉ cần còn giữ thương hiệu tôi tin sẽ có nhiều khách hàng cũ tìm tới các bạn , và nhiều công ty sẽ cần các bạn , thương hiệu nó sẽ là thước đo năng lực các bạn chính xác nhất !!!!",
  ];
  return (
    <div className='main-detail'>
      <div className='title-detail animate-down-up'>
        Chi Tiết Về Chúng Tôi Liên Hệ 0782 465 465.
      </div>
      <div>
        <div className='animate-down-up title-content'>
          <strong>Giới Thiệu Chung</strong>
        </div>
        <div className='content-detail'>
          {arrFree.map((e, i) => (
            <p key={i} className='animate-down-up'>
              {e}
            </p>
          ))}
        </div>
        <div className='animate-down-up title-content'>
          <strong>
            Chúng tôi sẽ có xếp hạng thương hiệu Cá Nhân , Tập Thể , Công Ty
            trên trang chúng tôi , kèm thưởng nho nhỏ lấy đồng lực
          </strong>
        </div>
        <div className='animate-down-up title-content'>
          <strong>
            CHÚNG TÔI NHẤN MẠNH chúng tôi là bên chuyên nhận và tổ chức, sáng
            tạo SỰ KIỆN không phải trang CỜ BẠC , Cảm Ơn.
          </strong>
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
export default detail;
