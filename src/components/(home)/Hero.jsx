"use client";

import { Carousel } from "flowbite-react";

export function Hero() {
  const heroContent = [
    {
      id: 1,
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      image: "/assets/images/banner/1.jpg",
    },
    {
      id: 2,
      title: "Expert Mechanics, Quality Service",
      description:
        "Our team of expert mechanics ensures your vehicle gets the best service at unbeatable prices.",
      image: "/assets/images/banner/2.jpg",
    },
    {
      id: 3,
      title: "Reliable & Fast Car Repairs",
      description:
        "We offer quick and reliable car repair services so you can get back on the road safely.",
      image: "/assets/images/banner/3.jpg",
    },
    {
      id: 4,
      title: "Premium Auto Care at Your Fingertips",
      description:
        "Book an appointment today and experience hassle-free car maintenance and repair.",
      image: "/assets/images/banner/4.jpg",
    },
    {
      id: 5,
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages available, but the majority have suffered alteration in some form.",
      image: "/assets/images/banner/5.jpg",
    },
    {
      id: 6,
      title: "Drive Smooth with Our Top Services",
      description:
        "We ensure your car stays in top condition with our range of high-quality services.",
      image: "/assets/images/banner/6.jpg",
    },
  ];

  console.log(heroContent);

  return (
    <div className="px-2 md:px-5 mt-5 h-[400px] lg:h-[600px]">
      <Carousel>
        {heroContent.map((item) => (
          <div
            key={item.id}
            className="flex h-full items-center justify-center dark:text-white bg-cover"
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container mx-auto px-10 md:px-20 flex flex-col">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-6xl max-w-lg text-white">
                  {item.title}{" "}
                </h1>
                <p className="max-w-xl text-white/50 my-6">
                  {item.description}
                </p>
                <div className="flex gap-3">
                  <button className="btn-main">Discover More</button>
                  <button className="btn-pri">Latest Project</button>
                </div>
              </div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
