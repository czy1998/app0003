'use strict';
import queryString from 'query-string';
import _ from 'lodash';
import config from './config';
import Mock from 'mockjs';
let request = {};

request.get = function (url, parpms) {
  if (parpms) {
    url += '?' + queryString.stringify(parpms);
  }
  return fetch(url)
    .then((response) => response.json())
    .then((response) => Mock.mock(response));
};

request.post = function (url, body) {
  var options = _.extend(config.header, {
    body: JSON.stringify({body}),
  });
  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => Mock.mock(response));
};
export default request;
