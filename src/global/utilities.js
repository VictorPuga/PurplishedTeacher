
// Handle 'unterminated string' error on JSON.parse with '\n'
export const jsonEscape = (string) => string.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");