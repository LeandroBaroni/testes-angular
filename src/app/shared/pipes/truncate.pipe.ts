import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  /**
   * Trims the input string to a specified length and appends a trailing string if it exceeds the limit.
   *
   * @param {string} value - The string to be transformed.
   * @param {number} [limit=20] - The maximum length of the string before truncating.
   * @param {string} [trail='...'] - The string to append to the truncated string.
   * @returns {string} The transformed string, either truncated with the trail or unchanged.
   *
   * @example
   * // returns 'This is a very lon...'
   * transform('This is a very long string', 20);
   *
   * // returns 'Short string'
   * transform('Short string', 20);
   */
  transform(value: string, limit = 20, trail = '...'): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    return value.substring(1, limit) + trail;
  }
}
