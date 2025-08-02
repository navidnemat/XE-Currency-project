'use client'

import { FaCoins } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { PiChartLineUpFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowRightLeft } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import React, { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import Accordion from "./components/accordion";
// declare module 'react-toggle'
// import Toggle from 'react-toggle'

export default function Home() {


  return (
    <div className="overflow-hidden">
      <div className="bg-white">
        <div className="relative bg-gradient-to-r from-[#000733] to-[#000c50]">
          <div className="m-auto grid max-w-screen-[1280px] gap-6 px-4 md:gap-12 md:px-10">
            <div className="z-10 flex flex-col gap-8 mt-3">
              <div className="flex flex-col gap-3 md:p-6 text-center">
                <h1 className="text-center text-white font-bold text-lg sm:text-xl lg:text-2xl" style={{ fontFamily: 'vazirLight' }}>تبدیل ارز جهانی و انتقال وجه</h1>
                <p className="text-base leading-[1.8rem] md:text-xl text-gray-100">پیشرو در جهان در زمینه اطلاعات ارزی و نقل و انتقالات جهانی به مدت بیش از 30 سال</p>
              </div>
              <div className="flex flex-col gap-6 p-6 rounded-3xl bg-white shadow-xl md:p-8 ">
                <div className="grid grid-cols-4 gap-1 rounded-full border border-solid border-gray-300 p-2 md:gap-2">
                  <a href="" className="bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 rounded-full h-9 flex items-center justify-center gap-2">
                    <span className="md:text-lg text-xs">تبدیل کردن</span>
                    <FaCoins className="hidden sm:flex" />
                  </a>
                  <a href="" className="bg-transparent text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full h-9 flex items-center justify-center gap-2">
                    <span className="md:text-lg text-xs">ارسال</span>
                    <RiTelegram2Fill className="hidden sm:flex" />
                  </a>
                  <a href="" className="bg-transparent text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full h-9 flex items-center justify-center gap-2">
                    <span className="md:text-lg text-xs">نمودارها</span>
                    <PiChartLineUpFill className="hidden sm:flex" />
                  </a>
                  <a href="" className="bg-transparent text-gray-500 hover:bg-gray-100 transition-colors duration-200 rounded-full h-9 flex items-center justify-center gap-2">
                    <span className="md:text-lg text-xs">هشدارها</span>
                    <FaBell className="hidden sm:flex" />
                  </a>
                </div>
                <div className="relative grid grid-cols-1 gap-2 grid-rows-1 md:grid-cols-[33%_1fr] md:grid-rows-none">
                  <div className="h-[84px] rounded-lg border border-solid border-gray-300 flex flex-col justify-center px-4">
                    <span className="text-gray-500">مبلغ</span>
                    <span className="font-bold text-xl">تومان 100,000</span>
                  </div>
                  <div className="flex flex-col md:flex-row justify-evenly gap-2">
                    <div className="relative flex h-[84px] w-full select-none flex-col justify-center rounded-lg border border-solid border-gray-300 px-4">
                      <span className="text-gray-500">از</span>
                      <div className="relative flex items-center justify-between">
                        <div className="relative flex items-center">
                          <div className="relative mr-2 border border-[#00113326] !h-5 !w-5 overflow-hidden rounded-full border-none [&amp;_img]:!scale-150"><img alt="usd" loading="lazy" decoding="async" data-nimg="fill" style={{ position: 'relative', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} src="https://www.xe.com/svgs/flags/usd.static.svg" /></div>
                          <span style={{ fontFamily: 'monospace' }} className="ms-4 text-gray-800 text-xl font-bold">USD</span>
                          <span className="mr-2 text-xl text-gray-600 truncate">- دلار آمریکا</span>
                        </div>
                        <IoIosArrowDown className="text-gray-600 font-bold text-xl" />
                      </div>
                    </div>
                    {/* <div className="absolute left-1/2 top-1/2 z-20 m-auto flex -translate-x-1/2 -translate-y-1/2 transform">
                      <button className="inline-flex rounded-full border border-solid border-gray-300 bg-white p-4 "><LuArrowRightLeft className="text-gray-600 font-bold text-xl"/></button>
                    </div> */}
                    <div className="relative flex h-[84px] w-full select-none flex-col justify-center rounded-lg border border-solid border-gray-300 px-4">
                      <span className="text-gray-500">به</span>
                      <div className="relative flex items-center justify-between">
                        <div className="relative flex items-center">
                          <div className="relative mr-2 border border-[#00113326] !h-5 !w-5 overflow-hidden rounded-full border-none [&amp;_img]:!scale-150"><img alt="usd" loading="lazy" decoding="async" data-nimg="fill" style={{ position: 'relative', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} src="https://www.xe.com/svgs/flags/eur.static.svg" /></div>
                          <span style={{ fontFamily: 'monospace' }} className="ms-4 text-gray-800 text-xl font-bold">EUR</span>
                          <span className="mr-2 text-xl text-gray-600 truncate">- یورو</span>
                        </div>
                        <IoIosArrowDown className="text-gray-600 font-bold text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-6 md:flex-row justify-end">
                  <button className="order-1 h-fit rounded-lg bg-blue-500 px-6 py-3 text-white md:w-[234px] w-full hover:bg-blue-400 cursor-pointer">تبدیل کردن</button>
                </div>
              </div>
              <div className="px-6 md:px-10">
                <p className="text-center text-xs text-gray-600 ">
                  <IoInformationCircleOutline className="me-1 text-lg  inline-block" />
                  ما برای مبدل خود از نرخ متوسط ​​بازار استفاده می‌کنیم. این فقط برای اهداف اطلاع‌رسانی است. هنگام ارسال پول، این نرخ را دریافت نخواهید کرد.
                  <a href="" className="text-blue-500 underline">برای مشاهده نرخ ارسال، وارد شوید</a>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 z-auto h-[200px] w-full overflow-hidden before:absolute before:bottom-[-100px] before:left-[-200px] before:right-[-200px] before:top-0 before:rounded-[100%] before:bg-white"></div>
        </div>

        <section className="flex justify-center bg-white pt-8 md:pt-16 !pb:8 md:!pb-16">
          <div className="px-6 md:px-10 w-full max-w-screen">
            <div className="lg:w-full overflow-hidden rounded-4xl">
              <div className="grid grid-cols-1 content-center md:grid-cols-[1fr_45%] md:[grid-template-areas:'content_image'] [grid-template-areas:'image''content'] bg-[#000c50]">
                <figure className="flex h-auto w-full overflow-hidden [grid-area:image] lg:h-full">
                  <img width="624" height="452" className="min-h-full object-cover object-center" style={{ color: 'transparent' }} src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F6k87KvQtKWq9HMQECTmZND%2Fd9dadc422e6c42dd1cfeaedf77f47b01%2Fxe-app-hands-mockup.webp&w=640&q=75" />
                </figure>

                <div className="flex flex-col content-center items-start justify-center gap-4 p-2 [grid-area:content] md:gap-6 md:p-4 px-8 py-12 md:px-16 md:py-20">
                  <span className="flex gap-2 rounded-full px-4 py-2 bg-white/10 text-white [&_img]:w-4">
                    <img className="block max-w-full m-auto" src="https://images.ctfassets.net/izij9rskv5y1/7MP2cHLGf5BHuIdSA8ixfh/19c0866e231a65275569d9d9a9f86f55/send-money-online-icon.png?fm=webp" />
                    <p className="text-base">ارسال پول آنلاین</p>
                  </span>
                  <h3 className="text-white font-bold text-3xl tracking-tight md:text-4xl">
                    <div>انتقال وجه بین‌المللی آسان شد</div>
                  </h3>
                  <div className="mb-0 text-base leading-7 text-gray-300 items-start">
                    <p>
                      در Xe، ما ارسال پول را سریع، ایمن و راحت می‌کنیم. تنها با چند کلیک، می‌توانید به بیش از ۱۹۰ کشور در سراسر جهان پول ارسال کنید. به هزاران نفری بپیوندید که روزانه برای نیازهای انتقال پول خود به ما اعتماد می‌کنند.
                    </p>
                  </div>
                  <div className="mt-6 flex w-full flex-wrap gap-2 md:w-auto md:mt-4 md:gap-4">
                    <a href="" className="flex items-center justify-center gap-2 font-bold transition-colors duration-200 bg-blue-500 px-6 py-3 hover:bg-blue-600 text-white rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                      <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">همین حالا پول ارسال کنید</span>

                      <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                    </a>
                    <a href="" className="flex items-center justify-center gap-2 font-bold transition-colors duration-200 bg-blue-50 px-6 py-3 hover:bg-white text-blue-500 rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                      <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">مقایسه نرخ‌ها</span>

                      <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center bg-white py-20">
          <div className="w-full flex max-w-screen-xl flex-col gap-4 px-5 md:gap-16 md:px-10">
            <div className="grid gap-3">
              <h2 className="text-center tracking-tight text-gray-800 text-3xl md:text-5xl font-bold">
                <div>نرخ ارز زنده</div>
              </h2>

              <h3 className="text-center md:text-xl text-gray-600">
                <div>بیش از ۱۰۰ ارز را به صورت آنی مقایسه کنید و لحظه مناسب برای انتقال وجه را پیدا کنید</div>
              </h3>
            </div>
            <div>
              <div className="min-h-[160px]">
                <div className="flex h-24 w-full items-center font-bold text-gray-800 text-lg">
                  <div className="flex flex-wrap basis-1/4 px-2 font-bold text-gray-800 md:basis-1/6 md:first:basis-2/6 items-center">
                    <label className="me-2 ">معکوس</label>
                    <div className="bg-gray-300 rounded-full w-11 h-6 flex items-center relative">
                      <span className=" bg-white rounded-full ms-1 absolute my-3 w-[16px] h-[16px]" style={{ boxShadow: 'rgba(20, 30, 55, 0.7) 0px 2px 4px !important' }}></span>
                    </div>
                    {/* <div className="bg-gray-300 rounded-full w-11 h-6">
                              <span className="p-4 rounded-full bg-black"></span>
                            </div> */}
                    {/* <label>
                      <Toggle
                        defaultChecked={this.state.tofuIsReady}
                        icons={false}
                        onChange={this.handleTofuChange} />
                      <span>No icons</span>
                    </label> */}
                  </div>
                  <div className="flex flex-wrap basis-1/4 px-2 text-gray-800 text-ellipsis whitespace-nowrap md:basis-1/6 md">
                    مبلغ
                  </div>
                  <div className="basis-1/4 px-2 py-4 font-semibold first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 hidden overflow-hidden text-ellipsis whitespace-nowrap text-sm md:flex md:text-base">
                    تغییر (۲۴ ساعت)
                  </div>
                  <div className="flex basis-1/4 px-2 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 overflow-hidden text-ellipsis whitespace-nowrap text-sm md:text-base">
                    نمودار (۲۴h)
                  </div>
                  <div className="flex basis-1/4 px-2 py-4 font-semibold first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 justify-end overflow-hidden text-ellipsis whitespace-nowrap text-sm md:text-base">
                    <button className="inline-block items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-blue-200 px-2 py-1 text-[0.95rem] font-semibold text-blue-500 transition-colors duration-200 hover:bg-blue-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 md:px-6 md:py-3">
                      ویرایش
                    </button>
                  </div>
                </div>
                <div className="flex w-full items-center bg-[#001133] rounded-[8px]">
                  <div className="flex basis-1/4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 !px-0">
                    <div className="h-[68px] rounded-[8px] flex items-center ms-4">
                      <div className="flex items-center gap-4 text-white">
                        <div className="relative ms-2 !w-6 !h-6 overflow-hidden rounded-full [&_img]:!scale-[1.4]">
                          <img className="absolute w-full h-full inset-0 text-transparent" src="https://www.xe.com/svgs/flags/usd.static.svg" />
                        </div>
                        دلار آمریکا
                      </div>
                    </div>
                  </div>
                  <div className="flex basis-1/4 px-2 py-4 font-semibold first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 relative items-center self-stretch text-white">
                    1
                  </div>
                </div>
                <div className="min-h-[384px] relative text-gray-700">
                  <div className="flex items-center transition-transform [&>div]:even:bg-gray-150 group odd:has-[.currency-button:hover]:bg-inherit even:has-[.currency-button:hover]:bg-[#eceff2]">
                    <div className="flex h-24 justify-between w-full items-center first:border-t-0 rounded-xl">
                      <div className="flex flex-col md:flex-row h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                        <button className="flex h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                          <div className="flex items-center gap-4 text-left font-semibold">
                            <div className="relative ms-2 border border-[#00113326] !h-6 !w-6 overflow-hidden rounded-full border-none [&_img]:!scale-[1.4]">
                              <img className="absolute w-full h-full inset-0 text-transparent" src="https://www.xe.com/svgs/flags/eur.static.svg" />
                            </div>
                            یورو
                          </div>
                        </button>
                        <div className="flex basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6">
                          <div>0.84928</div>
                        </div>
                      </div>

                      <div className="basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6 hidden md:flex">
                        <div className="rounded-md p-2 text-base bg-[#FFE1DE] text-red-900">
                          <div>-0.0063%</div>
                        </div>
                      </div>
                      <div className="flex basis-1/4 px-2 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6">
                        <a href="" className="block">
                          <div className="relative w-[120px] h-[50px]">
                            <svg className="h-full w-full" width="120" height="50" viewBox="0 0 120 50"><title></title><desc></desc><defs><clipPath id="recharts1-clip"><rect x="5" y="5" height="40" width="110"></rect></clipPath></defs><g><path stroke="#b30021" stroke-width="1" width="110" height="40" fill="none" d="M5,21.266C5.256,21.238,5.512,21.209,5.768,21.209C6.024,21.209,6.28,24.189,6.536,24.189C6.792,24.189,7.048,23.87,7.304,23.87C7.561,23.87,7.817,26.708,8.073,26.708C8.329,26.708,8.585,25.96,8.841,25.96C9.097,25.96,9.353,28.735,9.609,29.946C9.865,31.157,10.121,33.226,10.377,33.226C10.633,33.226,10.889,32.958,11.145,32.422C11.401,31.885,11.657,29.515,11.913,29.515C12.169,29.515,12.426,31.86,12.682,32.69C12.938,33.52,13.194,34.497,13.45,34.497C13.706,34.497,13.962,27.425,14.218,27.425C14.474,27.425,14.73,28.508,14.986,29.206C15.242,29.904,15.498,30.814,15.754,31.611C16.01,32.408,16.266,33.084,16.522,33.987C16.778,34.89,17.034,37.03,17.291,37.03C17.547,37.03,17.803,34.62,18.059,33.809C18.315,32.999,18.571,33.262,18.827,32.168C19.083,31.073,19.339,27.612,19.595,24.083C19.851,20.554,20.107,13.949,20.363,10.992C20.619,8.035,20.875,6.342,21.131,6.342C21.387,6.342,21.643,8.128,21.899,8.128C22.155,8.128,22.412,5,22.668,5C22.924,5,23.18,5.099,23.436,5.297C23.692,5.495,23.948,7.782,24.204,7.782C24.46,7.782,24.716,6.333,24.972,6.333C25.228,6.333,25.484,16.878,25.74,16.878C25.996,16.878,26.252,13.112,26.508,13.058C26.764,13.004,27.02,12.976,27.277,12.976C27.533,12.976,27.789,15.943,28.045,18.349C28.301,20.755,28.557,24.556,28.813,27.411C29.069,30.266,29.325,32.546,29.581,35.478C29.837,38.409,30.093,45,30.349,45C30.605,45,30.861,39.011,31.117,39.011C31.373,39.011,31.629,44.65,31.885,44.65C32.142,44.65,32.398,34.807,32.654,31.843C32.91,28.879,33.166,26.865,33.422,26.865C33.678,26.865,33.934,29.473,34.19,30.849C34.446,32.225,34.702,35.121,34.958,35.121C35.214,35.121,35.47,34.619,35.726,34.619C35.982,34.619,36.238,39.411,36.494,39.411C36.75,39.411,37.007,38.62,37.263,38.62C37.519,38.62,37.775,39.818,38.031,39.818C38.287,39.818,38.543,33.867,38.799,33.867C39.055,33.867,39.311,35.97,39.567,35.97C39.823,35.97,40.079,33.125,40.335,33.125C40.591,33.125,40.847,35.847,41.103,35.847C41.359,35.847,41.615,31.788,41.872,30.039C42.128,28.29,42.384,26.611,42.64,25.354C42.896,24.096,43.152,22.493,43.408,22.493C43.664,22.493,43.92,26.084,44.176,26.084C44.432,26.084,44.688,25.091,44.944,25.091C45.2,25.091,45.456,28.025,45.712,28.025C45.968,28.025,46.224,24.189,46.48,24.189C46.736,24.189,46.993,24.691,47.249,24.971C47.505,25.251,47.761,25.869,48.017,25.869C48.273,25.869,48.529,23.73,48.785,23.73C49.041,23.73,49.297,25.093,49.553,25.193C49.809,25.292,50.065,25.342,50.321,25.342C50.577,25.342,50.833,25.283,51.089,25.283C51.345,25.283,51.601,33.557,51.858,33.557C52.114,33.557,52.37,33.264,52.626,32.678C52.882,32.092,53.138,29.969,53.394,29.771C53.65,29.572,53.906,29.629,54.162,29.473C54.418,29.316,54.674,29.223,54.93,28.83C55.186,28.438,55.442,27.838,55.698,27.118C55.954,26.398,56.21,24.509,56.466,24.509C56.723,24.509,56.979,24.712,57.235,25.116C57.491,25.52,57.747,34.575,58.003,34.575C58.259,34.575,58.515,31.605,58.771,31.605C59.027,31.605,59.283,31.741,59.539,32.014C59.795,32.286,60.051,34.435,60.307,34.93C60.563,35.425,60.819,35.673,61.075,35.673C61.331,35.673,61.588,33.476,61.844,32.008C62.1,30.54,62.356,26.866,62.612,26.866C62.868,26.866,63.124,28.16,63.38,28.586C63.636,29.012,63.892,29.15,64.148,29.421C64.404,29.692,64.66,30.213,64.916,30.213C65.172,30.213,65.428,29.909,65.684,29.857C65.94,29.804,66.196,29.831,66.453,29.778C66.709,29.726,66.965,28.498,67.221,27.923C67.477,27.349,67.733,26.332,67.989,26.332C68.245,26.332,68.501,27.401,68.757,27.401C69.013,27.401,69.269,27.115,69.525,27.115C69.781,27.115,70.037,27.724,70.293,27.812C70.549,27.899,70.805,27.943,71.061,27.943C71.318,27.943,71.574,27.902,71.83,27.821C72.086,27.739,72.342,26.967,72.598,26.967C72.854,26.967,73.11,27.695,73.366,27.824C73.622,27.952,73.878,27.946,74.134,28.017C74.39,28.088,74.646,28.251,74.902,28.251C75.158,28.251,75.414,28.24,75.67,28.218C75.926,28.195,76.182,23.968,76.439,23.829C76.695,23.69,76.951,23.645,77.207,23.621C77.463,23.596,77.719,23.608,77.975,23.584C78.231,23.559,78.487,22.998,78.743,22.998C78.999,22.998,79.255,23.553,79.511,23.553C79.767,23.553,80.023,23.037,80.279,23.008C80.535,22.98,80.791,22.966,81.047,22.966C81.304,22.966,81.56,23.972,81.816,23.972C82.072,23.972,82.328,22.796,82.584,22.796C82.84,22.796,83.096,22.826,83.352,22.887C83.608,22.949,83.864,23.697,84.12,23.697C84.376,23.697,84.632,22.752,84.888,22.752C85.144,22.752,85.4,23.993,85.656,23.993C85.912,23.993,86.169,23.834,86.425,23.627C86.681,23.421,86.937,22.755,87.193,22.755C87.449,22.755,87.705,23.065,87.961,23.18C88.217,23.294,88.473,23.337,88.729,23.442C88.985,23.547,89.241,23.808,89.497,23.808C89.753,23.808,90.009,22.951,90.265,22.951C90.521,22.951,90.777,23.548,91.034,23.548C91.29,23.548,91.546,22.904,91.802,22.904C92.058,22.904,92.314,22.921,92.57,22.956C92.826,22.99,93.082,24.24,93.338,24.24C93.594,24.24,93.85,22.825,94.106,22.825C94.362,22.825,94.618,22.869,94.874,22.956C95.13,23.043,95.386,23.656,95.642,23.656C95.899,23.656,96.155,22.755,96.411,22.755C96.667,22.755,96.923,23.922,97.179,23.922C97.435,23.922,97.691,23.822,97.947,23.625C98.203,23.429,98.459,22.744,98.715,22.744C98.971,22.744,99.227,22.964,99.483,23.102C99.739,23.24,99.995,23.568,100.251,23.573C100.507,23.578,100.764,23.581,101.02,23.581C101.276,23.581,101.532,23.006,101.788,23.006C102.044,23.006,102.3,23.432,102.556,23.432C102.812,23.432,103.068,23.146,103.324,23.059C103.58,22.971,103.836,22.908,104.092,22.908C104.348,22.908,104.604,24.243,104.86,24.243C105.116,24.243,105.372,22.809,105.628,22.809C105.885,22.809,106.141,22.853,106.397,22.942C106.653,23.03,106.909,23.755,107.165,23.755C107.421,23.755,107.677,22.765,107.933,22.765C108.189,22.765,108.445,24.232,108.701,24.232C108.957,24.232,109.213,23.764,109.469,23.515C109.725,23.267,109.981,22.741,110.237,22.741C110.493,22.741,110.75,23.116,111.006,23.116C111.262,23.116,111.518,22.71,111.774,22.71C112.03,22.71,112.286,23.986,112.542,23.986C112.798,23.986,113.054,23.041,113.31,23.041C113.566,23.041,113.822,23.556,114.078,23.556C114.334,23.556,114.59,23.377,114.846,23.018C114.872,22.983,114.898,22.882,114.923,22.882C114.949,22.882,114.974,22.882,115,22.882"></path><g></g></g></svg>
                          </div>
                        </a>
                      </div>
                      <div className="basis-1/4 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 flex justify-end px-4">
                        <a className="flex h-10 w-[43px] items-center justify-center hyphens-manual rounded-md bg-blue-500 text-base font-semibold text-white transition-transform hover:-translate-x-2 hover:bg-blue-400 md:w-auto md:gap-2 md:px-6 md:py-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 48 48" width="24" color="inherit" className="h-6 w-6 fill-white"><path d="M42.216 5.794a2.715 2.715 0 0 0-2.657-.692h-.026l-32.568 9.88a2.715 2.715 0 0 0-.411 5.062l14.528 6.88 6.88 14.524a2.69 2.69 0 0 0 2.682 1.542 2.694 2.694 0 0 0 2.375-1.953l9.876-32.56V8.45a2.714 2.714 0 0 0-.679-2.657ZM30.425 40.26l-.009.024-6.678-14.095 8.015-8.016a1.357 1.357 0 0 0-1.919-1.919l-8.017 8.014-14.1-6.677h.023l32.555-9.876-9.87 32.545Z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center transition-transform [&>div]:even:bg-gray-150 group odd:has-[.currency-button:hover]:bg-inherit even:has-[.currency-button:hover]:bg-[#eceff2]">
                    <div style={{ backgroundColor: 'rgb(247, 248, 249) !important' }} className="flex h-24 w-full justify-between items-center first:border-t-0 rounded-xl">
                      <div className="flex text-sm md:text-md flex-col md:flex-row h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                        <button className="flex h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                          <div className="flex items-center gap-4 text-left font-semibold">
                            <div className="relative ms-2 border border-[#00113326] !h-6 !w-6 overflow-hidden rounded-full border-none [&_img]:!scale-[1.4]">
                              <img className="absolute w-full h-full inset-0 text-transparent" src="https://www.xe.com/svgs/flags/gbp.static.svg" />
                            </div>
                            پوند بریتانیا
                          </div>
                        </button>
                        <div className="flex basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6">
                          <div>0.73253</div>
                        </div>
                      </div>

                      <div className="basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6 hidden md:flex">
                        <div className="rounded-md p-2 text-base bg-[#FFE1DE] text-red-900">
                          <div>-0.034%</div>
                        </div>
                      </div>
                      <div className="flex basis-1/4 px-2 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6">
                        <a>
                          <div className="relative cursor-default w-[120px] h-[50px]"><svg className="w-full h-full" width="120" height="50" viewBox="0 0 120 50"><title></title><desc></desc><defs><clipPath id="recharts7-clip"><rect x="5" y="5" height="40" width="110"></rect></clipPath></defs><g><path stroke="#b30021" stroke-width="1" width="110" height="40" fill="none" d="M5,29.601C5.295,29.547,5.59,29.494,5.886,29.281C6.181,29.067,6.476,18.713,6.771,18.713C7.067,18.713,7.362,27.199,7.657,27.199C7.952,27.199,8.247,18.975,8.543,16.888C8.838,14.802,9.133,14.909,9.428,13.759C9.724,12.608,10.019,11.447,10.314,9.987C10.609,8.527,10.904,5,11.2,5C11.495,5,11.79,18.044,12.085,18.044C12.381,18.044,12.676,16.372,12.971,15.215C13.266,14.057,13.561,11.1,13.857,11.1C14.152,11.1,14.447,21.496,14.742,24.563C15.038,27.63,15.333,27.954,15.628,29.501C15.923,31.049,16.218,33.849,16.514,33.849C16.809,33.849,17.104,25.495,17.399,25.495C17.695,25.495,17.99,28.812,18.285,31.369C18.58,33.926,18.875,40.837,19.171,40.837C19.466,40.837,19.761,33.861,20.056,30.581C20.352,27.3,20.647,22.544,20.942,21.155C21.237,19.767,21.532,19.072,21.828,19.072C22.123,19.072,22.418,27.282,22.713,27.282C23.009,27.282,23.304,20.702,23.599,19.11C23.894,17.518,24.189,16.722,24.485,16.722C24.78,16.722,25.075,20.082,25.37,21.307C25.666,22.533,25.961,24.077,26.256,24.077C26.551,24.077,26.846,23.706,27.142,23.706C27.437,23.706,27.732,30.613,28.027,30.613C28.323,30.613,28.618,26.568,28.913,26.568C29.208,26.568,29.503,31.416,29.799,31.916C30.094,32.416,30.389,32.667,30.684,32.667C30.98,32.667,31.275,26.104,31.57,26.104C31.865,26.104,32.16,26.224,32.456,26.463C32.751,26.703,33.046,33.583,33.341,33.583C33.637,33.583,33.932,32.752,34.227,32.752C34.522,32.752,34.817,37.408,35.113,37.408C35.408,37.408,35.703,36.235,35.998,35.67C36.294,35.104,36.589,34.694,36.884,34.016C37.179,33.339,37.475,31.605,37.77,31.605C38.065,31.605,38.36,32.026,38.655,32.313C38.951,32.6,39.246,33.135,39.541,33.327C39.836,33.519,40.132,33.423,40.427,33.615C40.722,33.808,41.017,33.955,41.312,34.634C41.608,35.313,41.903,37.377,42.198,38.59C42.493,39.803,42.789,41.913,43.084,41.913C43.379,41.913,43.674,41.312,43.969,41.312C44.265,41.312,44.56,41.433,44.855,41.65C45.15,41.867,45.446,42.613,45.741,42.613C46.036,42.613,46.331,42.352,46.626,41.829C46.922,41.306,47.217,35.954,47.512,35.954C47.807,35.954,48.103,36.048,48.398,36.235C48.693,36.422,48.988,45,49.283,45C49.579,45,49.874,44.995,50.169,44.985C50.464,44.975,50.76,42.473,51.055,40.579C51.35,38.684,51.645,34.973,51.94,33.619C52.236,32.265,52.531,32.159,52.826,31.588C53.121,31.017,53.417,30.192,53.712,30.192C54.007,30.192,54.302,33.739,54.597,35.12C54.893,36.501,55.188,38.479,55.483,38.479C55.778,38.479,56.074,37.576,56.369,37.576C56.664,37.576,56.959,39.146,57.254,39.146C57.55,39.146,57.845,37.86,58.14,37.455C58.435,37.05,58.731,36.755,59.026,36.719C59.321,36.683,59.616,36.701,59.911,36.665C60.207,36.629,60.502,36.5,60.797,36.5C61.092,36.5,61.388,36.677,61.683,36.677C61.978,36.677,62.273,36.538,62.568,36.375C62.864,36.211,63.159,35.697,63.454,35.697C63.749,35.697,64.045,35.917,64.34,35.929C64.635,35.942,64.93,35.948,65.225,35.948C65.521,35.948,65.816,35.909,66.111,35.83C66.406,35.751,66.702,35.351,66.997,35.351C67.292,35.351,67.587,35.526,67.882,35.526C68.178,35.526,68.473,35.053,68.768,35.053C69.063,35.053,69.359,35.95,69.654,36.395C69.949,36.839,70.244,37.721,70.539,37.721C70.835,37.721,71.13,35.257,71.425,35.257C71.72,35.257,72.016,39.215,72.311,39.215C72.606,39.215,72.901,38.973,73.196,38.489C73.492,38.004,73.787,35.284,74.082,35.284C74.377,35.284,74.673,39.108,74.968,39.108C75.263,39.108,75.558,38.861,75.853,38.367C76.149,37.873,76.444,35.357,76.739,35.357C77.034,35.357,77.33,39.057,77.625,39.057C77.92,39.057,78.215,38.924,78.51,38.659C78.806,38.393,79.101,35.264,79.396,35.264C79.691,35.264,79.987,39.063,80.282,39.063C80.577,39.063,80.872,38.947,81.167,38.716C81.463,38.484,81.758,35.284,82.053,35.284C82.348,35.284,82.644,39.038,82.939,39.038C83.234,39.038,83.529,38.856,83.824,38.49C84.12,38.125,84.415,35.272,84.71,35.272C85.005,35.272,85.301,39.406,85.596,39.406C85.891,39.406,86.186,39.12,86.481,38.547C86.777,37.975,87.072,35.279,87.367,35.279C87.662,35.279,87.958,39.102,88.253,39.102C88.548,39.102,88.843,38.898,89.138,38.491C89.434,38.084,89.729,35.506,90.024,35.506C90.319,35.506,90.615,39.067,90.91,39.067C91.205,39.067,91.5,38.851,91.795,38.418C92.091,37.985,92.386,35.322,92.681,35.322C92.976,35.322,93.272,39.024,93.567,39.062C93.862,39.1,94.157,39.12,94.452,39.12C94.748,39.12,95.043,35.286,95.338,35.286C95.633,35.286,95.929,39.062,96.224,39.062C96.519,39.062,96.814,38.84,97.11,38.396C97.405,37.952,97.7,35.262,97.995,35.262C98.29,35.262,98.586,39.304,98.881,39.304C99.176,39.304,99.471,39.038,99.767,38.505C100.062,37.972,100.357,35.29,100.652,35.29C100.947,35.29,101.243,39.142,101.538,39.142C101.833,39.142,102.128,38.945,102.424,38.553C102.719,38.16,103.014,35.506,103.309,35.506C103.604,35.506,103.9,39.061,104.195,39.061C104.49,39.061,104.785,38.872,105.081,38.495C105.376,38.117,105.671,35.271,105.966,35.271C106.261,35.271,106.557,39.036,106.852,39.036C107.147,39.036,107.442,39.016,107.738,38.976C108.033,38.936,108.328,35.291,108.623,35.291C108.918,35.291,109.214,39.065,109.509,39.065C109.804,39.065,110.099,38.695,110.395,38.695C110.69,38.695,110.985,39.019,111.28,39.178C111.575,39.337,111.871,39.649,112.166,39.649C112.461,39.649,112.756,39.115,113.052,38.386C113.347,37.657,113.642,35.275,113.937,35.275C114.232,35.275,114.528,38.875,114.823,39.112C114.852,39.136,114.882,39.152,114.911,39.152C114.941,39.152,114.97,39.152,115,39.152"></path><g></g></g></svg></div>
                        </a>
                      </div>
                      <div className="basis-1/4 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 flex justify-end px-4">
                        <a className="flex h-10 w-[43px] items-center justify-center hyphens-manual rounded-md bg-blue-500 text-base font-semibold text-white transition-transform hover:-translate-x-2 hover:bg-blue-400 md:w-auto md:gap-2 md:px-6 md:py-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 48 48" width="24" color="inherit" className="h-6 w-6 fill-white"><path d="M42.216 5.794a2.715 2.715 0 0 0-2.657-.692h-.026l-32.568 9.88a2.715 2.715 0 0 0-.411 5.062l14.528 6.88 6.88 14.524a2.69 2.69 0 0 0 2.682 1.542 2.694 2.694 0 0 0 2.375-1.953l9.876-32.56V8.45a2.714 2.714 0 0 0-.679-2.657ZM30.425 40.26l-.009.024-6.678-14.095 8.015-8.016a1.357 1.357 0 0 0-1.919-1.919l-8.017 8.014-14.1-6.677h.023l32.555-9.876-9.87 32.545Z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center transition-transform [&>div]:even:bg-gray-150 group odd:has-[.currency-button:hover]:bg-inherit even:has-[.currency-button:hover]:bg-[#eceff2]">
                    <div className="flex justify-between h-24 w-full items-center first:border-t-0 rounded-xl">
                      <div className="flex flex-col md:text-md text-sm md:flex-row h-full basis-1/4 items-center rounded-lg border-none bg-none md:basis-2/6 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                        <button className="flex h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                          <div className="flex items-center gap-4 text-left font-semibold">
                            <div className="relative ms-2 border border-[#00113326] !h-6 !w-6 overflow-hidden rounded-full border-none [&_img]:!scale-[1.4]">
                              <img className="absolute w-full h-full inset-0 text-transparent" src="https://www.xe.com/svgs/flags/cad.static.svg" />
                            </div>
                            دلار کانادا
                          </div>
                        </button>
                        <div className="flex basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6">
                          <div>1.3604</div>
                        </div>
                      </div>

                      <div className="basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6 hidden md:flex">
                        <div className="rounded-md p-2 text-base bg-[#DEF7E8] text-green-800">
                          <div>+0.095%</div>
                        </div>
                      </div>
                      <div className="flex basis-1/4 px-2 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6">
                        <a>
                          <div className="relative cursor-default w-[120px] h-[50px]"><svg className="w-full h-full" width="120" height="50" viewBox="0 0 120 50"><title></title><desc></desc><defs><clipPath id="recharts7-clip"><rect x="5" y="5" height="40" width="110"></rect></clipPath></defs><g><path stroke="#1e8723" stroke-width="1" width="110" height="40" fill="none" d="M5,42.81C5.295,43.905,5.59,45,5.886,45C6.181,45,6.476,39.378,6.771,39.378C7.067,39.378,7.362,43.393,7.657,43.393C7.952,43.393,8.247,43.28,8.543,43.054C8.838,42.828,9.133,41.43,9.428,40.215C9.724,39.001,10.019,38.46,10.314,35.768C10.609,33.076,10.904,24.065,11.2,24.065C11.495,24.065,11.79,29.32,12.085,29.608C12.381,29.897,12.676,30.041,12.971,30.041C13.266,30.041,13.561,17.247,13.857,17.247C14.152,17.247,14.447,21.344,14.742,22.535C15.038,23.727,15.333,24.396,15.628,24.396C15.923,24.396,16.218,23.54,16.514,23.367C16.809,23.194,17.104,23.108,17.399,23.108C17.695,23.108,17.99,26.577,18.285,26.781C18.58,26.984,18.875,27.086,19.171,27.086C19.466,27.086,19.761,20.002,20.056,19.429C20.352,18.856,20.647,19.142,20.942,18.569C21.237,17.996,21.532,15.531,21.828,15.531C22.123,15.531,22.418,15.542,22.713,15.564C23.009,15.585,23.304,15.63,23.599,15.764C23.894,15.897,24.189,18.206,24.485,19.432C24.78,20.658,25.075,23.119,25.37,23.119C25.666,23.119,25.961,20.768,26.256,20.768C26.551,20.768,26.846,21.977,27.142,22.118C27.437,22.259,27.732,22.33,28.027,22.33C28.323,22.33,28.618,20.57,28.913,20.57C29.208,20.57,29.503,24.868,29.799,24.868C30.094,24.868,30.389,24.468,30.684,23.667C30.98,22.867,31.275,19.426,31.57,18.062C31.865,16.698,32.16,15.865,32.456,15.485C32.751,15.104,33.046,15.294,33.341,14.914C33.637,14.534,33.932,11.216,34.227,9.564C34.522,7.911,34.817,5,35.113,5C35.408,5,35.703,5.66,35.998,6.712C36.294,7.764,36.589,11.31,36.884,11.31C37.179,11.31,37.475,9.209,37.77,9.209C38.065,9.209,38.36,14.655,38.655,15.642C38.951,16.629,39.246,16.96,39.541,17.123C39.836,17.285,40.132,17.204,40.427,17.366C40.722,17.529,41.017,23.964,41.312,23.964C41.608,23.964,41.903,22.558,42.198,22.558C42.493,22.558,42.789,26.558,43.084,26.558C43.379,26.558,43.674,23.584,43.969,23.584C44.265,23.584,44.56,23.673,44.855,23.745C45.15,23.816,45.446,24.014,45.741,24.014C46.036,24.014,46.331,23.994,46.626,23.954C46.922,23.914,47.217,23.672,47.512,23.11C47.807,22.547,48.103,18.21,48.398,18.21C48.693,18.21,48.988,22.566,49.283,22.566C49.579,22.566,49.874,22.146,50.169,22.146C50.464,22.146,50.76,22.215,51.055,22.354C51.35,22.493,51.645,22.635,51.94,23.196C52.236,23.757,52.531,27.21,52.826,27.21C53.121,27.21,53.417,26.933,53.712,26.536C54.007,26.138,54.302,25.656,54.597,24.822C54.893,23.989,55.188,22.174,55.483,21.537C55.778,20.9,56.074,20.581,56.369,20.581C56.664,20.581,56.959,20.686,57.254,20.897C57.55,21.107,57.845,21.991,58.14,22.312C58.435,22.633,58.731,22.482,59.026,22.823C59.321,23.164,59.616,26.383,59.911,26.383C60.207,26.383,60.502,25.929,60.797,25.929C61.092,25.929,61.388,26.64,61.683,26.64C61.978,26.64,62.273,26.224,62.568,26.224C62.864,26.224,63.159,27.273,63.454,27.374C63.749,27.475,64.045,27.525,64.34,27.525C64.635,27.525,64.93,25.692,65.225,25.692C65.521,25.692,65.816,26.536,66.111,26.764C66.406,26.992,66.702,27.028,66.997,27.105C67.292,27.183,67.587,27.228,67.882,27.228C68.178,27.228,68.473,26.9,68.768,26.9C69.063,26.9,69.359,27.162,69.654,27.162C69.949,27.162,70.244,23.181,70.539,23.181C70.835,23.181,71.13,23.336,71.425,23.336C71.72,23.336,72.016,22.371,72.311,22.371C72.606,22.371,72.901,22.718,73.196,22.878C73.492,23.038,73.787,23.332,74.082,23.332C74.377,23.332,74.673,22.716,74.968,22.716C75.263,22.716,75.558,22.852,75.853,22.896C76.149,22.941,76.444,22.983,76.739,22.983C77.034,22.983,77.33,22.824,77.625,22.824C77.92,22.824,78.215,22.835,78.51,22.858C78.806,22.881,79.101,23.25,79.396,23.25C79.691,23.25,79.987,22.981,80.282,22.816C80.577,22.65,80.872,22.258,81.167,22.258C81.463,22.258,81.758,23.284,82.053,23.284C82.348,23.284,82.644,22.823,82.939,22.823C83.234,22.823,83.529,22.826,83.824,22.833C84.12,22.84,84.415,23.255,84.71,23.255C85.005,23.255,85.301,22.271,85.596,22.271C85.891,22.271,86.186,22.704,86.481,22.875C86.777,23.046,87.072,23.297,87.367,23.297C87.662,23.297,87.958,22.779,88.253,22.779C88.548,22.779,88.843,22.855,89.138,22.884C89.434,22.914,89.729,22.955,90.024,22.955C90.319,22.955,90.615,22.823,90.91,22.823C91.205,22.823,91.5,22.866,91.795,22.93C92.091,22.994,92.386,23.207,92.681,23.207C92.976,23.207,93.272,22.834,93.567,22.834C93.862,22.834,94.157,23.299,94.452,23.487C94.748,23.676,95.043,23.967,95.338,23.967C95.633,23.967,95.929,22.84,96.224,22.84C96.519,22.84,96.814,22.846,97.11,22.857C97.405,22.867,97.7,23.319,97.995,23.319C98.29,23.319,98.586,22.467,98.881,22.467C99.176,22.467,99.471,22.742,99.767,22.873C100.062,23.004,100.357,23.25,100.652,23.25C100.947,23.25,101.243,22.698,101.538,22.698C101.833,22.698,102.128,22.814,102.424,22.859C102.719,22.904,103.014,22.967,103.309,22.967C103.604,22.967,103.9,22.824,104.195,22.824C104.49,22.824,104.785,22.841,105.081,22.876C105.376,22.91,105.671,23.325,105.966,23.325C106.261,23.325,106.557,22.992,106.852,22.799C107.147,22.606,107.442,22.165,107.738,22.165C108.033,22.165,108.328,23.249,108.623,23.249C108.918,23.249,109.214,22.852,109.509,22.822C109.804,22.792,110.099,22.777,110.395,22.777C110.69,22.777,110.985,22.83,111.28,22.83C111.575,22.83,111.871,22.06,112.166,22.06C112.461,22.06,112.756,22.668,113.052,22.876C113.347,23.083,113.642,23.305,113.937,23.305C114.232,23.305,114.528,22.816,114.823,22.787C114.852,22.784,114.882,22.783,114.911,22.783C114.941,22.783,114.97,22.783,115,22.783"></path><g></g></g></svg></div>
                        </a>
                      </div>
                      <div className="basis-1/4 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 flex justify-end px-4">
                        <a className="flex h-10 w-[43px] items-center justify-center hyphens-manual rounded-md bg-blue-500 text-base font-semibold text-white transition-transform hover:-translate-x-2 hover:bg-blue-400 md:w-auto md:gap-2 md:px-6 md:py-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 48 48" width="24" color="inherit" className="h-6 w-6 fill-white"><path d="M42.216 5.794a2.715 2.715 0 0 0-2.657-.692h-.026l-32.568 9.88a2.715 2.715 0 0 0-.411 5.062l14.528 6.88 6.88 14.524a2.69 2.69 0 0 0 2.682 1.542 2.694 2.694 0 0 0 2.375-1.953l9.876-32.56V8.45a2.714 2.714 0 0 0-.679-2.657ZM30.425 40.26l-.009.024-6.678-14.095 8.015-8.016a1.357 1.357 0 0 0-1.919-1.919l-8.017 8.014-14.1-6.677h.023l32.555-9.876-9.87 32.545Z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center  transition-transform [&>div]:even:bg-gray-150 group odd:has-[.currency-button:hover]:bg-inherit even:has-[.currency-button:hover]:bg-[#eceff2]">
                    <div style={{ backgroundColor: 'rgb(247, 248, 249) !important' }} className="flex justify-between h-24 w-full items-center first:border-t-0 rounded-xl">
                      <div className="flex flex-col md:text-md text-sm md:flex-row h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                        <button className="flex h-full basis-1/4 items-center rounded-lg border-none bg-none p-2 md:basis-2/6 md:p-4 [&:not(:disabled)]:hover:bg-[#d9dbe0]">
                        <div className="flex items-center gap-4 text-left font-semibold">
                          <div className="relative ms-2 border border-[#00113326] !h-6 !w-6 overflow-hidden rounded-full border-none [&_img]:!scale-[1.4]">
                            <img className="absolute w-full h-full inset-0 text-transparent" src="https://www.xe.com/svgs/flags/jpy.static.svg" />
                          </div>
                          ین ژاپن
                        </div>
                      </button>
                      <div className="flex basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6">
                        <div>144.47</div>
                      </div>
                      </div>
                      
                      <div className="basis-1/4 px-2 py-4 font-semibold first:pe-4 last:ps-4 md:basis-1/6 md:first:basis-2/6 hidden md:flex">
                        <div className="rounded-md p-2 text-base bg-[#DEF7E8] text-green-800">
                          <div>+0.08%</div>
                        </div>
                      </div>
                      <div className="flex basis-1/4 px-2 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6">
                        <a>
                          <div className="relative cursor-default w-[120px] h-[50px]"><svg className="w-full h-full" width="120" height="50" viewBox="0 0 120 50"><title></title><desc></desc><defs><clipPath id="recharts7-clip"><rect x="5" y="5" height="40" width="110"></rect></clipPath></defs><g><path stroke="#1e8723" stroke-width="1" width="110" height="40" fill="none" d="M5,45C5.295,41.098,5.59,37.196,5.886,35.881C6.181,34.565,6.476,33.908,6.771,33.908C7.067,33.908,7.362,41.235,7.657,41.235C7.952,41.235,8.247,28.331,8.543,28.331C8.838,28.331,9.133,32.405,9.428,32.405C9.724,32.405,10.019,29.713,10.314,29.713C10.609,29.713,10.904,31.161,11.2,32.218C11.495,33.275,11.79,36.056,12.085,36.056C12.381,36.056,12.676,29.692,12.971,27.01C13.266,24.327,13.561,19.96,13.857,19.96C14.152,19.96,14.447,26.805,14.742,26.805C15.038,26.805,15.333,25.997,15.628,25.707C15.923,25.417,16.218,25.064,16.514,25.064C16.809,25.064,17.104,27.667,17.399,27.667C17.695,27.667,17.99,22.72,18.285,22.72C18.58,22.72,18.875,27.511,19.171,27.511C19.466,27.511,19.761,18.639,20.056,15.334C20.352,12.029,20.647,7.681,20.942,7.681C21.237,7.681,21.532,13.247,21.828,13.926C22.123,14.604,22.418,14.943,22.713,14.943C23.009,14.943,23.304,13.726,23.599,13.726C23.894,13.726,24.189,14.798,24.485,14.798C24.78,14.798,25.075,13.622,25.37,12.955C25.666,12.288,25.961,10.797,26.256,10.797C26.551,10.797,26.846,10.886,27.142,11.064C27.437,11.241,27.732,12.347,28.027,13.02C28.323,13.694,28.618,14.172,28.913,15.106C29.208,16.04,29.503,18.625,29.799,18.625C30.094,18.625,30.389,17.001,30.684,16.862C30.98,16.722,31.275,16.785,31.57,16.653C31.865,16.52,32.16,16.067,32.456,16.067C32.751,16.067,33.046,17.42,33.341,17.42C33.637,17.42,33.932,17.278,34.227,17.278C34.522,17.278,34.817,19.331,35.113,19.857C35.408,20.384,35.703,20.269,35.998,20.647C36.294,21.025,36.589,21.73,36.884,22.128C37.179,22.527,37.475,23.037,37.77,23.037C38.065,23.037,38.36,17.848,38.655,17.848C38.951,17.848,39.246,19.3,39.541,19.436C39.836,19.572,40.132,19.64,40.427,19.64C40.722,19.64,41.017,19.038,41.312,19.038C41.608,19.038,41.903,20.804,42.198,21.34C42.493,21.877,42.789,22.257,43.084,22.257C43.379,22.257,43.674,20.593,43.969,19.527C44.265,18.461,44.56,15.86,44.855,15.86C45.15,15.86,45.446,17.509,45.741,17.509C46.036,17.509,46.331,17.17,46.626,16.897C46.922,16.624,47.217,16.555,47.512,15.871C47.807,15.186,48.103,5,48.398,5C48.693,5,48.988,13.687,49.283,15.264C49.579,16.841,49.874,17.63,50.169,17.63C50.464,17.63,50.76,7.639,51.055,7.639C51.35,7.639,51.645,9.95,51.94,11.521C52.236,13.092,52.531,14.77,52.826,17.065C53.121,19.359,53.417,24.254,53.712,25.289C54.007,26.323,54.302,26.84,54.597,26.84C54.893,26.84,55.188,22.726,55.483,22.726C55.778,22.726,56.074,23.72,56.369,24.235C56.664,24.75,56.959,25.816,57.254,25.816C57.55,25.816,57.845,25.347,58.14,25.347C58.435,25.347,58.731,26.12,59.026,26.12C59.321,26.12,59.616,26.056,59.911,26.002C60.207,25.948,60.502,25.796,60.797,25.796C61.092,25.796,61.388,25.904,61.683,26.005C61.978,26.107,62.273,26.247,62.568,26.405C62.864,26.563,63.159,26.918,63.454,26.952C63.749,26.987,64.045,27.004,64.34,27.004C64.635,27.004,64.93,24.026,65.225,24.026C65.521,24.026,65.816,26.506,66.111,26.705C66.406,26.905,66.702,26.996,66.997,27.005C67.292,27.014,67.587,27.018,67.882,27.018C68.178,27.018,68.473,26.955,68.768,26.955C69.063,26.955,69.359,27.022,69.654,27.022C69.949,27.022,70.244,25.048,70.539,24.339C70.835,23.63,71.13,22.768,71.425,22.768C71.72,22.768,72.016,24.507,72.311,24.507C72.606,24.507,72.901,24.412,73.196,24.223C73.492,24.034,73.787,22.739,74.082,22.739C74.377,22.739,74.673,24.467,74.968,24.467C75.263,24.467,75.558,24.367,75.853,24.167C76.149,23.967,76.444,22.686,76.739,22.686C77.034,22.686,77.33,24.414,77.625,24.414C77.92,24.414,78.215,24.336,78.51,24.181C78.806,24.026,79.101,22.706,79.396,22.706C79.691,22.706,79.987,24.372,80.282,24.372C80.577,24.372,80.872,24.334,81.167,24.258C81.463,24.182,81.758,22.674,82.053,22.674C82.348,22.674,82.644,24.376,82.939,24.376C83.234,24.376,83.529,24.276,83.824,24.075C84.12,23.875,84.415,22.757,84.71,22.757C85.005,22.757,85.301,24.319,85.596,24.319C85.891,24.319,86.186,24.301,86.481,24.264C86.777,24.228,87.072,22.665,87.367,22.665C87.662,22.665,87.958,24.412,88.253,24.412C88.548,24.412,88.843,24.333,89.138,24.177C89.434,24.021,89.729,22.61,90.024,22.61C90.319,22.61,90.615,24.351,90.91,24.351C91.205,24.351,91.5,24.295,91.795,24.182C92.091,24.07,92.386,22.61,92.681,22.61C92.976,22.61,93.272,24.401,93.567,24.401C93.862,24.401,94.157,24.34,94.452,24.219C94.748,24.098,95.043,22.77,95.338,22.77C95.633,22.77,95.929,24.507,96.224,24.507C96.519,24.507,96.814,24.4,97.11,24.188C97.405,23.975,97.7,22.771,97.995,22.771C98.29,22.771,98.586,24.447,98.881,24.447C99.176,24.447,99.471,24.386,99.767,24.264C100.062,24.143,100.357,22.657,100.652,22.657C100.947,22.657,101.243,24.365,101.538,24.365C101.833,24.365,102.128,24.345,102.424,24.305C102.719,24.265,103.014,22.572,103.309,22.572C103.604,22.572,103.9,24.443,104.195,24.443C104.49,24.443,104.785,24.332,105.081,24.111C105.376,23.89,105.671,22.807,105.966,22.807C106.261,22.807,106.557,24.399,106.852,24.399C107.147,24.399,107.442,24.328,107.738,24.186C108.033,24.045,108.328,22.636,108.623,22.636C108.918,22.636,109.214,24.379,109.509,24.379C109.804,24.379,110.099,24.298,110.395,24.298C110.69,24.298,110.985,24.582,111.28,24.582C111.575,24.582,111.871,24.306,112.166,24.226C112.461,24.146,112.756,24.185,113.052,24.103C113.347,24.021,113.642,22.644,113.937,22.644C114.232,22.644,114.528,24.5,114.823,24.5C114.852,24.5,114.882,24.461,114.911,24.461C114.941,24.461,114.97,24.461,115,24.461"></path><g></g></g></svg></div>
                        </a>
                      </div>
                      <div className="basis-1/4 py-4 font-semibold text-greyblue-400 first:pl-4 last:pr-4 md:basis-1/6 md:first:basis-2/6 flex justify-end px-4">
                        <a className="flex h-10 w-[43px] items-center justify-center hyphens-manual rounded-md bg-blue-500 text-base font-semibold text-white transition-transform hover:-translate-x-2 hover:bg-blue-400 md:w-auto md:gap-2 md:px-6 md:py-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 48 48" width="24" color="inherit" className="h-6 w-6 fill-white"><path d="M42.216 5.794a2.715 2.715 0 0 0-2.657-.692h-.026l-32.568 9.88a2.715 2.715 0 0 0-.411 5.062l14.528 6.88 6.88 14.524a2.69 2.69 0 0 0 2.682 1.542 2.694 2.694 0 0 0 2.375-1.953l9.876-32.56V8.45a2.714 2.714 0 0 0-.679-2.657ZM30.425 40.26l-.009.024-6.678-14.095 8.015-8.016a1.357 1.357 0 0 0-1.919-1.919l-8.017 8.014-14.1-6.677h.023l32.555-9.876-9.87 32.545Z"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="cursor-pointer gap-2 flex h-12 w-full items-center justify-center rounded-lg bg-blue-100 px-8 py-3 text-[0.95rem] font-semibold text-blue-500 transition-colors duration-200 hover:bg-blue-200 focus:outline-offset-2 focus:outline-blue-500 md:max-w-[300px]">
                  <FaCirclePlus className="text-xl" />
                  <span>اضافه کردن ارز</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white py-16">
          <div className="m-auto max-w-screen-xl px-4 md:px-10 ">
            <div className="grid gap-3">
              <h2 className="text-center text-3xl md:text-4xl text-gray-800 font-bold">نحوه ارسال پول آنلاین با Xe</h2>
            </div>
            <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              <div className="grid w-full content-baseline gap-16 rounded-3xl bg-gray-100 px-12 py-16">
                <span className="text-6xl text-blue-500 font-bold">1</span>
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl font-bold text-gray-900">
                    <div>ثبت نام رایگان</div>
                  </h4>
                  <div className="text-gray-600">
                    <div>فقط چند دقیقه طول می‌کشد—تنها چیزی که نیاز دارید یک آدرس ایمیل است، و حالا آماده شروع هستید!</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full content-baseline gap-16 rounded-3xl bg-gray-100 px-12 py-16">
                <span className="text-6xl text-blue-500 font-bold">2</span>
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl font-bold text-gray-900">
                    <div>دریافت قیمت</div>
                  </h4>
                  <div className="text-gray-600">
                    <div>کشور مقصد، ارز فرستنده و گیرنده و مبلغ را برای ایجاد یک پیش‌فاکتور انتخاب کنید.</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full content-baseline gap-16 rounded-3xl bg-gray-100 px-12 py-16">
                <span className="text-6xl text-blue-500 font-bold">3</span>
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl font-bold text-gray-900">
                    <div>گیرنده خود را اضافه کنید</div>
                  </h4>
                  <div className="text-gray-600">
                    <div>اطلاعات پرداخت گیرنده خود را ارائه دهید (به جزئیاتی مانند نام و آدرس آنها نیاز خواهید داشت).</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full content-baseline gap-16 rounded-3xl bg-gray-100 px-12 py-16">
                <span className="text-6xl text-blue-500 font-bold">4</span>
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl font-bold text-gray-900">
                    <div>هویت خود را تأیید کنید</div>
                  </h4>
                  <div className="text-gray-600">
                    <div>برای برخی از نقل و انتقالات، ممکن است به مدارک شناسایی نیاز داشته باشیم تا تأیید کنیم که واقعاً شما هستید و پول شما را ایمن نگه داریم.</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full content-baseline gap-16 rounded-3xl bg-gray-100 px-12 py-16">
                <span className="text-6xl text-blue-500 font-bold">5</span>
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl font-bold text-gray-900">
                    <div>تایید قیمت</div>
                  </h4>
                  <div className="text-gray-600">
                    <div>کشور مقصد، ارز فرستنده و گیرنده و مبلغ را برای ایجاد یک پیش‌فاکتور انتخاب کنید.</div>
                  </div>
                </div>
              </div>
              <div className="grid w-full content-baseline gap-16 rounded-3xl bg-gray-100 px-12 py-16">
                <span className="text-6xl text-blue-500 font-bold">6</span>
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl font-bold text-gray-900">
                    <div>پیگیری انتقال وجه</div>
                  </h4>
                  <div className="text-gray-600">
                    <div>ببینید پولتان کجاست و چه زمانی به دست گیرنده‌تان می‌رسد. از پشتیبانی چت زنده، تلفن و ایمیل بهره‌مند شوید.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24 flex justify-center bg-gradient-to-r from-[#000733] to-[#000c50] pb-0 pt-16 md:py-24">
          <div className="max-w-screen-xl px-4 md:px-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
                <h3 className="text-white text-2xl md:text-3xl">
                  <div>با اپلیکیشن Xe، ارزهای خود را در حال حرکت مدیریت کنید</div>
                </h3>
                <div className="text-gray-300">
                  <div>
                    این سرویس هر آنچه را که برای انتقال وجه بین‌المللی نیاز دارید، ارائه می‌دهد - آسان، امن و با کارمزد کم که از صفر دلار شروع می‌شود.
                  </div>
                </div>
                <div className="mt-6 flex w-full flex-wrap gap-2 sm:w-auto md:mt-4 md:gap-4">
                  <a href="" className="flex items-center justify-center transition-colors duration-200 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold">برنامه را دانلود کنید</a>
                </div>
                <figure className="hidden w-32 relative text-center md:block">
                  <img src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F1Ib5dMI9g8fuveujpaFGUF%2F1ac5a3df56620968d1b41b2bc79ea03a%2Fdownload-app-qr-code.png&w=384&q=75" width={272} height={273} className="text-transparent" />
                </figure>
              </div>
              <figure className="flex justify-center text-center relative">
                <div className="relative top-8 z-10 max-w-56 md:absolute md:-top-10 md:max-w-[320px] ">
                  <img src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2FEiSp5YHxcYnsXDJOi3Gck%2F8cb25e3642641d09ea97fcb9fb6dc793%2Fxe-app-mockup.png&w=750&q=75" width={712} height={1400} className="text-transparent" />
                </div>
              </figure>
            </div>
          </div>
        </div>
        <section className="flex justify-center bg-white py-20 ">
          <div className="flex w-full max-w-screen-xl flex-col gap-16 px-4 md:px-10">
            <div className="grid gap-3">
              <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900">
                <div>ابزارهای ارزی Xe</div>
              </h2>
              <h3 className="text-center md:text-xl text-gray-500">
                <div>بینش‌های فارکس، شاخص‌های پیشرفته، فیدهای خبری زنده و داشبوردهای قابل تنظیم</div>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="group relative grid-rows-[auto_auto] overflow-hidden rounded-3xl bg-gray-100 [grid-template-areas:'content''image'] grid lg:col-span-3 lg:grid-cols-[1fr_480px] lg:[grid-template-areas:'image_content']">
                <div className="flex flex-col gap-4 p-6 [grid-area:content]">
                  <span className="flex w-10 h-10 items-center justify-center rounded-full bg-blue-100 [&_img]:max-w-6">
                    <img src="https://images.ctfassets.net/izij9rskv5y1/778NDdo3lfuOnYCEh4NxOw/6ce44d30192ffce72af979b473cc3c80/paper-plane.png?fm=webp" />
                  </span>
                  <h3 className="text-2xl text-gray-700 font-bold">
                    <div>نقل و انتقالات بین‌المللی</div>
                  </h3>
                  <div className="text-gray-600">
                    <div>به ۱۹۰ کشور با ۱۳۰ واحد پول پول ارسال کنید. از روش‌های انعطاف‌پذیر برای ارسال و دریافت پول لذت ببرید.</div>
                  </div>
                  <a href="" className="mt-auto flex items-center gap-2 font-bold transition-colors duration-200 py-3 text-blue-500 rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">بیشتر بدانید</span>

                    <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                  </a>
                </div>
                <div className="flex justify-self-center overflow-hidden drop-shadow-sm transition-all duration-300 [grid-area:image] group-hover:scale-[1.02] group-hover:drop-shadow-xl m-6 max-h-[449px]">
                  <img src="https://www.xe.com/international-transfers-mockup.svg" width={911} height={514} />
                </div>
              </div>
              <div className="group relative grid-rows-[auto_auto] overflow-hidden rounded-3xl bg-gray-100 [grid-template-areas:'content''image'] grid lg:col-span-1">
                <div className="flex flex-col gap-4 p-6 [grid-area:content]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 [&_img]:max-w-6">
                    <img src="https://images.ctfassets.net/izij9rskv5y1/6sELUtbuxHwGcl6RF2xcvZ/b4def868e51d89bba7d6dcdc594caa17/bell-alert.png?fm=webp" />
                  </span>
                  <h3 className="text-2xl text-gray-700 font-bold">
                    <div>هشدارهای نرخ</div>
                  </h3>
                  <div className="text-gray-600">
                    <div>برای هر جفت ارزی، هشدار نرخ رایگان تنظیم کنید. ما با نرخ دلخواه شما به شما اطلاع خواهیم داد.</div>
                  </div>
                  <a href="" className="mt-auto flex items-center gap-2 font-bold transition-colors duration-200 py-3 text-blue-500 rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">بیشتر بدانید</span>

                    <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                  </a>
                </div>
                <div className="m-auto flex justify-self-center overflow-hidden drop-shadow-sm transition-all duration-300 [grid-area:image] group-hover:scale-[1.02] group-hover:drop-shadow-xl h-[300px] w-full max-w-[352px]">
                  <img className="text-transparent object-cover object-top" src="https://www.xe.com/rate-alerts-phone-mockup.svg" width={911} height={514} />
                </div>
              </div>
              <div className="group relative grid grid-rows-[auto_auto] overflow-hidden rounded-3xl bg-gray-100 [grid-template-areas:'content''image'] lg:col-span-2">
                <div className="flex flex-col gap-4 p-6 [grid-area:content]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full">
                  </span>
                  <h3 className="text-2xl text-gray-700 font-bold">
                    <div>نرخ‌های ارز تاریخی</div>
                  </h3>
                  <div className="text-gray-600">
                    <div>روند نرخ هر ارزی را طی چند روز، هفته، ماه یا سال تجزیه و تحلیل کنید. از طریق API داده‌های ارزی Xe، یک فید خودکار ارزی دریافت کنید.</div>
                  </div>
                  <a href="" className="mt-auto flex items-center gap-2 font-bold transition-colors duration-200 py-3 text-blue-500 rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">بیشتر بدانید</span>

                    <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                  </a>
                </div>
                <div className="m-auto flex justify-self-center overflow-hidden drop-shadow-sm transition-all duration-300 [grid-area:image] group-hover:scale-[1.02] group-hover:drop-shadow-xl w-full self-end px-6 lg:max-w-[744px]">
                  <img className="relative !-bottom-4 self-end object-contain object-bottom" src="https://www.xe.com/historical-currency-mockup.svg" width={1036} height={485} />
                </div>
              </div>
              <div className="group relative grid grid-rows-[auto_auto] overflow-hidden rounded-3xl bg-gray-100 [grid-template-areas:'content''image'] lg:col-span-2">
                <div className="flex flex-col gap-4 p-6 [grid-area:content]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full">
                  </span>
                  <h3 className="text-2xl text-gray-700 font-bold">
                    <div>ماشین حساب IBAN</div>
                  </h3>
                  <div className="text-gray-600">
                    <div>برای اطمینان از ارسال وجه به مقصد صحیح، IBAN (شماره حساب بانکی بین‌المللی) خود را جستجو و تأیید کنید.</div>
                  </div>
                  <a href="" className="mt-auto flex items-center gap-2 font-bold transition-colors duration-200 py-3 text-blue-500 rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">بیشتر بدانید</span>

                    <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                  </a>
                </div>
                <div className="m-auto flex justify-self-center overflow-hidden drop-shadow-sm transition-all duration-300 [grid-area:image] group-hover:scale-[1.02] group-hover:drop-shadow-xl relative top-5 max-h-[240px] w-full max-w-[436px] items-center">
                  <img className="top-2 object-cover object-top" src="https://www.xe.com/iban-calculator-mockup.svg" width={967} height={364} />
                </div>
              </div>
              <div className="group relative grid-rows-[auto_auto] overflow-hidden rounded-3xl bg-gray-100 [grid-template-areas:'content''image'] grid lg:col-span-1">
                <div className="flex flex-col gap-4 p-6 [grid-area:content]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 [&_img]:max-w-6">
                    <img src="https://images.ctfassets.net/izij9rskv5y1/4SufrNJXXc9HOeU5veWyVX/90801008579ee4d3b383e2f3084acf47/envelope.png?fm=webp" />
                  </span>
                  <h3 className="text-2xl text-gray-700 font-bold">
                    <div>به‌روزرسانی‌های ایمیل ارزی</div>
                  </h3>
                  <div className="text-gray-600">
                    <div>تحلیل روزانه بازارها، نرخ ارز و اخبار را مستقیماً در صندوق ورودی خود دریافت کنید.</div>
                  </div>
                  <a href="" className="mt-auto flex items-center gap-2 font-bold transition-colors duration-200 py-3 text-blue-500 rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                    <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">بیشتر بدانید</span>

                    <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                  </a>
                </div>
                <div className="m-auto flex justify-self-center overflow-hidden drop-shadow-sm transition-all duration-300 [grid-area:image] group-hover:scale-[1.02] group-hover:drop-shadow-xl relative px-6">
                  <img className="rounded-t-2xl object-cover object-top" src="https://www.xe.com/currency-email-mockup.svg" width={911} height={514} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-14 bg-white py-20">
          <div className="flex w-full max-w-screen-xl flex-col gap-16 px-4 md:px-10">
            <div className="rounded-3xl bg-gray-100 px-8 py-8 md:px-20">
              <div className="h-min-20 grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr]">
                <div className="mx-auto inline-flex w-fit border-b-2 border-solid border-gray-300 p-4 text-center text-2xl font-medium text-gray-800 lg:border-b-0 lg:border-l-2 lg:pr-10">
                  <div>مورد اعتماد توسط</div>
                </div>
                <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-4">
                  <figure className="relative flex w-auto max-w-[140px] justify-center">
                    <img src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F7ffHYC6Six8oVKhDAloKp4%2F9e92e4d05b307b4a41bce68def0266f9%2Fshopify-logo.png&w=384&q=75" width={322} height={96} className="text-transparent" />
                  </figure>
                  <figure className="relative flex w-auto max-w-[140px] justify-center">
                    <img src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F2uH8KKQYetOhgzjYISGAtD%2F00f15d6ea2f68df5f4c80708cfbede39%2Fimage_23.png&w=384&q=75" width={370} height={92} className="text-transparent" />
                  </figure>
                  <figure className="relative flex w-auto max-w-[140px] justify-center">
                    <img src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F1xPpRFXt2EsbZVgQjdtbco%2Fb880c256ac7a03513f44283e1a1b8405%2Fimage_25.png&w=384&q=75" width={372} height={76} className="text-transparent" />
                  </figure>
                  <figure className="relative flex w-auto max-w-[140px] justify-center">
                    <img src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F3VnZtQRYT6BaidffS7GOrO%2Fbdd37e384f3b0c703642fd4e76d8c414%2Fxero-circle-logo.png&w=48&q=75" width={48} height={48} className="text-transparent" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white py-16 ">
          <div className="m-auto max-w-screen-xl px-4 md:px-10">
            <div className="grid gap-3">
              <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
                <div>میلیون‌ها نفر در سراسر جهان به Xe اعتماد دارند</div>
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="mt-16 flex w-full flex-col gap-6 lg:flex-row">
                <div className="grid w-full content-baseline gap-4 rounded-3xl bg-gray-100 px-10 py-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 20" aria-hidden="true" style={{ height: '26px' }}><defs><linearGradient id="trustpilotStars-1" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#00B67A"></stop><stop offset="1" stop-color="#00B67A"></stop><stop offset="1" stop-color="#DCDCE6"></stop></linearGradient></defs><path fill="#fff" d="M1.737 0h17.794v19.412H1.737zM69.678 0h17.794v19.412H69.678zM92.325 0h17.794v19.412H92.325zM47.031 0h17.794v19.412H47.031zM24.384 0h17.794v19.412H24.384z"></path><path fill="url(#trustpilotStars-1)" fill-rule="evenodd" d="M19.912 0v19.412H.5V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1L8.78 8.272H4.14l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L10.206 3.64zM65.207 0v19.412H45.795V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L55.501 3.64zM42.559 0v19.412H23.147V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76L38.92 8.27h-4.64L32.853 3.64zM87.853 0v19.412H68.441V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64L78.148 3.64zM110.5 0v19.412H91.088V0H110.5zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64l-1.426-4.631z" clip-rule="evenodd"></path></svg>
                  <h4 className="text-lg">
                    خیلی راحت تونستم تمومش کنم…
                  </h4>
                  <p className="text-sm">
                    انجام تراکنش خیلی راحت بود
                  </p>
                  <hr className="h-[1px] w-16 bg-gray-900 opacity-45" />
                  <span className="text-sm font-bold">Anne Burgess</span>
                </div>
                <div className="grid w-full content-baseline gap-4 rounded-3xl bg-gray-100 px-10 py-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 20" aria-hidden="true" style={{ height: '26px' }}><defs><linearGradient id="trustpilotStars-1" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#00B67A"></stop><stop offset="1" stop-color="#00B67A"></stop><stop offset="1" stop-color="#DCDCE6"></stop></linearGradient></defs><path fill="#fff" d="M1.737 0h17.794v19.412H1.737zM69.678 0h17.794v19.412H69.678zM92.325 0h17.794v19.412H92.325zM47.031 0h17.794v19.412H47.031zM24.384 0h17.794v19.412H24.384z"></path><path fill="url(#trustpilotStars-1)" fill-rule="evenodd" d="M19.912 0v19.412H.5V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1L8.78 8.272H4.14l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L10.206 3.64zM65.207 0v19.412H45.795V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L55.501 3.64zM42.559 0v19.412H23.147V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76L38.92 8.27h-4.64L32.853 3.64zM87.853 0v19.412H68.441V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64L78.148 3.64zM110.5 0v19.412H91.088V0H110.5zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64l-1.426-4.631z" clip-rule="evenodd"></path></svg>
                  <h4 className="text-lg">
                    خدمات عالی
                  </h4>
                  <p className="text-sm">
                    همیشه راهگشا و مفید.
                  </p>
                  <hr className="h-[1px] w-16 bg-gray-900 opacity-45" />
                  <span className="text-sm font-bold">Lee David Richardson</span>
                </div>
                <div className="grid w-full content-baseline gap-4 rounded-3xl bg-gray-100 px-10 py-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 20" aria-hidden="true" style={{ height: '26px' }}><defs><linearGradient id="trustpilotStars-1" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#00B67A"></stop><stop offset="1" stop-color="#00B67A"></stop><stop offset="1" stop-color="#DCDCE6"></stop></linearGradient></defs><path fill="#fff" d="M1.737 0h17.794v19.412H1.737zM69.678 0h17.794v19.412H69.678zM92.325 0h17.794v19.412H92.325zM47.031 0h17.794v19.412H47.031zM24.384 0h17.794v19.412H24.384z"></path><path fill="url(#trustpilotStars-1)" fill-rule="evenodd" d="M19.912 0v19.412H.5V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1L8.78 8.272H4.14l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L10.206 3.64zM65.207 0v19.412H45.795V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L55.501 3.64zM42.559 0v19.412H23.147V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76L38.92 8.27h-4.64L32.853 3.64zM87.853 0v19.412H68.441V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64L78.148 3.64zM110.5 0v19.412H91.088V0H110.5zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64l-1.426-4.631z" clip-rule="evenodd"></path></svg>
                  <h4 className="text-lg">
                    سادگی رابط کاربری تحت وب
                  </h4>
                  <p className="text-sm">
                    سادگی رابط کاربری تحت وب، پشتیبانی عالی از مشتری در صورت بروز مشکل با ارائه راه‌حل سریع، سرعت معقول تراکنش‌ها برای انتقال وجه، نرخ تبدیل ارز عالی.
                  </p>
                  <hr className="h-[1px] w-16 bg-gray-900 opacity-45" />
                  <span className="text-sm font-bold">Unpub BostonCustomer</span>
                </div>
              </div>
              <div className="flex rounded-3xl bg-gray-100">
                <section className="flex md:flex-row flex-col w-full flex-wrap justify-between p-[48px] items-center gap-[2rem]">

                  <a className="flex items-center flex-row-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 115 25" width="140px"><path fill="#000" d="M16.987 13.295a5.681 5.681 0 012.706-4.766 5.815 5.815 0 00-4.582-2.477c-1.928-.203-3.797 1.153-4.78 1.153-1 0-2.513-1.133-4.142-1.1a6.102 6.102 0 00-5.135 3.132c-2.22 3.844-.564 9.493 1.563 12.6 1.064 1.522 2.308 3.222 3.935 3.161 1.592-.066 2.187-1.015 4.109-1.015 1.904 0 2.462 1.015 4.123.977 1.708-.028 2.785-1.528 3.811-3.064a12.582 12.582 0 001.744-3.55 5.49 5.49 0 01-3.352-5.05zm-3.135-9.288A5.593 5.593 0 0015.132 0a5.691 5.691 0 00-3.683 1.905 5.323 5.323 0 00-1.313 3.86 4.705 4.705 0 003.716-1.758zm23.264 12.278h-5.434l-1.305 3.853h-2.301l5.147-14.256h2.39l5.148 14.256H38.42l-1.304-3.853zm-4.871-1.778h4.307L34.43 8.253h-.06l-2.124 6.254zm19.631.435c0 3.23-1.729 5.305-4.337 5.305a3.523 3.523 0 01-3.27-1.819h-.05v5.148h-2.134V9.744h2.066v1.73h.039a3.687 3.687 0 013.31-1.838c2.637 0 4.376 2.085 4.376 5.306zm-2.193 0c0-2.104-1.087-3.488-2.747-3.488-1.63 0-2.726 1.413-2.726 3.488 0 2.094 1.096 3.497 2.726 3.497 1.66 0 2.747-1.374 2.747-3.497zm13.633 0c0 3.23-1.729 5.305-4.338 5.305a3.523 3.523 0 01-3.27-1.819h-.05v5.148h-2.133V9.744h2.065v1.73h.04a3.687 3.687 0 013.31-1.838c2.637 0 4.376 2.085 4.376 5.306zm-2.193 0c0-2.104-1.087-3.488-2.747-3.488-1.63 0-2.726 1.413-2.726 3.488 0 2.094 1.096 3.497 2.726 3.497 1.66 0 2.747-1.374 2.747-3.497zm9.755 1.224c.158 1.413 1.531 2.341 3.408 2.341 1.798 0 3.092-.928 3.092-2.203 0-1.106-.78-1.769-2.628-2.223l-1.847-.445c-2.618-.632-3.834-1.856-3.834-3.843 0-2.46 2.144-4.149 5.188-4.149 3.012 0 5.077 1.69 5.147 4.15H77.25c-.129-1.423-1.305-2.282-3.024-2.282-1.718 0-2.894.869-2.894 2.133 0 1.008.75 1.601 2.588 2.055l1.571.386c2.925.691 4.14 1.866 4.14 3.952 0 2.667-2.124 4.337-5.503 4.337-3.162 0-5.296-1.631-5.434-4.21h2.184zm13.356-8.882v2.46h1.976v1.69h-1.976v5.73c0 .89.396 1.304 1.264 1.304.235-.004.47-.02.702-.05v1.68c-.39.073-.787.106-1.185.099-2.104 0-2.925-.79-2.925-2.806v-5.958h-1.51v-1.69h1.51V7.285h2.144zm3.122 7.656c0-3.27 1.926-5.325 4.93-5.325 3.013 0 4.93 2.055 4.93 5.325 0 3.28-1.907 5.326-4.93 5.326-3.023 0-4.93-2.046-4.93-5.326zm7.686 0c0-2.243-1.028-3.567-2.757-3.567-1.728 0-2.755 1.334-2.755 3.567 0 2.253 1.027 3.567 2.755 3.567 1.73 0 2.757-1.314 2.757-3.567zm3.933-5.196h2.034v1.77h.05a2.479 2.479 0 012.5-1.878c.246-.001.491.025.731.08v1.995a2.986 2.986 0 00-.959-.13 2.149 2.149 0 00-2.223 2.392v6.165h-2.133V9.744zm15.151 7.34c-.287 1.887-2.124 3.182-4.475 3.182-3.024 0-4.901-2.026-4.901-5.276 0-3.26 1.887-5.375 4.811-5.375 2.876 0 4.684 1.976 4.684 5.127v.73h-7.341v.13a2.709 2.709 0 002.796 2.944 2.35 2.35 0 002.4-1.462h2.026zm-7.212-3.102h5.196a2.498 2.498 0 00-2.549-2.638 2.63 2.63 0 00-2.647 2.638z"></path></svg>
                    <div className="flex me-[20px] flex-col">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.5 14.9" aria-hidden="true" width="100px"><defs><linearGradient id="stars-0.96" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#F19937"></stop><stop offset="0.96" stop-color="#F19937"></stop><stop offset="0.96" stop-color="#FFFFFF"></stop></linearGradient></defs><path fill="url(#stars-0.96)" d="M10 4.8L7.7 0 5.3 4.8 0 5.6l3.8 3.8-.9 5.5 4.8-2.6 4.8 2.6-1-5.5 3.8-3.8zM28.3 4.8L26 0l-2.4 4.8-5.3.8 3.8 3.8-1 5.5 4.9-2.6 4.8 2.6-1-5.5 3.8-3.8zM46.6 4.8L44.2 0l-2.3 4.8-5.3.8 3.8 3.8-1 5.5 4.8-2.6 4.9 2.6-1-5.5 3.8-3.8zM64.9 4.8L62.5 0l-2.3 4.8-5.3.8 3.8 3.8-1 5.5 4.8-2.6 4.8 2.6-.9-5.5 3.8-3.8zM88.5 5.6l-5.3-.8L80.8 0l-2.4 4.8-5.2.8L77 9.4l-1 5.5 4.8-2.6 4.8 2.6-.9-5.5z"></path></svg>
                      <p className="text-sm">4.8/5,<span>58.6k ratings</span></p>
                    </div>
                  </a>
                  <a className="flex items-center flex-row-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 -34.1 8137.4 1948.7" width="140px"><linearGradient id="a" x1="2891.046" x2="2784.353" y1="1504.53" y2="1449.456" gradientTransform="matrix(11.64 0 0 -22.55 -32777 34043.164)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00a0ff"></stop><stop offset="0.007" stop-color="#00a1ff"></stop><stop offset="0.26" stop-color="#00beff"></stop><stop offset="0.512" stop-color="#00d2ff"></stop><stop offset="0.76" stop-color="#00dfff"></stop><stop offset="1" stop-color="#00e3ff"></stop></linearGradient><linearGradient id="b" x1="2935.234" x2="2739.434" y1="1422.774" y2="1422.774" gradientTransform="matrix(9.145 0 0 -7.7 -25077.303 11907.105)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe000"></stop><stop offset="0.409" stop-color="#ffbd00"></stop><stop offset="0.775" stop-color="orange"></stop><stop offset="1" stop-color="#ff9c00"></stop></linearGradient><linearGradient id="c" x1="2948.769" x2="2836.642" y1="1431.331" y2="1285.867" gradientTransform="matrix(15.02 0 0 -11.5775 -43191.684 17692.938)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3a44"></stop><stop offset="1" stop-color="#c31162"></stop></linearGradient><linearGradient id="d" x1="2862.393" x2="2912.461" y1="1571.747" y2="1506.756" gradientTransform="matrix(15.02 0 0 -11.5715 -43191.684 17672.39)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32a071"></stop><stop offset="0.069" stop-color="#2da771"></stop><stop offset="0.476" stop-color="#15cf74"></stop><stop offset="0.801" stop-color="#06e775"></stop><stop offset="1" stop-color="#00f076"></stop></linearGradient><g fill-rule="evenodd" clip-rule="evenodd"><path fill="url(#a)" d="M33.7 29.2C12.3 52.2 0 87.6 0 133.6v1636.2c0 46 12.3 81.4 34.5 103.6l5.8 4.9 916.8-916.8v-20.6L39.5 24.3l-5.8 4.9z"></path><path fill="url(#b)" d="M1262.1 1268.3L956.3 962.4V941l305.9-305.9 6.6 4.1 361.8 205.6c103.6 58.4 103.6 154.6 0 213.8l-361.8 205.6c-.1 0-6.7 4.1-6.7 4.1z"></path><path fill="url(#c)" d="M1268.7 1264.2L956.3 951.7 33.7 1874.3c33.7 36.2 90.4 40.3 153.8 4.9z"></path><path fill="url(#d)" d="M1268.7 639.3L187.5 25.1C124.2-11.1 67.4-6.2 33.7 30l922.5 921.7z"></path><path d="M1262.1 1257.6L188.3 1867.7c-60 34.5-113.5 32.1-148 .8l-5.8 5.8 5.8 4.9c34.5 31.2 88 33.7 148-.8l1081.2-614.2-7.4-6.6z" opacity="0.2"></path><path d="M1630.5 1047.9l-369.2 209.7 6.6 6.6 361.8-205.6c51.8-29.6 77.3-68.2 77.3-106.9-3.3 35.4-29.6 69.1-76.5 96.2z" opacity="0.12"></path><path fill="#fff" d="M187.5 35.8l1443 819.8c46.9 26.3 73.2 60.8 77.3 96.2 0-38.6-25.5-77.3-77.3-106.9L187.5 25.1C83.9-34.1 0 15.2 0 133.6v10.7C0 25.9 83.9-22.6 187.5 35.8z" opacity="0.25"></path><path fill="#808285" d="M2060 899.8c0-262.1 220.3-475.5 482.4-475.5 144.9 0 248 56.9 325.8 131l-91.6 91.6c-55.6-52.2-131-92.7-234.3-92.7-191.4 0-341 154.1-341 345.5s149.6 345.7 340.9 345.7c124.1 0 194.7-49.8 240-95.2 37.1-37.1 61.4-90.4 70.8-163.5h-310.6V857.1h437.2c4.6 23.2 7 51 7 81.1 0 97.3-26.7 218-112.6 303.9-83.6 87-190.2 133.4-331.7 133.4-262.2 0-482.5-213.2-482.5-475.5zM3340 763c-169.3 0-307.5 128.8-307.5 306.1 0 176.4 138.1 306.1 307.5 306.1s307.3-129.9 307.3-306.2c0-177.3-138-306.1-307.3-306zm0 491.8c-92.7 0-172.8-76.5-172.8-185.6 0-110.2 80-185.6 172.8-185.6 92.7 0 172.7 75.3 172.7 185.6 0 109-79.9 185.6-172.7 185.6zM4010.5 763c-169.3 0-307.3 128.8-307.3 306.1 0 176.4 138 306.1 307.3 306.1s307.3-129.9 307.3-306.2c0-177.3-137.9-306.1-307.3-306zm0 491.8c-92.7 0-172.8-76.5-172.8-185.6 0-110.2 80-185.6 172.8-185.6 92.7 0 172.8 75.3 172.8 185.6 0 109-80.1 185.6-172.8 185.6zm822.9-473.2v49.8h-4.6c-30.1-36.1-88.1-68.5-161.1-68.5-153.1 0-293.6 134.6-293.6 307.5 0 171.5 140.4 305 293.6 305 73 0 131-32.4 161.1-69.5h4.6v44c0 117.1-62.6 179.8-163.5 179.8-82.4 0-133.4-59.2-154.3-108.9l-117.2 48.7c33.6 81.1 123 180.9 271.4 180.9 157.6 0 291-92.9 291-319V781.5zm-154.2 473.2c-92.7 0-170.6-77.8-170.6-184.4 0-107.8 77.8-186.7 170.6-186.7 91.6 0 163.5 78.8 163.5 186.7.1 106.6-71.8 184.4-163.5 184.4zm374.5-798h134.6v900h-134.6zm503.5 798c-68.4 0-117.2-31.4-148.3-92.7l409.4-169.5-14.1-34.8C5778.8 889.5 5701 763 5542.1 763c-157.7 0-288.8 124.1-288.8 306.2 0 171.5 129.9 306.1 303.9 306.1 140.4 0 221.6-85.7 255.2-135.7l-104.4-69.5c-34.9 51.1-82.5 84.8-150.8 84.7zm-10.5-373.5c53.3 0 98.5 26.7 113.6 64.9l-273.8 113.7c-3.4-118.3 91.7-178.6 160.2-178.6zm862.2-424.5h-321.8v900h134.3v-340.9H6409c148.9 0 295.3-107.8 295.3-279.6 0-171.5-146.3-279.4-295.1-279.4zm3.5 433.8h-191V582h191c100.4 0 157.6 83.3 157.6 154.3 0 69.8-57.2 154.3-157.6 154.3zm500.2 466.2v-900h-134.3v900zm603.3-1.6v-345c0-159.8-119.4-248.9-273.5-248.9-97.1 0-197.8 42.9-239.5 137.8l119.2 49.7c25.5-49.7 72.9-66 122.8-66 69.4 0 140 41.7 141.1 115.9v9.3c-24.3-13.9-76.3-34.8-140.1-34.8-128.5 0-259.3 70.6-259.3 202.6 0 120.5 105.4 198 223.5 198 90.4 0 140.1-40.5 171.3-87.9h4.6v69.5h129.8zm-289.5-100.6c-44 0-105.4-22-105.4-76.3 0-69.5 76.5-96.3 142.5-96.3 59.1 0 86.8 12.7 122.8 30.1-10.3 80.8-78.6 141.5-159.9 142.5zM7988.2 781l-154 390.1h-4.6L7669.8 781h-144.7l239.6 545.4-136.7 303.3h140.1L8137.4 781z"></path></g></svg>
                    <div className="flex me-[20px] flex-col">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.5 14.9" aria-hidden="true" width="100px"><defs><linearGradient id="stars-0.96" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#F19937"></stop><stop offset="0.96" stop-color="#F19937"></stop><stop offset="0.96" stop-color="#FFFFFF"></stop></linearGradient></defs><path fill="url(#stars-0.96)" d="M10 4.8L7.7 0 5.3 4.8 0 5.6l3.8 3.8-.9 5.5 4.8-2.6 4.8 2.6-1-5.5 3.8-3.8zM28.3 4.8L26 0l-2.4 4.8-5.3.8 3.8 3.8-1 5.5 4.9-2.6 4.8 2.6-1-5.5 3.8-3.8zM46.6 4.8L44.2 0l-2.3 4.8-5.3.8 3.8 3.8-1 5.5 4.8-2.6 4.9 2.6-1-5.5 3.8-3.8zM64.9 4.8L62.5 0l-2.3 4.8-5.3.8 3.8 3.8-1 5.5 4.8-2.6 4.8 2.6-.9-5.5 3.8-3.8zM88.5 5.6l-5.3-.8L80.8 0l-2.4 4.8-5.2.8L77 9.4l-1 5.5 4.8-2.6 4.8 2.6-.9-5.5z"></path></svg>
                      <p className="text-sm">4.8/5,<span>221k ratings</span></p>
                    </div>
                  </a>
                  <a className="flex items-center flex-row-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 125 30" style={{ width: '140px', color: '#5c667b' }}><path fill="currentColor" fill-rule="evenodd" d="M33.493 9.512h12.565v2.441h-4.94v13.724H38.4V11.953h-4.919v-2.44h.011zm12.029 4.46h2.322v2.26h.044c.077-.32.219-.628.427-.925.208-.296.46-.582.756-.821a4.02 4.02 0 01.986-.605 2.912 2.912 0 011.106-.228c.285 0 .493.011.603.023.11.011.22.034.34.046v2.486a7.682 7.682 0 00-.537-.08 4.376 4.376 0 00-.537-.034 2.722 2.722 0 00-2.147 1.027 3.93 3.93 0 00-.657 1.255c-.165.502-.242 1.072-.242 1.722v5.567h-2.475V13.973h.01zm17.966 11.705h-2.432v-1.632h-.044a3.45 3.45 0 01-1.358 1.415c-.603.354-1.217.536-1.84.536-1.48 0-2.553-.377-3.21-1.14-.658-.765-.987-1.917-.987-3.457v-7.427h2.476v7.176c0 1.026.186 1.757.57 2.179.372.422.91.638 1.588.638.526 0 .953-.08 1.304-.25.35-.172.635-.388.843-.674.22-.273.373-.616.471-1.003.1-.388.143-.81.143-1.267v-6.787h2.476v11.693zm4.217-3.753c.077.752.351 1.277.822 1.585.482.297 1.052.456 1.72.456.23 0 .493-.022.789-.057.296-.034.58-.114.832-.216.263-.103.471-.263.647-.468.164-.205.24-.468.23-.799a1.122 1.122 0 00-.35-.81c-.22-.216-.494-.376-.833-.513a8.087 8.087 0 00-1.162-.33c-.438-.092-.876-.195-1.325-.297-.46-.103-.91-.24-1.337-.388a4.024 4.024 0 01-1.15-.616 2.68 2.68 0 01-.81-.981c-.209-.4-.307-.89-.307-1.483 0-.639.153-1.164.449-1.597a3.446 3.446 0 011.128-1.038c.46-.263.964-.445 1.523-.56a8.92 8.92 0 011.6-.159c.58 0 1.139.069 1.664.194.526.126 1.008.33 1.436.628.427.285.777.661 1.062 1.117.285.457.46 1.016.537 1.666h-2.585c-.12-.616-.384-1.038-.811-1.243-.427-.217-.92-.32-1.468-.32-.175 0-.383.011-.624.046-.242.034-.46.09-.68.17-.208.08-.383.206-.536.366a.903.903 0 00-.22.627c0 .32.11.57.318.765.208.194.482.353.822.49.34.126.723.24 1.161.33.438.092.887.195 1.347.297.45.103.888.24 1.326.388.438.149.822.354 1.161.616.34.263.614.582.822.97.208.388.318.878.318 1.449 0 .696-.154 1.277-.46 1.768a3.71 3.71 0 01-1.184 1.175 5.435 5.435 0 01-1.621.662 7.827 7.827 0 01-1.764.205c-.712 0-1.37-.08-1.972-.251a4.716 4.716 0 01-1.566-.753 3.698 3.698 0 01-1.041-1.266c-.252-.502-.383-1.107-.405-1.803h2.497v-.023zm8.173-7.951h1.873v-3.514h2.476v3.514h2.235V15.9h-2.235v6.252c0 .273.01.502.033.707.022.194.076.365.153.502a.71.71 0 00.362.308c.164.068.372.102.657.102.175 0 .35 0 .526-.01.175-.012.35-.035.526-.08v1.996c-.274.034-.548.057-.8.09a6.14 6.14 0 01-.8.047c-.657 0-1.183-.069-1.577-.195-.395-.125-.712-.319-.931-.57-.23-.25-.373-.559-.46-.935a7.306 7.306 0 01-.143-1.29v-6.9H75.9v-1.951h-.022zm8.337 0h2.344v1.585h.044c.35-.684.832-1.163 1.457-1.46a4.64 4.64 0 012.026-.445c.888 0 1.655.16 2.312.49a4.55 4.55 0 011.643 1.335c.438.57.756 1.232.975 1.985.22.753.329 1.563.329 2.419 0 .787-.099 1.551-.296 2.281a6.219 6.219 0 01-.887 1.962 4.414 4.414 0 01-1.512 1.358c-.614.342-1.326.513-2.158.513-.362 0-.723-.034-1.085-.103a4.634 4.634 0 01-1.04-.33 3.733 3.733 0 01-1.633-1.404h-.044V30h-2.475V13.973zm8.654 5.863a6.05 6.05 0 00-.197-1.54 4.23 4.23 0 00-.592-1.323 3.062 3.062 0 00-.975-.924 2.648 2.648 0 00-1.347-.354c-1.04 0-1.83.377-2.355 1.13-.526.752-.79 1.756-.79 3.011 0 .593.067 1.14.209 1.643.142.502.34.935.624 1.3.274.365.603.65.986.856.384.216.833.32 1.337.32.57 0 1.04-.126 1.435-.366.394-.24.712-.559.964-.935.252-.388.438-.822.548-1.312a7.67 7.67 0 00.153-1.506zM97.24 9.512h2.476v2.441H97.24v-2.44zm0 4.46h2.476v11.705H97.24V13.973zm4.689-4.46h2.476v16.165h-2.476V9.512zm10.067 16.484c-.898 0-1.698-.16-2.399-.468a5.296 5.296 0 01-1.785-1.277 5.618 5.618 0 01-1.107-1.951 7.812 7.812 0 01-.383-2.487c0-.89.131-1.711.383-2.464a5.617 5.617 0 011.107-1.95 5.043 5.043 0 011.785-1.278c.701-.308 1.501-.468 2.399-.468.899 0 1.698.16 2.4.468a5.295 5.295 0 011.785 1.277 5.617 5.617 0 011.107 1.951 7.72 7.72 0 01.383 2.464c0 .901-.131 1.734-.383 2.487a5.618 5.618 0 01-1.107 1.95 5.044 5.044 0 01-1.785 1.278c-.702.308-1.501.468-2.4.468zm0-2.042c.548 0 1.03-.125 1.435-.365.406-.24.734-.559.997-.947.263-.388.45-.832.581-1.323.121-.49.186-.992.186-1.506 0-.502-.065-.992-.186-1.494a3.989 3.989 0 00-.581-1.323 3.062 3.062 0 00-.997-.936c-.405-.24-.887-.365-1.435-.365-.547 0-1.029.125-1.435.365a3.2 3.2 0 00-.997.936 4.203 4.203 0 00-.58 1.323 6.317 6.317 0 00-.186 1.494c0 .514.065 1.015.186 1.506.12.49.317.935.58 1.323.263.388.592.707.997.947.406.251.888.365 1.435.365zm6.398-9.982h1.873V10.46h2.476v3.514h2.235V15.9h-2.235v6.252c0 .273.011.502.033.707.022.194.077.365.153.502.077.137.198.24.362.308.164.068.372.102.657.102.176 0 .351 0 .526-.01.175-.012.351-.035.526-.08v1.996c-.274.034-.548.057-.8.09a6.138 6.138 0 01-.799.047c-.658 0-1.184-.069-1.578-.195-.394-.125-.712-.319-.931-.57-.23-.25-.373-.559-.46-.935a7.284 7.284 0 01-.143-1.29v-6.9h-1.873v-1.951h-.022z" clip-rule="evenodd"></path><path fill="#00B67A" fill-rule="evenodd" d="M14.514 0l3.423 10.906h11.08l-8.962 6.736 3.422 10.895-8.963-6.736-8.974 6.736 3.434-10.895L0 10.895l11.08.01L14.515 0zm5.54 17.642l-5.54 4.159 6.31-1.693-.77-2.466z" clip-rule="evenodd"></path></svg>
                    <div className="flex me-[20px] flex-col">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 111 20" aria-hidden="true" width="100px"><defs><linearGradient id="trustpilotStars-0.86" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#00B67A"></stop><stop offset="0.86" stop-color="#00B67A"></stop><stop offset="0.86" stop-color="#DCDCE6"></stop></linearGradient></defs><path fill="#fff" d="M1.737 0h17.794v19.412H1.737zM69.678 0h17.794v19.412H69.678zM92.325 0h17.794v19.412H92.325zM47.031 0h17.794v19.412H47.031zM24.384 0h17.794v19.412H24.384z"></path><path fill="url(#trustpilotStars-0.86)" fill-rule="evenodd" d="M19.912 0v19.412H.5V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1L8.78 8.272H4.14l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L10.206 3.64zM65.207 0v19.412H45.795V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76 3.738-2.871h-4.64L55.501 3.64zM42.559 0v19.412H23.147V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.31-1.76L38.92 8.27h-4.64L32.853 3.64zM87.853 0v19.412H68.441V0h19.412zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64L78.148 3.64zM110.5 0v19.412H91.088V0H110.5zm-6.96 12.739l-2.14.597 3.034 2.436-.894-3.033zm-2.746-9.1l-1.426 4.632h-4.64l3.755 2.87-1.426 4.631 3.755-2.87 2.311-1.76 3.737-2.871h-4.64l-1.426-4.631z" clip-rule="evenodd"></path></svg>
                      <p className="text-sm">4.3/5,<span>69.5k ratings</span></p>
                    </div>
                  </a>


                </section>
              </div>
            </div>
          </div>
        </div>
        <section className="flex justify-center bg-white pt-8 md:pt-16 !pb:8 md:!pb-16">
          <div className="px-6 md:px-10 w-full max-w-screen">
            <div className="lg:w-full overflow-hidden rounded-4xl">
              <div className="grid grid-cols-1 content-center md:grid-cols-[1fr_45%] md:[grid-template-areas:'content_image'] [grid-template-areas:'image''content'] bg-blue-950">
                <figure className="flex h-auto w-full overflow-hidden [grid-area:image] lg:h-full">
                  <img width="624" height="452" className="min-h-full object-cover object-center" style={{ color: 'transparent' }} src="https://www.xe.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fizij9rskv5y1%2F2dji7dEcKD4HO5bfbekYNA%2F8f6fad561b4d3e759a3aef22423f5485%2Fxe-global-business-payments-women__1_.jpg&w=640&q=75" />
                </figure>

                <div className="flex flex-col content-center items-start justify-center gap-4 p-2 [grid-area:content] md:gap-6 md:p-4 px-8 py-12 md:px-16 md:py-20">
                  <span className="flex gap-2 rounded-full px-4 py-2 bg-white/10 text-white [&_img]:w-4">
                    <img className="block max-w-full m-auto" src="https://images.ctfassets.net/izij9rskv5y1/2Pdd0eklsbAkJg0lUTKqcE/02ba2ac7f5ecdc748f336c0e04d118db/global-business-paymenst-icon.png?fm=webp" />
                    <p className="text-base">Xe برای کسب و کار</p>
                  </span>
                  <h3 className="text-white font-bold text-3xl tracking-tight md:text-4xl">
                    <div>پرداخت‌های تجاری جهانی ساده‌سازی شدند.</div>
                  </h3>
                  <div className="mb-0 text-base leading-7 text-gray-300 items-start">
                    <p>
                      چه نیاز به پرداخت‌های برون‌مرزی داشته باشید و چه به دنبال راهکارهای مدیریت ریسک ارز خارجی، ما شما را تحت پوشش قرار می‌دهیم. انتقال وجه بین‌المللی را بین ۱۳۰ ارز در بیش از ۱۹۰ کشور برنامه‌ریزی کنید.
                    </p>
                  </div>
                  <div className="mt-6 flex w-full flex-wrap gap-2 md:w-auto md:mt-4 md:gap-4">
                    <a href="" className="flex items-center justify-center gap-2 font-bold transition-colors duration-200 bg-blue-500 px-6 py-3 hover:bg-blue-600 text-white rounded-lg [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:-translate-x-1 overflow-hidden min-w-fit">
                      <span className="text-ellipsis overflow-hidden whitespace-nowrap relative">پرداخت‌های تجاری</span>

                      <span className="relative flex items-center"><GoArrowLeft className="text-2xl" /></span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center bg-white py-16 md:!pt-20 !pt-10 md:!pb-20">
          <div className="m-auto max-w-screen-xl px-4 md:px-10">
            <div className="grid gap-3">
              <h2 className="text-center text-3xl md:text-4xl text-gray-800 font-bold">
                <div>
                  ارسال پول به مقاصد مختلف
                </div>
              </h2>
              <h3 className="text-center md:text-xl text-gray-500">
                <div>اتصال جهان</div>
              </h3>
            </div>
            <div className="mt-20 w-full grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
              <a className="cursor-pointer flex w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/ae.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>امارات متحده عربی</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/al.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>آلبانی</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/ar.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>آرژانتین</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/au.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>استرالیا</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/ba.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>بوسنی و هرزگوین</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/be.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>بلژیک</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/bb.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>باربادوس</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/bd.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>بنگلادش</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/bg.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>بلغارستان</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/bh.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>بحرین</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/bn.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>برونئی دارالسلام</span>
                </p>
              </a>

              <a className="cursor-pointer flex max-w-[342px] items-center gap-2 rounded-2xl bg-gray-100 p-6 hover:shadow-md transition-shadow duration-300 hover:shadow-slate-200">
                <div className="h-[17px] w-[23px] relative me-2 rounded-sm border border-solid border-[#00113326]">
                  <img src="https://www.xe.com/svgs/flags/bs.static.svg" className="absolute h-full w-full inset-0 text-transparent" />
                </div>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-normal">
                  <span className="text-gray-700 me-2">ارسال پول به</span>
                  <span>باهاما</span>
                </p>
              </a>
            </div>
            <div className="flex justify-center py-6 pt-12">
              <button className="flex h-12 items-center justify-center px-8 py-3 font-bold rounded-lg bg-blue-100 text-blue-500 transition-colors duration-200 hover:bg-blue-50">
                نمایش بیشتر
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center bg-gradient-to-bl from-[#000733] to-[#000c50] py-20">
        <div className="flex w-full max-w-screen-xl flex-col gap-12 px-4 md:px-10">
          <section className="relative from-blue-950 to-blue-900 pt-2 bg-none">
            <div className="relative z-10 m-auto flex w-full max-w-screen flex-col items-center gap-4 text-center md:gap-6 ">
              <h2 className="text-center text-white font-bold text-3xl md:text-4xl ">
                <div>ساده‌سازی نقل و انتقالات مالی</div>
              </h2>
              <div className="max-w-[415px] text-[0.95rem] text-gray-300 [&_p]:leading-7">
                <div>Xe به شما کمک می‌کند تا به صورت آنلاین، سریع و با کارمزد کم، به خارج از کشور پول منتقل کنید.</div>
              </div>
              <div className="flex w-full flex-col flex-wrap gap-4 max-w-[504] sm:flex-row">
                <a className="flex min-w-fit flex-[1] items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-blue-400 [&_svg]:hover:translate-x-1 cursor-pointer">
                  <div>شروع کنید</div>
                </a>
                <a className="flex h-12 min-w-fit flex-[1] items-center justify-center rounded-lg bg-blue-100 px-8 py-3 text-[0.95rem] font-semibold text-blue-500 transition-colors duration-200 hover:bg-blue-50 cursor-pointer">
                  <div>برنامه را دانلود کنید</div>
                </a>
              </div>
            </div>
            <div className="relative bottom-20 z-0 flex h-[200px] w-full sm:bottom-14">
              <img src="https://www.xe.com/curved-line-reflection-small.svg" className="-top-[60px] m-auto max-w-[648px] object-cover object-bottom absolute w-full h-full inset-0 text-transparent" />
            </div>
          </section>
          <div className="hidden md:grid grid-cols-4 gap-8 md:grid-flow-col">
            <div className='h-fit row-span-2'>
              <div>
                <p className="mb-4 font-bold text-white">انتقال پول</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول آنلاین</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به هند</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به پاکستان</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به مکزیک</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به ژاپن</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به بریتانیا</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به کانادا</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به استرالیا</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به نیوزیلند</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به کیف پول موبایل</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">انتقال وجه کلان</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">سرعت انتقال</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">هزینه‌های انتقال</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">امنیت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">گزارش کلاهبرداری</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقد و بررسی‌های تراست‌پایلوت</a>
                </li>
              </ul>
            </div>
            <div className='h-fit row-span-2'>
              <div>
                <p className="mb-4 font-bold text-white">کسب و کار XE</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">کسب و کار XE</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نرخ‌های ارسال را بررسی کنید</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">پرداخت‌های تجاری بین‌المللی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقل و انتقالات لحظه‌ای</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">انتقال ارز یکسان</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مدیریت ریسک</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">قراردادهای آتی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">سفارش‌های محدود</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">برنامه‌ریزی منابع سازمانی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">API داده‌های ارزی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">API پرداخت‌ها</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">پرداخت‌های انبوه</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">روش‌های پرداخت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">حقوق و دستمزد کسب و کار</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقش‌های کاربری</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">برنامه همکاری در فروش</a>
                </li>

              </ul>
            </div>
            <div className='h-fit row-span-1'>
              <div>
                <p className="mb-4 font-bold text-white">برنامه‌ها</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اپلیکیشن‌های انتقال پول و ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اپلیکیشن انتقال وجه اندروید</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اپلیکیشن انتقال وجه iOS</a>
                </li>
              </ul>
            </div>
            <div className='h-fit row-span-1'>
              <div>
                <p className="mb-4 font-bold text-white">ابزارها و منابع</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">وبلاگ</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">تبدیل ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نمودارهای ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نرخ ارز تاریخی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">دایره المعارف ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">هشدارهای نرخ ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">خبرنامه‌های ارزی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ماشین حساب IBAN</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">تولیدکننده فاکتور</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ماشین حساب وام مسکن</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">جستجوی کد SWIFT/BIC</a>
                </li>
              </ul>
            </div>
            <div className='h-fit row-span-2'>
              <div>
                <p className="mb-4 font-bold text-white">اطلاعات شرکت</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">درباره ما</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مشارکت‌ها</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">فرصت‌های شغلی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مرکز کمک</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">پشتیبانی اختصاصی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقشه سایت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">قانونی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">حریم خصوصی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">سیاست کوکی‌ها</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مدیر رضایت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اطلاعات انتقال پول</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ثبت شکایت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">دسترسی‌پذیری</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:hidden grid-cols-1 gap-8 w-full">
            <Accordion title="انتقال پول">
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول آنلاین</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به هند</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به پاکستان</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به مکزیک</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به ژاپن</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به بریتانیا</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به کانادا</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به استرالیا</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به نیوزیلند</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ارسال پول به کیف پول موبایل</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">انتقال وجه کلان</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">سرعت انتقال</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">هزینه‌های انتقال</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">امنیت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">گزارش کلاهبرداری</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقد و بررسی‌های تراست‌پایلوت</a>
                </li>
              </ul>
            </Accordion>
            <Accordion title="کسب و کار XE">
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">کسب و کار XE</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نرخ‌های ارسال را بررسی کنید</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">پرداخت‌های تجاری بین‌المللی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقل و انتقالات لحظه‌ای</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">انتقال ارز یکسان</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مدیریت ریسک</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">قراردادهای آتی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">سفارش‌های محدود</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">برنامه‌ریزی منابع سازمانی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">API داده‌های ارزی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">API پرداخت‌ها</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">پرداخت‌های انبوه</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">روش‌های پرداخت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">حقوق و دستمزد کسب و کار</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقش‌های کاربری</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">برنامه همکاری در فروش</a>
                </li>

              </ul>
            </Accordion>
            <Accordion title="برنامه ها">
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اپلیکیشن‌های انتقال پول و ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اپلیکیشن انتقال وجه اندروید</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اپلیکیشن انتقال وجه iOS</a>
                </li>
              </ul>
            </Accordion>
            <Accordion title="ابزار ها و منابع">
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">وبلاگ</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">تبدیل ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نمودارهای ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نرخ ارز تاریخی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">دایره المعارف ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">هشدارهای نرخ ارز</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">خبرنامه‌های ارزی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ماشین حساب IBAN</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">تولیدکننده فاکتور</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ماشین حساب وام مسکن</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">جستجوی کد SWIFT/BIC</a>
                </li>
              </ul>
            </Accordion>
            <Accordion title="اطلاعات شرکت">
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">درباره ما</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مشارکت‌ها</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">فرصت‌های شغلی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مرکز کمک</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">پشتیبانی اختصاصی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">نقشه سایت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">قانونی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">حریم خصوصی</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">سیاست کوکی‌ها</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">مدیر رضایت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">اطلاعات انتقال پول</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">ثبت شکایت</a>
                </li>
                <li>
                  <a className="text-sm text-white hover:underline cursor-pointer">دسترسی‌پذیری</a>
                </li>
              </ul>
            </Accordion>
          </div>
          <div className="flex items-center justify-between">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 710 568.71" className="w-14 text-white"><path fill="currentColor" d="M270.72 427.89h-79.85a2.9 2.9 0 01-2.46-1.37l-51.6-83.33-51.62 83.33a2.87 2.87 0 01-2.45 1.37H2.9a2.89 2.89 0 01-2.4-4.51L96.36 280.9 1.68 143.35a2.89 2.89 0 012.38-4.53h80.33a2.88 2.88 0 012.44 1.36l50 79.51 49.67-79a3.88 3.88 0 013.3-1.83h79.77a2.89 2.89 0 012.38 4.53L177.24 280.9l95.88 142.48a2.9 2.9 0 01-2.4 4.51zM424.65.01a282.59 282.59 0 00-208 90.9 1.47 1.47 0 001.08 2.45h12.57a2.86 2.86 0 001.87-.71 256.49 256.49 0 01168.92-63c141.47 0 256.14 113.6 256.14 253.73S542.6 537.09 401.13 537.09a256.51 256.51 0 01-168.92-63 2.86 2.86 0 00-1.87-.71h-12.57a1.47 1.47 0 00-1.08 2.45 282.59 282.59 0 00208 90.9C581.14 566.71 708 439.84 708 283.35S581.14.01 424.65.01zM537 309.09H323.47c1.87 32.38 30.45 60.31 71.9 60.31 31.92 0 52.26-12.7 64.6-32.2a2.89 2.89 0 013.78-1.06l54 28a2.9 2.9 0 011.1 4.16C493.14 407.14 449 432.8 395 432.8h-.4c-85.55 0-144.13-62.6-144.13-149.45S309 133.91 394.55 133.91s147.17 66.91 147.17 149.44a147 147 0 01-1.65 22.55c-.28 1.5-1.33 3.19-3.07 3.19zm-67.1-58.5c-4.47-18.38-26-53.3-71.91-53.3-44.1 0-66.77 27.59-72.15 53.3z"></path></svg>
            </a>
            <div className="flex gap-4">
              <a className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-white/10 md:h-16 md:w-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="inherit" viewBox="0 0 48 48" color="inherit" className="w-6 fill-white md:w-8"><path d="m32.868 26.22.881-6.926h-6.802v-4.422c0-2.005.546-3.376 3.4-3.376H34v-6.2A48.13 48.13 0 0 0 28.668 5c-5.24 0-8.827 3.228-8.827 9.157v5.112H14v6.927h5.867V44h7.094V26.22h5.907Z"></path></svg>
              </a>
              <a className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-white/10 md:h-16 md:w-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="inherit" viewBox="0 0 48 48" color="inherit" className="w-6 fill-white md:w-8"><path d="M44 11.93a16.605 16.605 0 0 1-4.693 1.32 8.095 8.095 0 0 0 3.614-4.454 16.58 16.58 0 0 1-5.177 1.89 8.253 8.253 0 0 0-4.683-2.562 8.343 8.343 0 0 0-5.294.822 8.127 8.127 0 0 0-3.65 3.854 7.935 7.935 0 0 0-.454 5.245 23.605 23.605 0 0 1-9.367-2.442 23.204 23.204 0 0 1-7.543-5.977 7.944 7.944 0 0 0-.9 5.87 8.068 8.068 0 0 0 3.433 4.885 8.28 8.28 0 0 1-3.673-.983A7.98 7.98 0 0 0 7.47 24.5a8.24 8.24 0 0 0 4.726 2.796 8.405 8.405 0 0 1-3.723.125c.525 1.6 1.546 3 2.92 4.002a8.31 8.31 0 0 0 4.746 1.589 16.647 16.647 0 0 1-10.185 3.443A17.98 17.98 0 0 1 4 36.35a23.638 23.638 0 0 0 11.798 3.636 23.683 23.683 0 0 0 12.034-2.794 23.159 23.159 0 0 0 8.892-8.44 22.62 22.62 0 0 0 3.255-11.72v-1.045A16.554 16.554 0 0 0 44 11.93Z"></path></svg>
              </a>
              <a className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-white/10 md:h-16 md:w-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="inherit" viewBox="0 0 48 48" color="inherit" className="w-6 fill-white md:w-8"><path d="M13.503 42H5.626V17.955h7.877V42ZM9.565 14.667c-1.845 0-3.512-1.054-4.218-2.673a4.165 4.165 0 0 1 .988-4.722 4.753 4.753 0 0 1 4.975-.941c1.706.67 2.82 2.25 2.82 4.002 0 2.393-2.043 4.332-4.563 4.334h-.002ZM43 42h-7.87V30.307c0-2.79-.053-6.377-4.094-6.377-4.097 0-4.724 3.038-4.724 6.175V42h-7.87V17.955h7.554v3.284h.105c1.54-2.498 4.405-3.99 7.452-3.883 7.975 0 9.447 4.98 9.447 11.455V42Z"></path></svg>
              </a>
              <a className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-white/10 md:h-16 md:w-16">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" fill="inherit" viewBox="0 0 48 48" color="inherit" className="w-6 fill-white md:w-8 "><path d="M16.131 5.133c-2.021.095-3.402.418-4.609.892a9.298 9.298 0 0 0-3.361 2.197 9.307 9.307 0 0 0-2.185 3.368c-.468 1.21-.785 2.591-.874 4.614-.09 2.023-.11 2.673-.1 7.832.01 5.16.033 5.807.131 7.834.097 2.021.418 3.401.892 4.608a9.307 9.307 0 0 0 2.198 3.362 9.301 9.301 0 0 0 3.37 2.185c1.209.467 2.59.785 4.613.874 2.023.088 2.673.109 7.831.099 5.159-.01 5.808-.033 7.835-.13 2.026-.095 3.4-.419 4.607-.89a9.31 9.31 0 0 0 3.36-2.199 9.31 9.31 0 0 0 2.185-3.37c.468-1.208.786-2.59.874-4.61.089-2.029.11-2.677.1-7.835-.01-5.16-.033-5.806-.13-7.832-.096-2.027-.418-3.402-.891-4.61A9.328 9.328 0 0 0 39.78 8.16a9.273 9.273 0 0 0-3.37-2.184c-1.209-.468-2.59-.787-4.613-.874-2.022-.087-2.673-.11-7.833-.1-5.16.01-5.806.032-7.833.13Zm.222 34.348c-1.853-.081-2.858-.389-3.529-.647a5.914 5.914 0 0 1-2.188-1.417c-.668-.661-1.078-1.296-1.425-2.182-.26-.67-.574-1.675-.66-3.527-.094-2.002-.114-2.603-.125-7.676-.011-5.073.008-5.673.096-7.676.079-1.851.389-2.858.646-3.528a5.883 5.883 0 0 1 1.417-2.188c.663-.667 1.296-1.079 2.182-1.425.67-.262 1.675-.572 3.526-.66 2.004-.096 2.605-.115 7.676-.126 5.072-.01 5.674.008 7.679.097 1.85.08 2.858.387 3.527.646.889.342 1.52.752 2.188 1.417a5.846 5.846 0 0 1 1.426 2.183c.262.667.573 1.672.66 3.525.095 2.003.117 2.604.126 7.676.01 5.071-.009 5.674-.097 7.676-.08 1.852-.387 2.858-.645 3.53a5.885 5.885 0 0 1-1.418 2.187c-.664.667-1.296 1.078-2.183 1.425-.668.26-1.674.573-3.524.66-2.004.095-2.605.115-7.678.126-5.074.01-5.673-.01-7.677-.096Zm15.49-25.636a2.282 2.282 0 0 0 3.895 1.606 2.28 2.28 0 1 0-3.896-1.606Zm-17.6 10.175c.011 5.389 4.387 9.747 9.774 9.736 5.388-.01 9.75-4.386 9.739-9.774-.01-5.389-4.388-9.748-9.776-9.737-5.388.01-9.747 4.387-9.737 9.775Zm3.423-.007a6.333 6.333 0 1 1 12.667-.025 6.333 6.333 0 0 1-12.667.025Z"></path></svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2 text-sm font-bold">
              <span>English</span>
              <IoIosArrowDown />
            </div>
            <div>
              <small className="mb-[8px]" >NMLS ID#920968. <br className="sm:hidden" /> © 1995-2025 Xe Corporation Inc.</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
