import { merge } from "./merge";

test("Test Case 1", () => {
    expect(merge([],[])).toEqual([]);
});

test("Tese Case 2", () => {
    expect(merge([1,2,3],[])).toEqual([1,2,3]);
});

test("Tese Case 3", () => {
    expect(merge([],[1,2,3])).toEqual([1,2,3]);
});

test("Tese Case 4", () => {
    expect(merge([1,3,4,5,8],[2,4,6,10,15])).toEqual([1,2,3,4,4,5,6,8,10,15]);
});

test("Tese Case 5", () => {
    expect(merge([-10,-8,-2,0,10,11],[-5,-4,1,3,5])).toEqual([-10,-8,-5,-4,-2,0,1,3,5,10,11]);
});
