import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df8c] font-bold p-3">
                    What does that K-POP song's lyrics mean??
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Tune into Flatline
                </h1>
                <div className="flex justify-center items-center py-4">
                    <p className="md:text-4xl sm:text-3xl text-xl font-bold">
                        Translate lyrics to
                    </p>
                    <Typed
                        className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-2 pl-2"
                        strings={[
                            "Japanese",
                            "Korean",
                            "Spanish",
                            "German",
                            "your own local language",
                        ]}
                        typeSpeed={60}
                        backSpeed={60}
                        loop
                    />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-400">
                    Search for a song and get the lyrics in any language...
                </p>
                <button className="bg-[#00df8c] w-[180px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                    Check it out!
                </button>
            </div>
        </div>
    );
};

export default Hero;
