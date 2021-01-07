// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method, index, presetArray) => {
  switch (method) {
    case 'GET':
      if (index < 0 || index > 15 ) {
        return [404]
      } else {
        return [200, presets[index]];
      }
      break;
    case 'PUT':
      if (index < 0 || index > 15) {
        return [404]
      } else {
        presets[index] = presetArray;
        return [200, presets[index]];
      }
      break;
    default:
      return [400]
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
