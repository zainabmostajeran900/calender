import React from "react";
import { CalendarMonth } from "../ui/calendarmonth";

export default function Month() {
  const toPersianNumber = (input: string | number) =>
    input.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  return (
    <div className="container mx-auto flex flex-col items-center lg:flex-row-reverse lg:items-center lg:justify-between gap-y-10 lg:gap-x-20 px-2 lg:px-5 py-8 lg:h-screen">
      {/* تقویم */}
      <div className="w-full lg:w-1/2 relative rounded-[20px] overflow-hidden  min-h-[400px] sm:min-h-[570px] flex items-center justify-center">
        <img
          src="/public/ppp.png"
          alt="calendar background"
          className="absolute inset-0 w-full h-full object-contain z-0 scale-110"
        />
        <div className="relative z-10 bg-white min-h-[269.45px] min-w-[260.88px] sm:min-h-[472px] sm:min-w-[545px] flex  rounded-[20px] p-1 sm:p-2 shadow-md  max-w-sm mt-14 mb-4 sm:mb-0">
            <CalendarMonth
              onSelect={(month, year) => {
                console.log("انتخاب شد:", month, year);
              }}
               className="w-full"
            />
        </div>
      </div>
      {/* نوشته‌ها و محتوا */}
      <div className="w-full lg:w-1/2 flex flex-col gap-y-6">
        {/* عنوان و تایمر */}
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between gap-x-4 w-full">
            <p className="font-medium text-base md:text-2xl text-nowrap">
              نمایشگاه های اسفند 1403
            </p>
            <div className="flex items-center justify-center bg-[#DFA10530] rounded-[8px] p-2 text-xs lg:text-sm gap-x-1 ">
              {[
                { label: "ثانیه", value: 39 },
                { label: "دقیقه", value: 12 },
                { label: "ساعت", value: 20 },
                { label: "روز", value: 5 },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[18px] font-medium">
                      {toPersianNumber(item.value)}
                    </p>
                    <p className="text-[11px]">{item.label}</p>
                  </div>
                  {index < 3 && <p className="text-[11px]">:</p>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* تب‌ها */}
        <div className="flex items-center sm:justify-start justify-center w-full">
          <div className="flex items-center gap-x-2 text-[#DFA105] border-l-2 lg:px-4 pl-2">
            <img src="/public/Group 22.svg" alt="" />
            <p className="font-bold text-sm lg:text-base whitespace-nowrap">
              نمایشگاه ها
            </p>
          </div>
          <div className="flex items-center gap-x-2 border-l-2 lg:px-4 px-2">
            <img src="/public/notification-bing.svg" alt="" />
            <p className="text-sm lg:text-base whitespace-nowrap">یادآوری ها</p>
            <img src="/public/arrow-down.svg" alt="" />
          </div>
          <div className="flex items-center gap-x-2 lg:px-4 pr-2 ">
            <img src="/public/heart.svg" alt="" />
            <p className="text-sm lg:text-base whitespace-nowrap">
              علاقه‌مندی ها
            </p>
          </div>
        </div>

        {/* لیست نمایشگاه‌ها */}
        <div className="flex flex-col gap-y-4 w-full">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center sm:gap-5 gap-1 bg-white border rounded-md p-1 sm:p-4 shadow-sm cursor-pointer"
              >
                <img
                  src="/public/Rectangle 2106.svg"
                  alt=""
                  className="w-[60px] h-[60px] rounded-[4px]"
                />
                <div className="flex flex-col items-start justify-center gap-y-2">
                  <p className="text-[8px] sm:text-base w-full text-nowrap">
                    سی و یکمین نمایشگاه بین المللی مواد شوینده،آرایشی
                  </p>
                  <div className="flex gap-x-1  sm:gap-x-6 gap-y-2 text-nowrap">
                    {/* استان برگزاری */}
                    <div className="flex items-center gap-x-1  sm:gap-x-2  sm:w-auto">
                      <img src="/public/location.svg" alt="" />
                      <p className="text-[6px] sm:text-[10px] text-[#363636B2]">
                        استان برگزاری: تهران
                      </p>
                    </div>

                    {/* تاریخ برگزاری */}
                    <div className="flex items-center gap-x-1 sm:gap-x-2  sm:w-auto">
                      <img src="/public/calendar.svg" alt="" />
                      <p className="text-[6px] sm:text-[10px] text-[#363636B2]">
                        تاریخ برگزاری: {toPersianNumber("1403/10/12")} -{" "}
                        {toPersianNumber("1403/10/16")}
                      </p>
                    </div>

                    {/* برگزار کننده */}
                    <div className="flex items-center gap-x-1 sm:gap-x-2 sm:w-auto ">
                      <img src="/public/user.svg" alt="" />
                      <p className="text-[6px] sm:text-[10px] text-[#363636B2]">
                        برگزار کننده: دیجیکالا
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-end items-center">
                  <img
                    className="w-[16px] h-[16px]"
                    src="/public/Vector (1).svg"
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
