const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.scrollTo = jest.fn();
window.scrollTo = jest.fn();