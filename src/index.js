import React from 'react';
import PropTypes from 'prop-types';
// import { withLeapContainer } from './LeapProvider.js'
import FeatureSelector from './FeatureSelector.js';
import omit from 'lodash.omit';
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender
} from 'react-grid-system';
import './index.css';

function LeapHandData(props) {
  return (
    <div className="hand">
      <div className="handLabel">{props.name + ' ' + props.selectedData.id}</div>
      <FeatureSelector  label={'Direction'} name={props.selectedData.id + '.0.direction.'} 
                        x={props.d_x} y={props.d_y} z={props.d_z} 
                        selectedData={props.selectedData.direction} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
      <FeatureSelector  label={'Palm Position'} name={props.selectedData.id + '.0.position.'} 
                        x={props.pp_x} y={props.pp_y} z={props.pp_z} 
                        selectedData={props.selectedData.position} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
      <FeatureSelector  label={'Palm Velocity'} name={props.selectedData.id + '.0.velocity.'} 
                        x={props.pv_x} y={props.pv_y} z={props.pv_z} 
                        selectedData={props.selectedData.velocity} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
      <FeatureSelector  label={'Palm Normal'} name={props.selectedData.id + '.0.normal.'} 
                        x={props.pn_x} y={props.pn_y} z={props.pn_z} 
                        selectedData={props.selectedData.normal} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
    </div>
  );
}

// const LeapHandDataContainer = connect(state => state)(LeapHandData);

function LeapFingerData(props) {
  return (
    <div className="finger">
      <div className="fingerLabel">{props.name}</div>
      <FeatureSelector  label={'Direction'} 
                        name={props.selectedData.hand + '.' + props.selectedData.id + '.direction.'} 
                        x={props.d_x} y={props.d_y} z={props.d_z} 
                        selectedData={props.selectedData.direction} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
      <FeatureSelector  label={'Tip Position'} 
                        name={props.selectedData.hand + '.' + props.selectedData.id + '.position.'} 
                        x={props.pp_x} y={props.pp_y} z={props.pp_z} 
                        selectedData={props.selectedData.position} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
      <FeatureSelector  label={'Tip Velocity'} 
                        name={props.selectedData.hand + '.' + props.selectedData.id + '.velocity.'} 
                        x={props.pv_x} y={props.pv_y} z={props.pv_z} 
                        selectedData={props.selectedData.velocity} 
                        onSelectedDataChange={props.onSelectedDataChange}/>
    </div>
  );
}

// const LeapFingerDataContainer = connect(state => state)(LeapFingerData);

