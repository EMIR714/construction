import React from "react";
import Image from "next/image";
import end from "../public/end.jpg";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const End = () => {
  return (
    <div className="relative flex lg:flex-row flex-col max-container" id="end">
      <div className="min-w-[50%]">
        <div className="flex items-center justify-center">
          <Image src={end} alt="Logo" className="text-center rounded-3xl " />
        </div>
      </div>

      <div className="lg:w-1/2 w-full  lg:h-auto md:h-[250px] h-[150px] ml-2">
        <h2 className="text-[20px] md:text-3xl lg:text-4xl text-center heading">
          Так же Вы можете посмотреть
          <span className="text-purple">наш завершенный объект</span>
        </h2>
        <p
          className="lg:text-xl lg:font-normal font-light text-sm"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          Жилой комплекс &quot;Пионер&quot;, визитная карточка нашей
          строительной компании. Вы можете записаться на экскурсию по комплексу
          и убедиться своими глазами, насколько качественно и профессионально мы
          выполняем свою работу.
        </p>
        <div className="flex justify-center">
          <Link href="https://pioner.kg/pioner/">
            <MagicButton
              title="Подробнее"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default End;
