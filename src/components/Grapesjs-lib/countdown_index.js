import React from 'react';
import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {
  countdownRef
} from './consts';

function newPlugin(){
    grapesjs.plugins.add('gjs-component-countdown', (editor, opts = {}) => {
        let c = opts;
      
        let defaults = {
          blocks: [countdownRef],
          defaultStyle: true,
          startTime: '',
          endText: 'EXPIRED',
          dateInputType: 'date',
          countdownClsPfx: 'countdown',
          labelCountdown: 'Countdown',
          labelCountdownCategory: 'Extra',
          labelDays: 'days',
          labelHours: 'hours',
          labelMinutes: 'minutes',
          labelSeconds: 'seconds',
        };
        for (let name in defaults) {
            if (!(name in c))
            c[name] = defaults[name];
        }
        loadComponents(editor, c);
        loadBlocks(editor, c);
    })
    // console.log("hello")
}
// const GrapesjsIndex = ({name}) => (
//     return ({newPlugin()})

// );

const GrapesjsIndex = () => {
    return newPlugin()
  };
  
export default GrapesjsIndex;