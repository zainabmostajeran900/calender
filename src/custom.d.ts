declare module 'jalaali-js' {
    export function toJalaali(gregorianYear: number, gregorianMonth: number, gregorianDay: number): {
      jy: number;
      jm: number;
      jd: number;
    };
  }
  