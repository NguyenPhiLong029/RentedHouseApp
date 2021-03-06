import React from 'react';
import 'src/css/card.css';

function Card() {
  return (
    <>
      <div className="card mb-3 mt-4 shadow">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10037566-89fd180e29bcb224ebbb19d742f26b53.jpeg?tr=q-40,w-300,h-300&_src=imagekit"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h4 className="card-title">Queen central Apartment-Hotel</h4>
              <div className="card-text col d-flex justify-content-start">
                <p className="border border-info rounded-pill px-3 type">
                  <small className="text-info fw-bold">Căn hộ</small>
                </p>
                <div className="ms-2">
                  <svg
                    fill="#ffc412"
                    stroke="none"
                    viewBox="0 0 15 12"
                    className="_1Akal tvat-starIcon"
                    height="24"
                    stroke-linecap="round"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g transform="translate(-0.133333,-1)">
                      <path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="d-flex justify-content-start mt-2">
                <div className="">
                  <svg
                    fill="#8f8f8f"
                    stroke="none"
                    viewBox="0.093443203 0 11.2125 12"
                    height="24"
                    stroke-linecap="round"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g transform="translate(1.308119, 0.5)">
                      <path d="M1.51262719,7.70621739 L4.35698656,10.8804348 L7.19464281,7.7133913 L7.19339008,7.71338972 L7.19473219,7.7133913 C7.92626656,6.93382609 8.37895094,5.85486957 8.37895094,4.66304348 C8.37895094,2.2856087 6.57804469,0.358695652 4.35707594,0.358695652 C2.13566031,0.358695652 0.335200937,2.2856087 0.335200937,4.66304348 C0.335200937,5.85127862 0.785019976,6.92716844 1.51271674,7.7062175 Z"></path>
                      <ellipse
                        fill="#fff"
                        cx="4.35885934"
                        cy="4.665061"
                        rx="1.78932809"
                        ry="1.91499996"
                      ></ellipse>
                    </g>
                  </svg>
                </div>
                <p className="card-text fw-bold text-muted type">
                  Bến Nghé, Thành phố Hồ Chí Minh
                </p>
              </div>
              <div className="d-flex justify-content-start mt-2">
                <div className="me-1">
                  <svg
                    className="_1eqm7"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      fill="none"
                      stroke-width="0"
                      fill-rule="evenodd"
                      transform="translate(0 2)"
                    >
                      <path
                        fill="#1BA0E2"
                        d="M24,2.97387637 C24,2.97387637 17.9085447,9.9106988 16.4192056,13.1155965 C15.9686335,14.085179 16.4889188,14.9816473 16.7427565,15.3942092 C18.3609669,18.0242833 21.0000221,19 20.6401998,19 C20.2803774,19 19.0199836,17.8706415 15.757682,16.9460598 C12.4953805,16.021478 9.95011816,15.8799789 8.39303111,14.9939551 C7.04930089,14.2293371 7.15528107,13.3563338 6.58541702,12.8628725 C4.71336403,11.2418093 -0.0333974338,10.5614596 0.000177191119,10.5600858 C1.46864789,10.5 3.11012089,11.2220174 4.05513058,11.2220174 C5.00014028,11.2220174 5.50013658,10 6.84143921,10.7770155 C7.19322569,10.9808051 7.13077285,11.0542003 8.28272652,11.3787906 C9.43468019,11.7033809 10.0001034,10 9.1804948,7.79193814 C8.87698937,6.97428102 8.61532006,6.13212456 8.61532005,4.70396341 C8.61532003,2.74559775 11.9447535,0.656164411 13.9739579,0 C13.7615161,2.75099588 13.7501791,4.7651663 13.8587012,6.33769465 C18.4023804,3.51926226 24,2.97387637 24,2.97387637 Z"
                      ></path>
                      <path
                        fill="#0770CD"
                        d="M16.4191496,13.1155965 C16.1759759,13.6388762 16.2155876,14.1408598 16.3434811,14.5569716 C16.0904679,14.10614 15.8742984,13.6412562 15.7501625,13.3944116 C15.4666264,12.8305996 15.1716194,12.1600334 14.8958447,11.3813115 C14.4548033,9.9718172 14.0276967,8.76384991 13.8586263,6.33769465 C14.5112657,5.93286712 15.1856493,5.57493531 15.862066,5.25877949 C15.8113997,8.12264637 16.1497844,11.1052291 16.4529596,13.04385 C16.4414405,13.0679669 16.4301691,13.0918838 16.4191496,13.1155965 Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p className="card-text type">
                  <small className="text-info me-1 fw-bold">
                    Tiện lợi - 7.3
                  </small>
                  <small className="text-muted">(50)</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 border-start">
            <div className="card-body position-absolute bottom-0">
              <p className="card-text mb-0">
                <small className="text-primary fw-bold">
                  Thanh toán khi nhận phòng
                </small>
              </p>
              <p className="card-text mb-0">
                <small className="text-decoration-line-through">
                  736.667 VND
                </small>
              </p>
              <h5 className="card-title color-price fw-bold m-0 mb-0">
                552.500 VND
              </h5>
              <select
                className="form-select border-0 p-0"
                aria-label="Default select example"
              >
                <option selected>
                  <small>Giá cuối cùng</small>
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-4 shadow">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10037566-89fd180e29bcb224ebbb19d742f26b53.jpeg?tr=q-40,w-300,h-300&_src=imagekit"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h4 className="card-title">Queen central Apartment-Hotel</h4>
              <div className="card-text col d-flex justify-content-start">
                <p className="border border-info rounded-pill px-3 type">
                  <small className="text-info fw-bold">Căn hộ</small>
                </p>
                <div className="ms-2">
                  <svg
                    fill="#ffc412"
                    stroke="none"
                    viewBox="0 0 15 12"
                    className="_1Akal tvat-starIcon"
                    height="24"
                    stroke-linecap="round"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g transform="translate(-0.133333,-1)">
                      <path d="M7.62065263,11.1718057 L4.09190471,12.9302233 C3.59746349,13.1766093 3.27461245,12.9454386 3.37582363,12.3861087 L4.04155097,8.70705634 L1.20404148,6.08542085 C0.794471432,5.70701035 0.901391279,5.33979253 1.45149824,5.26402626 L5.40864616,4.71900805 L7.16232346,1.35099122 C7.41545167,0.864847003 7.824788,0.862800476 8.07898181,1.35099122 L9.83265911,4.71900805 L13.789807,5.26402626 C14.3360437,5.33925947 14.448558,5.70541735 14.0372638,6.08542085 L11.1997543,8.70705634 L11.8654816,12.3861087 C11.9644422,12.9330009 11.6363949,13.1728984 11.1494006,12.9302233 L7.62065263,11.1718057 Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="d-flex justify-content-start mt-2">
                <div className="">
                  <svg
                    fill="#8f8f8f"
                    stroke="none"
                    viewBox="0.093443203 0 11.2125 12"
                    height="24"
                    stroke-linecap="round"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g transform="translate(1.308119, 0.5)">
                      <path d="M1.51262719,7.70621739 L4.35698656,10.8804348 L7.19464281,7.7133913 L7.19339008,7.71338972 L7.19473219,7.7133913 C7.92626656,6.93382609 8.37895094,5.85486957 8.37895094,4.66304348 C8.37895094,2.2856087 6.57804469,0.358695652 4.35707594,0.358695652 C2.13566031,0.358695652 0.335200937,2.2856087 0.335200937,4.66304348 C0.335200937,5.85127862 0.785019976,6.92716844 1.51271674,7.7062175 Z"></path>
                      <ellipse
                        fill="#fff"
                        cx="4.35885934"
                        cy="4.665061"
                        rx="1.78932809"
                        ry="1.91499996"
                      ></ellipse>
                    </g>
                  </svg>
                </div>
                <p className="card-text fw-bold text-muted type">
                  Bến Nghé, Thành phố Hồ Chí Minh
                </p>
              </div>
              <div className="d-flex justify-content-start mt-2">
                <div className="me-1">
                  <svg
                    className="_1eqm7"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      fill="none"
                      stroke-width="0"
                      fill-rule="evenodd"
                      transform="translate(0 2)"
                    >
                      <path
                        fill="#1BA0E2"
                        d="M24,2.97387637 C24,2.97387637 17.9085447,9.9106988 16.4192056,13.1155965 C15.9686335,14.085179 16.4889188,14.9816473 16.7427565,15.3942092 C18.3609669,18.0242833 21.0000221,19 20.6401998,19 C20.2803774,19 19.0199836,17.8706415 15.757682,16.9460598 C12.4953805,16.021478 9.95011816,15.8799789 8.39303111,14.9939551 C7.04930089,14.2293371 7.15528107,13.3563338 6.58541702,12.8628725 C4.71336403,11.2418093 -0.0333974338,10.5614596 0.000177191119,10.5600858 C1.46864789,10.5 3.11012089,11.2220174 4.05513058,11.2220174 C5.00014028,11.2220174 5.50013658,10 6.84143921,10.7770155 C7.19322569,10.9808051 7.13077285,11.0542003 8.28272652,11.3787906 C9.43468019,11.7033809 10.0001034,10 9.1804948,7.79193814 C8.87698937,6.97428102 8.61532006,6.13212456 8.61532005,4.70396341 C8.61532003,2.74559775 11.9447535,0.656164411 13.9739579,0 C13.7615161,2.75099588 13.7501791,4.7651663 13.8587012,6.33769465 C18.4023804,3.51926226 24,2.97387637 24,2.97387637 Z"
                      ></path>
                      <path
                        fill="#0770CD"
                        d="M16.4191496,13.1155965 C16.1759759,13.6388762 16.2155876,14.1408598 16.3434811,14.5569716 C16.0904679,14.10614 15.8742984,13.6412562 15.7501625,13.3944116 C15.4666264,12.8305996 15.1716194,12.1600334 14.8958447,11.3813115 C14.4548033,9.9718172 14.0276967,8.76384991 13.8586263,6.33769465 C14.5112657,5.93286712 15.1856493,5.57493531 15.862066,5.25877949 C15.8113997,8.12264637 16.1497844,11.1052291 16.4529596,13.04385 C16.4414405,13.0679669 16.4301691,13.0918838 16.4191496,13.1155965 Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p className="card-text type">
                  <small className="text-info me-1 fw-bold">
                    Tiện lợi - 7.3
                  </small>
                  <small className="text-muted">(50)</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 border-start">
            <div className="card-body position-absolute bottom-0">
              <p className="card-text mb-0">
                <small className="text-primary fw-bold">
                  Thanh toán khi nhận phòng
                </small>
              </p>
              <p className="card-text mb-0">
                <small className="text-decoration-line-through">
                  736.667 VND
                </small>
              </p>
              <h5 className="card-title color-price fw-bold m-0 mb-0">
                552.500 VND
              </h5>
              <select
                className="form-select border-0 p-0"
                aria-label="Default select example"
              >
                <option selected>
                  <small>Giá cuối cùng</small>
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
