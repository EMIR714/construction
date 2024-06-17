import React from "react";
import { banners } from "@/data";

const Banner = () => {
  return (
    <div>
      <h2 className="heading sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 font-medium mb-2">
        Развитая инфраструктура <br />
        <span className="text-purple">ЖК “Пионер Плюс”</span> <br />
        позволяет получить все необходимое в шаговой доступности
      </h2>
      {/* Mobile view */}
      <div className="flex flex-col gap-5 sm:hidden">
        {banners.map((banner) => (
          <div key={banner.id} className="flex flex-col">
            <p className="text-center">{banner.title}</p>
            <img
              src={banner.banner}
              alt={`Banner ${banner.id}`}
              className="z-0"
            />
          </div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-col gap-5">
        {banners.map((banner) => (
          <div key={banner.id} className="flex flex-col">
            <img
              src={banner.bannerDekstop}
              alt={`Banner ${banner.id}`}
              className="z-0 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
