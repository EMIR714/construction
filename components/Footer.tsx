import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoPioner from "../public/logoPioner.svg";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1920px] px-6">
      <div className="flex flex-wrap justify-around">
        <div className=" ">
          <Link
            href="https://pioner.kg/pioner/company.html"
            className="flex items-center flex-initial font-bold flex-col"
          >
            <span className="mr-2 border rounded-full ">
              <Image
                src={logoPioner}
                alt="Logo"
                width={109}
                height={114}
                className="rounded-md"
              />
            </span>
            <span>ПИОНЕР</span>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#about"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Главная
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="https://pioner.kg/pioner/company.html"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                О компании
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#preimuchestva"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Преимущества
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#planirovki"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Планировки
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#garantii"
                className=" text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Гарантии
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#approach"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Оплата
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#contact"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Контакты
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="#end"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Наши завершеннные проекты
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="https://2gis.kg/bishkek/firm/70000001043043738"
                className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                ул. Льва Толстого 6К - пер. ул. Матросова
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="tel:+996999690000"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                +996 999 69 00 00
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="tel:+996509690000"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                +996 509 69 00 00
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="tel:+996775690000"
                className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
              >
                +996 775 69 00 00
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row">
        <div>
          <Link href="https://www.instagram.com/aksoftdev/">
            <span>
              &copy; {new Date().getFullYear()} Aksoft. Все права защищены.
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="https://t.me/emcool27" className="text-white">
            {" "}
            Created by Emir
          </Link>{" "}
          <FaLocationArrow />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
