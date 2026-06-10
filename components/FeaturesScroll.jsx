"use client";
import { useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturesScroll({ items, mobilePicture }) {
    const scrollRef = useRef();

    const scroll = (dir) => {
        const container = scrollRef.current;
        const width = container.offsetWidth;

        scrollRef.current.scrollBy({
            left: dir === "left" ? -width : width,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex items-center justify-center my-20">
            <div className="relative sm:w-[90%] lg:max-w-4xl justify-center items-center ">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-7vw] lg:left-[-5vw]
                                top-1/2 -translate-y-1/2 z-10

                                flex items-center justify-center
                                w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-3

                                bg-white/5 border border-white/10 text-white
                                rounded-full md:rounded-lg
                                backdrop-blur-sm hover:bg-white/10"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="
                        absolute right-[-7vw] lg:right-[-5vw]
                        top-1/2 -translate-y-1/2 z-10

                        flex items-center justify-center
                        w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-3

                        bg-white/5 border border-white/10 text-white
                        rounded-full md:rounded-lg
                        backdrop-blur-sm hover:bg-white/10
                    "
                >
                    <IoIosArrowForward />

                </button>
                <div ref={scrollRef} className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar ">
                    {items.map((item, i) => (
                        <div key={i} className="w-full flex-shrink-0 snap-start flex flex-col justify-between justify-center">
                            <div className="rounded sm:p-2 flex-row flex justify-between items-center">
                                {item.images.map((img, j) => (
                                    <div key={j}>
                                        <img src={img} className={`w-[150px] md:w-[200px] ${mobilePicture ? "lg:w-[270px]" : "lg:w-auto"}`} />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-center ">{item.caption}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}