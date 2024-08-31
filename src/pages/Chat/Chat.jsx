import { Send } from "../../utils/icons.util";
import { Limitations } from "../../utils/icons.util";
import { Flash } from "../../utils/icons.util";
import { Logout } from "../../utils/icons.util";
import { Updates } from "../../utils/icons.util";
import { Discord } from "../../utils/icons.util";
import { Contrast } from "../../utils/icons.util";
import { Plus } from "../../utils/icons.util";
import { Link } from "react-router-dom";

export const Chat = () => {
  return ( 
    <div className="h-[0px]">
      <div className="w-[720px] h-[444px] top-[141px] left-[487px] relative rounded">
        <h1 className="w-[230px] h-[35px] text-white text-3xl left-[244px] text-center relative">
          ChatGPT
        </h1>
        <div className="w-[720px] top-[69px] relative flex justify-around">
          <Contrast />
          <Flash />
          <Limitations />
        </div>
        <div className="w-[720px] top-[85px] relative flex justify-around">
          <div className="text-white">
            Examples
          </div>
          <div className="text-white">
            Capabilities
          </div>
          <div className="text-white">
            Limitations
          </div>
        </div>
        <div className="w-[720px] h-[238px] top-[121px] relative grid grid-cols-3 gap-4">
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            “Explain quantum computing in simple terms” →
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            Remembers what user said earlier in the conversation
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            May occasionally generate incorrent information
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            “Got any creative ideas for a 10 year old’s birthday?” →
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            Allows user to provide follow- up corrections
          </div>
          <div className="w-[230px] h-[83px] text-white bg-[#444654] rounded-md text-center">
            May occasionally produce harmful instructions or biased content
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            “How do I make an HTTP request in Javascript?” →
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            Trained to decline inappropriate requests
          </div>
          <div className="w-[230px] h-[63px] text-white bg-[#444654] rounded-md text-center">
            Limited knowledge of world and events after 2021
          </div>
        </div>
      </div>
      <div className="w-[768px] h-[48px] top-[222px] left-[465px] relative flex">
        <input type="text" 
        className="w-[768px] h-[48px] rounded bg-[#40414E] border border-[#303139] shadow-[0_0px_6px_0px_rgba(0,0,0,0.1)] focus:outline-none p-4 text-white"/>
        <button className="w-[14px] h-[14px] absolute top-[19px] left-[741px]"><Send /></button>
      </div>
      <div className="w-[888px] h-[26px] top-[230px] left-[416px] relative text-[#9A9B9F] text-xs">
        <span className="underline">ChatGPT Jan 9 Version</span>. Free Research Preview. 
        Our goal is to make AI systems more natural and safe to interact with. 
        Your feedback will help us improve.
      </div>
      <div className="w-[261px] h-[752px] top-[-518px] relative bg-[#202123]">
        <button>
          <div className="w-[244px] h-[45px] top-[9px] left-[8px] relative rounded-md text-white border border-[#444654]">
            <Plus />
          </div>
        </button>
        <div className="w-[244px] top-[366px] left-[8px] relative border border-[#444654] rounded"></div>
        <div className="w-[261px] h-[252px] top-[384px] relative flex flex-col justify-around">
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
