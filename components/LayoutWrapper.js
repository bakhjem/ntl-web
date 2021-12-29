import { Center, Wrap, WrapItem } from "@chakra-ui/react"
import { Col, Row } from "antd"
import Image from "next/image"
import Link from "next/link"
import Footer from "./Footer"

const LayoutWrapper = ({ children }) => {
  // const onSearch = value => console.log(value);

  return (
    // <body className="template-index">
    <div id='PageContainer' className="w-100 float-left position-relative is-moved-by-drawer">

      <div className="w-100 top-header font-size-14 d-none d-lg-block">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7 col-sm-7 col-12">
              <span className="pr-1" >
                Trụ sở chính: 18A Cộng Hòa, Phường 12, Quận Tân Bình, Tp. Hồ Chí Minh
              </span>
              <span className='border-left pl-2'>
                Giờ làm việc:
                <span className='SanFranciscoDisplay-Bold'>7:00 - 20:00</span>
              </span>
            </div>
            <div className='col-lg-5 col-sm-5 col-12 text-right'>
              <a>Giới thiệu về Nhất Tín Logistics</a>
              <a className='border-left pl-2 ml-1'>Đăng nhập</a>
              <a className='border-left border-right pl-2 pr-2 ml-1 mr-2'>Đăng ký</a>
            </div>
          </div>
        </div>

      </div>
      <header className="w-100 wp-header text-white py-3 pt-lg-0 pb-lg-0">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-3 col-sm-4 col-4 align-self-center text-center">
              <Link href="/">
                <a>
                  <Image
                    alt="Next.js logo"
                    className='img-fulid logo'
                    src="https://ntlogistics.vn/images/img/logo.png"
                    width={165}
                    height={59}
                  />
                </a>
              </Link>
            </div>
            <div className="col-lg-6 col-sm-8 d-none d-lg-block align-self-end">
              <nav id='site-navigation' className='main-navigation'>
                <ul id='main-menu' className='menu justify-content-center'>
                  <li className='menu-item-has-children active'>
                    <a>Giao nhận hàng hóa</a>
                    <ul className='sub-menu'>
                      <li>
                        <Link href="/tra-cuu-van-don">
                          <a >
                            Tra cứu vận đơn
                          </a>
                        </Link>
                      </li>
                      <li>
                        <a >Tra cước và thời gian vận chuyển</a>
                      </li>
                      <li>
                        <a>Danh sách bưu cục</a>
                      </li>
                      <li>
                        <Link href="/quy-dinh-chinh-sach">
                          <a>Chính sách</a>
                        </Link>

                      </li>
                      <li>
                        <Link href="/bang-gia">
                          <a>Bảng giá</a>
                        </Link>

                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a>Dịch vụ</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/dich-vu/hoatoc"><a>Chuyển phát hỏa tốc</a></Link></li>
                      <li><a>Chuyển phát nhanh</a></li>
                      <li><a>Chuyển phát tiết kiệm</a></li>
                      <li><a>Chuyển phát đường bộ</a></li>
                      <li><a>Chuyển phát thu hộ (COD)</a></li>
                      <li><a>Thuê xe nguyên chuyến</a></li>
                      <li><a>Chuyển phát Quốc Tế</a></li>
                      <li><a>3PL & FulFillment</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a>Giới thiệu</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/gioi-thieu-chung"><a>Về Nhất Tín</a></Link></li>
                      <li><Link href="/gia-tri-cot-loi"><a>Giá trị cốt lõi</a></Link></li>
                      <li><a>Tin tức</a></li>
                    </ul>
                  </li>
                  <li>
                    <a>Báo chí</a>
                  </li>
                  <li>
                    <a>Liên hệ</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-sm-2 d-md-flex d-none align-items-center justify-content-center">
              <a className="li-right d-flex align-items-center">
                <Image
                  alt="Next.js logo"
                  className='pr-1'
                  src="https://ntlogistics.vn/images/img/icon_phone.png"
                  width={21}
                  height={21}
                />
                <span style={{ color: '#fdd800', fontWeight: '500' }}>1900 63 6688</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="layout"> */}
      <main className="mb-auto">{children}</main>

      <Footer />
      {/* </div> */}

    </div>
    // </body>
  )
}

export default LayoutWrapper
