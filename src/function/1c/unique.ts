
function unique(x: Array<number | string>): Array<number | string> {
  return Array.from(new Set(x));
}

export default unique;