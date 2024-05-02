'use strict';

/**
 * config-parameter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::config-parameter.config-parameter');
