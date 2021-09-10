/**
 * This program and the accompanying materials are made available under the
 * terms the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { createModeler } from '../quantme/Utilities';

/**
* create my shapes here
* e.g. this creates a template for the moment.
* @param metaData metaData containing the infos about loops
*/
export function createMyShapes(metaData){

  let modeler = createModeler();
  let modeling = modeler.get('modeling');
  let elementRegistry = modeler.get('elementRegistry');
  let elementFactory = modeler.get('bpmnFactory');

  var process = elementRegistry.get('Process_1');
  var startEvent = elementRegistry.get('StartEvent_1');
  var endEvent = elementFactory.createShape({ type: 'bpmn:EndEvent' });
  var preprocessingTask = elementFactory.createShape({ type: 'bpmn:ScripTask' });
  var quantumTask = elementFactory.createShape({ type: 'bpmn:ScripTask'});
  var postprocessingTask = elementFactory.createShape({ type: 'bpmn:ScripTask' });
  var splittingGateway = elementFactory.createShape({ type: 'bpmn:ExclusiveGateway' });
  var joiningGateway = elementFactory.createShape({ type: 'bpmn:ExclusiveGateway' });

  modeling.createShape(splittingGateway, { x: 50, y: 50 }, process);
  modeling.createShape(joiningGateway, { x: 50, y: 50 }, process);
  modeling.createShape(preprocessingTask, { x: 50, y: 50 }, process);
  modeling.createShape(quantumTask, { x: 50, y: 50 }, process);
  modeling.createShape(postprocessingTask, { x: 50, y: 50 }, process);

  // TODO handle loops according to splitting output
  modeling.connect(startEvent, preprocessingTask);
  modeling.connect(preprocessingTask, splittingGateway);
  modeling.connect(splittingGateway, quantumTask);
  modeling.connect(quantumTask, joiningGateway);
  modeling.connect(joiningGateway, postprocessingTask );
  modeling.connect(joiningGateway, splittingGateway);
  modeling.connect(postprocessingTask, endEvent);
}

/**
* simple test function that
* @param message the data for the test
* @param props property element for displaying the message
*/
export function test(message, props){
  props.displayNotification({
    type:'warning',
    title: 'TEST',
    content: message,
    duration: 20000
  });

}
