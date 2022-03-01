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

const { app } = require('electron');
const config = require('./config');

/**
 * Get the NISQ Analyzer endpoint
 */
module.exports.getNisqAnalyzerEndpoint = function() {
  if (config.nisqAnalyzerEndpoint === undefined) {
    return '';
  }
  return config.nisqAnalyzerEndpoint;
};

/**
 * Set the NISQ Analyzer endpoint
 */
module.exports.setNisqAnalyzerEndpoint = function(nisqAnalyzerEndpoint) {
  if (nisqAnalyzerEndpoint !== null && nisqAnalyzerEndpoint !== undefined) {
    config.nisqAnalyzerEndpoint = nisqAnalyzerEndpoint;
    app.emit('menu:action', 'nisqAnalyzerEndpointChanged', nisqAnalyzerEndpoint);
  }
};

/**
 * Get the Transformation Framework endpoint
 */
module.exports.getTransformationFrameworkEndpoint = function() {
  if (config.transformationFrameworkEndpoint === undefined) {
    return '';
  }
  return config.transformationFrameworkEndpoint;
};

/**
 * Set the Transformation Framework endpoint
 */
module.exports.setTransformationFrameworkEndpoint = function(transformationFrameworkEndpoint) {
  if (transformationFrameworkEndpoint !== null && transformationFrameworkEndpoint !== undefined) {
    config.transformationFrameworkEndpoint = transformationFrameworkEndpoint;
    app.emit('menu:action', 'transformationFrameworkEndpointChanged', transformationFrameworkEndpoint);
  }
};


/**
 * Get the endpoint of the configured Camunda engine to deploy to
 *
 * @return {string} the currently specified endpoint of the Camunda engine
 */
module.exports.getCamundaEndpoint = function() {
  if (config.camundaEndpoint === undefined) {
    return '';
  }
  return config.camundaEndpoint;
};

/**
 * Set the endpoint of the Camunda engine to deploy to
 *
 * @param camundaEndpoint the endpoint of the Camunda engine
 */
module.exports.setCamundaEndpoint = function(camundaEndpoint) {
  if (camundaEndpoint !== null && camundaEndpoint !== undefined) {
    config.camundaEndpoint = camundaEndpoint.replace(/\/$/, '');
    app.emit('menu:action', 'camundaEndpointChanged', config.camundaEndpoint);
  }
};

/**
 * Get the endpoint of the configured OpenTOSCA container
 *
 * @return {string} the currently specified endpoint of the OpenTOSCA container
 */
module.exports.getOpenTOSCAEndpoint = function() {
  if (config.opentoscaEndpoint === undefined) {
    return '';
  }
  return config.opentoscaEndpoint;
};

/**
 * Set the endpoint of the OpenTOSCA container
 *
 * @param opentoscaEndpoint the endpoint of the OpenTOSCA container
 */
module.exports.setOpenTOSCAEndpoint = function(opentoscaEndpoint) {
  if (opentoscaEndpoint !== null && opentoscaEndpoint !== undefined) {
    config.opentoscaEndpoint = opentoscaEndpoint.replace(/\/$/, '');
    app.emit('menu:action', 'opentoscaEndpointChanged', config.opentoscaEndpoint);
  }
};

/**
 * Get the endpoint of the configured Winery
 *
 * @return {string} the currently specified endpoint of the Winery
 */
module.exports.getWineryEndpoint = function() {
  if (config.wineryEndpoint === undefined) {
    return '';
  }
  return config.wineryEndpoint;
};

/**
 * Set the endpoint of the Winery
 *
 * @param wineryEndpoint the endpoint of the Winery
 */
module.exports.setWineryEndpoint = function(wineryEndpoint) {
  if (wineryEndpoint !== null && wineryEndpoint !== undefined) {
    config.wineryEndpoint = wineryEndpoint.replace(/\/$/, '');
    app.emit('menu:action', 'wineryEndpointChanged', config.wineryEndpoint);
  }
};

/**
 * Get the local path to the folder in the repository containing the QRMs
 *
 * @return {string} the specified repository path
 */
module.exports.getQRMRepositoryPath = function() {
  if (config.githubRepositoryPath === undefined) {
    return '';
  }
  return config.githubRepositoryPath;
};

