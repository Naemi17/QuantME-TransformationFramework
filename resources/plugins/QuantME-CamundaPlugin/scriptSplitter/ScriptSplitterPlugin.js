import React, { Fragment, PureComponent } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';
import { Fill } from 'camunda-modeler-plugin-helpers/components';

import { createMyShapes } from './Creator';


export default class ScriptSplitterPlugin extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {

    // render the button to start the splitting algorithm
    return (<Fragment>
      <Fill slot="toolbar">
        <button type="button" className="src-app-primitives-Button__Button--3Ffn0" title="Start Splitting"
          onClick={() => createMyShapes('')}>
          <span className="workflow-transformation"><span className="indent">Execute ScriptSplitter</span></span>
        </button>
      </Fill>
    </Fragment>);
  }
}