import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6yIeSu5zbhvdAmTvbmhhih-L_mW1BAws",
  authDomain: "colbay-shop.firebaseapp.com",
  projectId: "colbay-shop",
  storageBucket: "colbay-shop.appspot.com",
  messagingSenderId: "322090799551",
  appId: "1:322090799551:web:3657ca98ce279b9543510a",
  measurementId: "G-06WLTNT97P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Parallax pages={4} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        className="w-screen bg-white flex flex-col font-spaceGrotes"
      >
        <div
          className="w-full h-20 bg-white shadow-md px-10 xl:px-40 flex items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="LogoColbayText.svg"></img>
        </div>
        <div className="w-screen h-screen flex flex-col">
          <div className="w-full h-full flex flex-col  px-10 xl:px-40">
            <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center">
              <div className="w-full xl:w-1/2 h-1/2 xl:h-full flex flex-col justify-center items-center xl:items-start">
                <div
                  className="flex flex-col justify-center items-center xl:items-start xl:justify-start font-bold text-4xl xl:text-6xl 2xl:text-8xl"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span className="text-gray-900">Buy and Sell</span>
                  <span className="text-gray-900 text-gradient">anything</span>
                  <span className="text-gray-900">at Colby</span>
                </div>
                <a
                  href="https://airtable.com/shr87yBtrhc4nvNes"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="1200"
                >
                  <div className="bg-black px-10 2xl:px-16 py-2 xl:py-4 text-sm xl:text-md 2xl:text-xl font-bold text-white rounded-lg mt-10">
                    Join our Waitlist
                  </div>
                </a>
              </div>
              <div
                className="w-full xl:w-1/2 h-1/2 xl:h-full flex justify-center items-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <img
                  src="illustrations/character.png"
                  className="h-full xl:h-auto xl:w-1/2"
                />
              </div>
            </div>
            <div className="w-full text-lg text-gray-500 h-20 hidden xl:flex xl:justify-center xl:items-center">
              <span>scroll down</span>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2} className="bg-indigo-100" />

      <ParallaxLayer offset={1} speed={0.5}>
        <div className="w-screen h-screen flex flex-col xl:flex-row">
          <div className="w-full xl:w-2/5 h-1/5 xl:h-full flex flex-row xl:flex-col items-center justify-center ">
            <div className="w-full h-1/2 flex justify-center items-center">
              <img src="illustrations/graduation.png" className="w-1/2" />
            </div>
            <div className="w-full h-1/2 flex justify-center items-center">
              <img src="illustrations/money.png" className="w-1/2" />
            </div>
          </div>
          <div className="w-full xl:w-3/5 h-4/5 xl:h-full bg-white shadow-xl flex flex-col justify-center items-center xl:items-start px-10 xl:px-40 2xl:px-60">
            <span
              className="text-6xl xl:text-6xl 2xl:text-8xl text-gradient font-bold text-center xl:text-left"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Moving out?
            </span>
            <span
              className="text-2xl xl:text-2xl 2xl:text-4xl text-gray-900 font-bold mt-10"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              We got you!
            </span>
            <span
              className="text-xl xl:text-xl 2xl:text-3xl text-gray-900 font-bold mt-20 text-center xl:text-left"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Sell your unwanted furniture, books, and other items with ease.
            </span>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={2} className="bg-indigo-100" />

      <ParallaxLayer offset={2} speed={0.5}>
        <div className="w-screen h-screen flex flex-col xl:flex-row">
          <div className="w-full xl:w-3/5 h-4/5 xl:h-full bg-white shadow-xl flex flex-col justify-center items-center xl:items-start px-10 xl:px-40 2xl:px-60">
            <span
              className="text-6xl xl:text-6xl 2xl:text-8xl text-gradient font-bold"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Freshman?
            </span>
            <span
              className="text-2xl xl:text-2xl 2xl:text-4xl text-gray-900 font-bold mt-10"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              We got you too!
            </span>
            <span
              className="text-xl xl:text-xl 2xl:text-3xl text-gray-900 font-bold mt-20 text-center xl:text-left"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Buy your books and dorm accessories at a cheaper rate.
            </span>
          </div>
          <div className="w-full xl:w-2/5 h-1/5 xl:h-full bg-transparent flex flex-row xl:flex-col ">
            <div className="w-1/2 xl:w-full h-full xl:h-1/2 flex justify-center items-center">
              <img src="illustrations/discount.png" className="w-1/3" />
            </div>
            <div className="w-1/2 xl:w-full h-full xl:h-1/2 flex justify-center items-center">
              <img src="illustrations/books.png" className="w-1/3" />
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={2} className="bg-gray-200" />

      <ParallaxLayer offset={3} speed={0.5}>
        <div className="w-screen h-screen flex flex-col bg-transparent justify-center items-center">
          <div className="w-1/2 h-1/3 nm-inset-gray-200-lg  flex flex-col justify-center items-center rounded-md">
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span className="text-2xl xl:text-4xl font-bold text-gradient">
                Nothing to lose!
              </span>
              <code className="text-sm xl:text-xl font-bold mt-5">
                <span className="text-red-500">0%</span> COMMISSION
              </code>
              <code className="text-sm xl:text-xl font-bold mt-5">
                <span className="text-red-500">0</span> FEES
              </code>
              <code className="text-sm xl:text-xl font-bold mt-5">
                <span className="text-red-500">0</span> SPAM
              </code>
            </div>
          </div>
          <div
            className="w-full flex justify-center items-center mt-20"
            data-aos="fade-up"
            data-aos-duration="800"
          >

            <a href="https://airtable.com/shr87yBtrhc4nvNes">
              <span className="text-white bg-gradient font-bold text-2xl px-16 py-4 rounded-lg shadow-md">
                Join waitlist
              </span>
            </a>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
