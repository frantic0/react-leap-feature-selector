import React, {Component} from 'react';
import {render} from 'react-dom';
import LeapFeatureSelector from '../../src/index';
import LeapProvider from './LeapProvider';
import update from 'immutability-helper';
import Leap from 'leapjs';

const selectables = {
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

  
class Demo extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      frame: {}, 
      selectedData: selectables
    };

    this.handleSelectedDataChange = this.handleSelectedDataChange.bind(this);
    this.onFrame = this.onFrame.bind(this);
  }

  componentDidMount() {

    const { options } = this.props;

    this.setupLeap(options);

    this.leapController.connect();

    console.log('LeapProvider - componentDidMount');
  }


  componentWillUnmount() {

    // this.stop();

    // TODO We need to kill the event handler that sets the frame to state.

    // TODO Should we remove child components too?
    // this.mount.removeChild(this.renderer.domElement);
    // this.leapController.on('frame', null);
    this.leapController.disconnect();
  }

  setupLeap(options){
    this.leapController = new Leap.Controller(options);
    // .use('handHold')
    // .use('transform', { position: new THREE.Vector3(1, 0, 0)})
    // .use('handEntry')
    // .use('screenPosition')
    // .use('boneHand', {
      // parent: scene,
      // renderer: renderer,
      // scale: getParam('scale'),
      // positionScale: getParam('positionScale'),
      // offset: new THREE.Vector3(0, 0, 0),
      // renderFn: function() {
        // renderer.render(scene, camera);
        // return controls.update();
      // },
      // materialOptions: {
      //   wireframe: getParam('wireframe')
      // },
      // dotsMode: getParam('dots'),
      // stats: stats,
      // camera: camera,
      // boneLabels: function(boneMesh, leapHand) {
      //   if (boneMesh.name.indexOf('Finger_03') === 0) {
      //     return leapHand.pinchStrength;
      //   }
      // },
      // boneColors: function(boneMesh, leapHand) {
      //   if ((boneMesh.name.indexOf('Finger_0') === 0) || (boneMesh.name.indexOf('Finger_1') === 0)) {
      //     return {
      //       hue: 0.6,
      //       saturation: leapHand.pinchStrength
      //     };
      //   }
      // },
      // checkWebGL: true
    // });

    this.leapController.on('deviceAttached', function() {
      console.log('LeapProvider - deviceAttached');
    });
    this.leapController.on('deviceStreaming', function() {
      console.log('LeapProvider - deviceStreaming');
    });
    this.leapController.on('deviceStopped', function() {
      console.log('LeapProvider - deviceStopped');
    });
    this.leapController.on('deviceRemoved', function() {
      console.log('LeapProvider - deviceRemoved');
    });

    this.leapController.on('deviceRemoved', function() {
      console.log('LeapProvider - deviceRemoved');
    });

    this.leapController.on('frame', this.onFrame);
  }

  onFrame(frame){
    this.setState({ frame });

  }

  handleSelectedDataChange = (name) => {
    this.setState(() => this.handleSelectedData(name));
  }


  handleSelectedData(name) {

    var newCollection = {};
    var propValuePair= name.split(':');

    let cs = propValuePair[0].split('.');
    if (cs[1] === '0') {
      newCollection = update(this.state, {
        selectedData: {
          ['hand' + cs[0]]: {
            [cs[2]]: {
              [cs[3]]: {
                $set: !this.state.selectedData['hand' + cs[0]][cs[2]][cs[3]]
              }
            }
          }
        },

      });
    } else {
      newCollection = update(this.state, {
        selectedData: {
          ['hand' + cs[0]]: {
            ['finger' + cs[1]]: {
              [cs[2]]: {
                [cs[3]]: {
                  $set: !this.state.selectedData['hand' + cs[0]]['finger' + cs[1]][cs[2]][cs[3]]
                }
              }
            }
          }
        }
      });
    }
    this.setState(newCollection);
  }

  render() {
    return (
      <LeapFeatureSelector frame={this.state.frame} selectedData={this.state.selectedData} onSelectedDataChange={this.handleSelectedDataChange} />
    )
  }
}

render(<Demo/>, document.querySelector('#demo'));
