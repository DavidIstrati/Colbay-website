import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-screen bg-white flex flex-col font-spaceGrotes">
      <div className="w-full h-20 bg-white shadow-md px-10 xl:px-40 flex items-center">
        <img src="LogoColbayText.svg"></img>
      </div>
      <div className="w-screen h-screen flex flex-col">
        <div className="w-full h-full flex flex-col  px-10 xl:px-40">
          <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center">
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full flex flex-col justify-center items-center xl:items-start">
              <div className="flex flex-col justify-center items-center xl:items-start xl:justify-start font-bold text-4xl xl:text-6xl 2xl:text-8xl">
                <span className="text-gray-900">Buy and Sell</span>
                <span className="text-gray-900 text-gradient">anything</span>
                <span className="text-gray-900">at Colby</span>
              </div>
              <a href="https://airtable.com/shr87yBtrhc4nvNes">
                <div className="bg-black px-10 2xl:px-16 py-2 xl:py-4 text-sm xl:text-md 2xl:text-xl font-bold text-white rounded-lg mt-10">
                  Join our Waitlist
                </div>
              </a>
            </div>
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full flex justify-center items-center">
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
      <div className="w-screen h-4 bg-gradient"></div>
      <div className="w-screen h-screen flex flex-col xl:flex-row">
        <div className="w-full xl:w-2/5 h-1/5 xl:h-full bg-gray-200 flex flex-row xl:flex-col items-center justify-center ">
          <div className="w-full h-1/2 flex justify-center items-center">
            <img src="illustrations/graduation.png" className="w-1/2" />
          </div>
          <div className="w-full h-1/2 flex justify-center items-center">
            <img src="illustrations/money.png" className="w-1/2" />
          </div>
        </div>
        <div className="w-full xl:w-3/5 h-4/5 xl:h-full bg-white shadow-xl flex flex-col justify-center items-center xl:items-start px-10 xl:px-40 2xl:px-60">
          <span className="text-6xl xl:text-6xl 2xl:text-8xl text-gradient font-bold">
            Moving out?
          </span>
          <span className="text-2xl xl:text-2xl 2xl:text-4xl text-gray-900 font-bold mt-10">
            We got you!
          </span>
          <span className="text-xl xl:text-xl 2xl:text-3xl text-gray-900 font-bold mt-20 text-center xl:text-left">
            Sell your unwanted furniture, books, and other items with ease.
          </span>
        </div>
      </div>
      <div className="w-screen h-4 bg-gradient"></div>
      <div className="w-screen h-screen flex flex-col xl:flex-row">
        <div className="w-full xl:w-3/5 h-4/5 xl:h-full bg-white shadow-xl flex flex-col justify-center items-center xl:items-start px-10 xl:px-40 2xl:px-60">
          <span className="text-6xl xl:text-6xl 2xl:text-8xl text-gradient font-bold">
            Freshman?
          </span>
          <span className="text-2xl xl:text-2xl 2xl:text-4xl text-gray-900 font-bold mt-10">
            We got you too!
          </span>
          <span className="text-xl xl:text-xl 2xl:text-3xl text-gray-900 font-bold mt-20 text-center xl:text-left">
            Buy your books and dorm accesories at a cheaper rate.
          </span>
        </div>
        <div className="w-full xl:w-2/5 h-1/5 xl:h-full bg-gray-200 flex flex-row xl:flex-col shadow-inner">
          <div className="w-1/2 xl:w-full h-full xl:h-1/2 flex justify-center items-center">
            <img src="illustrations/discount.png" className="w-1/3" />
          </div>
          <div className="w-1/2 xl:w-full h-full xl:h-1/2 flex justify-center items-center">
            <img src="illustrations/books.png" className="w-1/3" />
          </div>
        </div>
      </div>
      <div className="w-screen h-4 bg-gradient"></div>
      <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
        <div className="w-1/2 h-1/3 nm-inset-gray-200-lg  flex flex-col justify-center items-center rounded-md">
          <div className="flex flex-col">
            <span className="text-2xl xl:text-4xl font-bold text-gradient">
              Nothing to lose!
            </span>
            <code className="text-sm xl:text-xl font-bold mt-5">
              <span className="text-red-500">0%</span> COMISSION
            </code>
            <code className="text-sm xl:text-xl font-bold mt-5">
              <span className="text-red-500">0</span> FEES
            </code>
            <code className="text-sm xl:text-xl font-bold mt-5">
              <span className="text-red-500">0</span> SPAM
            </code>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-20">
          <a href="https://airtable.com/shr87yBtrhc4nvNes">
            <span className="text-white bg-gradient font-bold text-2xl px-16 py-4 rounded-lg shadow-md">
              Join waitlist
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
