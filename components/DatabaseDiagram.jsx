"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Diagram({ database }) {
    return (
        <div className="w-full sm:h-[500px] border overflow-hidden flex items-center justify-center">
            <TransformWrapper>
                <TransformComponent>
                    <img src={database} alt="Database Diagram" />
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}