function LeapHand(props) {

  return (
      <Row>
        <Col sm={2}>
          <LeapHandData name="Hand"  
                                d_x={props.frameData.direction[0]} d_y={props.frameData.direction[1]} d_z={props.frameData.direction[2]}
                                pp_x={props.frameData.palmPosition[0]} pp_y={props.frameData.palmPosition[1]} pp_z={props.frameData.palmPosition[2]} 
                                pn_x={props.frameData.palmNormal[0]} pn_y={props.frameData.palmNormal[1]} pn_z={props.frameData.palmNormal[2]} 
                                pv_x={props.frameData.palmVelocity[0]} pv_y={props.frameData.palmVelocity[1]} pv_z={props.frameData.palmVelocity[2]} 
                                selectedData={props.selectedData} 
                                onSelectedDataChange={props.onSelectedDataChange}/>
        </Col>
        <Col sm={2}>
          <LeapFingerData name="Fingertip 1" 
                                  d_x={props.frameData.fingers[0].direction[0]} d_y={props.frameData.fingers[0].direction[1]} d_z={props.frameData.fingers[0].direction[2]} 
                                  pp_x={props.frameData.fingers[0].tipPosition[0]} pp_y={props.frameData.fingers[0].tipPosition[1]} pp_z={props.frameData.fingers[0].tipPosition[2]} 
                                  pv_x={props.frameData.fingers[0].tipVelocity[0]} pv_y={props.frameData.fingers[0].tipVelocity[0]} pv_z={props.frameData.fingers[0].tipVelocity[2]} 
                                  selectedData={props.selectedData.finger1} 
                                  onSelectedDataChange={props.onSelectedDataChange}/>
        </Col>
        <Col sm={2}>
          <LeapFingerData name="Fingertip 2" 
                                  d_x={props.frameData.fingers[1].direction[0]} d_y={props.frameData.fingers[1].direction[1]} d_z={props.frameData.fingers[1].direction[2]} 
                                  pp_x={props.frameData.fingers[1].tipPosition[0]} pp_y={props.frameData.fingers[1].tipPosition[1]} pp_z={props.frameData.fingers[1].tipPosition[2]} 
                                  pv_x={props.frameData.fingers[1].tipVelocity[0]} pv_y={props.frameData.fingers[1].tipVelocity[1]} pv_z={props.frameData.fingers[1].tipVelocity[2]} 
                                  selectedData={props.selectedData.finger2} 
                                  onSelectedDataChange={props.onSelectedDataChange}/>
        </Col>
        <Col sm={2}>
          <LeapFingerData name="Fingertip 3" 
                                  d_x={props.frameData.fingers[2].direction[0]} d_y={props.frameData.fingers[2].direction[1]} d_z={props.frameData.fingers[2].direction[2]} 
                                  pp_x={props.frameData.fingers[2].tipPosition[0]} pp_y={props.frameData.fingers[2].tipPosition[1]} pp_z={props.frameData.fingers[2].tipPosition[2]} 
                                  pv_x={props.frameData.fingers[2].tipVelocity[0]} pv_y={props.frameData.fingers[2].tipVelocity[1]} pv_z={props.frameData.fingers[2].tipVelocity[2]} 
                                  selectedData={props.selectedData.finger3} 
                                  onSelectedDataChange={props.onSelectedDataChange}/>
        </Col>
        <Col sm={2}>
          <LeapFingerData name="Fingertip 4" 
                                  d_x={props.frameData.fingers[3].direction[0]} d_y={props.frameData.fingers[3].direction[1]} d_z={props.frameData.fingers[3].direction[2]} 
                                  pp_x={props.frameData.fingers[3].tipPosition[0]} pp_y={props.frameData.fingers[3].tipPosition[1]} pp_z={props.frameData.fingers[3].tipPosition[2]} 
                                  pv_x={props.frameData.fingers[3].tipVelocity[0]} pv_y={props.frameData.fingers[3].tipVelocity[1]} pv_z={props.frameData.fingers[3].tipVelocity[2]} 
                                  selectedData={props.selectedData.finger4} 
                                  onSelectedDataChange={props.onSelectedDataChange}/>
        </Col>
        <Col sm={2}>
          <LeapFingerData name="Fingertip 5" 
                                  d_x={props.frameData.fingers[4].direction[0]} d_y={props.frameData.fingers[4].direction[1]} d_z={props.frameData.fingers[4].direction[2]} 
                                  pp_x={props.frameData.fingers[4].tipPosition[0]} pp_y={props.frameData.fingers[4].tipPosition[1]} pp_z={props.frameData.fingers[4].tipPosition[2]} 
                                  pv_x={props.frameData.fingers[4].tipVelocity[0]} pv_y={props.frameData.fingers[4].tipVelocity[1]} pv_z={props.frameData.fingers[4].tipVelocity[2]} 
                                  selectedData={props.selectedData.finger5} 
                                  onSelectedDataChange={props.onSelectedDataChange}/>
        </Col>
      </Row>
  );
}

// const LeapHandContainer = connect(state => state)(LeapHand);


function format( num ){
    return ( Math.floor(num * 100000)/100000 )  // slice decimal digits after the 2nd one
    .toFixed(4)  // format with two decimal places
    .substr(0,6) // get the leading four characters
    .replace(/\.$/,''); // remove trailing decimal place separator
}

