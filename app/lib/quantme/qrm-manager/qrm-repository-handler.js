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
// import * as git from 'isomorphic-git';
// import * as fs from 'fs';
// both following imports don't work and lead to the require error
// import { getQRMRepositoryPath, getQRMRepositoryName, getQRMRepositoryUserName } from '../../framework-config';
// const config = require('../../framework-config');

/**
 * Clone the QRM Repository defined by path, name and username
 */
export default async function cloneQRMRepository() {

  // uncommented code works without the above imports, however as soon as the imports are used the require error appears
  // let branches = await git.listBranches({ fs, dir: '/QuantME-TransformationFramework' });
  // console.log(branches);
  // let output = getQRMRepositoryUserName();
  // console.log(output);
  console.log('clone button pressed');
  return null;
}

/*
module.exports.cloneQRMRepository = function() {
  let test = config.getQRMRepositoryUserName();
  console.log(test);
  console.log('button pressed');

  let repoPath = getQRMRepositoryPath();
  let repoName = getQRMRepositoryName();
  let repoUserName = getQRMRepositoryUserName();
  console.log('userName '+ repoUserName);
  console.log('Path '+ repoPath);
  console.log('RepoName'+ repoName);

  return null;
};
*/
/**
 * node js example
 */
/*
  const path = require('path')
  const git = require('isomorphic-git')
  const http = require('isomorphic-git/http/node')
  const fs = require('fs')
 */
/**
 * Clone the QRM Repository defined by the path
 */
