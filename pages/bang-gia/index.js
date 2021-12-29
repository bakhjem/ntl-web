import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import { SearchIcon } from '@chakra-ui/icons'
import Slide from '../../images/slide.png'

export default function BangGia() {
    return (
        <>
            <div className="policy-masthead-banner d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(https://ntlogistics.vn/images/bg-price.jpg)', backgroundSize: 'cover' }} >
                <h1 className="page-heading" style={{color: '#000'}}>Bảng giá</h1>    </div>
            <div className="container pricing">
                <div className="popular-area">
                    <h2 className="my-4">Khu vực phổ biến</h2>
                    <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-50-CN-TP-HỒ-CHÍ-MINH_V.01_23.04.2021.pdf" target="_blank">Bảng giá Hồ Chí Minh</a>
                    <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-29-CN-Hà-Nội_V.01_23.04.2021.pdf" target="_blank">Bảng giá Hà Nội</a>
                    <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-43-CN-Đà-Nẵng_V.01_23.04.2021.pdf" target="_blank">Bảng giá Đà Nẵng</a>
                    <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/03/50-HCM-QUỐC-TẾ-Bản-hoàn-chỉnh-2021-All-in.pdf" target="_blank">Bảng giá quốc tế</a>
                </div>
                <div className="other-area">
                    <h2 className="my-4">Khu vực khác</h2>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="pills-a-tab" data-toggle="pill" href="#pills-a" role="tab" aria-controls="pills-a" aria-selected="true">a</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-b-tab" data-toggle="pill" href="#pills-b" role="tab" aria-controls="pills-b" aria-selected="false">b</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-c-tab" data-toggle="pill" href="#pills-c" role="tab" aria-controls="pills-c" aria-selected="false">c</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-d-tab" data-toggle="pill" href="#pills-d" role="tab" aria-controls="pills-d" aria-selected="false">d</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-g-tab" data-toggle="pill" href="#pills-g" role="tab" aria-controls="pills-g" aria-selected="false">g</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-h-tab" data-toggle="pill" href="#pills-h" role="tab" aria-controls="pills-h" aria-selected="false">h</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-k-tab" data-toggle="pill" href="#pills-k" role="tab" aria-controls="pills-k" aria-selected="false">k</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-l-tab" data-toggle="pill" href="#pills-l" role="tab" aria-controls="pills-l" aria-selected="false">l</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-n-tab" data-toggle="pill" href="#pills-n" role="tab" aria-controls="pills-n" aria-selected="false">n</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-p-tab" data-toggle="pill" href="#pills-p" role="tab" aria-controls="pills-p" aria-selected="false">p</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-q-tab" data-toggle="pill" href="#pills-q" role="tab" aria-controls="pills-q" aria-selected="false">q</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-s-tab" data-toggle="pill" href="#pills-s" role="tab" aria-controls="pills-s" aria-selected="false">s</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-t-tab" data-toggle="pill" href="#pills-t" role="tab" aria-controls="pills-t" aria-selected="false">t</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-v-tab" data-toggle="pill" href="#pills-v" role="tab" aria-controls="pills-v" aria-selected="false">v</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pills-y-tab" data-toggle="pill" href="#pills-y" role="tab" aria-controls="pills-y" aria-selected="false">y</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade active show" id="pills-a" role="tabpanel" aria-labelledby="pills-a-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-67-NT-An-Giang_V.02_22.04.2021.pdf" target="_blank">Bảng giá An Giang</a>
                        </div>
                        <div className="tab-pane fade" id="pills-b" role="tabpanel" aria-labelledby="pills-b-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-61-CN-Bình-Dương_V.01_23.04.2021.pdf" target="_blank">Bảng giá Bình Dương</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-97-NT-Bắc-Kạn-_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bắc Kạn</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-98-NT-Bắc-Giang-_V.02_22.04.2021-2.pdf" target="_blank">Bảng giá Bắc Giang</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-94-CN-Bạc-Liêu_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bạc Liêu</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-99-CN-Bắc-Ninh_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bắc Ninh</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-71-NT-Bến-Tre_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bến Tre</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-77-CN-Bình-Định_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bình Định</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-93-NT-Bình-Phước_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bình Phước</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-86-NT-Bình-Thuận_V.02_22.04.2021.pdf" target="_blank">Bảng giá Bình Thuận</a>
                        </div>
                        <div className="tab-pane fade" id="pills-c" role="tabpanel" aria-labelledby="pills-c-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/05/Bảng-giá-NTL-A4-65-CN-Cần-Thơ_V.01_23.04.2021.pdf" target="_blank">Bảng giá Cần thơ</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-69-NT-Cà-Mau_V.02_22.04.2021.pdf" target="_blank">Bảng giá Cà Mau</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-11-CN-Cao-Bằng_V.01_23.04.2021.pdf" target="_blank">Bảng giá Cao Bằng</a>
                        </div>
                        <div className="tab-pane fade" id="pills-d" role="tabpanel" aria-labelledby="pills-d-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-47-CN-Đắk-Lắk_V.01_23.04.2021.pdf" target="_blank">Bảng giá Đắk Lắk</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-48-NT-Đắk-Nông_V.01_23.04.2021.pdf" target="_blank">Bảng giá Đắk Nông</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-27-NT-Điện-Biên_V.01_23.04.2021.pdf" target="_blank">Bảng giá Điện Biên</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-60-CN-Đồng-Nai_V.01_23.04.2021.pdf" target="_blank">Bảng giá Đồng Nai</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-66-CN-Đồng-Tháp_V.02_22.04.2021-1.pdf" target="_blank">Bảng giá Đồng Tháp</a>
                        </div>
                        <div className="tab-pane fade" id="pills-g" role="tabpanel" aria-labelledby="pills-g-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-81-CN-Gia-Lai_V.02_22.04.2021.pdf" target="_blank">Bảng giá Gia Lai</a>
                        </div>
                        <div className="tab-pane fade" id="pills-h" role="tabpanel" aria-labelledby="pills-h-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-23-NT-Hà-Giang_V.01_23.04.2021.pdf" target="_blank">Bảng giá Hà Giang</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-90-CN-Hà-Nam_V.02_22.04.2021.pdf" target="_blank">Bảng giá Hà Nam</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-38-NT-Hà-Tĩnh_V.01_23.04.2021.pdf" target="_blank">Bảng giá Hà Tĩnh</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-34-CN-Hải-Dương_V.01_23.04.2021-1.pdf" target="_blank">Bảng giá Hải Dương</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-16-CN-Hải-Phòng_V.01_23.04.2021.pdf" target="_blank">Bảng giá Hải Phòng</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/05/Bảng-giá-NTL-A4-95-NT-Hậu-Giang-_V.02_22.04.2021.pdf" target="_blank">Bảng giá Hậu Giang</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-28-NT-Hòa-Bình_V.01_23.04.2021.pdf" target="_blank">Bảng giá Hòa Bình</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-75-CN-Huế_V.02_22.04.2021.pdf" target="_blank">Bảng giá Huế</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-89-CN-Hưng-Yên_V.02_22.04.2021.pdf" target="_blank">Bảng giá Hưng Yên</a>
                        </div>
                        <div className="tab-pane fade" id="pills-k" role="tabpanel" aria-labelledby="pills-k-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-68-CN-Kiên-Giang_V.02_22.04.2021.pdf" target="_blank">Bảng giá Kiên Giang</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-82-NT-Kon-Tum_V.02_22.04.2021.pdf" target="_blank">Bảng giá Kon Tum</a>
                        </div>
                        <div className="tab-pane fade" id="pills-l" role="tabpanel" aria-labelledby="pills-l-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-25-NT-Lai-Châu_V.01_23.04.2021.pdf" target="_blank">Bảng giá Lai Châu</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-49-CN-Lâm-Đồng_V.01_23.04.2021.pdf" target="_blank">Bảng giá Lâm Đồng</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-12-NT-Lạng-Sơn_V.01_23.04.2021.pdf" target="_blank">Bảng giá Lạng Sơn</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-24-CN-Lào-Cai_V.01_23.04.2021.pdf" target="_blank">Bảng giá Lào Cai</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-62-NT-Long-An_V.01_23.04.2021.pdf" target="_blank">Bảng giá Long An</a>
                        </div>
                        <div className="tab-pane fade" id="pills-n" role="tabpanel" aria-labelledby="pills-n-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-18-CN-Nam-Định_V.01_23.04.2021.pdf" target="_blank">Bảng giá Nam Định</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-37-CN-Nghệ-An_V.01_23.04.2021.pdf" target="_blank">Bảng giá Nghệ An</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-35-NT-Ninh-Bình_V.01_23.04.2021.pdf" target="_blank">Bảng giá Ninh Bình</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-85-NT-Ninh-Thuận_V.02_22.04.2021.pdf" target="_blank">Bảng giá Ninh Thuận</a>
                        </div>
                        <div className="tab-pane fade" id="pills-p" role="tabpanel" aria-labelledby="pills-p-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-19-CN-Phú-Thọ_V.01_23.04.2021.pdf" target="_blank">Bảng giá Phú Thọ</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-78-NT-Phú-Yên_V.02_22.04.2021.pdf" target="_blank">Bảng giá Phú Yên</a>
                        </div>
                        <div className="tab-pane fade" id="pills-q" role="tabpanel" aria-labelledby="pills-q-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-73-VP-Quảng-Bình_V.02_22.04.2021.pdf" target="_blank">Bảng giá Quảng Bình</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-92-NT-Quảng-Nam_V.02_22.04.2021.pdf" target="_blank">Bảng giá Quảng Nam</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-76-NT-Quảng-Ngãi_V.02_22.04.2021.pdf" target="_blank">Bảng giá Quảng Ngãi</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-14-NT-Quảng-Ninh_V.01_23.04.2021.pdf" target="_blank">Bảng giá Quảng Ninh</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-74-VP-Quảng-Trị_V.02_22.04.2021.pdf" target="_blank">Bảng giá Quảng Trị</a>
                        </div>
                        <div className="tab-pane fade" id="pills-s" role="tabpanel" aria-labelledby="pills-s-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-83-NT-Sóc-Trăng_V.02_22.04.2021.pdf" target="_blank">Bảng giá Sóc Trăng</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-26-CN-Sơn-La_V.01_23.04.2021.pdf" target="_blank">Bảng giá Sơn La</a>
                        </div>
                        <div className="tab-pane fade" id="pills-t" role="tabpanel" aria-labelledby="pills-t-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-79-CN-Nha-Trang_V.02_22.04.2021.pdf" target="_blank">Bảng giá Nha Trang</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/11/Bảng-giá-NTL-A4-70-CN-Tây-Ninh_V.02_22.04.2021.pdf" target="_blank">Bảng giá Tây Ninh</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-17-NT-Thái-Bình_V.01_23.04.2021.pdf" target="_blank">Bảng giá Thái Bình</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-20-CN-Thai-Nguyen_V.01_23.04.2021.pdf" target="_blank">Bảng giá Thái Nguyên</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-36-CN-Thanh-Hóa_V.01_23.04.2021.pdf" target="_blank">Bảng giá Thanh Hóa</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-63-CN-Tiền-Giang_V.01_23.04.2021.pdf" target="_blank">Bảng giá Tiền Giang</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-84-NT-Trà-Vinh_V.02_22.04.2021.pdf" target="_blank">Bảng giá Trà Vinh</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-22-CN-Tuyên-Quang_V.01_23.04.2021.pdf" target="_blank">Bảng giá Tuyên Quang</a>
                        </div>
                        <div className="tab-pane fade" id="pills-v" role="tabpanel" aria-labelledby="pills-v-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-64-NT-Vĩnh-Long_V.01_23.04.2021.pdf" target="_blank">Bảng giá Vĩnh Long</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-88-CN-Vĩnh-Phúc_V.02_22.04.2021.pdf" target="_blank">Bảng giá Vĩnh Phúc</a>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/06/Bảng-giá-NTL-A4-72-Bà-Rịa-Vũng-Tàu_V.02_22.04.2021.pdf" target="_blank">Bảng giá Vũng Tàu</a>
                        </div>
                        <div className="tab-pane fade" id="pills-y" role="tabpanel" aria-labelledby="pills-y-tab">
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/04/Bảng-giá-NTL-A4-21-CN-Yên-Bái_V.01_23.04.2021.pdf" target="_blank">Bảng giá Yên Bái</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