function getCurrentSelectedFrameValues(props){

  var listOfSelectedFrameValues = [];

  if (props.frameData.hands && props.frameData.hands.length) {

    if (props.frameData.hands.length === 1) {
      if (props.selectedData.hand1.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].direction[0]);
      if (props.selectedData.hand1.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].direction[1]);
      if (props.selectedData.hand1.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].direction[2]);
      if (props.selectedData.hand1.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmPosition[0]);
      if (props.selectedData.hand1.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmPosition[1]);
      if (props.selectedData.hand1.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmPosition[2]);
      if (props.selectedData.hand1.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmVelocity[0]);
      if (props.selectedData.hand1.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmVelocity[1]);
      if (props.selectedData.hand1.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmVelocity[2]);
      if (props.selectedData.hand1.normal.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmNormal[0]);
      if (props.selectedData.hand1.normal.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmNormal[1]);
      if (props.selectedData.hand1.normal.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].palmNormal[2]);
      if (props.selectedData.hand1.finger1.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].direction[0]);
      if (props.selectedData.hand1.finger1.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].direction[1]);
      if (props.selectedData.hand1.finger1.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].direction[2]);
      if (props.selectedData.hand1.finger1.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].tipPosition[0]);
      if (props.selectedData.hand1.finger1.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].tipPosition[1]);
      if (props.selectedData.hand1.finger1.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].tipPosition[2]);
      if (props.selectedData.hand1.finger1.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].tipVelocity[0]);
      if (props.selectedData.hand1.finger1.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].tipVelocity[1]);
      if (props.selectedData.hand1.finger1.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[0].tipVelocity[2]);
      if (props.selectedData.hand1.finger2.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].direction[0]);
      if (props.selectedData.hand1.finger2.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].direction[1]);
      if (props.selectedData.hand1.finger2.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].direction[2]);
      if (props.selectedData.hand1.finger2.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].tipPosition[0]);
      if (props.selectedData.hand1.finger2.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].tipPosition[1]);
      if (props.selectedData.hand1.finger2.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].tipPosition[2]);
      if (props.selectedData.hand1.finger2.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].tipVelocity[0]);
      if (props.selectedData.hand1.finger2.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].tipVelocity[1]);
      if (props.selectedData.hand1.finger2.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[1].tipVelocity[2]);
      if (props.selectedData.hand1.finger3.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].direction[0]);
      if (props.selectedData.hand1.finger3.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].direction[1]);
      if (props.selectedData.hand1.finger3.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].direction[2]);
      if (props.selectedData.hand1.finger3.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].tipPosition[0]);
      if (props.selectedData.hand1.finger3.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].tipPosition[1]);
      if (props.selectedData.hand1.finger3.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].tipPosition[2]);
      if (props.selectedData.hand1.finger3.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].tipVelocity[0]);
      if (props.selectedData.hand1.finger3.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].tipVelocity[1]);
      if (props.selectedData.hand1.finger3.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[2].tipVelocity[2]);
      if (props.selectedData.hand1.finger4.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].direction[0]);
      if (props.selectedData.hand1.finger4.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].direction[1]);
      if (props.selectedData.hand1.finger4.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].direction[2]);
      if (props.selectedData.hand1.finger4.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].tipPosition[0]);
      if (props.selectedData.hand1.finger4.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].tipPosition[1]);
      if (props.selectedData.hand1.finger4.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].tipPosition[2]);
      if (props.selectedData.hand1.finger4.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].tipVelocity[0]);
      if (props.selectedData.hand1.finger4.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].tipVelocity[1]);
      if (props.selectedData.hand1.finger4.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[3].tipVelocity[2]);
      if (props.selectedData.hand1.finger5.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].direction[0]);
      if (props.selectedData.hand1.finger5.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].direction[1]);
      if (props.selectedData.hand1.finger5.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].direction[2]);
      if (props.selectedData.hand1.finger5.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].tipPosition[0]);
      if (props.selectedData.hand1.finger5.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].tipPosition[1]);
      if (props.selectedData.hand1.finger5.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].tipPosition[2]);
      if (props.selectedData.hand1.finger5.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].tipVelocity[0]);
      if (props.selectedData.hand1.finger5.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].tipVelocity[1]);
      if (props.selectedData.hand1.finger5.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[0].fingers[4].tipVelocity[2]);
    }
    if (props.frameData.hands.length === 2) {
      if (props.selectedData.hand2.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].direction[0]);
      if (props.selectedData.hand2.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].direction[1]);
      if (props.selectedData.hand2.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].direction[2]);
      if (props.selectedData.hand2.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmPosition[0]);
      if (props.selectedData.hand2.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmPosition[1]);
      if (props.selectedData.hand2.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmPosition[2]);
      if (props.selectedData.hand2.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmVelocity[0]);
      if (props.selectedData.hand2.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmVelocity[1]);
      if (props.selectedData.hand2.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmVelocity[2]);
      if (props.selectedData.hand2.normal.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmNormal[0]);
      if (props.selectedData.hand2.normal.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmNormal[1]);
      if (props.selectedData.hand2.normal.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].palmNormal[2]);
      if (props.selectedData.hand2.finger1.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].direction[0]);
      if (props.selectedData.hand2.finger1.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].direction[1]);
      if (props.selectedData.hand2.finger1.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].direction[2]);
      if (props.selectedData.hand2.finger1.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].tipPosition[0]);
      if (props.selectedData.hand2.finger1.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].tipPosition[1]);
      if (props.selectedData.hand2.finger1.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].tipPosition[2]);
      if (props.selectedData.hand2.finger1.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].tipVelocity[0]);
      if (props.selectedData.hand2.finger1.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].tipVelocity[1]);
      if (props.selectedData.hand2.finger1.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[0].tipVelocity[2]);
      if (props.selectedData.hand2.finger2.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].direction[0]);
      if (props.selectedData.hand2.finger2.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].direction[1]);
      if (props.selectedData.hand2.finger2.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].direction[2]);
      if (props.selectedData.hand2.finger2.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].tipPosition[0]);
      if (props.selectedData.hand2.finger2.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].tipPosition[1]);
      if (props.selectedData.hand2.finger2.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].tipPosition[2]);
      if (props.selectedData.hand2.finger2.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].tipVelocity[0]);
      if (props.selectedData.hand2.finger2.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].tipVelocity[1]);
      if (props.selectedData.hand2.finger2.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[1].tipVelocity[2]);
      if (props.selectedData.hand2.finger3.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].direction[0]);
      if (props.selectedData.hand2.finger3.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].direction[1]);
      if (props.selectedData.hand2.finger3.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].direction[2]);
      if (props.selectedData.hand2.finger3.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].tipPosition[0]);
      if (props.selectedData.hand2.finger3.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].tipPosition[1]);
      if (props.selectedData.hand2.finger3.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].tipPosition[2]);
      if (props.selectedData.hand2.finger3.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].tipVelocity[0]);
      if (props.selectedData.hand2.finger3.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].tipVelocity[1]);
      if (props.selectedData.hand2.finger3.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[2].tipVelocity[2]);
      if (props.selectedData.hand2.finger4.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].direction[0]);
      if (props.selectedData.hand2.finger4.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].direction[1]);
      if (props.selectedData.hand2.finger4.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].direction[2]);
      if (props.selectedData.hand2.finger4.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].tipPosition[0]);
      if (props.selectedData.hand2.finger4.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].tipPosition[1]);
      if (props.selectedData.hand2.finger4.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].tipPosition[2]);
      if (props.selectedData.hand2.finger4.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].tipVelocity[0]);
      if (props.selectedData.hand2.finger4.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].tipVelocity[1]);
      if (props.selectedData.hand2.finger4.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[3].tipVelocity[2]);
      if (props.selectedData.hand2.finger5.direction.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].direction[0]);
      if (props.selectedData.hand2.finger5.direction.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].direction[1]);
      if (props.selectedData.hand2.finger5.direction.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].direction[2]);
      if (props.selectedData.hand2.finger5.position.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].tipPosition[0]);
      if (props.selectedData.hand2.finger5.position.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].tipPosition[1]);
      if (props.selectedData.hand2.finger5.position.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].tipPosition[2]);
      if (props.selectedData.hand2.finger5.velocity.x)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].tipVelocity[0]);
      if (props.selectedData.hand2.finger5.velocity.y)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].tipVelocity[1]);
      if (props.selectedData.hand2.finger5.velocity.z)
        listOfSelectedFrameValues.push(props.frameData.hands[1].fingers[4].tipVelocity[2]);
    }
  }
  return listOfSelectedFrameValues;
}

