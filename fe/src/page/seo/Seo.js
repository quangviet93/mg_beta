import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./seo.css";
function Seo() {
  const arrFree = [
    "*..* Đăng ký đặt BIỂN QUẢNG CÁO ",
    "( BANNER, ADVERTISING TABLE  ) trên trnag chúng tôi * 2 mẫu chính * Cá nhân và Công ty (nhóm , gia đình ) <==*..*",
    "( gồm cho TẬP THỂ , CÁ NHÂN , từ Nhân Viên tới Sếp đều đặt được vì BÌNH ĐẲNG là cách chúng tôi đang làm. )",
    "===> sẽ được hương những chế độ sau đây:",

    "==* 1 *== ( Cá nhân ) ( XÀI LINK của các bạn )",
    "✅ Được hỗ trợ từ chúng tôi có đội riêng biệt chuyên về Seo game được đào tạo bài bản .",
    "✅ Được chạy quảng cáo facebook , tele , định kỳ mỗi tháng 1 lần ( CHÚNG TÔI XÀI phần mềm của đối tác đáng tin cậy)",
    "✅ Được cấp phần mềm cố vấn ( ví dụ tool , dự đoán , Thống kê tự động doanh thu của nhóm , cá nhân )",
    "✅ Được chiết khấu ngược từ chúng tôi theo tỷ lệ từ 5%-10% / chiết khấu HOA HỒNG chúng tôi (nhận được từ các Công Ty , Tổ chức mà các bạn làm. )",
    "✅ Được trao đổi Data khách hàng free ko tốn dù chỉ 1 ĐỒNG.",
    "✅ Thúc đẩy tăng trưởng doanh số từ 3-7% mỗi tháng. ( cam kết người thật )",

    "**Dịch vụ thêm tính phí**",
    "✅ Chạy Tổng Âm , Tổng Cược , Tổng Nạp theo sll và lẻ.",
    "✅ Chay gấp rút bổ sung cho Chuyển chính , Thăng Chức",
    "✅ VIP=Hỗ trợ thúc thẩy tăng trưởng cấp tốc chỉ tiêu tăng trương liên tục 3 tháng từ từ ( 10 - 30% mỗi tháng ).",
    "✅ Nhận xóa đi Cục Đá cản đường ( không áp dụng cho đối tác đang ký kết với chúng tôi ).( các bạn sẽ được trợ lực từ 20 IT phi tổ chức , chúng tôi cũng đang tuyển những anh em IT tự do đang ko có điểm dừng hãy về với chúng tôi )",

    "==* 2 *== ( Tổ chức ) ( link chính công ty )",
    "✅ Được chúng tôi hỗ trợ tối đa cho nhân viên cấp dưới.",
    "✅ Chi tiêt liên hệ hot line",

    " $$$$$ Hỗ trợ nhận chạy các Gói sau tính phí , cái nào tính cái đó riêng biệt, các bạn ko lo về dư hay thiếu $$$",
    "𝐂Á𝐂 𝐓Í𝐍𝐇 𝐍Ă𝐍𝐆 𝐂𝐇Í𝐍𝐇:",
    "✅ Quản lý lưu trữ bài viết số lượng lớn trên phần mềm ",
    "✅ Đăng bài viết mà bạn đã soạn lưu sẳn trên phần mềm lên Profile cá nhân, Fanpage, Group Hội Nhóm ",
    "✅ Comment lên các bài viết của người khác trên Group Hội Nhóm ",
    "✅ Nhắn tin inbox đến bạn bè, uid khách hàng tiềm năng",
    "✅ Tham gia Group Hội Nhóm theo khu vực, tỉnh thành",
    "✅ Đăng Marketplace lên khắp các Group Hội Nhóm ",
    "✅ Nuôi chăm sóc tài khoản facebook số lượng lớn",
    "✅ Tăng tương tác cho bài viết bạn muốn",
    "✅ Hỗ trợ mở khoá nick facebook tự động",
    "✅ Nuôi, quản lý tài khoản Facebook tự động không giới hạn số lượng",
    "✅ Add Friend theo UID",
    "✅ Mời member vào group ",
    "✅ Add bạn trên group",
    "✅ Tích hợp đổi IP Proxy",
    "✅ Mời like Fanpage",
    "✅ Share livestream, Share bài viết, Seeding bài viết",
    "✅ Đăng bài group tự động",

    "✅✅ Chúng tôi TỒN TẠI vì có các bạn , CỘNG SINH là điều chúng tôi muốn✅✅",
    "✅ Hãy coi chúng tôi là 1 phần của các bạn , hãy trao chúng tôi niềm tin .",
    "✅ SỰ KIỆN và SEO",
    "✅ Nguyên lý là tay và chân , chúng ta mang tới lợi ích cho  người Mua và BÁn nên đáng được TÔN TRỌNG.",
    "✅ Phấn đáu lấy lại DANH DỰ , VỊ TRÍ của SEO  trong lòng mọi người , chúng ta nên đáng được TÔN TRỌNG hơn là LẠNH NHẠT.",
    "✅ Hãy dùng chính năng lực các bạn cho mọi người thấy là SỰ KIỆN , là SEO là như thế nào.",
    "✅ Tôi sáng tạo ra TRANG WEB này mục đích chính để mọi người có thể thấy , khách hàng phải là người cần tìm chúng ta vì đến với chúng ta khách hàng sẽ có lợi ích và chúng ta cũng vậy.",
    "✅ Chung tay tẩy chay SEO xấu , SEO bất chấp , SEO bẩn , SEO lừa đảo . sẽ có 1 ngày chúng ta thẳng lưng ngồi làm việc với khách hàng mà không phải hạ mình nửa.",
  ];
  const arrNoFree = [
    "Nhận làm chi tiêu khách thật 100% (ảo hoàn trả 200%) !",
    "Hỗ trợ làm các gọi tổng âm, tổng cược, tổng nạp !",
    "Tivi được chạy quảng cáo mạnh !",
    "Hỗ trợ tăng cường thúc đẩy đại lý trực tiếp doanh thu 3 tháng vượt hiện tại 50% trở lên !",
  ];
  return (
    <div className='main-detail'>
      <div className='title-detail animate-down-up'>
        Chi Tiết Về Chúng Tôi Liên Hệ 0782 465 465.
      </div>
      <div>
        <div className='animate-down-up title-content'>
          <strong>
            ***Ưu đãi SEO và ĐẠI LÝ , NHÀ CÁI , NHÀ GAME VIỆT ***{" "}
          </strong>
          <br />( Ví dụ: các ae MD5 , Liên Quân , Pug , tùy vào điều kiện từng
          game chúng tối sẽ có gói Sự kiện phù hợp )
        </div>
        <div className='content-detail'>
          {arrFree.map((e, i) => (
            <p key={i} className='animate-down-up'>
              {e}
            </p>
          ))}
        </div>
        <div className='title-detail animate-down-up'>
          <strong>
            QUAN ĐIỂM CỦA TÔI chỉ có SỰ KIỆN YẾU KÉM chứ không có SEO YẾU KÉM ,
            sự THẤT BẠI của các bạn là do SỰ YẾU KÉM của người làm SỰ KIỆN chúng
            tôi.
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
export default Seo;
