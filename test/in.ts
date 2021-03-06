/**
 * @boundary
 */
export interface A {
	str: string,
	num: number,
	bool: boolean,
	a: any
}

/**
 * @boundary
 */
export interface B {
	str: string,
	a?: any
}

/**
 * @boundary
 */
export interface BB {
	b: B
}


export interface C {
	str: string,
	a?: any
}

/**
 * @boundary
 */
export interface D {
	a: A,
	b?: B,
	c: number
}

/**
 * @boundary
 */
export interface E {
	b: B,
	d: D
}

/**
 * @boundary
 */
export interface F {
	str?: string,
	num?: number
}

/**
 * @boundary
 */
export enum G {
	A,
	B,
	C,
	D
}

/**
 * @boundary
 */
export interface H {
	g: G
}

/**
 * @boundary
 */
export interface HH {
	g: G
	gg?: G
}

/**
 * @boundary
 */
export enum GG {
	A=4,
	B,
	C,
	D
}

/**
 * @boundary
 */
export enum GG2 {
	A="E",
	B="F",
	C="G",
	D="H"
}

/**
 * @boundary
 */
export enum GG3 {
	A="B",
	B="C",
	C="D",
	D="E"
}

/**
 * @boundary
 */
export interface I {
	g: GG,
	g2: GG2,
	g3: GG3
}

/**
 * @boundary
 */
export interface J {
	a: B[]
}

/**
 * @boundary
 */
export interface JJ {
	a: B[][]
}


/**
 * @boundary
 */
export interface K {
	a: G[]
}

/**
 * @boundary
 */
export interface L {
	a: G[]
	b?: J
	i: I
}

/**
 * @boundary
 */
 export type M = B

 /**
 * @boundary
 */
 export type N = B | D

 /**
 * @boundary
 */
 export type O = N | H

/**
 * @boundary
 */
export interface P {
	a: B | D[]
}

/**
 * @boundary
 */
export interface PP {
	a: B[][][] | N
}

/**
 * @boundary
 */
export interface PPP {
	bb: Array<BB>
}


/**
 * @boundary
 */
export type Q = B[]


/**
 * @boundary
 */
export type QQ = B[] | N


/**
 * @boundary
 */
export interface R {
	l: {
		str: string
	}
}

/**
 * @boundary
 */
export interface RR {
	l: {
		b: B,
		str?: string
	} | {
		a: A
	}
}


/**
 * @boundary
 */
export interface S {
	m: {
		[key: string]: B
	}
}

/**
 * @boundary
 */
export interface SS {
	m: {
		a: {a: string}
		b: {b: string}
		[key: string]: {a: string} | {b: string}
	}
}


/**
 * @boundary
 */
export interface T extends B{
	num: number
}

/**
 * @boundary
 */
export interface TT extends B, S{
	num: number
}

/**
 * @boundary
 */
export interface U {
	d: {[key in G]: number}
}

/**
 * @boundary
 */
export interface UU {
	d: {[key in GG2]: string}
}