export const e = selector => document.querySelector(selector);

export const html = (strings, ...values) => {
    return strings.reduce((result, string, i) => {
        const value = Array.isArray(values[i]) ? values[i].join('') : values[i];
        return `${result}${string}${value || ''}`;
    }, '');
}
