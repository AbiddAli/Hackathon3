// import React from "react";
// import Image from "next/image";
// import hero from "@/public/Product Image.png";
// import brand1 from "@/public/zapier.png"
// import brand2 from "@/public/pipedrive.png"
// import brand3 from "@/public/cib bank.png"
// import brand4 from "@/public/z.png"
// import brand5 from "@/public/burnt toast.png"
// import brand6 from "@/public/pandaDoc.png"
// import brand7 from "@/public/Moz.png"
// import pic1 from '@/public/01.jpg';
// import pic2 from '@/public/04.jpg';
// import pic3 from '@/public/11.jpg';
// import pic4 from '@/public/13.jpg';

// const Home = () => {
//   return (
//     <div>
//       {/* hero */}
//       <div className="flex justify-center items-center">
//         <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
//           <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
//             <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
//               WELCOME TO CHAIRY
//             </h1>
//             <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
//               Best Furniture Collection for your interior.
//             </p>
//             <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
//               <span>Shop Now</span>
//             </button>
//           </div>

//           <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
//             <Image src={hero} alt="Product Image" width={434} height={584} />
//           </div>
//         </div>
//       </div>
      
//       {/* Brands */}
     
//     <div className="w-full flex flex-wrap justify-center items-center gap-28 pt-13 px-10">
//       <div className="flex justify-center items-center">
//         <Image src={brand1} alt="Zapier Logo" width={45} height={47} />
//       </div>
//       <div className="flex justify-center items-center">
//         <Image
//           src={brand2}
//           alt="Pipe Drive Logo"
//           width={70}
//           height={72}
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         <Image
//           src={brand3}
//           alt="Cib Bank Logo"
//           width={85}
//           height={89}
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         <Image
//           src={brand4}
//           alt="Company 4 Logo"
//           width={33}
//           height={35}
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         <Image
//           src={brand5}
//           alt="Burnt Toast Logo"
//           width={72}
//           height={73}
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         <Image
//           src={brand6}
//           alt="Panda Doc Logo"
//           width={90}
//           height={92}
//         />
//       </div>
//       <div className="flex justify-center items-center">
//         <Image src={brand7} alt="Moz Logo" width={42} height={45} />
//       </div>
//     </div>
//     {/* Products */}


//     <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap w-full mb-20">
//       <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//         <h1 className="sm:text-3xl text-xl font-small title-font mb-2 text-gray-900">
//         Featured Products       </h1>
//       </div>
//     </div>
//     <div className="flex flex-wrap -m-4">
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 ">
//           <Image
//             className="h-40 w-full object-cover object-center mb-6"
//             src={pic1}
//             alt="content"
//             width={300}
//             height={300}
//           />
//           <h3 className="tracking-widest text-[#007580] text-xs font-medium title-font">
//           Library Stool Chair
//           </h3>
         
          
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <Image
//             className="h-40 rounded w-full object-cover object-center mb-6"
//             src={pic2}
//             alt="content"
//             width={10}
//             height={10}
//           />
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
//             Colosseum Roma
//           </h2>
//           <p className="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <Image
//             className="h-40 rounded w-full object-cover object-center mb-6"
//             src={pic3}
//             alt="content"
//             width={10}
//             height={10}
//           />
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
//             Great Pyramid of Giza
//           </h2>
//           <p className="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <Image
//             className="h-40 rounded w-full object-cover object-center mb-6"
//             src={pic4}
//             alt="content"
//             width={10}
//             height={10}
//           />
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
//             SUBTITLE
//           </h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
//             San Francisco
//           </h2>
//           <p className="leading-relaxed text-base">
//             Fingerstache flexitarian street art 8-bit waistcoat. Distillery
//             hexagon disrupt edison bulbche.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



//     </div>
//   );
// };

// export default Home;

import React from "react";
import Image from "next/image";

// Import images
import hero from "@/public/Product Image.png";
import brand1 from "@/public/zapier.png";
import brand2 from "@/public/pipedrive.png";
import brand3 from "@/public/cib bank.png";
import brand4 from "@/public/z.png";
import brand5 from "@/public/burnt toast.png";
import brand6 from "@/public/pandaDoc.png";
import brand7 from "@/public/Moz.png";
import pic1 from "@/public/01.jpg";
import pic2 from "@/public/04.jpg";
import pic3 from "@/public/11.jpg";
import pic4 from "@/public/13.jpg";
import pic5 from "@/public/05.jpg";
import pic6 from "@/public/08.jpg";
import pic7 from "@/public/15.png";
import pic8 from "@/public/03.jpg";
import pic9 from "@/public/04.jpg";
import pic10 from "@/public/Image.png";
import pic11 from "@/public/06.jpg";
import pic12 from "@/public/Image Block.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex justify-center items-center bg-[#F0F2F3] py-6 px-6 sm:px-10 lg:px-16">
        <div className="max-w-screen-xl w-full flex flex-col sm:flex-row justify-between items-center">
          {/* Text Section */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-6">
            <h1 className="text-sm pt-10 sm:pt-20 font-normal text-[#272343] text-center sm:text-left">
              WELCOME TO CHAIRY
            </h1>
            <h2 className="text-center sm:text-left text-3xl sm:text-5xl font-bold">
              Best Furniture Collection for your interior.
            </h2>
            <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md hover:bg-blue-700">
              Shop Now
            </button>
          </div>
          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
            <Image src={hero} alt="Hero Product Image" width={434} height={584} />
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="flex flex-wrap justify-center items-center gap-12 py-10 px-6">
        {[brand1, brand2, brand3, brand4, brand5, brand6, brand7].map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={brand} alt={`Brand Logo ${index + 1}`} width={50} height={50} />
          </div>
        ))}
      </section>

      {/* Products Section */}
      <section className="py-24 px-6">
  <div className="max-w-screen-xl mx-auto">
    <h1 className="text-xl sm:text-3xl font-semibold mb-10">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[pic1, pic2, pic3, pic4].map((pic, index) => (
        <div
          key={index}
          className="relative bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col"
        >
          {/* Product Image */}
          <Image
            className="w-full h-48 object-cover rounded-md mb-4"
            src={pic}
            alt={`Product ${index + 1}`}
            width={300}
            height={300}
          />

          {/* Product Details */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-medium text-gray-800">
              Library Stool Chair
            </h3>
            <p className="text-gray-500 text-sm">$20</p>
          </div>

          {/* Shopping Cart Button */}
          <button
            className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors"
            aria-label="Add to cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Top Categories */}

<section className="py-12 px-6">
  <div className="max-w-screen-xl mx-auto">
    {/* Section Title */}
    <h1 className="text-xl sm:text-3xl font-semibold mb-8">Top Categories</h1>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Category Card 1 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={pic5}
          alt="Wing Chair"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-lg font-medium">Wing Chair</h3>
          <p className="text-sm">1,204 Products</p>
        </div>
      </div>

      {/* Category Card 2 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={pic6}
          alt="Wooden Chair"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-lg font-medium">Wooden Chair</h3>
          <p className="text-sm">853 Products</p>
        </div>
      </div>

      {/* Category Card 3 */}
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={pic7}
          alt="Desk Chair"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-lg font-medium">Desk Chair</h3>
          <p className="text-sm">781 Products</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Popular Styles */}

    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        {/* Vertical text */}
        <div className="writing-mode-vertical hidden text-xl font-medium tracking-wider text-zinc-900 md:block pt-6">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Mobile text version */}
        <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%]">
            <Image
              src={pic8}
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src={pic9}
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={pic10}
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={pic11}
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src={pic12}
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    

        
    </div>
  );
};

export default Home;
