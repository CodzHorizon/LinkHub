'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="flex-1 px-6 py-20 sm:px-6">
      <div className="mx-auto w-full">
        {/* About  */}
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl font-extrabold tracking-tighter text-[var(--text-primary)] sm:text-6xl md:text-7xl leading-tight">
            About LinkHub
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-[var(--text-secondary)]">
            Our mission is to empower individuals and businesses to effectively manage and promote their online identities with a simple and efficient way to share their links.
          </p>
        </div>
        {/* Features */}
        <div className="flex flex-col gap-6  py-10 @container">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1
              className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] "
            >
              Features
            </h1>
            <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">Everything you need to connect with your audience.</p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div
                className="sm:w-60 w-72 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <svg
                  width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-10 h-10 text-gray-300  rounded-full p-1"
                >
                  <path
                    d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"
                  ></path>
                </svg>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Create Unlimited LinkHubs</h2>
                  <p className=" text-sm font-normal leading-normal">Make multiple LinkHub pages to organize your links by purpose.</p>
                </div>
              </div>
              <div
                className="w-72 sm:w-60 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-10 h-10 text-gray-300 p-1" viewBox="0 0 16 16">
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.03 1.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424" />
                </svg>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Up to 8 Links Per Page</h2>
                  <p className=" text-sm font-normal leading-normal">Focus your audience’s attention with a clean set of up to 8 links.</p>
                </div>
              </div>
              <div
                className="w-72 sm:w-60 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-gray-300  rounded-full p-1" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Add Photo & Bio</h2>
                  <p className=" text-sm font-normal leading-normal">
                    Show who you are with a profile picture and a brief bio.</p>
                </div>
              </div>
              <div
                className="w-72 sm:w-60 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <Link href="https://nexlink-url-shortener.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 mb-2.5 text-gray-300  rounded-full p-1 pointer" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  </svg>
                </Link>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Integrated URL Shortener</h2>
                  <p className=" text-sm font-normal leading-normal">Shorten any URL effortlessly using our built-in shortener tool.</p>
                </div>
              </div>
              <div
                className="w-72 sm:w-60 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" className="w-10 h-10 text-gray-300 rounded-full p-1">
                  <path
                    d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"
                  ></path>
                </svg>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Privacy-Respecting</h2>
                  <p className=" text-sm font-normal leading-normal">We store only what’s needed to power your LinkHub — no tracking, no ads, no selling your data.</p>
                </div>
              </div>
              <div
                className="w-72 sm:w-60 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" className="w-10 h-10 text-gray-300 rounded-full p-1">
                  <path
                    d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                  ></path>
                </svg>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Share Your LinkHub Everywhere</h2>
                  <p className=" text-sm font-normal leading-normal">
                    Easily copy and paste your LinkHub link anywhere you want to connect.</p>
                </div>
              </div>
              <div
                className="w-72 sm:w-60 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300"
              >
                <Link href="https://github.com/CodzHorizon" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" className="w-10 h-10 text-gray-300 rounded-full p-1 pointer">
                    <path
                      d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                    ></path>
                  </svg>
                </Link>
                <div className="flex flex-col gap-1 text-gray-200">
                  <h2 className=" text-base font-bold leading-tight">Open Source Support</h2>
                  <p className=" text-sm font-normal leading-normal">Found a bug or have a question? Reach out via our GitHub issues page — we’re here to help!</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* LinkHub  */}
        <div className="mt-16 grid md:grid-cols-2 mx-8  gap-16 items-center">
          <div className="animate-fade-in-up animate-delay-1">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-6 text-left">The LinkHub Story</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed text-justify">
              LinkHub was born from a simple idea: to create a single, elegant page for all your links. We saw creators, entrepreneurs, and businesses struggling to manage multiple social media profiles, websites, and content platforms. We set out to build a tool that was not only functional but also beautiful and easy to use. Today, LinkHub helps people streamline their digital footprint and connect with their audience more effectively.
            </p>
          </div>
          <div className="animate-fade-in-up animate-delay-2 overflow-hidden">
            <Image
              alt="Our Story"
              src="/connecting.jpg"
              width={700}
              loading='lazy'
              height={500}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
        {/* Get Started  */}
        <div className="relative mt-24 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl py-10 px-6 text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold tracking-tight text-black">Join Our Journey</h2>
          <p className="mt-6 text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
            We&apos;re always looking for passionate people to join our team and help us build the future of online presence. If you&apos;re excited by our mission, we&apos;d love to hear from you.
          </p>
          <div className='flex gap-10 w-full justify-center items-center mt-2'>
            <span className=" mt-10 text-lg font-semibold text-[var(--primary-color)] hover:text-indigo-700 transition-colors duration-300 group" href="mailto:careers@linkhub.com">
              <a href="mailto:kshitizsh.8@gmail.com" >
                <div className="group relative inline-block">
                  <button className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className=" transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 pointer">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                    </svg>
                  </button>
                  <span
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 p-2 text-sm font-semibold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 "
                  >My Gmail
                  </span>
                </div>
              </a>
            </span>
            <span className=" mt-10 text-lg font-semibold text-[var(--primary-color)] hover:text-indigo-700 transition-colors duration-300 group" href="mailto:careers@linkhub.com">
              <a href="https://github.com/CodzHorzion" target="_blank"
                rel="noopener noreferrer">
                <div className="group relative inline-block">
                  <button className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className=" transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 pointer" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </button>
                  <span
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 p-2 text-sm font-semibold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
                  >My GitHub
                  </span>
                </div>
              </a>
            </span>
          </div>
          <div className='bg-transparent '>
            <Image
              alt="Illustration of a person with connections"
              src="/person.png"
              width={700}
              height={500}
              loading='lazy'
              className="absolute opacity-90 right-0 bottom-0 w-54 h-60 sm:w-64 sm:h-74   object-fit  z-[-1]"
            ></Image>
          </div>
        </div>
      </div>
    </main>

  );
};

export default Page;
