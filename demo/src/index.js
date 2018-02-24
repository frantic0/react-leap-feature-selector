import React, {Component} from 'react';
import {render} from 'react-dom';
import LeapFeatureSelector from '../../src/LeapFeatureSelector';
import LeapProvider from '../../src/LeapProvider';
import update from 'immutability-helper';

const state = {
  hand1: {
    id: 1,
    direction: {
      x: true,
      y: false,
      z: false
    },
    position: {
      x: false,
      y: false,
      z: false
    },
    velocity: {
      x: false,
      y: false,
      z: false
    },
    normal: {
      x: false,
      y: false,
      z: false
    },
    finger1: {
      id: 1,
      hand: 1,
      direction: {
        x: true,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger2: {
      id: 2,
      hand: 1,
      direction: {
        x: false,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger3: {
      id: 3,
      hand: 1,
      direction: {
        x: false,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger4: {
      id: 4,
      hand: 1,
      direction: {
        x: false,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger5: {
      id: 5,
      hand: 1,
      direction: {
        x: false,
        y: true,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    confidence: 0,
    grabStrength: 0,
    pinchStrength: 0,
    sphereCenter: {
      x: false,
      y: false,
      z: false
    },
    sphereRadius: 0
  },
  hand2: {
    id: 2,
    direction: {
      x: false,
      y: false,
      z: false
    },
    position: {
      x: false,
      y: false,
      z: false
    },
    velocity: {
      x: false,
      y: false,
      z: false
    },
    normal: {
      x: false,
      y: false,
      z: false
    },
    finger1: {
      id: 1,
      hand: 2,
      direction: {
        x: true,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger2: {
      id: 2,
      hand: 2,
      direction: {
        x: false,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger3: {
      id: 3,
      hand: 2,
      direction: {
        x: false,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger4: {
      id: 4,
      hand: 2,
      direction: {
        x: false,
        y: false,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    finger5: {
      id: 5,
      hand: 2,
      direction: {
        x: false,
        y: true,
        z: false
      },
      position: {
        x: false,
        y: false,
        z: false
      },
      velocity: {
        x: false,
        y: false,
        z: false
      }
    },
    confidence: 0,
    grabStrength: 0,
    pinchStrength: 0,
    sphereCenter: {
      x: false,
      y: false,
      z: false
    },
    sphereRadius: 0
  }
}


	/** Make deep copy of current state and update it using immutability-helper */
	function handleSelectedDataChange(name) {

		var newCollection = {};
		var propValuePair = name.split(':');
		let cs = propValuePair[0].split('.');

		if (cs[1] === '0') {
			newCollection = update(state, {
				['hand' + cs[0]]: {
					[cs[2]]: {
						[cs[3]]: {
							$set: !state['hand' + cs[0]][cs[2]][cs[3]]
						}
					}
				}
			});
		} else {
			newCollection = update(state, {
				['hand' + cs[0]]: {
					['finger' + cs[1]]: {
						[cs[2]]: {
							[cs[3]]: {
								$set: !state['hand' + cs[0]]['finger' + cs[1]][cs[2]][cs[3]]
							}
						}
					}
				}
			});
		}
		return newCollection;
  }
  

class Demo extends Component {
  
  render() {
    return (
      <LeapProvider>
        <LeapFeatureSelector selectedData={state} onSelectedDataChange={handleSelectedDataChange} />
      </LeapProvider>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'));
