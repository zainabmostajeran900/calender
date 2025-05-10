import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import { toPersianNumber } from "../../lib/utils"; // تابع تبدیل عدد به فارسی
import jalaali from "jalaali-js"; // برای تبدیل تاریخ

const years = Array.from({ length: 15 }, (_, i) => 1390 + i); // سال‌ها از ۱۳۹۰ تا ۱۴۰۴

type CalendarMonthProps = {
  className?: string;
  year?: number;
  onSelect?: (year: number) => void; // فقط سال انتخاب‌شده رو می‌فرسته
};

function CalendarYear({
  className,
  year: propYear,
  onSelect,
}: CalendarMonthProps) {
  const today = new Date();
  const todayJalaali = jalaali.toJalaali(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );

  const [year, setYear] = React.useState(() => propYear || todayJalaali.jy);
  const [selectedYear, setSelectedYear] = React.useState<number | null>(null);

  const handlePrev = () => setYear((y) => y - 1);
  const handleNext = () => setYear((y) => y + 1);

  const handleSelect = (selected: number) => {
    setSelectedYear(selected);
    onSelect?.(selected); // ارسال سال به parent
  };

  return (
    <div className={cn("p-4", className)}>
      {/* ناوبری سال */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className={cn(buttonVariants({ variant: "ghost" }), "size-8")}
        >
          <ChevronRight />
        </button>
        <span className="text-lg font-semibold">{toPersianNumber(year)}</span>
        <button
          onClick={handleNext}
          className={cn(buttonVariants({ variant: "ghost" }), "size-8")}
        >
          <ChevronLeft />
        </button>
      </div>

      {/* نمایش سال‌ها */}
      <div className="grid grid-cols-4 sm:gap-x-13 sm:gap-y-6 gap-y-6 gap-x-8 sm:p-6 p-5">
        {years.map((yearOption, index) => {
          const isSelected = selectedYear === yearOption;

          return (
            <button
              key={index}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "sm:w-[62px] sm:h-[47px] w-[35.39px] h-[26.83px] text-[8px] sm:text-sm font-[400px] bg-[#f4f4f4] cursor-pointer text-[#363636]",
                isSelected
                  ? "bg-[#DFA105] font-bold rounded-sm"
                  : "hover:bg-[#fce5a0] transition"
              )}
              onClick={() => handleSelect(yearOption)}
            >
              {toPersianNumber(yearOption)} {/* نمایش سال به فارسی */}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export { CalendarYear }