import "babel-polyfill";
import assert from "assert";
import classy from "../lib/index";

/*
 * Fixtures
 */

@classy()
class IamClassy {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log("IamClassy Instance!");
    }
}

/*
 * Tests
 */


describe('decorator', () => {
    it("create an instance from class with `new` keyword", () => assert(new IamClassy() instanceof IamClassy));

    it("create an instance from class without `new` keyword", () => assert(IamClassy() instanceof IamClassy));

    it("passing constructor arguments", () => assert(IamClassy(1, 2).b === 2));
});