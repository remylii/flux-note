import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SampleAction from '../actions/SampleAction';
import MainSection from '../components/MainSection.react';

class SampleApp extends Component {
  /**
   * @return {object}
   */
  render() {
    const { samples, actions } = this.props;
    return (
      <div className="main-section">
        <MainSection
          samples={samples}
          actions={actions} />
      </div>
    );
  }
}
SampleApp.PropTypes = {
  samples: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * globalなstateから、利用する値を取ってきて、propsにセット
 *   stateの中身はreducerの定義で指定したcombineしたモジュール
 */
function mapStateToProps(state) {
  return {
    samples: state.samples
  };
}

/**
 * bindActionCreatorsは、this.method.actionHoge()を呼ぶと
 *   store.dispatch()が呼ばれる
 * actionCreatorsのメソッドをthis.propsにセット
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SampleAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleApp);
