import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import { SearchIcon } from '@chakra-ui/icons'
import Slide from '../../images/slide.png'

export default function QuyDinhChinhSach() {
    return (
        <>
            <div className="policy-masthead-banner d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(https://ntlogistics.vn/images/bg-policy-2.jpg)',backgroundSize:'cover'}} >
                <h1 className="page-heading">Quy định và chính sách</h1>    </div>
            <div className="container">
                <div className="policy-page-content mt-4">
                    <div className="d-flex justify-content-around justify-content-md-between align-content-center flex-wrap">
                        <div className="d-flex flex-column align-items-center policy-item px-4 py-5 mb-4" id="policy-1">
                            <Image
                                src='https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/nhat-tin-logistics-chinh-sach-khieu-nai-den-bu.png'
                                width={340}
                                className="img-fluid"
                                height={340}
                            />

                            <p>Chính sách khiếu nại và đền bù </p>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/12/Chinh-sach-khieu-nai-boi-thuong.pdf" style={{backgroundColor:'#FCD804'}} className="btn btn-secondary"><span className="ntl-Download"></span>Tải PDF</a>
                        </div>
                        <div className="d-flex flex-column align-items-center policy-item px-4 py-5 mb-4" id="policy-2">
                            <Image
                                src='https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/nhat-tin-logistics-quy-dinh-gui-nhan-hang.png'
                                width={340}
                                className="img-fluid"
                                height={340}
                            />
                            <p>Quy định gửi và nhận hàng</p>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/12/Quy-dinh-gui-va-nhan-hang.pdf" style={{backgroundColor:'#FCD804'}} className="btn btn-secondary"><span className="ntl-Download"></span>Tải PDF</a>
                        </div>
                        <div className="d-flex flex-column align-items-center policy-item px-4 py-5 mb-4" id="policy-3">
                            <Image
                                src='https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/nhat-tin-logistics-trach-nhiem-cac-ben.png'
                                width={340}
                                className="img-fluid"
                                height={340}
                            />
                            <p>Trách nhiệm của các bên</p>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/12/Trach-nhiem-cua-cac-ben.pdf" style={{backgroundColor:'#FCD804'}} className="btn btn-secondary"><span className="ntl-Download"></span>Tải PDF</a>
                        </div>
                        <div className="d-flex flex-column align-items-center policy-item px-4 py-5 mb-4" id="policy-4">
                            <Image
                                src="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2020/12/nhat-tin-logistics-hang-hoa-cam-gui.png"
                                width={340}
                                className="img-fluid"
                                height={340}
                            />
                            <p>Các loại hàng hóa cấm gửi</p>
                            <a href="https://ntlogistics.vn/tin-tuc/wp-content/uploads/2021/12/Cac-loai-hang-hoa-cam-gui.pdf" style={{backgroundColor:'#FCD804'}} className="btn btn-secondary"><span className="ntl-Download"></span>Tải PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
