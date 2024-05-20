'use strict';

/**
 * bok service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bok.bok');
