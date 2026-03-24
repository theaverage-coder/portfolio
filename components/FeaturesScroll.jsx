"use client";
import { useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function FeaturesScroll({ items }) {
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
        <div className="flex items-center justify-center">
            <div className="relative max-w-4xl justify-center items-center ">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-5vw] top-1/2 -translate-y-1/2 z-10  shadow p-2 rounded-full"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-[-5vw] top-1/2 -translate-y-1/2 z-10  shadow p-2 rounded-full"
                >
                    <IoIosArrowForward />

                </button>
                <div ref={scrollRef} className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar ">
                    {items.map((item, i) => (
                        <div key={i} className="w-full flex-shrink-0 snap-start ">
                            <div className="shadow rounded p-2 flex-row flex justify-between items-center">
                                {item.images.map((img, j) => (
                                    <div key={j} >
                                        <img src={img} className="w-48" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-center">{item.caption}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}