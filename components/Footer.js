import Image from "next/image";
import BgFooter from '../images/img/bg-hotline-footer.jpg'

export default function Footer() {
    return (
        <>
            <div style={{ position: 'relative' }} className='w-100 wp-hotline-footer text-center text-white pt-5 pb-5'>
                <div style={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}>
                    <Image
                        alt="Next.js logo"
                        // className='carousel-indicators'
                        src={BgFooter}
                        style={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
                        width={1440}
                        height={322}
                    />
                </div>

                <div style={{ zIndex: 9999, position: 'relative', }} className='container'>
                    <div className='row'>
                        <div className='mx-auto'>
                            <a className='hotline SanFranciscoDisplay-Bold'>
                                HOTLINE: 1900 63 6688
                            </a>
                            <p className='text-nn'>
                                Liên hệ chúng tôi để được tư vấn giải pháp vận chuyển cho riêng bạn và nhận ngay báo giá dịch vụ tốt nhất!
                            </p>
                            <p style={{ color: '#FCD804', fontSize: 20 }}>Lấy hàng tận nơi. Giao hàng tận tay. Phục vụ tận tâm</p>
                            <div className="col-lg-12 col-12">
                                <div className="row d-flex justify-content-center align-items-center font-size-16 pt-2 mt-4 mb-3 content-ft">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mb-lg-0">
                                        <a style={{ color: 'black' }} className="d-inline-block p-2 rounded bg-white d-flex justify-content-center align-items-center">
                                            <span className="icon ntl-Location-1 mr-3">
                                                <span className="path1" />
                                                <span className="path22" />
                                                <span className="path3" />
                                                <span className="path4" />
                                                <span className="path5" />
                                            </span>
                                            Tìm bưu cục gần bạn
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                        <a style={{ color: 'black' }} className="d-inline-block p-2 rounded d-flex justify-content-center align-items-center">
                                            <span className="icon ntl-Box-search mr-3">

                                            </span>
                                            Tra cứu giá cước
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <fotted id='footer' className='pt-5'>
                <div style={{ paddingTop: 20 }} className='container menu-bot'>
                    <div className='panel-group' id='accordion' aria-multiselectable='tablist'>
                        <div className='panel panel-default'>
                            <div id='collapse1' className='panel-collapse collapse in show' aria-labelledby="heading1">
                                <div className='panel-body'>
                                    <div className='contact-footer font-size-14'>
                                        <div className='mb-3'>
                                            <a>
                                                <Image
                                                    alt="Next.js logo"
                                                    className='pr-1'
                                                    src="https://ntlogistics.vn/images/img/logo-footer.png"
                                                    width={129}
                                                    height={50}
                                                />
                                            </a>
                                        </div>
                                        <p>
                                            <b>Trụ sở chính:</b>
                                            18A Cộng Hòa, Phường 12,
                                            <br />
                                            Quận Tân Bình, Tp. Hồ Chí Minh<br />
                                            <b>Giờ làm việc:</b>
                                            7:00 - 20:00<br />
                                            <b>Email:</b>
                                            <a>nhattin@ntlogistics.vn</a>
                                            <br />
                                            <b>Hotline:</b>
                                            <a>1900 63 6688</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" id='heading2'>
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2" className="collapsed text-dark SanFranciscoDisplay-Bold font-size-14 d-block position-relative pb-2  mt-3 mt-lg-0 mb-2">
                                    Công ty
                                </a>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse" aria-labelledby="heading2">
                                <div className="panel-body">
                                    <ul className="ul-footer">
                                        <li><a href="/tin-tuc/gioi-thieu-chung/" title="Giới thiệu">Giới thiệu</a></li>
                                        <li><a href="/tin-tuc/nhan-su-chung-toi/" title="Nhân sự NTL">Nhân sự NTL</a></li>
                                        <li><a href="/danh-sach-buu-cuc.html" title="Mạng lưới bưu cục">Mạng lưới bưu cục</a></li>
                                        <li><a href="https://vieclam.ntlogistics.vn/" title="Tuyển dụng">Tuyển dụng</a></li>
                                        <li><a href="/tin-tuc/" title="Tin tức">Tin tức</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" id="heading3">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3" className="collapsed text-dark SanFranciscoDisplay-Bold font-size-14 d-block position-relative pb-2  mt-3 mt-lg-0 mb-2">
                                    Hỗ trợ khách hàng
                                </a>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse" aria-labelledby="heading3">
                                <div className="panel-body">
                                    <ul className="ul-footer">
                                        <li><a href="/tin-tuc/cau-hoi-thuong-gap/" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a></li>
                                        <li><a href="/tin-tuc/dieu-khoan-su-dung/" title="Điều khoản Website">Điều khoản Website</a></li>
                                        <li><a href="/tin-tuc/chinh-sach-bao-mat/" title="Chính sách bảo mật">Chính sách bảo mật</a></li>
                                        <li><a href="/tin-tuc/lien-he/" title="Liên hệ">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" id="heading3">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4" className="collapsed text-dark SanFranciscoDisplay-Bold font-size-14 d-block position-relative pb-2  mt-3 mt-lg-0 mb-2">
                                    Chính sách
                                </a>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse" aria-labelledby="heading4">
                                <div className="panel-body">
                                    <ul className="ul-footer">
                                        <li><a href="/tin-tuc/quy-dinh-va-chinh-sach/#policy-1" title="Khiếu nại &amp; đền bù">Khiếu nại &amp; đền bù</a></li>
                                        <li><a href="/tin-tuc/quy-dinh-va-chinh-sach/#policy-2" title="Quy định gửi &amp; nhận hàng">Quy định gửi &amp; nhận hàng</a></li>
                                        <li><a href="/tin-tuc/quy-dinh-va-chinh-sach/#policy-3" title="Trách nhiệm các bên">Trách nhiệm các bên</a></li>
                                        <li><a href="/tin-tuc/quy-dinh-va-chinh-sach/#policy-4" title="Hàng hoá cấm gửi">Hàng hoá cấm gửi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default mt-3 mt-lg-0">
                            <div id="collapse5" className="panel-collapse collapse show">
                                <div className="panel-body">
                                    <div className="sharefooter text-left mb-2">
                                        <a href="https://zalo.me/1475928748870469743" target="_blank" title="Zalo" rel="nofollow"><span className="ntl-Zalo"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span></span></a>
                                        <a href="https://www.facebook.com/nhattinlogistics/" target="_blank" title="Facebook" rel="nofollow"><span className="ntl-Facebook1"><span className="path1"></span><span className="path2"></span></span></a>
                                        <a href="https://www.youtube.com/channel/UC-0lSIQQ-AwmcgxjIFGKyvQ" target="_blank" title="Youtube" rel="nofollow"><span className="ntl-Youtube"><span className="path1"></span><span className="path2"></span></span></a>
                                    </div>
                                    <form className="position-relative register-email" id="register_email">
                                        {/* <input type="email" name="email_register" id="email_register" value="" placeholder="Nhập email để nhận thông tin" class="form-control" autocomplete="off" required=""> */}
                                        <button type="submit" className="position-absolute bg-transparent border-0"><span className="ntl-Send"></span></button>
                                    </form>
                                    <div className="w-100 mt-3 text-center text-lg-left d-lg-flex justify-content-lg-between align-items-center">
                                        <a href="https://apps.apple.com/us/app/nh%E1%BA%A5t-t%C3%ADn/id1299655950" title="apple store" className="d-inline-block" target="_blank">
                                            {/* <img class="img-fluid" src="https://ntlogistics.vn/style/images/appstore.png"> */}
                                            <Image
                                                alt="Next.js logo"
                                                className='img-fluid'
                                                src="https://ntlogistics.vn/style/images/appstore.png"
                                                width={131}
                                                height={40}
                                            />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=vn.ntlogistics.app.user" title="google chplay" className="d-inline-block" target="_blank">
                                            {/* <img class="img-fluid" src="https://ntlogistics.vn/style/images/googleplay.png"> */}
                                            <Image
                                                alt="Next.js logo"
                                                className='img-fluid'
                                                src="https://ntlogistics.vn/style/images/googleplay.png"
                                                width={131}
                                                height={40}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fotted>
        </>

    )
}
