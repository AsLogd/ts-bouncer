export function isValidstring(data: any): data is string {
    return typeof data === "string";
}
export function isValidnumber(data: any): data is number {
    return typeof data === "number";
}
export function isValidboolean(data: any): data is boolean {
    return typeof data === "boolean";
}
export function isValidany(data: any): data is undefined {
    return typeof data !== "undefined";
}
export function isValidnull(data: any): data is null {
    return data === null;
}
export function isValidEnum<T>(e: T, data: any): data is keyof T {
    return data in e || Object.values(e).includes(data);
}
export function isValidEnumArray<T>(e: T): (data: any) => data is keyof T {
    return (data: any): data is keyof T => {
        return data in e || Object.values(e).includes(data);
    };
}
import { auxA } from "./inAux";
import { auxauxA, auxauxB } from "./aux/auxinAux";
import { A, B, BB, D, E, F, G, H, HH, GG, GG2, GG3, I, J, JJ, K, L, M, N, O, P, PP, PPP, Q, QQ } from "./in";
export function isValidauxA(data: any): data is auxA {
    return typeof data !== "undefined" && data !== null && isValidstring(data.a);
}
export function isValidauxauxA(data: any): data is auxauxA {
    return typeof data !== "undefined" && data !== null && isValidstring(data.a);
}
export function isValidauxauxB(data: any): data is auxauxB {
    return typeof data !== "undefined" && data !== null && isValidauxA(data.a);
}
export function isValidA(data: any): data is A {
    return typeof data !== "undefined" && data !== null && isValidstring(data.str) && isValidnumber(data.num) && isValidboolean(data.bool) && isValidany(data.a);
}
export function isValidB(data: any): data is B {
    return typeof data !== "undefined" && data !== null && isValidstring(data.str) && (typeof data.a === "undefined" || isValidany(data.a));
}
export function isValidBB(data: any): data is BB {
    return typeof data !== "undefined" && data !== null && isValidB(data.b);
}
export function isValidD(data: any): data is D {
    return typeof data !== "undefined" && data !== null && isValidA(data.a) && (typeof data.b === "undefined" || isValidB(data.b)) && isValidnumber(data.c);
}
export function isValidE(data: any): data is E {
    return typeof data !== "undefined" && data !== null && isValidB(data.b) && isValidD(data.d);
}
export function isValidF(data: any): data is F {
    return typeof data !== "undefined" && data !== null && (typeof data.str === "undefined" || isValidstring(data.str)) && (typeof data.num === "undefined" || isValidnumber(data.num));
}
export function isValidH(data: any): data is H {
    return typeof data !== "undefined" && data !== null && isValidEnum<typeof G>(G, data.g);
}
export function isValidHH(data: any): data is HH {
    return typeof data !== "undefined" && data !== null && isValidEnum<typeof G>(G, data.g) && (typeof data.gg === "undefined" || isValidEnum<typeof G>(G, data.gg));
}
export function isValidI(data: any): data is I {
    return typeof data !== "undefined" && data !== null && isValidEnum<typeof GG>(GG, data.g) && isValidEnum<typeof GG2>(GG2, data.g2) && isValidEnum<typeof GG3>(GG3, data.g3);
}
export function isValidJ(data: any): data is J {
    return typeof data !== "undefined" && data !== null && (Array.isArray(data.a) && data.a.every((x: any) => isValidB(x)));
}
export function isValidJJ(data: any): data is JJ {
    return typeof data !== "undefined" && data !== null && (Array.isArray(data.a) && data.a.every((x: any) => Array.isArray(x) && x.every((x: any) => isValidB(x))));
}
export function isValidK(data: any): data is K {
    return typeof data !== "undefined" && data !== null && (Array.isArray(data.a) && data.a.every((x: any) => isValidEnum<typeof G>(G, x)));
}
export function isValidL(data: any): data is L {
    return typeof data !== "undefined" && data !== null && (Array.isArray(data.a) && data.a.every((x: any) => isValidEnum<typeof G>(G, x))) && (typeof data.b === "undefined" || isValidJ(data.b)) && isValidI(data.i);
}
export function isValidM(data: any): data is B {
    return isValidB(data);
}
export function isValidN(data: any): data is N {
    return isValidB(data) || isValidD(data);
}
export function isValidO(data: any): data is O {
    return isValidN(data) || isValidH(data);
}
export function isValidP(data: any): data is P {
    return typeof data !== "undefined" && data !== null && (isValidB(data.a) || Array.isArray(data.a) && data.a.every((x: any) => isValidD(x)));
}
export function isValidPP(data: any): data is PP {
    return typeof data !== "undefined" && data !== null && (Array.isArray(data.a) && data.a.every((x: any) => Array.isArray(x) && x.every((x: any) => Array.isArray(x) && x.every((x: any) => isValidB(x)))) || isValidN(data.a));
}
export function isValidPPP(data: any): data is PPP {
    return typeof data !== "undefined" && data !== null && (Array.isArray(data.bb) && data.bb.every((x: any) => isValidBB(x)));
}
export function isValidQ(data: any): data is B[] {
    return Array.isArray(data) && data.every((x: any) => isValidB(x));
}
export function isValidQQ(data: any): data is QQ {
    return Array.isArray(data) && data.every((x: any) => isValidB(x)) || isValidN(data);
}
