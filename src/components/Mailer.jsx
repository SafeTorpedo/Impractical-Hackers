import React from "react";

const Mailer = () => {
    return (
        <div className="w-full py-16 text-white">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
                        Want songs by your favourite artists translated and sent
                        right away to your email?
                    </h1>
                    <p>If your answer is yes, sign up for it now!!</p>
                </div>
                <div className="my-4">
                    <input
                        type="email"
                        placeholder="Enter email address"
                        name=""
                        id=""
                    />
                    <button className="bg-[#00df8c] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                        Notify me!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mailer;
