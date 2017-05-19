import "babel-polyfill";
import assert from "assert";
import classy from "../lib/index";

/*
 * Fixtures
 */

@classy()
class IamClassy {
    constructor() {
        console.log("IamClassy Instance!");
    }
}

/*
 * Tests
 */


describe('decorator', () => {
    it("create an instance from class with `new` keyword is passed through", () => assert(new IamClassy() instanceof IamClassy));

    it("create an instance from class without `new` keyword is passed through", () => assert(IamClassy() instanceof IamClassy));
});