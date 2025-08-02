// 'use client';
// import { useState } from 'react';
// import styles from './CenteredDropdown.module.css';

// export default function CenteredDropdown() {
//     const [activeMenu, setActiveMenu] = useState<string | null>(null);

//     const openMenu = (id: string) => setActiveMenu(id);
//     const closeMenu = () => setActiveMenu(null);

//     return (
//         // <div className='flex items-center justify-center'>
//         //     <div
//         //         className={styles.dropdownArea}
//         //         onMouseLeave={closeMenu}
//         //     >
//         //         <div className={styles.header}>
//         //             <div onMouseEnter={() => openMenu('menu1')} className={styles.btn}>صفحه ۱</div>
//         //             <div onMouseEnter={() => openMenu('menu2')} className={styles.btn}>صفحه ۲</div>
//         //             <div onMouseEnter={() => openMenu('menu3')} className={styles.btn}>صفحه ۳</div>
//         //         </div>

//         //         {/* یه div کمکی شفاف بین دکمه و dropdown */}
//         //         {activeMenu && <div className={styles.spacer}></div>}

//         //         {activeMenu === 'menu1' && (
//         //             <div className={styles.centerMenu}>
//         //                 <a href="#">تست ۱</a>
//         //                 <a href="#">تست ۲</a>
//         //             </div>
//         //         )}

//         //         {activeMenu === 'menu2' && (
//         //             <div className={styles.centerMenu}>
//         //                 <a href="#">منو ۲ - اول</a>
//         //                 <a href="#">منو ۲ - دوم</a>
//         //                 <a href="#">منو ۲ - سوم</a>
//         //             </div>
//         //         )}

//         //         {activeMenu === 'menu3' && (
//         //             <div className={styles.centerMenu}>
//         //                 <a href="#">کوتاه</a>
//         //             </div>
//         //         )}
//         //     </div>
//         // </div>


//     );
// }

///////////////////////////////////////////////////////////////////////////////////
// 'use client'
// import React from 'react'
// import { useEffect, useState, useRef } from 'react'

// export default function Home() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null)
//   const [menuContent, setMenuContent] = useState<React.ReactNode>(null)
//   const [fadeKey, setFadeKey] = useState(0)
//   const closeTimeout = useRef<NodeJS.Timeout | null>(null)

//   const openMenu = (menu: string) => {
//     if (closeTimeout.current) clearTimeout(closeTimeout.current)
//     setActiveMenu(menu)
//   }

//   const delayCloseMenu = () => {
//     closeTimeout.current = setTimeout(() => {
//       setActiveMenu(null)
//     }, 200)
//   }

//   const cancelClose = () => {
//     if (closeTimeout.current) clearTimeout(closeTimeout.current)
//   }

//   useEffect(() => {
//     if (!activeMenu) {
//       setMenuContent(null)
//       return
//     }

//     const content = {
//       products: (
//         <>
//           <h2 className="text-xl font-bold mb-3">محصولات</h2>
//           <ul className="list-disc pl-6 space-y-1 text-gray-700">
//             <li>لپ‌تاپ</li>
//             <li>موبایل</li>
//             <li>هدفون</li>
//           </ul>
//         </>
//       ),
//       services: (
//         <>
//           <h2 className="text-xl font-bold mb-3">خدمات</h2>
//           <div className="grid grid-cols-2 gap-4 text-center">
//             <div className="p-4 bg-gray-100 rounded">پشتیبانی</div>
//             <div className="p-4 bg-gray-100 rounded">نصب رایگان</div>
//           </div>
//         </>
//       ),
//       about: (
//         <>
//           <h2 className="text-xl font-bold mb-3">درباره ما</h2>
//           <p className="text-sm text-gray-700 mb-2">
//             ما یه تیم خفن هستیم که عاشق تکنولوژی‌ایم.
//           </p>
//           <img
//             src="https://placekitten.com/400/200"
//             alt="team"
//             className="rounded shadow"
//           />
//         </>
//       ),
//     }

//     setFadeKey((prev) => prev + 1) // تغییر key برای بازسازی با انیمیشن
//     setMenuContent(content[activeMenu as keyof typeof content])
//   }, [activeMenu])

