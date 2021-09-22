/**
 * Copyright (c) 2021 Institute of Architecture of Application Systems -
 * University of Stuttgart
 *
 * This program and the accompanying materials are made available under the
 * terms the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */
import React, { useState } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';

// polyfill upcoming structural components
const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);

export default function ConfigModal({ initValues, onClose }) {
  const [camundaEndpoint, setCamundaEndpoint] = useState(initValues.camundaEndpoint);
  const [opentoscaEndpoint, setOpentoscaEndpoint] = useState(initValues.opentoscaEndpoint);
  const [wineryEndpoint, setWineryEndpoint] = useState(initValues.wineryEndpoint);
  const [transformationFrameworkEndpoint, setTransformationFrameworkEndpoint] = useState(initValues.transformationFrameworkEndpoint);
  const [nisqAnalyzerEndpoint, setNisqAnalyzerEndpoint] = useState(initValues.nisqAnalyzerEndpoint);
  const [qrmRepoName, setQrmRepoName] = useState(initValues.qrmRepoName);
  const [qrmUserName, setQrmUserName] = useState(initValues.qrmUserName);
  const [qrmRepoPath, setQrmRepoPath] = useState(initValues.qrmRepoPath);

  // return the new values to the config plugin
  const onSubmit = () => onClose({
    camundaEndpoint,
    opentoscaEndpoint,
    wineryEndpoint,
    transformationFrameworkEndpoint,
    nisqAnalyzerEndpoint,
    qrmUserName,
    qrmRepoName,
    qrmRepoPath
  });


  //
  return <Modal onClose={onClose}>
    <Title>
      QuantME Modeler Configuration
    </Title>

    <Body>
      <form id="quantmeConfigForm" onSubmit={onSubmit}>
        <!-- different tabs as buttons -->
        <div class="tab" id="quantmeConfigTabs">
          <button class="tablinks" className="btn btn-primary" onClick="openTab(event, 'CamundaEngineEndpointTab')">Camunda Engine Endpoint</button>
          <button class="tablinks" className="btn btn-primary" onClick="openTab(event, 'OpenTOSCAEndpointTab')">OpenTOSCA Endpoint</button>
          <button class="tablinks" className="btn btn-primary" onClick="openTab(event, 'WineryEndpointTab')">Winery Endpoint</button>
          <button class="tablinks" className="btn btn-primary" onClick="openTab(event, 'QuantMEFrameworkEndpointTab')">QuantME Framework Endpoint</button>
          <button class="tablinks" className="btn btn-primary" onClick="openTab(event, 'NISQAnalyzerEndpointTab')">NISQ Analyzer Endpoint</button>
          <button class="tablinks" className="btn btn-primary" onClick="openTab(event, 'QRMDataTab')">QRM Data</button>
        </div>

        <!-- content of each tabs accessible by a click on the button -->
        <div id="CamundaEngineEndpointTab" class="tabcontent">
          <h3>Camunda Engine Endpoint:</h3>
          <p>
            <input
              type="string"
              name="camundaEndpoint"
              value={camundaEndpoint}
              onChange={event => setCamundaEndpoint(event.target.value)}/>
          </p>
        </div>

        <div id="OpenTOSCAEndpointTab" className="tabcontent">
          <h3>OpenTOSCA Endpoint:</h3>
          <p>
            <input
              type="string"
              name="opentoscaEndpoint"
              value={opentoscaEndpoint}
              onChange={event => setOpentoscaEndpoint(event.target.value)}/>
          </p>
        </div>

        <div id="WineryEndpointTab" className="tabcontent">
          <h3>Winery Endpoint:</h3>
          <p>
            <input
              type="string"
              name="wineryEndpoint"
              value={wineryEndpoint}
              onChange={event => setWineryEndpoint(event.target.value)}/>
          </p>
        </div>

        <div id="QuantMEFrameworkEndpointTab" className="tabcontent">
          <h3>QuantME Framework Endpoint:</h3>
          <p>
            <input
              type="string"
              name="transformationFrameworkEndpoint"
              value={transformationFrameworkEndpoint}
              onChange={event => setTransformationFrameworkEndpoint(event.target.value)}/>
          </p>
        </div>

        <div id="NISQAnalyzerEndpointTab" className="tabcontent">
          <h3>NISQ Analyzer Endpoint:</h3>
          <p>
            <input
              type="string"
              name="nisqAnalyzerEndpoint"
              value={nisqAnalyzerEndpoint}
              onChange={event => setNisqAnalyzerEndpoint(event.target.value)}/>
          </p>
        </div>

        <!-- QRMDataTab includes an additional table for structure -->
        <div id="QRMDataTab" className="tabcontent">
          <h3>QRM Data</h3>
          <table>
            <tbody>
              <tr className="spaceUnder">
                <td align="right">QRM Repository User:</td>
                <td align="left">
                  <input
                    type="string"
                    name="qrmUserName"
                    value={qrmUserName}
                    onChange={event => setQrmUserName(event.target.value)}/>
                </td>
              </tr>
              <tr className="spaceUnder">
                <td align="right">QRM Repository Name:</td>
                <td align="left">
                  <input
                    type="string"
                    name="qrmRepoName"
                    value={qrmRepoName}
                    onChange={event => setQrmRepoName(event.target.value)}/>
                </td>
              </tr>
              <tr>
                <td align="right">QRM Repository Path:</td>
                <td align="left">
                  <input
                    type="string"
                    name="qrmRepoPath"
                    value={qrmRepoPath}
                    onChange={event => setQrmRepoPath(event.target.value)}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </form>
    </Body>

    <Footer>
      <div id="quantmeConfigFormButtons">
        <button type="submit" className="btn btn-primary" form="quantmeConfigForm">Save</button>
        <button type="button" className="btn btn-secondary" onClick={() => onClose()}>Cancel</button>
      </div>
    </Footer>
  </Modal>;

  function openTab(evt, tabName) {
    var j, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (j = 0; j < tabcontent.length; j++) {
      tabcontent[j].style.display = "none";
    }
    for (j = 0; j < tablinks.length; j++) {
      tablinks[j].className = tablinks[j].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget().className += "active";
  }

}

