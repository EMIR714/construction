import React from "react";
import { banners } from "@/data";

const Banner = () => {
  return (
    <div>
      <h2 className="heading sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 font-medium">
        Развитая инфраструктура
        <span className="text-purple mr-2 ml-2">ЖК “Пионер Плюс”</span>
        позволяет получить все необходимое в шаговой доступности
      </h2>
      <div className="flex flex-col gap-5">
        <div>
          <img src={banners[0].banner} alt="Banner 1" />
          <div>
            <p>Расположение ЖК “Пионер Плюс”</p>
            <p className="line-clamp-3">
              Рядом с жилым комплексом находятся все необходимые объекты для
              комфортной жизни, такие как:
            </p>
            <p>Глобус</p>
            <p>ТЦ Вефа</p>
            <p>ЦУМ</p>
          </div>
        </div>
        <img src={banners[1].banner} alt="Banner 2" />
        <img src={banners[2].banner} alt="Banner 3" />
      </div>
    </div>
  );
};
export default Banner;
