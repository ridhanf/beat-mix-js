const createDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createDrumArray();
let snares = createDrumArray();
let hiHats = createDrumArray();
let rideCymbals = createDrumArray();

const whichDrum = (name) => {
  switch (name) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
    default:
      return;
  }
};

const toggleDrum = (drumName, index) => {
  const drum = whichDrum(drumName);
  if (!drum || index < 0 || index > 15) {
    return;
  }
  drum[index] = !drum[index];
};

const clear = (drumName) => {
  const drum = whichDrum(drumName);
  if (drum) {
    drum.fill(false);
  }
};

const invert = (drumName) => {
  const drum = whichDrum(drumName);
  if (!drum) {
    return;
  }
  for (let i = 0; i < drum.length; i++) {
    drum[i] = !drum[i];
  }
};

