"use client";

import { Carousel } from "flowbite-react";

export function Hero() {
  return (
    <div className="px-2 md:px-5 mt-5 h-[400px] lg:h-[600px]">
      <Carousel>
        <div
          className="flex h-full items-center justify-center dark:text-white bg-cover"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('/assets/images/banner/5.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-10 md:px-20 flex flex-col">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl max-w-lg text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="max-w-lg text-white/50 my-6">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3">
                <button className="btn-main">Discover More</button>
                <button className="btn-pri">Latest Project</button>
              </div>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
