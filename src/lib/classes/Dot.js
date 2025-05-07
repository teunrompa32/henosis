import P5 from 'p5-svelte';

class Dot {
	/**
	 * @param {P5} p - p5 instance
	 * @param {number} x
	 * @param {number} y
	 * @param {number} r
	 */
	constructor(p, x, y, r) {
		this.p = p;
		this.x = x;
		this.y = y;
		this.r = r;
	}

	render() {
		this.p.background(0);
		this.p.ellipse(this.x, this.y, this.r);
	}
}

export default Dot;
