import svgPaths from "./svg-z1mcrnk1xq";

function Mask() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[336px] top-0" data-name="Mask">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[336px] top-1/2" data-name="_Background mask" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 336 336\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.0000017664 16.8 -16.8 -0.0000027601 168 168)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
    </div>
  );
}

function Content() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[336px] top-0" data-name="Content">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 336 336">
        <g id="Content">
          <circle cx="168" cy="168" id="Line" r="47.5" stroke="var(--stroke-0, #E9EAEB)" />
          <circle cx="168" cy="168" id="Line_2" r="47.5" stroke="var(--stroke-0, #E9EAEB)" />
          <circle cx="168" cy="168" id="Line_3" r="71.5" stroke="var(--stroke-0, #E9EAEB)" />
          <circle cx="168" cy="168" id="Line_4" r="95.5" stroke="var(--stroke-0, #E9EAEB)" />
          <circle cx="168" cy="168" id="Line_5" r="119.5" stroke="var(--stroke-0, #E9EAEB)" />
          <circle cx="168" cy="168" id="Line_6" r="143.5" stroke="var(--stroke-0, #E9EAEB)" />
          <circle cx="168" cy="168" id="Line_7" r="167.5" stroke="var(--stroke-0, #E9EAEB)" />
        </g>
      </svg>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Inter:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Modify screening criteria</p>
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#414651] text-[12px] text-center whitespace-nowrap">{`7 `}</p>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">Add , edit and remove critereia</p>
    </div>
  );
}

function DateAndText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative" data-name="Date and text">
      <TextAndSupportingText />
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Content">
      <div className="content-stretch flex gap-[16px] items-start px-[24px] py-[20px] relative w-full">
        <DateAndText />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
        <span className="leading-[24px]">{` `}</span>
        <span className="leading-[24px]">3+ years of Javascript, Typescript, or Python experience</span>
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[595px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Content5 />
    </div>
  );
}

function AvatarAndText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Avatar and text">
      <Input />
    </div>
  );
}

function Actions() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-03">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1a506700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[24px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-grid">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Icon">
                    <path d={svgPaths.p12d54100} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1f44a700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p82e9740} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1b9b0400} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pedc3a80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p5a80b00} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <AvatarAndText />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start justify-center py-[14px] relative shrink-0 w-full" data-name="Card header">
      <Content4 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
        <span className="leading-[24px]">{` `}</span>
        <span className="leading-[24px]">Experience working in an agile environment</span>
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[595px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Content7 />
    </div>
  );
}

function AvatarAndText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Avatar and text">
      <Input1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-03">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1a506700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[24px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-grid">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Icon">
                    <path d={svgPaths.p12d54100} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1f44a700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p82e9740} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1b9b0400} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pedc3a80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p5a80b00} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <AvatarAndText1 />
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start justify-center py-[14px] relative shrink-0 w-full" data-name="Card header">
      <Content6 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">{`Bachelor's degree in computer science or related field`}</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[595px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Content9 />
    </div>
  );
}

function AvatarAndText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Avatar and text">
      <Input2 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-03">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1a506700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[24px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-grid">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Icon">
                    <path d={svgPaths.p12d54100} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1f44a700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p82e9740} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1b9b0400} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pedc3a80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p5a80b00} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <AvatarAndText2 />
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start justify-center py-[14px] relative shrink-0 w-full" data-name="Card header">
      <Content8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">
        <span className="leading-[24px]">{` `}</span>
        <span className="leading-[24px]">{`Solid understanding of `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">data</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">{` `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">structures</span>
        <span className="leading-[24px]">{` `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">and</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px]">{` `}</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">algorithms</span>
      </p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[595px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Content11 />
    </div>
  );
}

function AvatarAndText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Avatar and text">
      <Input3 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-03">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1a506700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[24px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-grid">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Icon">
                    <path d={svgPaths.p12d54100} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1f44a700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p82e9740} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1b9b0400} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pedc3a80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p5a80b00} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <AvatarAndText3 />
          <Actions3 />
        </div>
      </div>
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start justify-center py-[14px] relative shrink-0 w-full" data-name="Card header">
      <Content10 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">Cloud platforms</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[595px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Content13 />
    </div>
  );
}

function AvatarAndText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Avatar and text">
      <Input4 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-03">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1a506700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[24px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-grid">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Icon">
                    <path d={svgPaths.p12d54100} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1f44a700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p82e9740} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1b9b0400} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pedc3a80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p5a80b00} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <AvatarAndText4 />
          <Actions4 />
        </div>
      </div>
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start justify-center py-[14px] relative shrink-0 w-full" data-name="Card header">
      <Content12 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap">Proficiency in Java, C++</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[595px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <Content15 />
    </div>
  );
}

function AvatarAndText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Avatar and text">
      <Input5 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-03">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p1a506700} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[24px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-grid">
            <div className="absolute inset-[16.67%]" data-name="Icon">
              <div className="absolute inset-[-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Icon">
                    <path d={svgPaths.p12d54100} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1f44a700} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p82e9740} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1b9b0400} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pedc3a80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p5a80b00} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <AvatarAndText5 />
          <Actions5 />
        </div>
      </div>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start justify-center py-[14px] relative shrink-0 w-full" data-name="Card header">
      <Content14 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] whitespace-nowrap">Add criteria</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[26px] py-[8px] relative shrink-0">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <TextPadding />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <CardHeader />
      <CardHeader1 />
      <CardHeader2 />
      <CardHeader3 />
      <CardHeader4 />
      <CardHeader5 />
      <Frame1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-center flex flex-wrap gap-y-[20px] items-center justify-between pr-[18px] relative shrink-0 w-[751px]" data-name="Content">
      <Frame />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex h-[498px] items-start px-[10px] py-[9px] relative shrink-0 w-[727px] z-[8]" data-name="Main">
      <Content3 />
    </div>
  );
}

