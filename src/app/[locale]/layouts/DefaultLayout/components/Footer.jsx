import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">DỊCH VỤ KHÁCH HÀNG</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Trung Tâm Trợ Giúp Shopee</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Shopee Blog</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Shopee Mall</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Hướng Dẫn Mua Hàng/Đặt Hàng</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Hướng Dẫn Bán Hàng</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">SHOPEE VIỆT NAM</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Về Shopee</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tuyển Dụng</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Điều Khoản Sử Dụng</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Chính Sách Bảo Mật</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Shopee Mall</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">THANH TOÁN</h3>
        <div className="flex flex-wrap space-x-2">
          <img src="/visa-icon.png" alt="Visa" className="w-10 h-10" />
          <img src="/mastercard-icon.png" alt="Mastercard" className="w-10 h-10" />
          <img src="/paypal-icon.png" alt="PayPal" className="w-10 h-10" />
          {/* Add more payment icons as needed */}
        </div>
      </div>

     
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h3 className="text-lg font-semibold mb-4">THEO DÕI SHOPEE</h3>
        <div className="space-y-2">
          <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
          
        </div>
      </div>
    </div>

    <div className="mt-8 text-center text-gray-500">
      <p>&copy; 2024 Shopee. Tất cả các quyền được bảo lưu.</p>
      <p>Quốc gia & Khu vực: Singapore, Indonesia, Thái Lan, Malaysia, Việt Nam, Philippines, Brazil, Mexico, Colombia, Chile, Đài Loan</p>
    </div>
  </footer>
  )
}

export default Footer
