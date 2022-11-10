export const parseScss = string => {
  const stringLines = string.match(/\{([^)]+)\}/)[1] // Match what's between curly braces
  const lines = stringLines.split(/\n/).slice(1, -1) // Split on newline
  // Create object with properties
  return Object.fromEntries(lines.map(line => [line.split(':')[0].trim(), line.match(/:\s([^)]+);/)[1]]))
}
