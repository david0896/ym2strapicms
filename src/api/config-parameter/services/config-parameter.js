'use strict';

/**
 * config-parameter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::config-parameter.config-parameter');
