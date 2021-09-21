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

  // get the random topic names
  var topics = getTopics();
  // get the (default) start event
  var startEvent = elementRegistry.get('StartEvent_1');
  // create
  var quantumTask = modeling.createShape({ type: 'bpmn:ServiceTask', implementation: 'External' }, { x: 100, y: 100 }, process, {});
  var quantumTaskBo = elementRegistry.get(quantumTask.id).businessObject;
  quantumTaskBo.name = 'Quantum Part';
  quantumTaskBo.type = 'external';
  quantumTaskBo.topic = topics[0];
  var preprocessingTask = modeling.createShape({ type: 'bpmn:ServiceTask' }, { x: 100, y: 100 }, process, {});
  var preprocessingTaskBo = elementRegistry.get(preprocessingTask.id).businessObject;
  preprocessingTaskBo.name = 'Preprocessing part';
  preprocessingTaskBo.type = 'external';
  preprocessingTaskBo.topic = topics[1];
  var postprocessingTask = modeling.createShape({ type: 'bpmn:ServiceTask' }, { x: 100, y: 100 }, process, {});
  var postprocessingTaskBo = elementRegistry.get(postprocessingTask.id).businessObject;
  postprocessingTaskBo.name = 'Postprocessing Part';
  postprocessingTaskBo.type = 'external';
  postprocessingTaskBo.topic = topics[2];
  var endEvent = modeling.createShape({ type: 'bpmn:EndEvent' }, { x: 100, y: 100 }, process, {});
  var splittingGateway = modeling.createShape({ type: 'bpmn:ExclusiveGateway' }, { x: 50, y: 50 }, process, {});
  var splittingGatewayBo = elementRegistry.get(splittingGateway.id).businessObject;
  splittingGatewayBo.name = 'Quantum-Loop';
  var joiningGateway = modeling.createShape({ type: 'bpmn:ExclusiveGateway' }, { x: 50, y: 50 }, process, {});
  var joiningGatewayBo = elementRegistry.get(joiningGateway.id).businessObject;
  joiningGatewayBo.name = 'Quantum-Loop completed?'
  // connect
  modeling.connect(startEvent, preprocessingTask, { type: 'bpmn:SequenceFlow' });
  modeling.connect(preprocessingTask, splittingGateway, { type: 'bpmn:SequenceFlow' });
  modeling.connect(splittingGateway, quantumTask, { type: 'bpmn:SequenceFlow' });
  modeling.connect(quantumTask, joiningGateway, { type: 'bpmn:SequenceFlow' });
  modeling.connect(joiningGateway, splittingGateway, { type: 'bpmn:SequenceFlow' });
  modeling.connect(joiningGateway, postprocessingTask, { type: 'bpmn:SequenceFlow' });
  modeling.connect(postprocessingTask, endEvent, { type: 'bpmn:SequenceFlow' });
  // make it pretty
  layout(modeling, elementRegistry, rootElement);
}


/**
* generate random names for topics
*/
function getTopics() {
  // TODO randomize topic-names
  var topics = ["RandomPre", "RandomQuant", "RandomPost"];

  return topics;
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
