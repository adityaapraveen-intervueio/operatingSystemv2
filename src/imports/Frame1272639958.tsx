import svgPaths from "./svg-nflrobrm3v";
import imgRectangle34626026 from "figma:asset/193c563de04664e6d46e7f1b0ea1a16fb615272e.png";
import imgAvatar from "figma:asset/08a3b47613f2d0f6aced2c3c467602e3aa1638f1.png";
import imgAvatar1 from "figma:asset/1af2086220affecd5f498aeca93f64918a91bf86.png";
import imgAvatar2 from "figma:asset/20b88955d6e91b0f9cbf6e8b1d6959045013c348.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[25px] text-center text-white w-full">Layla Munoz</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d5d7da] text-[19px] text-center w-full">00:05</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[266px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar} />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar1} />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
      </div>
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[259px] top-[260px] w-[268px]">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[14px] left-[32px] top-[21px] w-[56px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 14">
        <g id="Frame 1272639956">
          <circle cx="7" cy="7" fill="var(--fill-0, #ED6A5E)" id="Ellipse 937" r="7" />
          <circle cx="28" cy="7" fill="var(--fill-0, #F4BE4F)" id="Ellipse 938" r="7" />
          <circle cx="49" cy="7" fill="var(--fill-0, #61C554)" id="Ellipse 939" r="7" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative text-white" data-name="Text and supporting text">
      <p className="font-['Inter:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[18px] w-full">Messages</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-full">Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Heading">
      <TextAndSupportingText />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#362f46] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[16px] pl-[24px] pr-[12px] pt-[24px] relative w-full">
        <Heading />
        <div className="bg-[rgba(250,250,250,0.16)] relative rounded-[8px] shrink-0 w-full" data-name="Horizontal tabs">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[2px] items-center justify-center p-[3px] relative w-full">
              <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="_Tab button base">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Transcript</p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="_Tab button base">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] whitespace-nowrap">Questions</p>
                    <div className="bg-[#fafafa] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
                      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#414651] text-[12px] text-center whitespace-nowrap">2</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[8px] right-[12px] rounded-[8px] size-[40px] top-[12px]" data-name="Buttons/Button close X">
          <div className="overflow-clip shrink-0 size-[20px]" data-name="x-close" />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full" data-name="Text and supporting text">
      <p className="opacity-60 relative shrink-0 w-full">Question 1</p>
      <p className="relative shrink-0 w-full">Given a list of building heights, determine how many can be seen from the left. A building is visible if it is taller than all to its left. Tell me how will a function to return the count of visible buildings.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#c9afff] text-[14px] whitespace-nowrap">View answer</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[5px] relative w-[10px]" data-name="Icon">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                <path d={svgPaths.p6177000} id="Icon" stroke="var(--stroke-0, #C9AFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <TextAndSupportingText1 />
      <Frame7 />
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Message bubble" style={{ backgroundImage: "linear-gradient(181.192deg, rgba(255, 255, 255, 0.14) 24.762%, rgba(153, 153, 153, 0.114) 108.48%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[15px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <MessageBubble />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium opacity-50 relative shrink-0 w-full">Question 2</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Given a list of building heights, determine how many can be seen from the left. A building is visible if it is taller than all to its left. Tell me how will a function to return the count of visible buildings.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#c9afff] text-[14px] whitespace-nowrap">View answer</p>
      <div className="h-[5px] relative shrink-0 w-[10px]" data-name="Icon">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p6177000} id="Icon" stroke="var(--stroke-0, #C9AFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[151px] items-start relative shrink-0 w-full">
      <TextAndSupportingText2 />
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[244px] relative rounded-[13px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(234.623deg, rgba(0, 0, 0, 0.05) 23.366%, rgba(35, 20, 69, 0.08) 95.812%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(204,204,204,0.18)] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[14px] py-[13px] relative size-full">
          <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-white">
            <p className="leading-[20px] mb-[14px] whitespace-pre-wrap">{`To find out how many buildings can be seen from the left based on their heights, you can follow these steps: `}</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">{`iterate through the list of building heights, keeping track of the tallest building encountered so far. `}</span>
              </li>
              <li className="mb-0 ms-[21px]">
                <span className="leading-[20px]">{`Each time you find a building taller than this tallest one, increase your count of visible buildings and update the tallest height. `}</span>
              </li>
              <li className="ms-[21px]">
                <span className="leading-[20px]">Finally, return the count of visible buildings.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="h-[425px] relative rounded-[8px] shrink-0 w-full" data-name="Message bubble" style={{ backgroundImage: "linear-gradient(183.031deg, rgba(255, 255, 255, 0.14) 24.762%, rgba(153, 153, 153, 0.114) 108.48%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[11px] relative size-full">
          <Frame9 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col h-[425px] items-start relative shrink-0 w-full" data-name="Section">
      <MessageBubble1 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full" data-name="Text and supporting text">
      <p className="opacity-60 relative shrink-0 w-full">Question 3</p>
      <p className="relative shrink-0 w-full">Given a list of building heights, determine how many can be seen from the left. A building is visible if it is taller than all to its left. Tell me how will a function to return the count of visible buildings.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#c9afff] text-[14px] whitespace-nowrap">View answer</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[5px] relative w-[10px]" data-name="Icon">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                <path d={svgPaths.p6177000} id="Icon" stroke="var(--stroke-0, #C9AFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <TextAndSupportingText3 />
      <Frame13 />
    </div>
  );
}

function MessageBubble2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Message bubble" style={{ backgroundImage: "linear-gradient(181.192deg, rgba(255, 255, 255, 0.14) 24.762%, rgba(153, 153, 153, 0.114) 108.48%)" }}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[15px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <MessageBubble2 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full" data-name="Text and supporting text">
      <p className="opacity-70 relative shrink-0 w-full">Question 3</p>
      <p className="relative shrink-0 w-full">Given a list of building heights, determine how many can be seen from the left. A building is visible if it is taller than all to its left. Write a function to return the count of visible buildings.</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#c9afff] text-[14px] whitespace-nowrap">View answer</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[5px] relative w-[10px]" data-name="Icon">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                <path d={svgPaths.p6177000} id="Icon" stroke="var(--stroke-0, #C9AFFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[391px]" data-name="Section">
      <TextAndSupportingText4 />
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[24px] top-[10px] w-[392px]">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#362f46] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Panel() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Panel">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#362f46] content-stretch flex flex-col items-start overflow-clip pb-[24px] relative shrink-0 w-full" data-name="_Slide out menu header">
          <Content />
        </div>
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-l border-solid inset-[0_0_0_-1px] pointer-events-none shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)]" />
    </div>
  );
}

