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

// following imports are needed for the isomorphic git library

const isomorphic = require('isomorphic-git');
//import * as git from 'isomorphic-git';
// both following imports don't work and lead to the require error
// import { getQRMRepositoryPath, getQRMRepositoryName, getQRMRepositoryUserName } from '../../framework-config';
// const config = require('../../framework-config');

/**
 * Clone the QRM Repository defined by path, name and username
 */
module.exports.cloneQRMRepository = async function() {

  // uncommented code works without the above imports, however as soon as the imports are used the require error appears
  // let branches = await git.listBranches({ fs, dir: '/QuantME-TransformationFramework' });
  // console.log(branches);
  // let output = getQRMRepositoryUserName();
  // console.log(output);
  console.log('clone button pressed');
  return null;
};
