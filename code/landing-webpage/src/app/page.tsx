import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <img
          className="object-cover w-full lg:h-[120vh] md:h-[60vh] sm:h-[60vh]"
          src="/HeroSection.svg"
          alt="Big Image"
        />
      </div>

      <div className="w-4/5 my-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold mt-10 mb-4 text-black">Who we are</h2>
        <p className="text-lg text-black">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>

      <div className="w-4/5">
        <img
          className="object-contain w-full lg:h-[90vh] md:h-[70vh]"
          src="/MidImage.svg"
          alt="Small Image"
        />
      </div>

      <div className="w-4/5 my-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Meet the heros behind the magic
        </h2>
      </div>
      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5">
        {/* Kart 1 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <img
            className="w-full h-[50vh] object-cover rounded-md mb-4"
            src="/Rectangle583.svg"
            alt="card1"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Esther Howard
          </h3>
          <p className="text-gray-600">Founder</p>
        </div>
        {/* Kart 2 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <img
            className="w-full h-[50vh] object-cover rounded-md mb-4"
            src="/Rectangle582.svg"
            alt="card2"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">Cody Fisher</h3>
          <p className="text-gray-600">Developer</p>
        </div>
        {/* Kart 3 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <img
            className="w-full h-[50vh] object-cover rounded-md mb-4"
            src="/Rectangle581.svg"
            alt="card3"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Brooklyn Simmons
          </h3>
          <p className="text-gray-600">Designer</p>
        </div>
      </div>
      {/* Metrikler */}
      <div className="bg-black py-8 w-full mt-40">
        <div className="container mx-auto flex justify-around ">
          <div className="text-center ">
            <h4 className="text-yellow-400 text-2xl font-bold mb-2 flex justify-start sm:text-4xl">
              350+
            </h4>
            <p className="text-white">Clients Worldwide</p>
          </div>
          <div className="text-center">
            <h4 className="text-yellow-400 text-2xl font-bold mb-2 flex justify-start sm:text-4xl">
              20+
            </h4>
            <p className="text-white">Team Members</p>
          </div>
          <div className="text-center">
            <h4 className="text-yellow-400 text-2xl font-bold mb-2 flex justify-start sm:text-4xl">
              100+
            </h4>
            <p className="text-white">Projects Completed</p>
          </div>
          <div className="text-center">
            <h4 className="text-yellow-400 text-2xl font-bold mb-2 flex justify-start sm:text-4xl">
              85M+
            </h4>
            <p className="text-white">Revenue Generated</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex mt-40 mb-10 items-center flex flex-col sm:flex-row">
        <div className="w-full md:w-2/5 ">
          <img
            src="/SideImage.svg"
            alt="sideimage"
            className="object-contain"
          />
        </div>
        {/* İletişim formu */}
        <div className="w-full mt-10 md:w-3/5 flex flex-col flex items-center mb-0 ">
          <h2 className="text-black text-2xl font-bold mb-4 text-center">
            We'd love to hear from you
          </h2>
          <div>
            <form>
              <div className="mb-10 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  className="bg-white-800 border border-gray-600 rounded px-4 py-2 text-black w-full"
                />
              </div>
              <div className="mb-10">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="bg-white-800 border border-gray-600 rounded px-4 py-2 text-black w-full"
                />
              </div>
              <div className="mb-10">
                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="WebSite URL*"
                  className="bg-white-800 border border-gray-600 rounded px-4 py-2 text-black w-full"
                />
              </div>
              <div className="mb-10">
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="Project Details*"
                  className="bg-white-800 border border-gray-600 rounded px-4 py-2 text-black w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded w-full"
              >
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

//Samet Koca