function SlideOutMenu() {
  return (
    <div className="absolute content-stretch flex h-[960px] items-start left-[771px] overflow-clip top-0 w-[440px]" data-name="Slide out menu">
      <Panel />
    </div>
  );
}

function FluentCallEnd16Filled() {
  return (
    <div className="absolute inset-[-2.17%_0.69%_2.17%_1.36%]" data-name="fluent:call-end-16-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="fluent:call-end-16-filled">
          <path d={svgPaths.p1fabab80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FluentMic16Filled() {
  return (
    <div className="absolute h-[34px] left-[288.8px] overflow-clip top-[844px] w-[34.711px]" data-name="fluent:mic-16-filled">
      <FluentCallEnd16Filled />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[270px] top-[827px]">
      <div className="absolute h-[68px] left-[270px] top-[827px] w-[69.422px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.422 68">
          <ellipse cx="34.711" cy="34" data-figma-bg-blur-radius="31.6384" fill="var(--fill-0, #B22D34)" id="Ellipse 13" rx="34.711" ry="34" />
          <defs>
            <clipPath id="bgblur_0_42_18177_clip_path" transform="translate(31.6384 31.6384)">
              <ellipse cx="34.711" cy="34" rx="34.711" ry="34" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <FluentMic16Filled />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[68px] left-[357.04px] top-[827px] w-[69.422px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.4222 68">
        <g id="Group 40340">
          <ellipse cx="34.7112" cy="34" data-figma-bg-blur-radius="31.6384" fill="var(--fill-0, white)" fillOpacity="0.15" id="Ellipse 13" rx="34.711" ry="34" />
          <g id="fluent:mic-16-filled">
            <path d={svgPaths.p2fb89280} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_42_18169_clip_path" transform="translate(31.6382 31.6384)">
            <ellipse cx="34.7112" cy="34" rx="34.711" ry="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[672px] top-[830px]">
      <div className="absolute h-[71.505px] left-[672px] top-[830px] w-[73px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 71.5048">
          <ellipse cx="36.5" cy="35.7524" data-figma-bg-blur-radius="31.6384" fill="var(--fill-0, white)" fillOpacity="0.15" id="Ellipse 13" rx="36.5" ry="35.7524" />
          <defs>
            <clipPath id="bgblur_0_42_18165_clip_path" transform="translate(31.6384 31.6384)">
              <ellipse cx="36.5" cy="35.7524" rx="36.5" ry="35.7524" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[691.74px] overflow-clip size-[32.304px] top-[849.74px]" data-name="maximize-01">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2281 26.2281">
              <path d={svgPaths.p37790080} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="overflow-clip relative rounded-[11px] size-full">
      <div className="absolute h-[1033px] left-0 top-0 w-[1211px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-gradient-to-b from-[#1a1033] inset-0 to-[#140c24]" />
          <div className="absolute bg-size-[1024px_1024px] bg-top-left inset-0 opacity-2" style={{ backgroundImage: `url('${imgRectangle34626026}')` }} />
        </div>
      </div>
      <Frame1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[393px] not-italic opacity-80 text-[19px] text-center text-white top-[18px] tracking-[-0.38px] w-[204px]">Intervue Screening call</p>
      <Frame4 />
      <SlideOutMenu />
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}