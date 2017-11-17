import { } from '@stencil/core';
import { RouterHistory, MatchResults } from '../../global/interfaces';
var TestDemoThree = /** @class */ (function () {
    function TestDemoThree() {
    }
    TestDemoThree.prototype.render = function () {
        var _this = this;
        return [
            h("span", null,
                "Demo 3 Test Page",
                h("br", null)),
            h("stencil-route", { url: "/demo3/page1", exact: true, routeRender: function (props) {
                    return [
                        h("a", { href: "#", onClick: function (e) {
                                e.preventDefault();
                                _this.history.push('/demo3/page2', { 'blue': 'blue' });
                            } }, "History push to /demo3/page2"),
                        h("pre", null,
                            h("b", null, "props.pages"),
                            ":",
                            h("br", null),
                            JSON.stringify(_this.pages, null, 2)),
                        h("pre", null,
                            h("b", null, "props.match"),
                            ":",
                            h("br", null),
                            JSON.stringify(_this.match, null, 2)),
                        h("pre", null,
                            h("b", null, "props.history.location"),
                            ":",
                            h("br", null),
                            JSON.stringify(_this.history.location, null, 2))
                    ];
                } }),
            h("stencil-route", { url: "/demo3/page2", exact: true, routeRender: function (props) {
                    return [
                        h("a", { href: "#", onClick: function (e) {
                                e.preventDefault();
                                _this.history.push('/demo3/page1', { 'red': 'red' });
                            } }, "History push to /demo3/page1"),
                        h("pre", null,
                            h("b", null, "props.pages"),
                            ":",
                            h("br", null),
                            JSON.stringify(_this.pages, null, 2)),
                        h("pre", null,
                            h("b", null, "props.match"),
                            ":",
                            h("br", null),
                            JSON.stringify(_this.match, null, 2)),
                        h("pre", null,
                            h("b", null, "props.history.location"),
                            ":",
                            h("br", null),
                            JSON.stringify(_this.history.location, null, 2))
                    ];
                } })
        ];
    };
    return TestDemoThree;
}());
export { TestDemoThree };
