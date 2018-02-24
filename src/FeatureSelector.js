import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { selectLeapFeature } from '../../../actions/leapFeature.js'
import './FeatureSelector.css';


// import Button from 'react-bootstrap/lib/Button';
// import { bootstrapUtils } from 'react-bootstrap/lib/utils';
// import Toggle from 'react-bootstrap-toggle';
// import { Bootstrap2Toggle } from 'react-bootstrap-toggle';
// import "react-bootstrap-toggle/src/bootstrap2-toggle.css";
// import {Checkbox, Radio} from 'react-btn-checkbox';

// bootstrapUtils.addStyle(Button, 'custom');

// React Checkbox
// https://codepen.io/anon/pen/KvVPrb

class FeatureSelector extends Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick(e) {
    // e.preventDefault();
    this.props.onSelectedDataChange(e);
    // this.props.dispatch(selectLeapFeature(e));
  }

  // <label>
  //   <input type="checkbox" defaultChecked={this.props.selectedData.x} hidden onClick={() => this.handleClick( this.props.name + "x: " + this.props.x )}/>
  //   <span id="mySpan1">{this.props.x}</span>
  // </label>


  render() {
    return (
      <div className="featureGroupName">
        <div>{this.props.label}</div>
        <div className="row">
          <div id="ck-button1" className="ck-button">
            <label>
              <input type="checkbox"
                      hidden defaultChecked={this.props.selectedData.x}
                      onClick={() => this.handleClick( this.props.name + "x: " + this.props.x )}/>
              <span id="mySpan1">{this.props.x}</span>
            </label>
          </div>
          <div id="ck-button2" className="ck-button">
            <label>
              <input type="checkbox"
                      hidden defaultChecked={this.props.selectedData.y}
                      onClick={() => this.handleClick( this.props.name + "y: " + this.props.y ) }/>
              <span id="mySpan2">{this.props.y}</span>
            </label>
          </div>
          <div id="ck-button3" className="ck-button">
            <label>
              <input type="checkbox"
                      hidden defaultChecked={this.props.selectedData.z}
                      onClick={() => this.handleClick( this.props.name + "z: " + this.props.z )}/>
              <span id="mySpan3">{this.props.z}</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

// export default connect(state => state)(FeatureSelector);
export default FeatureSelector;
