import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Leap from 'leapjs';
import omit from 'lodash.omit';

/** Component that wraps and injects children component with a frame of Leap Motion data */
export default class LeapProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frame: {}
    }

    this.first = true;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onFrame = this.onFrame.bind(this);
  }

  getChildContext() {
    return {
      leapContextFrame: this.state.frame,
    }
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
    // if(this.first){
    //   localStorage.setItem('Leap', JSON.stringify(frame));
    //   this.first = false;
    // }
  }



  start() {
    // console.log('start');
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  }

  stop() {
    console.log('stop');
    cancelAnimationFrame(this.frameId)
  }

  animate(){
    // console.log('animate');

    this.setState({
      frame: this.leapController.frame()
    });

    // this.frameId = window.requestAnimationFrame(this.animate);
  }

  render() {
    // console.log(this.props);
    const { children } = this.props
    return <div>{children}</div>
  }
}

LeapProvider.propTypes = {
    /** Leap controller configuration options */
    options: PropTypes.object
}

LeapProvider.defaultProps = {
  /** Default Leap controller configuration options */
  options: {
    host: '127.0.0.1',
    port: 6437,
    enableGestures: false,
    background: false,
    optimizeHMD: false,
    frameEventName: 'animationFrame',
    useAllPlugins: false
  }
}

LeapProvider.childContextTypes = {
  /** Type of Leap frame passed to children as context  */
  leapContextFrame: PropTypes.object
}

/**
 * HOC wraps children components [LeapFeatureSelector] to inject Leap frame and pass throu children props
 * [Attribution] 
 */
export function withLeapContainer(WrappedComponent) {
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const LeapContainer = (props, context) => {
    const frame = context.leapContextFrame
    const passedProps = omit(props, ['children', 'frame'])

    return (
      <WrappedComponent frame={frame} {...passedProps}>
        {props.children}
      </WrappedComponent>
    )
  }

  LeapContainer.displayName = `LeapContainer(${wrappedComponentName})`

  LeapContainer.contextTypes = {
    leapContextFrame: PropTypes.object
  }

  return LeapContainer
}
