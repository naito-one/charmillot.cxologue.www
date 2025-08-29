const MAX_SHOWN_ACTUALITE_DOTS = 3
const MAX_SHOWN_ACTUALITE_DOTS_EACH_SIDE = 1

/**
 * Should the given Actualite index be displayed in full size
 * @param {number} i index to check for full size
 * @param {number} current currently selected index
 * @param {number} total how many actualite are there in total
 * @returns {boolean} true if `i` should be displayed full size
 */
export function shouldBeFullSize(
  i: number,
  current: number,
  total: number
): boolean {
  if (total <= MAX_SHOWN_ACTUALITE_DOTS) {
    return true
  }

  if (current === 0 && i < MAX_SHOWN_ACTUALITE_DOTS) {
    return true
  }
  const last = total - 1

  if (current === last && i > last - MAX_SHOWN_ACTUALITE_DOTS) {
    return true
  }

  if (i > current) {
    return i - current <= MAX_SHOWN_ACTUALITE_DOTS_EACH_SIDE
  }

  return current - i <= MAX_SHOWN_ACTUALITE_DOTS_EACH_SIDE
}
