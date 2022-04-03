import React from 'react';

function Filter() {
  const consequence: string[] = [
    'Giá cao nhất',
    'Giá thấp nhất',
    'Điểm đánh giá',
    'Độ phổ biến'
  ];

  const convenient: string[] = [
    'Wifi',
    'Hồ bơi',
    'Chỗ đậu xe',
    'Nhà hàng',
    'Lễ tân 24h',
    'Thang máy',
    'Trung tâm thể dục',
    'Phòng họp',
    'Đưa đón sân bay'
  ];

  const accommodation: string[] = [
    'Tất cả',
    'Biệt thự',
    'Căn hộ',
    'Thanh toán khi nhận phòng',
    'Chọn nhiều nhất',
    'Ưu đãi đặc biệt'
  ];

  const stay: string[] = ['Biệt thự', 'Căn hộ'];
  return (
    <>
      <div className="p-3 px-4 shadow ">
        <div className="border-bottom pb-2">
          <div className="fw-bold">Sắp xếp kết quả</div>
          <div>Sắp xếp kết quả theo lựa chọn</div>
        </div>
        <div className="row row-cols-2 mt-3">
          {consequence.map((item) => {
            return (
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">{item}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
        <div className="pb-1">
          <div className="fw-bold">Tiện nghi</div>
        </div>
        <div className="mt-2">
          {convenient.map((item) => {
            return (
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexCheckDefault"
                  id="flexCheckDefault1"
                />
                <label className="form-check-label">{item}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
        <div className="pb-1">
          <div className="fw-bold">Ưu tiên nơi nghỉ</div>
        </div>
        <div className="mt-2">
          {accommodation.map((item) => {
            return (
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">{item}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
        <div className="pb-1">
          <div className="fw-bold">Loại hình lưu trú</div>
        </div>
        <div className="mt-2">
          {stay.map((item) => {
            return (
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="flexCheckDefault"
                  id="flexCheckDefault1"
                />
                <label className="form-check-label">{item}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Filter;
