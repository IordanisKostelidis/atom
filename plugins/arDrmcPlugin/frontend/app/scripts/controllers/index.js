(function () {

  'use strict';

  var angular = require('angular');

  module.exports = angular.module('momaApp.controllers', [])

    // Layout
    .controller('BodyCtrl', require('./BodyCtrl'))
    .controller('HeaderCtrl', require('./HeaderCtrl'))
    .controller('FooterCtrl', require('./FooterCtrl'))

    // Login
    .controller('LoginCtrl', require('./LoginCtrl'))

    // Modals
    .controller('EditDcMetadataCtrl', require('./EditDcMetadataCtrl'))
    .controller('DigitalObjectViewerCtrl', require('./DigitalObjectViewerCtrl'))
    .controller('AIPReclassifyCtrl', require('./AIPReclassifyCtrl'))
    .controller('LinkSupportingTechnologyCtrl', require('./LinkSupportingTechnologyCtrl'))
    .controller('SaveSearchCtrl', require('./SaveSearchCtrl'))

    // Dashboard
    .controller('DashboardCtrl', require('./DashboardCtrl'))
    .controller('DashboardRecentActivityCtrl', require('./DashboardRecentActivityCtrl'))
    .controller('DashboardIngestionCtrl', require('./DashboardIngestionCtrl'))

    // Search
    .controller('SearchCtrl', require('./SearchCtrl'))
    .controller('AipSearchCtrl', require('./AipSearchCtrl'))
    .controller('FileSearchCtrl', require('./FileSearchCtrl'))
    .controller('SearchSearchCtrl', require('./SearchSearchCtrl'))

    // Context browser
    .controller('ContextBrowserCtrl', require('./ContextBrowserCtrl'))

    // AIPs, works, technology records...
    .controller('AIPViewCtrl', require('./AIPViewCtrl'))
    .controller('WorkViewCtrl', require('./WorkViewCtrl'))
    .controller('TechnologyRecordViewCtrl', require('./TechnologyRecordViewCtrl'))

    // TMS lookup
    .controller('TmsBrowserCtrl', require('./TmsBrowserCtrl'));

})();
