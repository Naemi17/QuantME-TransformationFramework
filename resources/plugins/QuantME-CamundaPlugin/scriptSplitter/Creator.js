/**
 * This program and the accompanying materials are made available under the
 * terms the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { createModeler } from '../quantme/Utilities';
import { layout } from 'client/src/app/quantme/layouter/Layouter';
import { getRootProcess } from 'client/src/app/quantme/utilities/Utilities';
/**
* create my shapes here
* e.g. this creates a template for the moment.
* @param modeler the currently active modeler
*/
export function createTemplate(modeler) {
  // initialize modeling helpers
  let modeling = modeler.get('modeling');
  let elementRegistry = modeler.get('elementRegistry');
  let elementFactory = modeler.get('bpmnFactory');
  // get root element of the current diagram and THE ROOT PROCESS
  const definitions = modeler.getDefinitions();
  const rootElement = getRootProcess(definitions);
  var process = elementRegistry.get(rootElement.id);

  // get the (default) start event
  var startEvent = elementRegistry.get('StartEvent_1');
  // create
  var quantumTask = modeling.createShape({ type: 'bpmn:ScriptTask' }, { x: 100, y: 100 }, process, {});
  var quantumTaskBo = elementRegistry.get(quantumTask.id).businessObject;
  quantumTaskBo.name = 'Quantum Part';
  var preprocessingTask = modeling.createShape({ type: 'bpmn:ScriptTask' }, { x: 100, y: 100 }, process, {});
  var preprocessingTaskBo = elementRegistry.get(preprocessingTask.id).businessObject;
  preprocessingTaskBo.name = 'Preprocessing part';
  var postprocessingTask = modeling.createShape({ type: 'bpmn:ScriptTask' }, { x: 100, y: 100 }, process, {});
  var postprocessingTaskBo = elementRegistry.get(postprocessingTask.id).businessObject;
  postprocessingTaskBo.name = 'Postprocessing Part';
  var endEvent = modeling.createShape({ type: 'bpmn:EndEvent' }, { x: 100, y: 100 }, process, {});
  // connect
  modeling.connect(startEvent, preprocessingTask, { type: 'bpmn:SequenceFlow' });
  modeling.connect(preprocessingTask, quantumTask, { type: 'bpmn:SequenceFlow' });
  modeling.connect(quantumTask, postprocessingTask, { type: 'bpmn:SequenceFlow' });
  modeling.connect(postprocessingTask, endEvent, { type: 'bpmn:SequenceFlow' });
  // make it pretty
  layout(modeling, elementRegistry, rootElement);
}

/**
* create my shapes here
* e.g. this creates a template for the moment.
* @param metaData metaData containing the infos about loops
*/
export function createMyShapes(metaData) {
  // TODO implement
}

/**
* simple test function that
* @param message the data for the test
* @param props property element for displaying the message
*/
export function test(message, props) {
  props.displayNotification({
    type:'warning',
    title: 'TEST',
    content: message,
    duration: 20000
  });

}
