import { } from '@stencil/core';
import { RouterHistory, MatchResults } from '../../global/interfaces';
var TestDemoFour = /** @class */ (function () {
    function TestDemoFour() {
    }
    TestDemoFour.prototype.handleClick = function (e, linkLocation) {
        e.preventDefault();
        this.history.push(linkLocation, { 'blue': 'blue' });
    };
    TestDemoFour.prototype.render = function () {
        var _this = this;
        var linkLocation = '/demo3/page1';
        return (h("div", null,
            h("a", { href: linkLocation, onClick: function (e) { return _this.handleClick(e, linkLocation); } },
                "History push to ",
                linkLocation),
            h("pre", null,
                h("b", null, "this.pages"),
                ":",
                h("br", null),
                JSON.stringify(this.pages, null, 2)),
            h("pre", null,
                h("b", null, "this.match"),
                ":",
                h("br", null),
                JSON.stringify(this.match, null, 2)),
            h("pre", null,
                h("b", null, "this.history.location"),
                ":",
                h("br", null),
                JSON.stringify(this.history.location, null, 2))));
    };
    return TestDemoFour;
}());
export { TestDemoFour };
