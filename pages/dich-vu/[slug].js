import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import { SearchIcon } from '@chakra-ui/icons'
import Slide from '../../images/slide.png'

export default function Dichvu() {
    return (
        <>
            <div className="masthead-banner h-530" style={{ backgroundImage: 'url(https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/11/Kho-18A-4-1-scaled.jpg)', backgroundSize: 'cover' }} ></div>
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-center mb-5">
                    <div className="main-box page-box normal-service text-justify">
                        <div className="head-quote">
                            <span className="ntl-Box-search-1"></span>
                        </div>
                        <p className="big-text c-gray">Dịch vụ</p>
                        <h1>Chuyển phát Hỏa tốc</h1>
                        <p>Dịch vụ Chuyển phát Hỏa Tốc là dịch vụ vận chuyển được ưu tiên nhất trong mọi khâu xử lý và có thời gian chuyển phát nhanh nhất, đáp ứng nhu cầu gửi hàng hóa siêu nhanh, gấp rút của khách hàng nhưng vẫn đảm bảo sự an toàn tối đa.</p>



                        <p className="has-medium-font-size"><strong><em>Tại sao chọn Dịch vụ chuyển phát Hỏa Tốc?</em></strong></p>



                        <p><strong>1.</strong> Dịch vụ Nhận – Phát tận nơi theo thời gian khách hàng lựa chọn, phù hợp với các nhu cầu vận chuyển cấp bách thư từ, hàng hóa.&nbsp;</p>



                        <p><strong>2.</strong> Tốc độ vận chuyển siêu nhanh, ưu tiên số một trong mọi phân đoạn. Hàng hóa được vận chuyển bằng đường hàng không tại các điểm đến có sân bay.</p>



                        <p><strong>3.</strong> Thời gian chuyển phát chỉ từ 4h – 6h đối với khu vực nội thành tại các thành phố lớn; phát trước 9h00 sáng hoặc trong ngày ngày tiếp theo đối với các tuyến liên tỉnh, toàn quốc. </p>
                    </div>
                </div>
                <p className="c-gray text-center fz-2">Dịch vụ của Nhất Tín</p>
                <h3 className="mw-700 text-center nt-services">Chúng tôi cung cấp đầy đủ  các dịch vụ vận chuyển hàng hóa</h3>
                <div className="d-flex flex-column flex-md-row align-content-center justify-content-center flex-wrap">
                    <a href="https://ntlogistics.vn/tin-tuc/dich-vu-chuyen-phat-ket-hop-mes" className="service-box text-center p-4 mb-4 mx-2">
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/CP-Tiết-kiệm.png'}
                            width={100}
                            height={100}
                        />
                        <p className="font-weight-bold">Chuyển phát Tiết kiệm</p>
                        <p>Dịch vụ vận chuyển thư từ, hàng hóa bằng đường bộ và đường hàng không trải rộng khắp 63 tỉnh thành, đảm bảo các sản phẩm đến tay người nhận an toàn với chi phí tiết kiệm.</p>
                    </a>
                    <a href="https://ntlogistics.vn/tin-tuc/dich-vu-chuyen-phat-nhanh-duong-bo" className="service-box text-center p-4 mb-4 mx-2">
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/CP-Đường-bộ.png'}
                            width={100}
                            height={100}
                        />
                        <p className="font-weight-bold">Chuyển phát Đường bộ</p>
                        <p>Dịch vụ áp dụng vận chuyển cho cả hàng lẻ và hàng nguyên khối với phương tiện vận chuyển đa dạng tải trọng, từ xe tải 500kg đến xe container 45 feet. Đây là dịch vụ chuyển phát có chi phí gửi hàng rẻ nhất so với các loại hình chuyển phát khác.</p>
                    </a>
                    <a href="https://ntlogistics.vn/tin-tuc/dv-van-chuyen-thuong-mai-dien-tu-cod" className="service-box text-center p-4 mb-4 mx-2">
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/CP-Thu-hộ-COD.png'}
                            width={100}
                            height={100}
                        />
                        <p className="font-weight-bold">Chuyển phát thu hộ (COD)</p>
                        <p>Dịch vụ vận chuyển hàng hóa kết hợp với dịch vụ thu hộ tiền (COD), vừa đảm bảo các sản phẩm được vận chuyển nhanh chóng và an toàn đến người nhận, vừa đáp ứng nhu cầu cần thu hộ tiền của người bán hàng.</p>
                    </a>
                    <a href="https://ntlogistics.vn/tin-tuc/dich-vu-thue-xe-nguyen-chuyen" className="service-box text-center p-4 mb-4 mx-2">
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/Thuê-xe-nguyên-chuyến.png'}
                            width={100}
                            height={100}
                        />
                        <p className="font-weight-bold">Thuê xe nguyên chuyến</p>
                        <p>Dịch vụ cho thuê xe tải nguyên chiếc, cho phép người thuê sử dụng 100% trọng tải của phương tiện với nhu cầu vận chuyển hàng hóa có khối lượng và số lượng lớn và riêng biệt. </p>
                    </a>
                    <a href="https://ntlogistics.vn/tin-tuc/chuyen-phat-quoc-te" className="service-box text-center p-4 mb-4 mx-2">
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/06/Quoc-te.png'}
                            width={100}
                            height={100}
                        />
                        <p className="font-weight-bold">Chuyển phát Quốc Tế</p>
                        <p>Dịch vụ Chuyển phát Quốc tế là dịch vụ vận chuyển hàng hóa từ Việt Nam đến hầu hết các quốc gia khác trên toàn thế giới thông qua đường hàng không, đường biển, đường bộ… với giá cước cạnh tranh, thời gian toàn trình hợp lý, cam kết an toàn hàng hóa và phát tận tay người nhận.</p>
                    </a>
                    <a href="https://ntlogistics.vn/tin-tuc/3pl-fulfillment" className="service-box text-center p-4 mb-4 mx-2">
                        <Image
                            alt="Next.js logo"
                            className='mb-3'
                            src={'https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/06/FullFillment.png'}
                            width={100}
                            height={100}
                        />
                        <p className="font-weight-bold">3PL &amp; Fulfillment</p>
                        <p>Là dịch vụ thực hiện trọn gói các hoạt động logistics, bao gồm: Lưu trữ, giám sát và quản lý hàng hóa của đối tác tại kho; Đóng gói và vận chuyển đến tận tay người nhận khi có lệnh xuất kho; Thực hiện theo dõi và cập nhật tình hình tồn kho chính xác, kịp thời. </p>
                    </a>
                </div>
            </div>
        </>

    )
}
