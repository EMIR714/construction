import React, { useRef, useState } from "react";
import Image from "next/image";
import MagicButton from "./MagicButton";
import MapWidget from "./MapWidget";
import Pin from "../public/pinPurple.png";
import Call from "../public/callPurple.png";
import Email from "../public/emailPurple.png";
import Insta from "../public/instagramWhite.png";
import WhatsApp from "../public/whatsappWhite.png";
import Facebook from "../public/facebookWhite.png";
import Modal from "react-modal";
import useAlert from "./hooks/useAlert";
import Alert from "./ui/Alert";
import emailjs from "@emailjs/browser";
import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "90%",
    height: "70%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
    background: "rgb(0, 17, 82)",
    zIndex: "1000",
  },
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const { alert, hideAlert, showAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Emir",
          from_email: form.email,
          to_email: "sheraliev270704@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setLoading(false);
        showAlert({
          text: "Спасибо! Данные успешно отправлены. 😃",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({
            name: "",
            email: "",
          });
        }, 3000);
      })
      .catch((error) => {
        showAlert({
          text: "Произошла ошибка. Проверьте интернет и попробуйте еще раз 😢",
          type: "danger",
        });
        setLoading(false);
      });
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="relative flex lg:flex-row flex-col max-container rounded-2xl gap-3 mb-7"
      id="contact"
    >
      <div className="min-w-[50%] flex flex-col gap-3 justify-between">
        <h2 className="heading">Наши контакты</h2>
        <Link href="https://2gis.kg/bishkek/firm/70000001043043738">
          <div className="flex gap-3">
            <div>
              <Image src={Pin} width={40} height={40} alt="pin" />
            </div>
            <div>
              <p className="lg:text-xl lg:font-normal font-light text-sm">
                ул. Льва Толстого 6К - пер. ул. Матросова
              </p>
              <p className="lg:text-xl lg:font-normal font-light text-sm">
                Наш офис работает с 9:00 до 18:00.
              </p>
            </div>
          </div>
        </Link>

        <div className="flex gap-3 items-center">
          <div>
            <Image src={Call} width={40} height={40} alt="call" />
          </div>
          <div className="flex flex-col gap-3">
            <Link href="tel:+996999690000">
              <p className="lg:text-xl lg:font-normal font-light text-sm">
                +996 999 69 00 00
              </p>
            </Link>
            <Link href="tel:+996509690000">
              <p className="lg:text-xl lg:font-normal font-light text-sm">
                +996 509 69 00 00
              </p>
            </Link>
            <Link href="tel:+996775690000">
              <p className="lg:text-xl lg:font-normal font-light text-sm">
                +996 775 69 00 00
              </p>
            </Link>
          </div>
        </div>
        <Link href="mailto:pioner24.kg@gmail.com">
          <div className="flex gap-3 items-center">
            <Image
              src={Email}
              width={40}
              height={40}
              alt="email"
              style={{ transform: "rotate(270deg)" }}
            />
            <p className="lg:text-xl lg:font-normal font-light text-sm">
              pioner24.kg@gmail.com
            </p>
          </div>
        </Link>
        <div className="flex justify-around">
          <Link href="https://www.instagram.com/pionerkg/">
            <Image src={Insta} width={40} height={40} alt="Insta" />{" "}
          </Link>
          <Link href="https://api.whatsapp.com/send/?phone=996999690000">
            {" "}
            <Image src={WhatsApp} width={40} height={40} alt="WhatsApp" />{" "}
          </Link>
          <Link href="https://www.facebook.com/people/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-%D0%9F%D0%B8%D0%BE%D0%BD%D0%B5%D1%80/100064107008835/">
            <Image src={Facebook} width={40} height={40} alt="Facebook" />
          </Link>
        </div>
        <div className="flex justify-center mb-1">
          {" "}
          <MagicButton
            title="Заказать звонок"
            position="none"
            icon={<div />}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[350px] h-[250px] ml-2 rounded-2xl overflow-hidden">
        <MapWidget />
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-end">
            <button onClick={closeModal}>
              <IoIosCloseCircle size={40} />
            </button>
          </div>
          <h2 className="heading">Укажите ваши контактные данные</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14 items-center"
          >
            <label className="text-black-500 font-semibold">
              <input
                type="text"
                name="name"
                className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="text-black-500 font-semibold">
              <input
                type="tel"
                name="email"
                className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                placeholder="Ваш номер телефона"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <button type="submit" disabled={loading} className="btn">
              <MagicButton
                title={
                  loading ? "Данные отправляются" : "Получить все планировки"
                }
                position="none"
                icon={<div />}
              />
            </button>
            {alert.show && <Alert {...alert} />}
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
