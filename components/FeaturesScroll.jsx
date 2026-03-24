"use client";
import { useEffect, useRef } from "react";

export default function FeaturesScroll({ items }) {
    const scrollRef = useRef();

    const scroll = (dir) => {
        const amount = 850;
        scrollRef.current.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex items-center justify-center">
            <div className="relative max-w-4xl border justify-center items-center">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-5vw] top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
                >
                    ◀
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-[-5vw] top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
                >
                    ▶
                </button>
                <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10 ">
                    {items.map((item, i) => (
                        <div key={i} className="min-w-[850px]">
                            <div className="shadow border rounded p-2 flex-row flex justify-between items-center">
                                {item.images.map((img, j) => (
                                    <div key={j} >
                                        <img src={img} className="w-48" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm">{item.caption}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}