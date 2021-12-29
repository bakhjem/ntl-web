import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import { SearchIcon } from '@chakra-ui/icons'
import Slide from '../../images/slide.png'

export default function GioiThieuChung() {
    return (
        <>
            <div className="masthead-banner h-530" style={{ backgroundImage: 'url(https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/11/Kho-18A-4-1-scaled.jpg)', backgroundSize: 'cover' }} ></div>
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="main-box page-box text-justify">
                        <div className="head-quote">
                            <span className="ntl-Box-search-1"></span>
                        </div>
                        <h1>Giới thiệu chung</h1>
                        <p>Công ty Cổ phần Đầu tư Thương mại Phát triển Nhất Tín <strong>(Nhất Tín Logistics)</strong> là doanh nghiệp hàng đầu trong lĩnh vực Chuyển phát nhanh tại Việt Nam.&nbsp;</p>



                        <p>Thành lập vào ngày 2/6/2014 tại Tp. Hồ Chí Minh, Nhất Tín Logistics cung cấp đa dạng các giải pháp logistics:<em>&nbsp;Chuyển phát Hỏa tốc</em>,<em> Chuyển phát Nhanh</em>,<em> Chuyển phát Tiết kiệm (MES)</em>,<em> Chuyển phát Đường bộ</em>,<em> Chuyển phát Thu hộ (COD)</em>, <em>Chuyển phát Nguyên chuyến</em>,<em> Dịch vụ Cho thuê/quản lý kho &amp; Hoàn thiện đơn hàng (3PL &amp; Fulfillment)</em>.</p>



                        <p>Hiện nay, Nhất Tín Logistics đã bao phủ tất cả 63 tỉnh thành và không ngừng gia tăng qua từng năm trong việc mở rộng mạng lưới chi nhánh, bưu cục, điểm nhận trả hàng và phát triển quy mô kho bãi trên khắp toàn quốc.</p>



                        <p>Đặc biệt là các Trung tâm khai thác chia chọn hàng hóa lớn tại 2 điểm cầu của đất nước, bao gồm Kho Sóng Thần miền Nam với diện tích 30,000 m2 và Kho Văn Giang miền Bắc với diện tích 20,000 m2.</p>



                        <p>Nhất Tín Logistics là đối tác tin cậy và sự lựa chọn hàng đầu của các tổng công ty, tập đoàn lớn như Thế Giới Di Động, FPT Shop, Samsung, Amway, Petro Việt Nam…</p>



                        <p>Xuyên suốt quá trình phát triển, Nhất Tín Logistics luôn đồng hành cùng khách hàng với 3 giá trị cốt lõi <em>Trách Nhiệm – Trung Thực – Chiến Đấu</em> với mong muốn chạm tới cảm xúc của từng khách hàng.</p>
                    </div>
                    <div className="page-box mt-4 mt-md-5 text-justify">
                        <p><strong>SỨ MỆNH </strong>“Hơn cả một dịch vụ”</p>
                        <p ><span >Nhất Tín Logistics mong muốn không chỉ mang đến cho khách hàng các dịch vụ chất lượng theo tiêu chuẩn quốc tế với sự trải nghiệm Thân thiện – Nhiệt tình – Tận tâm, mà còn cùng khách hàng của mình xây dựng một cuộc sống tốt đẹp hơn cho người Việt.</span></p>
                        <p><strong>TẦM NHÌN NHẤT TÍN 2023</strong></p>
                        <ul>
                            <li>Trở thành Công ty số 1 về Chất lượng dịch vụ và Chỉ số niềm tin cho từng đơn hàng.</li>
                            <li>Là nơi làm việc hấp dẫn, Cùng đóng góp công sức – Cùng chia sẻ thành công.</li>
                            <li>Đứng Top 3 về Quy mô và Mạng lưới chuyển phát tại Việt Nam.</li>
                        </ul>
                        <p>
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/03/banner_profile_vn.jpg'}
                            width={600}
                            height={178}
                        /></p>
                    </div>
                </div>
                <div className="divider"></div>
                <h2 className="section-heading">GIÁ TRỊ CỐT LÕI</h2>
            </div>
            <div className="d-flex align-content-center flex-wrap bottom-bg">
            <div className="container">
                <div className="d-flex justify-content-around justify-content-md-between align-content-center flex-wrap fw core-box-wrapper">
                                            <div className="d-flex flex-column align-content-center core-box">
                            <a href="https://ntlogistics.vn/tin-tuc/trach-nhiem" className="cv-image" style={{ backgroundImage: 'url(https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/01/thumb_trachnhiem-1.jpg)', backgroundSize: 'cover' }} >Trách nhiệm</a>
                            <a href="https://ntlogistics.vn/tin-tuc/trach-nhiem" className="cv-slogan">- Tôi luôn tuân thủ &amp; áp dụng đúng quy trình<br />- Tôi là gốc rễ của mọi vấn đề</a>
                        </div>
                                                <div className="d-flex flex-column align-content-center core-box">
                            <a href="https://ntlogistics.vn/tin-tuc/trung-thuc" className="cv-image" style={{ backgroundImage: 'url(https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/01/thumb_trungthuc-1.jpg)', backgroundSize: 'cover' }} >Trung thực</a>
                            <a href="https://ntlogistics.vn/tin-tuc/trung-thuc" className="cv-slogan">- Tôi trân trọng lời nói của tôi<br />- Tôi nghe và nói bằng lượng hóa, không kể Câu chuyện</a>
                        </div>
                                                <div className="d-flex flex-column align-content-center core-box">
                            <a href="https://ntlogistics.vn/tin-tuc/chien-dau" className="cv-image" style={{ backgroundImage: 'url(https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/01/thumb_chiendau-1.jpg)', backgroundSize: 'cover' }} >Chiến đấu</a>
                            <a href="https://ntlogistics.vn/tin-tuc/chien-dau" className="cv-slogan">- Tôi không bao giờ nói “Không”<br />- Tôi quyết không bao giờ bỏ cuộc, luôn có kết quả vào thời điểm cụ thể</a>
                        </div>
                            
                </div>
            </div>
        </div>
        </>

    )
}
