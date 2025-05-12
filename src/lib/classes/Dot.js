import P5 from 'p5-svelte';

export default class Dot {
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
		this.transparency = 0; // Start with minimum transparency
		this.minTransparency = 0; // Minimum transparency value
		this.maxTransparency = 200;
		this.fadeSpeed = 10; // Speed of fade effect
		this.activeRadius = 20; // Radius of mouse interaction
	}

	render() {
		this.p.fill(255, this.transparency);
		this.p.noStroke();
		this.p.ellipse(this.x, this.y, this.r);
	}

	/**
	 * @param {object} mousePos - Mouse position object with x and y properties
	 */

	update(mousePos) {
		// Calculate squared distance (faster than regular dist())
		const dx = mousePos.x - this.x;
		const dy = mousePos.y - this.y;
		const distanceSq = dx * dx + dy * dy;
		const activeRadiusSq = this.activeRadius * this.activeRadius;

		if (distanceSq < activeRadiusSq) {
			// Mouse is nearby - become fully opaque
			this.transparency = this.maxTransparency;
		} else {
			// Fade out but don't go below minimum transparency
			this.transparency = this.p.max(this.minTransparency, this.transparency - this.fadeSpeed);
		}
	}
}