const CurrentSelectedFrame = (props) => 
{
  const listOfSelectedFrameValues = getCurrentSelectedFrameValues(props)

  return (
    <div className='currentFrameContainer'>
      <div> Current Frame [
      <span className='currentFrame'>
        {listOfSelectedFrameValues.map((feature, i) => { return <span key={i}>{ format(feature)}, </span>} )}
      </span>
      ] </div>
    </div>
  );
}

// TODO extract currentFrameRate from here

/** Adaptive component for selecting individual features from Leap data */
const LeapFeatureSelector = ({ frame, ...passedProps }) => {

  const props = omit(passedProps, 'children');

  if (frame.hands && frame.hands.length) {
    if (frame.hands.length === 1) {
      return (
        <div>
          <Container>
            <Row>
              <div className='currentFrameRate'>Current framerate: {frame.currentFrameRate}</div>
            </Row>
            <LeapHand frameData={frame.hands[0]} selectedData={props.selectedData.hand1} onSelectedDataChange={props.onSelectedDataChange}/>
            <CurrentSelectedFrame className='currentSelectedFrame' frameData={frame} selectedData={props.selectedData}/>
          </Container>
        </div>
      )
    }
    if (frame.hands.length === 2 && frame.hands[0].fingers && frame.hands[0].fingers.length && frame.hands[1].fingers && frame.hands[1].fingers.length) {
      return (
        <div>
          <Container>
            <Row>
              <div className='currentFrameRate'>Current framerate: {frame.currentFrameRate}</div>
            </Row>
          <LeapHand frameData={frame.hands[0]} selectedData={props.selectedData.hand1} onSelectedDataChange={props.onSelectedDataChange}/>
          <LeapHand frameData={frame.hands[1]} selectedData={props.selectedData.hand2} onSelectedDataChange={props.onSelectedDataChange}/>
          <Row>
            <Col sm={8}>
              <CurrentSelectedFrame frameData={frame} selectedData={props.selectedData}/>
            </Col>
          </Row>
        </Container>
        </div>
      )
    }
  } else { 
    return (
      <div>
        <Container>
          <div className='currentFrameRate'>Current framerate: {frame.currentFrameRate}</div>
        </Container>
      </div>
    )
  }
}

LeapFeatureSelector.propTypes = {
  /**  Leap Motion data frame  */
  frame: PropTypes.object,
  selectedData: PropTypes.object,
  onSelectedDataChange: PropTypes.func
}

LeapFeatureSelector.defaultProps = {
  /**  Leap Motion data frame  */
  frame: {},
  selectedData: {
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
}

export default LeapFeatureSelector;