/**
 * Set the local path to the folder in the repository containing the QRMs
 *
 * @param repositoryPath the repository path
 */
module.exports.setQRMRepositoryPath = function(repositoryPath) {
  if (repositoryPath !== null && repositoryPath !== undefined) {
    config.githubRepositoryPath = repositoryPath;
    app.emit('menu:action', 'qrmRepoPathChanged', repositoryPath);
  }
};

/**
 * Get the repository name used to access the QRMs
 *
 * @return {string} the specified repository name
 */
module.exports.getQRMRepositoryName = function() {
  if (config.githubRepositoryName === undefined) {
    return '';
  }
  return config.githubRepositoryName;
};

/**
 * Set the repository name used to access the QRMs
 *
 * @param repositoryName the repository name
 */
module.exports.setQRMRepositoryName = function(repositoryName) {
  if (repositoryName !== null && repositoryName !== undefined) {
    config.githubRepositoryName = repositoryName;
    app.emit('menu:action', 'qrmRepoNameChanged', repositoryName);
  }
};

/**
 * Get the username used to access the QRM repository
 *
 * @return {string} the specified username
 */
module.exports.getQRMRepositoryUserName = function() {
  if (config.githubUsername === undefined) {
    return '';
  }
  return config.githubUsername;
};

/**
 * Set the username used to access the QRM repository
 *
 * @param userName the username
 */
module.exports.setQRMUserName = function(userName) {
  if (userName !== null && userName !== undefined) {
    config.githubUsername = userName;
    app.emit('menu:action', 'qrmUserNameChanged', userName);
  }
};

/**
 * Methods to utilize the cloning feature
 */

/**
 * Get the web path/url used to access the QRM repository
 *
 * @return {string} the specified web path/url
 */
module.exports.getQRMRepositoryWebPath = function() {
  if (config.qrmRepositoryWebPath === undefined) {
    return '';
  }
  return config.qrmRepositoryWebPath;
};

/**
 * Set the web path/url used to access the QRM repository
 *
 * @param url the web path/url
 */
module.exports.setQRMRepositoryWebPath = function(url) {
  if (url !== null && url !== undefined) {
    config.qrmRepositoryWebPath = url;
    app.emit('menu:action', 'qrmRepoWebPathChanged', url);
  }
};

/**
 * Get the path to the local QRM repository
 *
 * @return {string} the path
 */
module.exports.getQRMRepositoryLocalPath = function() {
  if (config.qrmRepositoryLocalPath === undefined) {
    return '';
  }
  return config.qrmRepositoryLocalPath;
};

/**
 * Set the path to the local QRM repository
 *
 * @param path the path
 */
module.exports.setQRMRepositoryLocalPath = function(path) {
  if (path !== null && path !== undefined) {
    config.qrmRepositoryLocalPath = path;
    app.emit('menu:action', 'qrmRepoLocalPathChanged', path);
  }
};

/**
 * Get the name of the local QRM repository folder
 *
 * @return {string} the name
 */
module.exports.getQRMRepositoryLocalName = function() {
  if (config.qrmRepositoryLocalName === undefined) {
    return '';
  }
  return config.qrmRepositoryLocalName;
};

/**
 * Set the name of the local QRM repository folder
 *
 * @param name the name
 */
module.exports.setQRMRepositoryLocalName = function(name) {
  if (name !== null && name !== undefined) {
    config.qrmRepositoryLocalName = name;
    app.emit('menu:action', 'qrmRepoLocalNameChanged', name);
  }
};

/**
 * Get the endpoint of the Qiskit Runtime Handler
 *
 * @return {string} the specified endpoint
 */
module.exports.getQiskitRuntimeHandlerEndpoint = function() {
  if (config.qiskitRuntimeHandlerEndpoint === undefined) {
    return '';
  }
  return config.qiskitRuntimeHandlerEndpoint;
};

/**
 * Set the endpoint of the Qiskit Runtime Handler
 *
 * @param endpoint the endpoint
 */
module.exports.setQiskitRuntimeHandlerEndpoint = function(endpoint) {
  if (endpoint !== null && endpoint !== undefined) {
    config.qiskitRuntimeHandlerEndpoint = endpoint;
    app.emit('menu:action', 'qiskitRuntimeHandlerEndpointChanged', endpoint);
  }
};
