import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, Formatters } from "react-day-picker";
import jalaali from 'jalaali-js';
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

// تبدیل تاریخ میلادی به هجری شمسی
const toPersianDate = (date: Date) => {
  const { jy, jm, jd } = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return { year: jy, month: jm, day: jd };
};

// تبدیل عدد به فارسی
const toPersianNumber = (number: number) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
};

// نام ماه‌های فارسی
const faMonths = [
  "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
];

// نام روزهای هفته به فارسی
const faWeekdays = [
  "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"
];

// تعریف formatters به فارسی
const faFormatters: Partial<Formatters> = {
  // فرمت روز
  formatDay: (date: Date) => {
    const { day } = toPersianDate(date);
    return toPersianNumber(day);
  },

  // فرمت ماه و سال
  formatCaption: (date: Date) => {
    const { year, month } = toPersianDate(date);
    const monthName = faMonths[month - 1];  // تبدیل شماره ماه به نام فارسی ماه
    return `${monthName} ${toPersianNumber(year)}`;
  },

  // فرمت نام روز هفته
  formatWeekdayName: (date: Date) => {
    const day = date.getDay();  // استخراج شماره روز هفته از شیء Date
    return faWeekdays[day];  // تبدیل شماره روز به اسم فارسی
  },
};

function CalendarDay({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        ...faFormatters,
        ...props.formatters, // اجازه override به کاربر
      }}
      className={cn("sm:p-3 flex items-center justify-center", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-3 sm:gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1 ",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1 ",
        head_row:
          "flex w-full bg-[#DFA105] rounded-md p-1 sm:p-2 text-black justify-between", // پس‌زمینه نارنجی برای سطر روزهای هفته
        head_cell:
          "text-black text-center font-[300px] text-[7px] sm:text-[12px] py-1 px-2 rounded-md",
        row: "flex w-full mt-2 ",
        cell: cn(
          "relative sm:px-2.5  px-2 text-center text-[#636167] text-[12px] sm:text-lg font-[300px] ",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-[300px] text-[12px] sm:text-lg  aria-selected:opacity-100 cursor-pointer hover:bg-[#fce5a0] transition  w-[29.69px] h-[29.69px] sm:w-[52px] sm:h-[52px]"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-[#DFA105] font-bold text-black sm:text-[22px] rounded-[10px] border-[1px]",
        day_today: "underline font-bold underline-offset-[2px] sm:underline-offset-[6px]",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { CalendarDay };
