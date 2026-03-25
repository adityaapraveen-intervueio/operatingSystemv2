import svgPaths from "./svg-s788cbew26";
import imgAvatar from "figma:asset/cdac98998c90f96526373b774ef80741763f4a50.png";

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative" data-name="Text and supporting text">
      <p className="font-['Inter:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#181d27] text-[16px] w-full">Natalie craig</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#535862] text-[14px] w-full">Lana@gmail.com</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[88px] items-center relative shrink-0 w-full">
      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[56px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar} />
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
      </div>
      <TextAndSupportingText />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function SupportingTextAndPercentage() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Supporting text and percentage">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-ellipsis whitespace-nowrap">200 KB</p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-ellipsis w-full whitespace-nowrap">Software_developer</p>
      <SupportingTextAndPercentage />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="relative shrink-0 size-[40px]" data-name="File type icon">
        <Page />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
      </div>
      <Content2 />
    </div>
  );
}

function FileUploadItemBase() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="_File upload item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <Content1 />
          <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[6px] right-[16px] rounded-[6px] size-[32px] top-[21px]" data-name="Buttons/Button utility">
            <div className="overflow-clip shrink-0 size-[20px]" data-name="trash-01" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] w-full">Screening report</p>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text and supporting text">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[14px] w-full">Requirements Matched</p>
      </div>
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">3+ years of Javascript, Typescript, or Python experience</p>
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">Experience working in an agile environment</p>
    </div>
  );
}

function TextWrap2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] w-full">{`Bachelor's degree in computer science or related field`}</p>
    </div>
  );
}

function CheckItems() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check items">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
        <div className="bg-[#dcfae6] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Check icon">
          <div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9966 10.5044">
              <path clipRule="evenodd" d={svgPaths.p1532a90} fill="var(--fill-0, #079455)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <TextWrap />
      </div>
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
        <div className="bg-[#dcfae6] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Check icon">
          <div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9966 10.5044">
              <path clipRule="evenodd" d={svgPaths.p1532a90} fill="var(--fill-0, #079455)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <TextWrap1 />
      </div>
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
        <div className="bg-[#dcfae6] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Check icon">
          <div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9966 10.5044">
              <path clipRule="evenodd" d={svgPaths.p1532a90} fill="var(--fill-0, #079455)" fillRule="evenodd" id="Icon" />
            </svg>
          </div>
        </div>
        <TextWrap2 />
      </div>
    </div>
  );
}

function CheckItemsWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items wrap">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <CheckItems />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[15px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[13px] items-start px-[7px] py-[15px] relative w-full">
        <TextAndSupportingText3 />
        <CheckItemsWrap />
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text and supporting text">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#181d27] text-[14px] w-full">Requirements Not matched</p>
      </div>
    </div>
  );
}

function TextWrap3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#181d27] text-[#535862] text-[0px] text-[16px] w-full">
        <span className="leading-[24px]">{`Solid understanding of `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">data structures</span>
        <span className="leading-[24px]">{` `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">and algorithms</span>
      </p>
    </div>
  );
}

function CheckItems1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check items">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Check icon">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.p38ae8600} id="Icon" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <TextWrap3 />
      </div>
    </div>
  );
}

function CheckItemsWrap1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items wrap">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <CheckItems1 />
      </div>
    </div>
  );
}

function TextWrap4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#181d27] text-[#535862] text-[0px] text-[16px] w-full">
        <span className="leading-[24px]">{`Experience with cloud platforms such as `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">AWS</span>
        <span className="leading-[24px]">{`, `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">Azure</span>
        <span className="leading-[24px]">{`, or `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">GCP</span>
      </p>
    </div>
  );
}

function CheckItems2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check items">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Check icon">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.p38ae8600} id="Icon" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <TextWrap4 />
      </div>
    </div>
  );
}

function CheckItemsWrap2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items wrap">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <CheckItems2 />
      </div>
    </div>
  );
}

function TextWrap5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#181d27] text-[#535862] text-[0px] text-[16px] w-full">
        <span className="leading-[24px]">{`Strong proficiency in at least two of the following: `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">Java</span>
        <span className="leading-[24px]">{`, `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">C</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">++,</span>
        <span className="leading-[24px]">{` or `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px]">Go</span>
      </p>
    </div>
  );
}

function CheckItems3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Check items">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Check icon">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.p38ae8600} id="Icon" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <TextWrap5 />
      </div>
    </div>
  );
}

function CheckItemsWrap3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items wrap">
      <div className="content-stretch flex flex-col items-start px-[15px] relative w-full">
        <CheckItems3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f8f8f8] h-[176px] relative rounded-[15px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[13px] items-start px-[7px] py-[15px] relative size-full">
        <TextAndSupportingText4 />
        <CheckItemsWrap1 />
        <CheckItemsWrap2 />
        <CheckItemsWrap3 />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="h-[475px] relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pb-[32px] pr-[12px] relative size-full">
          <TextAndSupportingText2 />
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[467px] items-start relative shrink-0 w-full" data-name="Input with label">
      <FileUploadItemBase />
      <Content3 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] whitespace-nowrap">View Candidate</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[595px] items-start pt-[24px] px-[24px] relative shrink-0 w-[837px]" data-name="Content">
      <Frame2 />
      <InputWithLabel />
      <div className="absolute bg-white left-[653px] rounded-[8px] top-[47px] w-[154px]" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-full">
          <TextPadding />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="content-stretch flex flex-col h-[785px] items-center relative shrink-0 w-[837px]" data-name="_Modal header">
      <Content />
      <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[8px] right-[2px] rounded-[8px] size-[44px] top-[2px]" data-name="Buttons/Button close X">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="x-close">
          <div className="absolute inset-1/4" data-name="Icon">
            <div className="absolute inset-[-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d="M13 1L1 13M1 1L13 13" id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] size-full" data-name="Modal">
      <ModalHeader />
    </div>
  );
}