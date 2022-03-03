import { useEffect, useState } from "react";
import { DesktopPattern, Dice, MobilePattern } from "./icons";

const MyHome = () => {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();

  const rollDice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);
    setId(data.slip.id);
  };

  useEffect(async () => {
    rollDice();
  }, []);

  return (
    <div className=" w-full h-screen bg-[#202632] flex justify-center items-center text-[#CFE3EA] font-manrope px-4">
      <div className="flex flex-col items-center bg-[#313A49] w-full rounded-md px-6 pt-10 pb-16 relative max-w-lg">
        <p className=" uppercase text-[#4AC98F] text-sm mb-9">advice #{id}</p>
        <p className=" text-2xl mb-6 text-center">{advice}</p>
        <MobilePattern />
        <DesktopPattern />
        <div
          className="bg-[#4AC98F] p-5 rounded-full absolute -bottom-8 cursor-pointer hover:bg-[#53FFAA] hover:shadow-custom hover:shadow-[#53FFAA]"
          onClick={rollDice}
        >
          <Dice />
        </div>
      </div>
    </div>
  );
};

export default MyHome;
