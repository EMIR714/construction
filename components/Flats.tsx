import { useState } from "react";
import Modal from "react-modal";
import { flats } from "@/data";

import { Button } from "./ui/button";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import SimpleSlider from "./ui/slider";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "95%",
    height: "90%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    background: "rgb(0, 17, 82)",
    zIndex: "1000",
  },
};

interface Flat {
  id: number;
  size: string;
  price: string;
  thumbnail: string;
  photos: string[];
}

export default function Flats() {
  const [flatSelection, setflatSelection] = useState<Flat | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (flatSize: string) => {
    const flatSelection = flats.filter((flat) => {
      return flat.size === flatSize;
    });
    setflatSelection(flatSelection[0]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="mt-2" id="planirovki">
      <h2 className="heading">
        Выберите планировку из готовых вариантов или закажите индивидуальную
        планировку на стадии строительства дома
      </h2>
      <div className=" flex flex-col justify-between">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-end ">
            <MagicButton
              title="Закрыть"
              handleClick={closeModal}
              icon={null}
              position=""
            />
          </div>
          <div>
            <div className="flex justify-center">
              <div className="w-[90%] h-full">
                {flatSelection && (
                  <SimpleSlider photos={flatSelection.photos} />
                )}
              </div>
            </div>
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4 text-center"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {flatSelection?.price}
            </p>
            <div className="flex justify-center">
              <Link href="https://api.whatsapp.com/send/?phone=996999690000">
                <MagicButton
                  title="Оставить зявку"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>
        </Modal>

        <div className="mb-auto px-4 ">
          <div className="container mx-auto">
            <div id="recommended-books" className="flex hide-scroll-bar">
              <section className="container mx-auto mb-12">
                <div className="flex flex-wrap -mx-2">
                  {flats.map((flat) => {
                    return (
                      <div
                        key={flat.id}
                        className="w-full md:w-1/3 px-2 mb-4 animate-pop-in"
                      >
                        <h3 className="text-xl font-semibold mb-4 text-purple text-center">
                          {flat.size}
                        </h3>
                        <div className=" p-2 flex items-center flex-col">
                          <div className="h-[14rem] w-[12rem] lg:h-[19rem] lg:w-[17rem]">
                            <img
                              src={flat.thumbnail}
                              alt={"Thumbnail of the book " + flat.size}
                              className="w-full h-full rounded-lg shadow-lg p-2"
                            />
                          </div>
                          <p
                            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4"
                            style={{
                              color: "#BEC1DD",
                              margin: "1vh 0",
                            }}
                          >
                            {flat.price}
                          </p>

                          <Button
                            className="bg-black text-white w-full rounded-md hover:bg-gray-800 hover:text-white"
                            type="submit"
                            variant="outline"
                            onClick={() => {
                              openModal(flat.size);
                            }}
                          >
                            Посмотреть все
                          </Button>
                          <Link href="https://api.whatsapp.com/send/?phone=996999690000">
                            <MagicButton
                              title="WhatsApp"
                              icon={<FaLocationArrow />}
                              position="right"
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
