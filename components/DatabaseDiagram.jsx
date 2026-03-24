"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Diagram() {
    return (
        <div className="w-full h-[500px] border overflow-hidden">
            <TransformWrapper>
                <TransformComponent>
                    <img src="/diagram.svg" alt="Database Diagram" />
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}