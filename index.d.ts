export function classNames(
  arg1: string | { [key: string]: any },
  arg2?: { [key: string]: any }
  ): string
  
export function copyText(text: string): boolean

export function debounce(fn: () => any, wait: number): () => any

export function escapeRegex(regexToEscape: string): string
  
export function fileExtName(fileName: string): string

export function formatPhone(phone: string): string

export function generateGoogleCalendarLink(calendarObj: GoogleCalendarObj): string

export function isObjEmpty(obj: {[key: string]: any}): boolean

export function pad(str: string, length: number, insertOn: 'right' | 'left'): string

export function randomHexColor(): string
export interface GoogleCalendarObj {
  text: string
  location: string
  dates: {
    end: string,
    start: string,
  }
  details: string
}
