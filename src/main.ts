import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import '@progress/kendo-ui/js/kendo.all';
require('@progress/kendo-ui/css/web/kendo.common.min.css');
require('@progress/kendo-ui/css/web/kendo.bootstrap.min.css');

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-kendoui-bridge'))
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging('debug');

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
