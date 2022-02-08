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

const config = require('../../framework-config');

// following imports are needed for the isomorphic git library
const isomorphic = require('isomorphic-git');
const fs = require('fs');
const path = require('path');
const http = require('isomorphic-git/http/node');

// variables for specifying the repository to be cloned, the system path and the repository name
let qrmRepoWebPath;
let qrmRepoLocalPath;
const qrmRepoLocalName = 'Test-Name';

const cloneurl = 'https://github.com/isomorphic-git/lightning-fs';
const cloneurl2 = 'https://github.com/isomorphic-git/cors-proxy';

/**
 * Clone the QRM Repository defined by path, name and username
 */
module.exports.cloneQRMRepository = async function() {
  console.log('clone button pressed');
  let dir;
  const currentDir = path.dirname(process.cwd());
  qrmRepoLocalPath = config.getQRMRepositoryLocalPath();
  if (qrmRepoLocalPath === '') {
    dir = path.join(currentDir, qrmRepoLocalName);
    console.log('first case, path is undefined');
    console.log(dir);
  } else {
    dir = path.join(currentDir, qrmRepoLocalName);
    const dir2 = path.join(qrmRepoLocalPath, qrmRepoLocalName);
    console.log('second case, path is defined');
    console.log(dir2);
  }
  isomorphic.clone({ fs, http, dir, url: cloneurl2 }).then(console.log);
  console.log('cloning done!');
  return null;
};
