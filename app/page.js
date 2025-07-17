"use client";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [text, setText] = useState("");
  const createTree = () => {
    router.push(`/generate?username=${text}`);
  }
  return (
    <div className=" w-full flex flex-col bg-transparent ">
      {/* Hero Section */}
      <section className="my-12   w-full  ">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5 items-center">
            <div className="text-center md:text-left lg:pl-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a202c] leading-tight tracking-tighter mb-6">
                Show the world who you are — with one simple link.
              </h1>
              <p className="text-lg md:text-xl text-[#4a5568] mb-8 max-w-lg mx-auto md:mx-0">
                Create a personalized landing page that houses all your important links, making it easier for your followers to find and engage with your content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start vertical-center align-middle">
                <div className="justify-center items-center vertical-center flex relative rounded-full overflow-hidden bg-white shadow-xl w-full sm:w-96">
                  <input
                    className="input bg-transparent outline-none border-none h-16 pr-8 w-[80%] font-sans text-md font-semibold "
                    placeholder="Your Username"
                    name="text"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <div className="absolute right-2">
                    <button
                      className="w-10 h-10 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden pointer"
                      onClick={() => createTree()}
                    >
                      <svg
                        className="relative z-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 64 64"
                        height="50"
                        width="50"
                      >
                        <path
                          fillOpacity="0.01"
                          fill="white"
                          d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                        ></path>
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="3.76603"
                          stroke="white"
                          d="M42.8496 18.7067L21.0628 44.6712"
                        ></path>
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="3.76603"
                          stroke="white"
                          d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                        ></path>
                      </svg>
                      <div
                        className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
                      ></div>
                      <div
                        className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center mt-4 sm:mt-0">
              <div className="w-full max-w-[320px] bg-transparent rounded-3xl shadow-2xl  transform transition-transform duration-500 hover:scale-105 rotate-0 hover:rotate-6">
                <div
                  className="relative flex flex-col justify-center p-5 h-full w-full  border-4 border-black rounded-2xl bg-gray-600"
                  style={{ boxShadow: "5px 5px 2.5px 6px rgb(209, 218, 218)" }}
                >
                  <span
                    className="absolute self-center top-0 border border-black bg-black w-22 h-2 rounded-br-xl rounded-bl-xl"
                  ></span>
                  <span
                    className="absolute -right-2 top-30 border-4 border-black h-7 rounded-md"
                  ></span>
                  <span
                    className="absolute -right-2 top-14  border-4 border-black h-10 rounded-md"
                  ></span>
                  <div className="flex flex-col items-center ">
                    <Image alt="Profile Picture" width={96} height={96} className="w-24 h-24 rounded-full mb-4 object-cover ring-4 ring-blue-100" src="/girlpfp.png" />
                    <h3 className="text-xl font-bold text-white">@yourname</h3>
                    <p className=" text-sm mb-6 text-gray-100">Your bio goes here. Creative &amp; Fun!</p>
                    <div className="w-full space-y-4">
                      <a className="block w-full text-center bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors pointer" href="#">My Website</a>
                      <a className="block w-full text-center bg-gray-800 text-white py-2 rounded-xl font-semibold hover:bg-gray-900 transition-colors pointer" href="#">GitHub Profile</a>
                      <a className="block w-full text-center bg-pink-500 text-white py-2 rounded-xl font-semibold hover:bg-pink-600 transition-colors pointer" href="#">Dribbble Shots</a>
                      <a className="block w-full text-center bg-cyan-500 text-white py-2 rounded-xl font-semibold hover:bg-cyan-600 transition-colors pointer" href="#">Twitter Feed</a>
                    </div>
                    <div className="flex space-x-6 mt-8">
                      <a className="text-gray-200 hover:text-[] transition-colors pointer" href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.26C11.73,8.6 11.77,8.92 11.84,9.22C8.28,9.06 5.1,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.48 2.96,10.29 2.38,10V10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.03 6.02,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg>
                      </a>
                      <a className="text-gray-200 hover:text-[] transition-colors pointer" href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.357-2.625-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-200 hover:text-[] transition-colors pointer" href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Section */}
      <section className="my-10 py-12 w-full">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why choose LinkHub?</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 sm:gap-6">
              <div
                className="flex w-[300px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 shadow-[-3px_-3px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-[105%] hover:bg-gradient-to-b hover:from-gray-200 hover:to-white  hover:shadow-[-6px_-6px_0_0_#000] pointer"
              >
                <div className=" flex items-center gap-x-2 text-xs justify-center w-full ">
                  <div
                    className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 text-[16px] font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 "
                  > Easy Setup
                  </div>
                </div>
                <div className="group relative">
                  <h3
                    className="group-hover:text-red-500  text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800"
                  >
                  </h3>
                  <p
                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                  >
                    Create your personal link page instantly — no sign-in required.
                  </p>
                </div>
              </div>
              <div
                className="flex w-[300px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 shadow-[-3px_3px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-[105%] hover:bg-gradient-to-b hover:from-gray-200 hover:to-white  hover:shadow-[-6px_6px_0_0_#000] pointer"
              >
                <div className=" flex items-center gap-x-2 text-xs justify-center w-full ">
                  <div
                    className="relative z-10 border-2 border-black bg-red-500 text-[16px] px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 "
                  > Share Everywhere
                  </div>
                </div>
                <div className="group relative">
                  <h3
                    className="group-hover:text-red-500  text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800"
                  >
                  </h3>
                  <p
                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                  >
                    Use your unique link everywhere — social media, email, and more.
                  </p>
                </div>
              </div>
              <div
                className="flex w-[300px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 shadow-[3px_-3px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white  hover:shadow-[6px_-6px_0_0_#000] pointer"
              >
                <div className=" flex items-center gap-x-2 text-xs justify-center w-full ">
                  <div
                    className="relative z-10 border-2 border-black text-[16px] bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 "
                  > URL Shortener
                  </div>
                </div>
                <div className="group relative">
                  <h3
                    className="group-hover:text-red-500  text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800"
                  >
                  </h3>
                  <p
                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                  >
                    Shorten any link easily and share it everywhere.
                  </p>
                </div>
              </div>
              <div
                className="flex w-[300px] flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 shadow-[3px_3px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-[105%] hover:bg-gradient-to-b hover:from-gray-200 hover:to-white  hover:shadow-[6px_6px_0_0_#000] pointer"
              >
                <div className=" flex items-center gap-x-2 text-xs justify-center w-full ">
                  <div
                    className="relative z-10 border-2 border-black text-[16px] bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 "
                  >Private & Secure
                  </div>
                </div>
                <div className="group relative">
                  <h3
                    className="group-hover:text-red-500  text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800"
                  >
                  </h3>
                  <p
                    className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600"
                  >
                    No accounts, no tracking. Your data stays with you.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="relative mb-14 mx-8 sm:mx-10 pt-8 lg:mx-16 overflow-hidden w-full px-4 flex flex-col items-center self-center">
        <div className="w-full">
          <div className="bg-[#317fcd] text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to simplify your online presence?</h2>
            <p className="text-lg opacity-80 mb-8 w-full mx-auto">
              Start creating your link-in-bio page today and connect with your audience like never before.
            </p>
            <div className="flex items-center justify-center h-full">
              <div className="relative group">
                <Link
                  href="/generate"
                  className="relative inline-block p-[2px] font-semibold leading-6 text-white bg-gray-800 shadow-2xl pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2.5px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  ></span>

                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1"
                      >Get Started for Free
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
        {/* Thank You Card Section */}
        <div className="hidden md:inline-block absolute bottom-0 right-4">
          <div className="card w-full  justify-center items-center flex">
            <div
              className="relative bg-white  w-[180px] xl:w-[300px]   group transition-all duration-700 aspect-video flex items-center justify-center rounded-br-full"
            >
              <div
                className="transition-all flex flex-col items-center py-2 lg:py-4 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-20  lg:group-hover:-translate-y-16"
              >
                <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                  Thank You
                </p>
                <p className="px-4 lg:px-10 text-[10px] sm:text-[12px] text-gray-700">
                  It’s so nice that you had the time to view this idea
                </p>
                <p className="font-serif text-[10px] sm:text-[12px text-gray-700 lg:pt-2">
                  Wishing you a fantastic day ahead!
                </p>
                <p className="font-sans text-[10px] text-gray-700 pt-2 lg:pt-4">LinkHub</p>
              </div>
              <button
                className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
              >
                CdH
              </button>
              <div
                className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
              ></div>
              <div
                className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
              ></div>
              <div
                className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] rounded-br-2xl"
              ></div>
              <div
                className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]  rounded-br-2xl"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

