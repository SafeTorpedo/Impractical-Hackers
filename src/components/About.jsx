import React from "react";
import Pratham from "./images/Pratham.jpg";
import Oluwajuwonlo from "./images/Oluwajuwonlo.jpg";
import Kaushik from "./images/Kaushik.jpg";
import Mamtha from "./images/Mamtha.png";

const About = () => {
    return (
        <div id="about" className="w-full py-[10rem] px-4 text-white ">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-6">
                <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-21 mx-auto mt-[-3rem] "
                        src={Pratham}
                        alt="Pratham"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Pratham Gupta
                    </h2>
                    <div className="text-center font-medium ">
                        <p>Frontend Developer</p>
                        <p>Vellore Institute of Technology Vellore, India</p>
                        <p>2nd Year</p>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.linkedin.com/in/pratham-gupta-a23673243/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-21 mx-auto mt-[-3rem] "
                        src={Oluwajuwonlo}
                        alt="Oluwajuwonlo"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Oluwajuwonlo Ogunyemi
                    </h2>
                    <div className="text-center font-medium ">
                        <p>Frontend Developer</p>
                        <p>University of Ilorin, Nigeria</p>
                        <p>3rd Year</p>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.linkedin.com/in/oluwajuwonlo-ogunyemi-400364216/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-21 mx-auto mt-[-3rem] "
                        src={Kaushik}
                        alt="Kaushik"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Kaushik Iyer
                    </h2>
                    <div className="text-center font-medium ">
                        <p>Backend Developer</p>
                        <p>KJ Somaiya College of Engineering</p>
                        <p>3rd Year</p>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.linkedin.com/in/kaushik-iyer-8aa347216/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img
                        className="w-21 mx-auto mt-[-3rem] "
                        src={Mamtha}
                        alt="Mamtha"
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Mamtha Patalay
                    </h2>
                    <div className="text-center font-medium ">
                        <p>Designer</p>
                        <p>
                            Institute of Aeronautical Engineering, Hyderabad,
                            India
                        </p>
                        <p>3rd year</p>
                    </div>
                    <div className="text-center">
                        <a
                            href="https://www.linkedin.com/in/mamtha-patalay/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="bg-[#00df8c] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                                Connect with me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
