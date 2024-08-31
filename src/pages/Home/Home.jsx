import { Send } from "../../utils/icons.util";
import { Refresh } from "../../utils/icons.util";
import { GPTLogo } from "../../utils/icons.util";
import { Like } from "../../utils/icons.util";
import { Dislike } from "../../utils/icons.util";
import { User } from "../../utils/icons.util";
import { Logout } from "../../utils/icons.util";
import { Updates } from "../../utils/icons.util";
import { Discord } from "../../utils/icons.util";
import { Contrast } from "../../utils/icons.util";
import { Delete } from "../../utils/icons.util";
import { Pen } from "../../utils/icons.util";
import { Message } from "../../utils/icons.util";
import { Plus } from "../../utils/icons.util";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-[0px] bg-[#343541]">
      <div className="w-[484px] h-[33px] top-[23px] left-[465px] relative rounded-sm flex justify-between">
        <User />
        <p className="w-[428px] h-[33px] left-[521px] font-bold text-white">What is a Chatbot?</p>
      </div>
      <div className="w-[1258px] h-[162px] top-[43px] left-[261px] relative text-white border border-[#32343A] bg-[#444654] font-bold flex">
        <div className="w-[30px] h-[30px] top-[27px] left-[204px] relative">
          <span className="absolute left-1/2 -translate-x-1/2 p-1 rounded-sm bg-[#0FA47F]"><GPTLogo /></span>
        </div>
        <p className="w-[628px] h-[108px] top-[28px] left-[260px] relative">
          A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. 
          It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. 
          and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.
        </p>
        <div className="w-[41.78px] h-[14px] top-[32px] left-[375px] relative flex gap-3">
          <button><Like /></button>
          <button><Dislike /></button>
        </div>
      </div>
      <button className="w-[184px] h-[37px] top-[361px] left-[758px] border border-[#444654] relative flex justify-around rounded">
        <div className="top-[11px] relative"><Refresh /></div>
        <p className="w-[144px] h-[27px] top-[5px] font-bold text-white text-sm relative">Regenerate response</p>
      </button>
      <div className="w-[768px] h-[48px] top-[371px] left-[465px] relative flex">
        <input type="text" 
        className="w-[768px] h-[48px] rounded bg-[#40414E] border border-[#303139] shadow-[0_0px_6px_0px_rgba(0,0,0,0.1)] focus:outline-none p-4 text-white"/>
        <button className="w-[14px] h-[14px] absolute top-[19px] left-[741px]"><Send /></button>
      </div>
      <div className="w-[888px] h-[26px] top-[379px] left-[416px] relative text-[#9A9B9F] text-xs">
        <span className="underline">ChatGPT Jan 9 Version</span>. Free Research Preview. 
        Our goal is to make AI systems more natural and safe to interact with. 
        Your feedback will help us improve.
      </div>
      <div className="w-[261px] h-[752px] top-[-306px] relative bg-[#202123]">
        <button>
          <div className="w-[244px] h-[45px] top-[9px] left-[8px] relative rounded-md text-white border border-[#444654]">
            <Plus />
          </div>
        </button>
        <div className="w-[244px] h-[45px] top-[11px] left-[8px] relative rounded-md flex justify-around items-center text-white text-sm bg-[#343540]">
          <button><Message /></button>
          Chatbot definition expl
          <button><Pen /></button>
          <button><Delete /></button>
        </div>
        <div className="w-[244px] top-[366px] left-[8px] relative border border-[#444654] rounded"></div>
        <div className="w-[261px] h-[252px] top-[384px] relative flex flex-col justify-around">
          <Link>
            <div className="w-[176.1px] h-[13.44px] left-[22px] relative text-sm text-white flex justify-between">
              <Delete /> Clear conversations
            </div>
          </Link>
          <Link>
            <div className="w-[106px] h-[14px] left-[22px] relative text-sm text-white flex justify-between">
              <Contrast /> Light mode
            </div>
          </Link>
          <Link>
            <div className="w-[133px] h-[12px] left-[22px] relative text-sm text-white flex justify-between">
              <Discord /> OpenAI Discord
            </div>
          </Link>
          <Link>
            <div className="w-[127px] h-[12px] left-[22px] relative text-sm text-white flex justify-between">
              <Updates /> Updates & FAQ
            </div>
          </Link>
          <Link>
            <div className="w-[79px] h-[12px] left-[22px] relative text-sm text-white flex justify-between">
              <Logout /> Log out
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
