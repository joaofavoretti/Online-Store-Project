export const replaceAll = (target, search, replacement) => target.replace(new RegExp(search, 'g'), replacement);

export const isNull = (value) => value === null;

export const isUndefined = (value) => value === undefined;

export const isNullOrUndefined = (value) => isNull(value) || isUndefined(value);

export const isEmpty = (value) => isNull(value) || isUndefined(value) || value === '';

export const isStateProperty = (property) => property.length === 2;