//   const isMenuOpen = (menu: string) => activeMenu === menu

//   return (
//     <div className="relative min-h-screen">
//       {/* فقط محدوده منو */}
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
//         onMouseLeave={delayCloseMenu}
//         onMouseEnter={cancelClose}
//       >
//         {/* ناوبری */}
//         <nav className="flex items-center space-x-6 p-4 bg-white shadow justify-center">
//           <div
//             onMouseEnter={() => openMenu('products')}
//             className="cursor-pointer flex items-center space-x-1"
//           >
//             <span>محصولات</span>
//             <span
//               className={`transition-transform duration-300 ${
//                 isMenuOpen('products') ? 'rotate-180' : ''
//               }`}
//             >
//               ▼
//             </span>
//           </div>

//           <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
//             ورود
//           </button>

//           <div
//             onMouseEnter={() => openMenu('services')}
//             className="cursor-pointer flex items-center space-x-1"
//           >
//             <span>خدمات</span>
//             <span
//               className={`transition-transform duration-300 ${
//                 isMenuOpen('services') ? 'rotate-180' : ''
//               }`}
//             >
//               ▼
//             </span>
//           </div>

//           <div
//             onMouseEnter={() => openMenu('about')}
//             className="cursor-pointer flex items-center space-x-1"
//           >
//             <span>درباره ما</span>
//             <span
//               className={`transition-transform duration-300 ${
//                 isMenuOpen('about') ? 'rotate-180' : ''
//               }`}
//             >
//               ▼
//             </span>
//           </div>
//         </nav>

//         {/* پنجره dropdown */}
//         <div className={`transition-all duration-300 ease-out w-[450px] bg-white shadow-lg rounded-lg p-6
//           ${activeMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
//           `}
//         >
//           {/* انیمیشن سوییچ محتوا */}
//           <div
//             key={fadeKey}
//             className="transition-all duration-300 ease-in-out opacity-0 animate-fade-in translate-y-2"
//           >
//             {menuContent}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

///////////////////////////////////////////////////////////

'use client'

