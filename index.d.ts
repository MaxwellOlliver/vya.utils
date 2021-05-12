export interface GoogleCalendarObj {
  text: string
  location: string
  dates: {
    end: string,
    start: string,
  }
  details: string
}

export function addUtilDays(date: Date, daysToAdd: number, onlyOnFinal: boolean): Date

export function classNames(
  arg1: string | { [key: string]: any },
  arg2?: { [key: string]: any }
): string

export function copyText(text: string): boolean

export function debounce(fn: () => any, wait: number): () => any

export function escapeRegex(regexToEscape: string): string

export function fileExtName(fileName: string): string

export function flexFormat(date: Date, output: 'DMY' | 'YMD'): Date

export function formatPhone(phone: string): string

export function generateGoogleCalendarLink(calendarObj: GoogleCalendarObj): string

export function isAuthenticated(key: string): boolean

export function isObjEmpty(obj: {[key: string]: any}): boolean

export function pad(str: string, length: number, insertOn: 'right' | 'left'): string

export function randomHexColor(): string
