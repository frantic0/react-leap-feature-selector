import React, {Component} from 'react';
import './FeatureSelector.css';


class FeatureSelector extends Component {

  // constructor(props) {
  //   super(props);
  // }

  handleClick(e) {
    // e.preventDefault();
    this.props.onSelectedDataChange(e);
    // this.props.dispatch(selectLeapFeature(e));
  }

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

export default FeatureSelector;
