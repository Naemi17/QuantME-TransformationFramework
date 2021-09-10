/**
 * This program and the accompanying materials are made available under the
 * terms the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment, PureComponent } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';
import { Fill } from 'camunda-modeler-plugin-helpers/components';

import { createMyShapes, test } from './Creator';


export default class ScriptSplitterPlugin extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {

    // render the button to start the splitting algorithm
    return (<Fragment>
      <Fill slot="toolbar">
        <button type="button" className="src-app-primitives-Button__Button--3Ffn0" title="Start Splitting"
          onClick= {() => test('finally, i am able to import a function', this.props)}>
          <span className="workflow-transformation"><span className="indent">Execute ScriptSplitter</span></span>
        </button>
      </Fill>
    </Fragment>);
  }

}
