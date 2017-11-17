import { } from '@stencil/core';
import { RouterHistory, MatchResults } from '../../global/interfaces';
var TestDemoSix = /** @class */ (function () {
    function TestDemoSix() {
    }
    TestDemoSix.prototype.render = function () {
        return [
            h("span", null,
                "Demo 6 Test Page",
                h("br", null)),
            h("stencil-route", { url: "/demo6/", exact: true, group: "main", routeRender: function (props) {
                    return [
                        h("h1", null, "One"),
                        h("stencil-route-link", { url: "/demo6/asdf" }, "Next")
                    ];
                } }),
            h("stencil-route", { url: "/demo6/:any*", group: "main", routeRender: function (props) {
                    return [
                        h("h1", null,
                            "Two: ",
                            props.match),
                        h("stencil-route-link", { url: "/demo6/" }, "Back")
                    ];
                } })
        ];
    };
    return TestDemoSix;
}());
export { TestDemoSix };
