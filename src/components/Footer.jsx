
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-700">
      <div className="w-10/12 mx-auto">
        {/* 로고와 정보 */}
        <div className="mb-6 md:flex md:justify-between md:items-center">
          <div>
            <h2 className="text-2xl font-black text-[#3B79FF] mb-2">
              LIKELION SKU
            </h2>
            <p className="text-sm font-light">
              주소 : 경기도 안양시 만안구 성결대학교 53
            </p>
            <div className="flex items-center mt-2">
              <img
                src="/images/footer/email.png"
                alt="Email"
                className="h-5 w-5 mr-2"
              />
              <p className="text-sm font-light">
                문의처 sungkyul.univ@likelion.org
              </p>
            </div>
          </div>
        </div>

        {/* SNS 아이콘 + 저작권 */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/likelion_sku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/footer/insta.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
            <a
              href="http://pf.kakao.com/_vxilaxj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/footer/kakao.png"
                alt="KakaoTalk"
                className="h-6 w-6"
              />
            </a>
          </div>
          <p className="text-sm font-semibold">@2025_LIKELIONSKU 13th</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
