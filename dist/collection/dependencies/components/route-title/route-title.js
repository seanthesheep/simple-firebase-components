import { } from '@stencil/core';
import { ActiveRouter } from '../../global/interfaces';
var RouteTitle = /** @class */ (function () {
    function RouteTitle() {
    }
    RouteTitle.prototype.componentWillLoad = function () {
        var suffix = this.activeRouter && this.activeRouter.get('titleSuffix') || '';
        document.title = "" + this.title + suffix;
    };
    RouteTitle.prototype.render = function () {
        return null;
    };
    return RouteTitle;
}());
export { RouteTitle };
