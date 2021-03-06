import { } from '@stencil/core';
import { ActiveRouter, RouterHistory } from '../../global/interfaces';
var Redirect = /** @class */ (function () {
    function Redirect() {
    }
    Redirect.prototype.componentWillLoad = function () {
        var history = this.activeRouter.get('history');
        if (!history) {
            return;
        }
        return history.replace(this.url, {});
    };
    return Redirect;
}());
export { Redirect };