function TextAndBadge1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Inter:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181d27] text-[18px] whitespace-nowrap">Advance filters</p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#535862] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">Configure advanced filtering options</p>
    </div>
  );
}

function DateAndText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative" data-name="Date and text">
      <TextAndSupportingText1 />
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Content">
      <div className="content-stretch flex gap-[16px] items-start px-[24px] py-[20px] relative w-full">
        <DateAndText1 />
      </div>
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Key words</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis whitespace-nowrap">“Fintech” OR “AI/ML” OR “Product Management”</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white h-[43px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start px-[39px] py-[18px] relative shrink-0 w-[730px] z-[6]" data-name="Input with label">
      <LabelWrapper />
      <Input6 />
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Job title</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Senior</p>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">UX</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Senior Backend Developer</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Lead Application Architect</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Principal Software Engineer</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Senior Frontend Engineer</p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Technical Team Lead</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Senior Cloud Engineer</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Software Development Manager</p>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Senior DevOps Engineer</p>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Lead Mobile Developer</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-[597px]" data-name="Tags">
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content19 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content20 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content21 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content22 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content23 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content24 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content25 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content26 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content27 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content28 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content29 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <Tags />
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[164px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[232px] items-start px-[39px] py-[18px] relative shrink-0 w-[730px] z-[5]" data-name="Input with label">
      <LabelWrapper1 />
      <Input7 />
    </div>
  );
}

function LabelWrapper2() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Current company</p>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Innovatech</p>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Visionary Solutions</p>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Apex Dynamics</p>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">NexGen Technologies</p>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Synergy Innovations</p>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Quantum Leap Enterprises</p>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Elysium Ventures</p>
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Catalyst Creations</p>
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Pinnacle Strategies</p>
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Vanguard Industries</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-center flex flex-wrap gap-[6px] items-center relative shrink-0 w-[637px]" data-name="Tags">
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content31 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content32 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content33 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content34 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content35 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content36 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content37 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content38 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content39 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content40 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <Tags1 />
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white h-[127px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Content30 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start px-[39px] py-[18px] relative shrink-0 w-[730px] z-[4]" data-name="Input with label">
      <LabelWrapper2 />
      <Input8 />
    </div>
  );
}

function LabelWrapper3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Company headcount</p>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis whitespace-nowrap">4</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white h-[43px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Content41 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start px-[39px] py-[18px] relative shrink-0 w-[730px] z-[3]" data-name="Input with label">
      <LabelWrapper3 />
      <Input9 />
    </div>
  );
}

function LabelWrapper4() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Geography</p>
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Banglore</p>
    </div>
  );
}

function Content44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Mumbai</p>
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Delhi</p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Tags">
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content43 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content44 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content45 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <Tags2 />
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white h-[43px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Content42 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[123px] items-start px-[39px] py-[18px] relative shrink-0 w-[730px] z-[2]" data-name="Input with label">
      <LabelWrapper4 />
      <Input10 />
    </div>
  );
}

function LabelWrapper5() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Label wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] whitespace-nowrap">Industry</p>
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">Senior</p>
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#535862] text-[14px] text-center whitespace-nowrap">UX</p>
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Tags">
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content47 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[3px] items-center justify-center pl-[9px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Content48 />
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[3px] shrink-0" data-name="_Tag close X">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                  <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #A4A7AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <Tags3 />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis whitespace-nowrap">Hiring-201</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white h-[43px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Content46 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[123px] items-start px-[39px] py-[18px] relative shrink-0 w-[730px] z-[1]" data-name="Input with label">
      <LabelWrapper5 />
      <Input11 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1425px] isolate items-start overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-[743px]" data-name="Calendar">
      <div className="bg-white content-stretch flex flex-col h-[75px] isolate items-start relative shrink-0 w-full z-[9]" data-name="_Calendar header">
        <Content2 />
      </div>
      <Main />
      <div className="bg-white relative shrink-0 w-full z-[7]" data-name="_Calendar header">
        <div className="content-stretch flex flex-col isolate items-start px-[13px] relative w-full">
          <Content16 />
        </div>
      </div>
      <InputWithLabel />
      <InputWithLabel1 />
      <InputWithLabel2 />
      <InputWithLabel3 />
      <InputWithLabel4 />
      <InputWithLabel5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[1425px] items-start pb-[24px] pr-[24px] relative shrink-0" data-name="Content">
      <Calendar />
    </div>
  );
}

function ModalActions() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-name="_Modal actions">
      <Content1 />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] whitespace-nowrap">Cancel</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Save changes</p>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative" data-name="Actions">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
          <TextPadding1 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
      <div className="bg-[#7f56d9] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
          <TextPadding2 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
        <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      </div>
    </div>
  );
}

function Content49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[24px] px-[24px] relative w-full">
          <Actions6 />
        </div>
      </div>
    </div>
  );
}

export default function Manually() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.08),0px_8px_8px_-4px_rgba(10,13,18,0.03),0px_3px_3px_-1.5px_rgba(10,13,18,0.04)] size-full" data-name="manually 106">
      <div className="absolute left-[-120px] size-[336px] top-[-120px]" data-name="Background pattern decorative">
        <Mask />
        <Content />
      </div>
      <ModalActions />
      <div className="content-stretch flex flex-col items-start justify-center pt-[32px] relative shrink-0 w-full" data-name="_Modal actions">
        <Content49 />
      </div>
    </div>
  );
}