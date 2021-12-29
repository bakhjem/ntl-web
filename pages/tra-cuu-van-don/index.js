import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import Image from 'next/image'
import { SearchIcon } from '@chakra-ui/icons'
import Slide from '../../images/slide.png'

export default function TraCuuVanDon() {
    return (
        <>
            <div style={{ height: 507,position: 'relative' }} className="w-100 position-relative no-count">
                <div style={{ position: 'absolute' , zIndex: 0, width:'100%',height:507 }}>
                    <Image
                        style={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
                        src={Slide}
                        width={1425}
                        height={507}
                    />
                </div>


                <div className="box-count" id="results">
                    {/* <div className="spinner-border-main text-center" style={{display:'none',position:'absolute'}} style="display:none;position:absolute;z-index:10;top:0;left:0;background-image:url(https://ntlogistics.vn/images/fancy_title_over.png);width:100%;height:100%">
                        <div className="spinner-border text-primary" style="position: absolute; z-index: 100; top:30%; "></div>
                    </div> */}
                    <div className="container position-relative z_index">
                        <div className="w-100 text-center font-weight-bold font-IntelBold text-white text-tracuu pt-3 mb-4">Tra cứu vận đơn</div>
                        <div className="row m-md-0">

                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 pl-md-5 pr-md-5">
                                <div className="w-100 bg-FCD804 p-3">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-5">
                                            <div className="w-100">
                                                <div className="w-100 title-code font-size-24 SanFranciscoDisplay-Bold text-dark mb-2">Nhập mã vận đơn</div>
                                                <form className="w-100 box-search position-relative mt-2" action="tra-van-don.html" method="get" role="search" id="tracking_top">
                                                    <InputGroup size='md' style={{alignItems:'center',justifyContent: 'center'}}>
                                                        <Input style={{ backgroundColor: 'white' }} placeholder='Nhập mã vận đơn' size='sm' id="bill" className="form-control code" />
                                                        <InputRightElement children={<SearchIcon color='green.500' />} />
                                                    </InputGroup>
                                                    {/* <div className="btn position-absolute text-center"><span className="ntl-Search-Gray"></span></div> */}

                                                </form>
                                                {/* <span className="error col-lg-12" id="error_bill"  style="display:none">Nhập mã vận đơn</span> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-7 right-tc">
                                            <div className="w-100 bg-white p-2 pt-3 pb-3 rounded pl-md-4 ">
                                                <p>- Nhập tối đa 30 mã vận đơn, mỗi mã cách nhau bởi dấu phẩy Ví dụ: 392773302,968835288</p>
                                                <div>- Mọi thắc mắc vui lòng liên hệ hotline: <a href="tel:1900 63 6688"><strong style={{ color: '#2ca8e4' }}>1900 63 6688</strong></a>  hoặc Email: <a href="mailto:nhattin@ntlogistics.vn"><strong className="__cf_email__" style={{ color: '#2ca8e4' }} >nhattin@ntlogistics.vn</strong></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>

    )
}
