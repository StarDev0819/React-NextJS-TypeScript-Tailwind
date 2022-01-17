import React from 'react';

// Import Custom Component
import Header from "~/components/features/Header";
import InfoBox from '../components/features/InfoBox';
import SearchBox from '~/components/features/SearchBox';

// Import Custom Data
import { InfoData } from '../mock-data/data';

export default function PageOne() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchBox />
        <div className="container mx-auto max-w-5xl px-5">
          <h3 className='text-black font-semibold mb-4 text-lg mt-7'>Recent Experiences</h3>
          {
            InfoData.map((item, index) => (
              <React.Fragment key={index}>
                <InfoBox data={item} />
              </React.Fragment>
            ))
          }

          <div className='heading flex items-center justify-between mb-4 mt-9'>
            <h3 className='text-black font-semibold text-lg'>Product Categories</h3>

            <div className='flex items-center'>
              <span className='mr-3 text-accent-200'>See All</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.705766 2.70577C0.315978 2.31598 0.318104 1.68189 0.70607 1.29392L0.793916 1.20608C1.18387 0.816121 1.8135 0.813508 2.20798 1.20799L7.29201 6.29201C7.68302 6.68302 7.68648 7.31351 7.29201 7.70799L2.20798 12.792C1.81697 13.183 1.18188 13.1819 0.793916 12.7939L0.70607 12.7061C0.316114 12.3161 0.312765 11.6872 0.705766 11.2942L4.99999 7L0.705766 2.70577Z" fill="#885FFF" />
              </svg>
            </div>
          </div>

          <div className="grid grid-rows-3 grid-cols-2 gap-4">
            <div className='col-span-1'>
              <div className="bg-blue-500 rounded-md p-3 shadow hover:shadow-lg transition-shadow">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#587BE0" />
                  <path d="M10 20L14 16L18 20L24 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 14H24V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="mt-8 flex items-center justify-between">
                  <h2 className="font-bold text-2xl text-text-300">Exchanges</h2>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#6F6E73" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className="bg-[#f5f5f5] rounded-md p-3 shadow hover:shadow-lg transition-shadow">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#414047" />
                  <path d="M14.875 20.125L12.278 22.722C11.989 23.011 11.6207 23.2078 11.2199 23.2875C10.819 23.3672 10.4035 23.3263 10.0259 23.1699C9.64827 23.0135 9.32552 22.7486 9.09841 22.4088C8.87131 22.069 8.75006 21.6695 8.75 21.2608V20.125L9.93738 14.189C10.096 13.3956 10.5246 12.6816 11.1502 12.1685C11.7759 11.6555 12.56 11.3751 13.3691 11.375H21.6309C22.44 11.3751 23.2241 11.6555 23.8498 12.1685C24.4754 12.6816 24.904 13.3956 25.0626 14.189L26.25 20.125V21.2599C26.2499 21.6686 26.1287 22.0681 25.9016 22.4079C25.6745 22.7477 25.3517 23.0126 24.9741 23.169C24.5965 23.3254 24.181 23.3663 23.7801 23.2866C23.3793 23.2069 23.011 23.0101 22.722 22.7211L20.125 20.125H14.875Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.875 11.375L15.75 13.125H19.25L20.125 11.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="mt-8 flex items-center justify-between">
                  <h2 className="font-bold text-2xl text-text-300">Games</h2>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#6F6E73" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className="bg-[#E2F9F3] rounded-md p-3 shadow hover:shadow-lg transition-shadow">
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18.481" cy="17.5" r="17.5" fill="#34AE91" />
                  <path d="M11.4608 15.61C11.496 15.1715 11.6951 14.7623 12.0184 14.4639C12.3418 14.1655 12.7656 13.9999 13.2056 14H23.7563C24.1963 13.9999 24.6201 14.1655 24.9435 14.4639C25.2668 14.7623 25.4659 15.1715 25.5011 15.61L26.2037 24.36C26.223 24.6008 26.1923 24.843 26.1134 25.0713C26.0346 25.2996 25.9093 25.5092 25.7455 25.6867C25.5817 25.8643 25.3829 26.006 25.1616 26.1029C24.9403 26.1998 24.7014 26.2499 24.4598 26.25H12.5021C12.2605 26.2499 12.0216 26.1998 11.8003 26.1029C11.5791 26.006 11.3803 25.8643 11.2164 25.6867C11.0526 25.5092 10.9273 25.2996 10.8485 25.0713C10.7696 24.843 10.7389 24.6008 10.7582 24.36L11.4608 15.61V15.61Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.9809 16.625V12.25C21.9809 11.3217 21.6122 10.4315 20.9558 9.77513C20.2994 9.11875 19.4092 8.75 18.4809 8.75C17.5527 8.75 16.6625 9.11875 16.0061 9.77513C15.3497 10.4315 14.9809 11.3217 14.9809 12.25V16.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="mt-8 flex items-center justify-between">
                  <h2 className="font-bold text-2xl text-text-300">MarketPlaces</h2>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#6F6E73" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className="bg-[#FFF3EC] rounded-md p-3 shadow hover:shadow-lg transition-shadow">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#F98F54" />
                  <path d="M25.375 21V14C25.3747 13.6931 25.2937 13.3917 25.1401 13.126C24.9865 12.8603 24.7658 12.6397 24.5 12.4862L18.375 8.98625C18.109 8.83265 17.8072 8.75179 17.5 8.75179C17.1928 8.75179 16.891 8.83265 16.625 8.98625L10.5 12.4862C10.2342 12.6397 10.0135 12.8603 9.8599 13.126C9.70632 13.3917 9.62531 13.6931 9.625 14V21C9.62531 21.3069 9.70632 21.6083 9.8599 21.874C10.0135 22.1397 10.2342 22.3603 10.5 22.5137L16.625 26.0137C16.891 26.1673 17.1928 26.2482 17.5 26.2482C17.8072 26.2482 18.109 26.1673 18.375 26.0137L24.5 22.5137C24.7658 22.3603 24.9865 22.1397 25.1401 21.874C25.2937 21.6083 25.3747 21.3069 25.375 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.86124 13.09L17.5 17.5087L25.1387 13.09" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 26.32V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="mt-8 flex items-center justify-between">
                  <h2 className="font-bold text-2xl text-text-300">Defi</h2>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#6F6E73" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className="bg-[#EBF5FF] rounded-md p-3 shadow hover:shadow-lg transition-shadow">
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18.481" cy="17.5" r="17.5" fill="#54AAF9" />
                  <g clipPath="url(#clip0_2_2487)">
                    <path d="M9.73096 14L10.872 14.9126C11.2695 15.2306 11.7315 15.458 12.2259 15.579C12.7203 15.7 13.2352 15.7117 13.7346 15.6134C14.234 15.515 14.7059 15.3089 15.1175 15.0094C15.5291 14.7099 15.8704 14.3242 16.1176 13.8792L18.481 9.625L20.8443 13.8792C21.0916 14.3241 21.433 14.7097 21.8446 15.0091C22.2562 15.3085 22.7281 15.5146 23.2275 15.6129C23.7269 15.7112 24.2418 15.6994 24.7361 15.5783C25.2305 15.4572 25.6925 15.2297 26.09 14.9117L27.231 14L25.6962 21.6738C25.6292 22.0086 25.4866 22.3238 25.2793 22.5952C25.072 22.8667 24.8055 23.0872 24.5001 23.24V23.24C22.6312 24.1745 20.5704 24.661 18.481 24.661C16.3915 24.661 14.3307 24.1745 12.4618 23.24V23.24C12.1564 23.0872 11.8899 22.8667 11.6826 22.5952C11.4753 22.3238 11.3327 22.0086 11.2657 21.6738L9.73096 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.981 20.125C17.2525 21.2914 19.7095 21.2914 21.981 20.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_2487">
                      <rect width="21" height="21" fill="white" transform="translate(7.98096 7)" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="mt-8 flex items-center justify-between">
                  <h2 className="font-bold text-2xl text-text-300">Collectables</h2>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#6F6E73" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className="bg-[#F0EBFF] rounded-md p-3 shadow hover:shadow-lg transition-shadow">
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18.481" cy="17.5" r="17.5" fill="#885FFF" />
                  <g clipPath="url(#clip0_2_2497)">
                    <path d="M12.7357 16.1132C15.1428 16.1132 17.0942 14.1618 17.0942 11.7547C17.0942 9.34759 15.1428 7.39623 12.7357 7.39623C10.3285 7.39623 8.37718 9.34759 8.37718 11.7547C8.37718 14.1618 10.3285 16.1132 12.7357 16.1132Z" fill="white" />
                  </g>
                  <g clipPath="url(#clip1_2_2497)">
                    <path d="M23.5467 8.52863C23.8546 8.01592 24.5979 8.01592 24.9058 8.52863L28.261 14.1206C28.578 14.6487 28.1976 15.3207 27.5815 15.3207H20.871C20.2553 15.3207 19.8749 14.6487 20.1915 14.1206L23.5467 8.52863Z" fill="white" />
                  </g>
                  <g clipPath="url(#clip2_2_2497)">
                    <path d="M27.3961 19.283H21.0564C20.6188 19.283 20.264 19.6378 20.264 20.0755V26.4151C20.264 26.8528 20.6188 27.2075 21.0564 27.2075H27.3961C27.8337 27.2075 28.1885 26.8528 28.1885 26.4151V20.0755C28.1885 19.6378 27.8337 19.283 27.3961 19.283Z" fill="white" />
                    <g clipPath="url(#clip3_2_2497)">
                      <path d="M23.6754 19.5112C23.8215 19.3652 24.0196 19.2831 24.2262 19.2831C24.4327 19.2831 24.6308 19.3652 24.7769 19.5112L27.9602 22.6945C28.1062 22.8406 28.1883 23.0387 28.1883 23.2453C28.1883 23.4518 28.1062 23.6499 27.9602 23.796L24.7769 26.9793C24.6308 27.1254 24.4327 27.2074 24.2262 27.2074C24.0196 27.2074 23.8215 27.1254 23.6754 26.9793L20.4921 23.796C20.3461 23.6499 20.264 23.4518 20.264 23.2453C20.264 23.0387 20.3461 22.8406 20.4921 22.6945L23.6754 19.5112Z" fill="white" />
                    </g>
                  </g>
                  <path d="M12.1848 19.5112C12.3309 19.3652 12.529 19.2831 12.7356 19.2831C12.9422 19.2831 13.1403 19.3652 13.2863 19.5112L16.4696 22.6945C16.6157 22.8406 16.6977 23.0387 16.6977 23.2453C16.6977 23.4518 16.6157 23.6499 16.4696 23.796L13.2863 26.9793C13.1403 27.1254 12.9422 27.2074 12.7356 27.2074C12.529 27.2074 12.3309 27.1254 12.1848 26.9793L9.00155 23.796C8.8555 23.6499 8.77346 23.4518 8.77346 23.2453C8.77346 23.0387 8.8555 22.8406 9.00155 22.6945L12.1848 19.5112Z" fill="white" />
                  <defs>
                    <clipPath id="clip0_2_2497">
                      <rect width="9.50943" height="9.50943" fill="white" transform="translate(7.98096 7)" />
                    </clipPath>
                    <clipPath id="clip1_2_2497">
                      <rect width="9.50943" height="9.50943" fill="white" transform="translate(19.4715 7)" />
                    </clipPath>
                    <clipPath id="clip2_2_2497">
                      <rect width="9.50943" height="9.50943" fill="white" transform="translate(19.4715 18.4906)" />
                    </clipPath>
                    <clipPath id="clip3_2_2497">
                      <rect width="9.50943" height="9.50943" fill="white" transform="translate(19.4715 18.4906)" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="mt-8 flex items-center justify-between">
                  <h2 className="font-bold text-2xl text-text-300">Utilies</h2>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#6F6E73" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className='heading flex items-center justify-between mb-4 mt-9'>
            <h3 className='text-black font-semibold text-lg'>Trending Categories</h3>

            <div className='flex items-center'>
              <span className='mr-3 text-accent-200'>See All</span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.705766 2.70577C0.315978 2.31598 0.318104 1.68189 0.70607 1.29392L0.793916 1.20608C1.18387 0.816121 1.8135 0.813508 2.20798 1.20799L7.29201 6.29201C7.68302 6.68302 7.68648 7.31351 7.29201 7.70799L2.20798 12.792C1.81697 13.183 1.18188 13.1819 0.793916 12.7939L0.70607 12.7061C0.316114 12.3161 0.312765 11.6872 0.705766 11.2942L4.99999 7L0.705766 2.70577Z" fill="#885FFF" />
              </svg>
            </div>
          </div>

          {
            InfoData.map((item, index) => (
              <React.Fragment key={index}>
                <InfoBox data={item} />
              </React.Fragment>
            ))
          }
        </div>
      </main>
    </React.Fragment>
  );
}
