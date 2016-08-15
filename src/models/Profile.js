import _ from 'lodash' // eslint-disable-line
import moment from 'moment'
import Backbone from 'backbone'
import config from '../config'

export default class Profile extends Backbone.Model {
  defaults() { return {createdDate: moment.utc().toDate()} }
}

Profile.prototype.urlRoot = `${config.url}/api/profiles`
Profile.prototype.sync = require('backbone-http').sync(Profile)
