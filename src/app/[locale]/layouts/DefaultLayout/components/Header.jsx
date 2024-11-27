import React from "react";

function Header() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 py-2">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center text-white text-sm px-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              Kênh Người Bán
            </a>
            <div className="flex space-x-2">
              <a href="#" className="hover:underline">
                Kết nối
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              Thông Báo
            </a>
            <a href="#" className="hover:underline">
              Hỗ Trợ
            </a>
            <a href="#" className="hover:underline">
              Tiếng Việt
            </a>
            <a href="#" className="hover:underline">
              Đăng kí / Đăng nhập
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://vinalink.edu.vn/uploaded/logo/4.png"
              alt="Shopee Logo"
              className="h-8"
            />
            <span className="text-white text-xl font-bold">Shopee</span>
          </div>

          <div >
          <div className="flex justify-between w-full m-4">
            <div className="relative max-w-[700px] w-full">
              <input
                type="text"
                placeholder="Tìm sản phẩm, thương hiệu, và tên shop"
                className="w-full py-2 px-4  border border-gray-300 focus:outline-none"
              />
              <button className="absolute top-0 right-[-7px] h-full px-4 bg-orange-500 text-white  hover:bg-orange-600">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="relative flex items-center space-x-4">
              <a href="#" className=" text-white">
                <i className="fas fa-shopping-cart text-3xl"></i>
                <span className="absolute top-0 right-0 text-red-500 bg-red-100 text-xl rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center space-x-4 text-white text-sm px-4 py-2">
          <a href="#" className="hover:underline">
            Giày Chạy Bộ Nam
          </a>
          <a href="#" className="hover:underline">
            Quần Ống Đứng Nam
          </a>
          <a href="#" className="hover:underline">
            Áo Thun Nam
          </a>
          <a href="#" className="hover:underline">
            Giày Chạy Bộ Nam
          </a>
          <a href="#" className="hover:underline">
            Quần Ống Đứng Nam
          </a>
          <a href="#" className="hover:underline">
            Áo Thun Nam
          </a>
          <a href="#" className="hover:underline">
            Giày Chạy Bộ Nam
          </a>
          <a href="#" className="hover:underline">
            Quần Ống Đứng Nam
          </a>
          <a href="#" className="hover:underline">
            Áo Thun Nam
          </a>
        </div>
          </div>
         
        </div>

       
      </div>
    </div>
  );
}

export default Header;
