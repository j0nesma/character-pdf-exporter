import {cantrips} from './cantrip.js';
import lvl1 from './lvl1.js';
import lvl2 from './lvl2.js';
import lvl3 from './lvl3.js';
import lvl4 from './lvl4.js';
import lvl5 from './lvl5.js';
import lvl6 from './lvl6.js';
import lvl7 from './lvl7.js';
import lvl8 from './lvl8.js';
import lvl9 from './lvl9.js';

const spells = [].concat(
    cantrips,
    lvl1,
    lvl2,
    lvl3,
    lvl4,
    lvl5,
    lvl6,
    lvl7,
    lvl8,
    lvl9
);

export default spells;