import { } from '@stencil/core';
var AsyncContent = /** @class */ (function () {
    function AsyncContent() {
    }
    AsyncContent.prototype["componentWillLoad"] = function () {
        return this.fetchNewContent();
    };
    AsyncContent.prototype.fetchNewContent = function () {
        var _this = this;
        return fetch(this.documentLocation)
            .then(function (response) { return response.text(); })
            .then(function (data) {
            _this.content = data;
        });
    };
    AsyncContent.prototype.render = function () {
        return (h("div", { innerHTML: this.content }));
    };
    return AsyncContent;
}());
export { AsyncContent };
