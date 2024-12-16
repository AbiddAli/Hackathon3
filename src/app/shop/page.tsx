import React from "react";
import Image from "next/image";

import pic2 from "/public/images/02.jpg";
import pic3 from "/public/images/03.jpg";
import pic4 from "/public/images/04.jpg";
import pic6 from "/public/images/06.jpg";
import pic7 from "/public/images/07.png";
import pic9 from "/public/images/09.png";
import pic10 from "/public/images/10.png";
import pic11 from "/public/images/11.jpg";
import pic12 from "/public/images/12.png";
import pic13 from "/public/images/13.png";

export default function Shop(){
  return(
    <div>
    <section className="py-16 px-10">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-semibold mb-10">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[pic12, pic2, pic3, pic4].map((pic, index) => (
              <div key={index} className="relative p-4 shadow-sm flex flex-col">
                <Image className="w-full h-80 object-cover mb-4" src={pic} alt={`Product ${index + 1}`} />
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-medium text-gray-800">Library Stool Chair {index + 1}</h3>
                  <p className="text-gray-500 text-sm">$20</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        
      </section>
      <section className="py-16 px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[pic6, pic10, pic11, pic9].map((pic, index) => (
            <div key={index} className="relative p-4 shadow-sm flex flex-col">
              <Image className="w-full h-80 object-cover mb-4" src={pic} alt={`Product ${index + 1}`} />
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium text-gray-800">Library Stool Chair {index + 1}</h3>
                <p className="text-gray-500 text-sm">$20</p>
              </div>
              <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      </section>
      <section className="py-16 px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[pic13, pic2, pic3, pic7].map((pic, index) => (
            <div key={index} className="relative p-4 shadow-sm flex flex-col">
              <Image className="w-full h-80 object-cover mb-4" src={pic} alt={`Product ${index + 1}`} />
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium text-gray-800">Library Stool Chair {index + 1}</h3>
                <p className="text-gray-500 text-sm">$20</p>
              </div>
              <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-6 sm:px-10">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Newsletter Subscription */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex justify-center items-center mb-8">
            <input
              type="email"
              placeholder="Email Address..."
              className="py-3 px-6 w-full sm:w-1/2 border border-gray-300 rounded-md"
            />
            <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md ml-4 hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Instagram Follow Section */}
        <div>
          <h3 className="text-4xl sm:text-3xl font-bold text-gray-800 mb-4">
            Follow Products And Discounts On Instagram
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pic6}
                alt="Instagram Product 1"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pic13}
                alt="Instagram Product 2"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pic2}
                alt="Instagram Product 3"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pic9}
                alt="Instagram Product 4"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pic3}
                alt="Instagram Product 5"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
              <Image
                src={pic7}
                alt="Instagram Product 5"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
      
  )
}