import { useState, useRef } from 'react'

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const openMenu = (menu: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setActiveMenu(menu)
  }

  const delayCloseMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  const cancelClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
  }

  const isMenuOpen = (menu: string) => activeMenu === menu

  return (
    <div className="relative min-h-screen">
      {/* فقط به اندازه nav + dropdown، نه کل صفحه */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        onMouseLeave={delayCloseMenu}
        onMouseEnter={cancelClose}
      >
        {/* نوار ناوبری */}
        <nav className="flex items-center space-x-6 p-4 bg-white shadow justify-center">
          <div
            onMouseEnter={() => openMenu('products')}
            className="cursor-pointer flex items-center space-x-1"
          >
            <span>محصولات</span>
            <span
              className={`transition-transform duration-300 ${isMenuOpen('products') ? 'rotate-180' : ''
                }`}
            >
              ▼
            </span>
          </div>

          <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            ورود
          </button>

          <div
            onMouseEnter={() => openMenu('services')}
            className="cursor-pointer flex items-center space-x-1"
          >
            <span>خدمات</span>
            <span
              className={`transition-transform duration-300 ${isMenuOpen('services') ? 'rotate-180' : ''
                }`}
            >
              ▼
            </span>
          </div>
        </nav>

        {/* پنجره منو */}
        <div
          className={`transition-all duration-300 ease-out w-[450px] bg-white shadow-lg rounded-lg p-6
          ${activeMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-120 pointer-events-none'}
          `}
        >
          {activeMenu === 'products' && (
            <>
              <h2 className="text-xl font-bold mb-3">محصولات</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>لپ‌تاپ</li>
                <li>موبایل</li>
                <li>هدفون</li>
              </ul>
            </>
          )}

          {activeMenu === 'services' && (
            <>
              <h2 className="text-xl font-bold mb-3">خدمات</h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-100 rounded">پشتیبانی ۲۴ ساعته</div>
                <div className="p-4 bg-gray-100 rounded">نصب رایگان</div>
              </div>
            </>
          )}
        </div>
      </div>


      <a>
        <div className="relative cursor-default w-[120px] h-[50px]"><svg className="w-full h-full" width="120" height="50" viewBox="0 0 120 50"><title></title><desc></desc><defs><clipPath id="recharts7-clip"><rect x="5" y="5" height="40" width="110"></rect></clipPath></defs><g><path stroke="#1e8723" stroke-width="1" width="110" height="40" fill="none" d="M5,45C5.295,41.098,5.59,37.196,5.886,35.881C6.181,34.565,6.476,33.908,6.771,33.908C7.067,33.908,7.362,41.235,7.657,41.235C7.952,41.235,8.247,28.331,8.543,28.331C8.838,28.331,9.133,32.405,9.428,32.405C9.724,32.405,10.019,29.713,10.314,29.713C10.609,29.713,10.904,31.161,11.2,32.218C11.495,33.275,11.79,36.056,12.085,36.056C12.381,36.056,12.676,29.692,12.971,27.01C13.266,24.327,13.561,19.96,13.857,19.96C14.152,19.96,14.447,26.805,14.742,26.805C15.038,26.805,15.333,25.997,15.628,25.707C15.923,25.417,16.218,25.064,16.514,25.064C16.809,25.064,17.104,27.667,17.399,27.667C17.695,27.667,17.99,22.72,18.285,22.72C18.58,22.72,18.875,27.511,19.171,27.511C19.466,27.511,19.761,18.639,20.056,15.334C20.352,12.029,20.647,7.681,20.942,7.681C21.237,7.681,21.532,13.247,21.828,13.926C22.123,14.604,22.418,14.943,22.713,14.943C23.009,14.943,23.304,13.726,23.599,13.726C23.894,13.726,24.189,14.798,24.485,14.798C24.78,14.798,25.075,13.622,25.37,12.955C25.666,12.288,25.961,10.797,26.256,10.797C26.551,10.797,26.846,10.886,27.142,11.064C27.437,11.241,27.732,12.347,28.027,13.02C28.323,13.694,28.618,14.172,28.913,15.106C29.208,16.04,29.503,18.625,29.799,18.625C30.094,18.625,30.389,17.001,30.684,16.862C30.98,16.722,31.275,16.785,31.57,16.653C31.865,16.52,32.16,16.067,32.456,16.067C32.751,16.067,33.046,17.42,33.341,17.42C33.637,17.42,33.932,17.278,34.227,17.278C34.522,17.278,34.817,19.331,35.113,19.857C35.408,20.384,35.703,20.269,35.998,20.647C36.294,21.025,36.589,21.73,36.884,22.128C37.179,22.527,37.475,23.037,37.77,23.037C38.065,23.037,38.36,17.848,38.655,17.848C38.951,17.848,39.246,19.3,39.541,19.436C39.836,19.572,40.132,19.64,40.427,19.64C40.722,19.64,41.017,19.038,41.312,19.038C41.608,19.038,41.903,20.804,42.198,21.34C42.493,21.877,42.789,22.257,43.084,22.257C43.379,22.257,43.674,20.593,43.969,19.527C44.265,18.461,44.56,15.86,44.855,15.86C45.15,15.86,45.446,17.509,45.741,17.509C46.036,17.509,46.331,17.17,46.626,16.897C46.922,16.624,47.217,16.555,47.512,15.871C47.807,15.186,48.103,5,48.398,5C48.693,5,48.988,13.687,49.283,15.264C49.579,16.841,49.874,17.63,50.169,17.63C50.464,17.63,50.76,7.639,51.055,7.639C51.35,7.639,51.645,9.95,51.94,11.521C52.236,13.092,52.531,14.77,52.826,17.065C53.121,19.359,53.417,24.254,53.712,25.289C54.007,26.323,54.302,26.84,54.597,26.84C54.893,26.84,55.188,22.726,55.483,22.726C55.778,22.726,56.074,23.72,56.369,24.235C56.664,24.75,56.959,25.816,57.254,25.816C57.55,25.816,57.845,25.347,58.14,25.347C58.435,25.347,58.731,26.12,59.026,26.12C59.321,26.12,59.616,26.056,59.911,26.002C60.207,25.948,60.502,25.796,60.797,25.796C61.092,25.796,61.388,25.904,61.683,26.005C61.978,26.107,62.273,26.247,62.568,26.405C62.864,26.563,63.159,26.918,63.454,26.952C63.749,26.987,64.045,27.004,64.34,27.004C64.635,27.004,64.93,24.026,65.225,24.026C65.521,24.026,65.816,26.506,66.111,26.705C66.406,26.905,66.702,26.996,66.997,27.005C67.292,27.014,67.587,27.018,67.882,27.018C68.178,27.018,68.473,26.955,68.768,26.955C69.063,26.955,69.359,27.022,69.654,27.022C69.949,27.022,70.244,25.048,70.539,24.339C70.835,23.63,71.13,22.768,71.425,22.768C71.72,22.768,72.016,24.507,72.311,24.507C72.606,24.507,72.901,24.412,73.196,24.223C73.492,24.034,73.787,22.739,74.082,22.739C74.377,22.739,74.673,24.467,74.968,24.467C75.263,24.467,75.558,24.367,75.853,24.167C76.149,23.967,76.444,22.686,76.739,22.686C77.034,22.686,77.33,24.414,77.625,24.414C77.92,24.414,78.215,24.336,78.51,24.181C78.806,24.026,79.101,22.706,79.396,22.706C79.691,22.706,79.987,24.372,80.282,24.372C80.577,24.372,80.872,24.334,81.167,24.258C81.463,24.182,81.758,22.674,82.053,22.674C82.348,22.674,82.644,24.376,82.939,24.376C83.234,24.376,83.529,24.276,83.824,24.075C84.12,23.875,84.415,22.757,84.71,22.757C85.005,22.757,85.301,24.319,85.596,24.319C85.891,24.319,86.186,24.301,86.481,24.264C86.777,24.228,87.072,22.665,87.367,22.665C87.662,22.665,87.958,24.412,88.253,24.412C88.548,24.412,88.843,24.333,89.138,24.177C89.434,24.021,89.729,22.61,90.024,22.61C90.319,22.61,90.615,24.351,90.91,24.351C91.205,24.351,91.5,24.295,91.795,24.182C92.091,24.07,92.386,22.61,92.681,22.61C92.976,22.61,93.272,24.401,93.567,24.401C93.862,24.401,94.157,24.34,94.452,24.219C94.748,24.098,95.043,22.77,95.338,22.77C95.633,22.77,95.929,24.507,96.224,24.507C96.519,24.507,96.814,24.4,97.11,24.188C97.405,23.975,97.7,22.771,97.995,22.771C98.29,22.771,98.586,24.447,98.881,24.447C99.176,24.447,99.471,24.386,99.767,24.264C100.062,24.143,100.357,22.657,100.652,22.657C100.947,22.657,101.243,24.365,101.538,24.365C101.833,24.365,102.128,24.345,102.424,24.305C102.719,24.265,103.014,22.572,103.309,22.572C103.604,22.572,103.9,24.443,104.195,24.443C104.49,24.443,104.785,24.332,105.081,24.111C105.376,23.89,105.671,22.807,105.966,22.807C106.261,22.807,106.557,24.399,106.852,24.399C107.147,24.399,107.442,24.328,107.738,24.186C108.033,24.045,108.328,22.636,108.623,22.636C108.918,22.636,109.214,24.379,109.509,24.379C109.804,24.379,110.099,24.298,110.395,24.298C110.69,24.298,110.985,24.582,111.28,24.582C111.575,24.582,111.871,24.306,112.166,24.226C112.461,24.146,112.756,24.185,113.052,24.103C113.347,24.021,113.642,22.644,113.937,22.644C114.232,22.644,114.528,24.5,114.823,24.5C114.852,24.5,114.882,24.461,114.911,24.461C114.941,24.461,114.97,24.461,115,24.461"></path><g></g></g></svg></div>
      </a>

      
    </div>
  )
}