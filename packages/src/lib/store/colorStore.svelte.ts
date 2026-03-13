import { colord } from 'colord';

export class ColorStore {
	h = $state(0);
	s = $state(0);
	v = $state(100);
	a = $state(1);

	constructor(initialHex: string) {
		this.updateFromHex(initialHex);
	}

	// Computed properties
	get hex() {
		return colord({ h: this.h, s: this.s, v: this.v, a: this.a }).toHex();
	}

	get rgbString() {
		return colord({ h: this.h, s: this.s, v: this.v, a: this.a }).toRgbString();
	}

	get baseColorHex() {
		return colord({ h: this.h, s: 100, v: 100 }).toHex();
	}

	// Methods
	updateFromHex(hex: string) {
		const parsed = colord(hex);
		if (parsed.isValid()) {
			const hsv = parsed.toHsv();
			if (hsv.s > 0) this.h = hsv.h;
			this.s = hsv.s;
			this.v = hsv.v;
			this.a = parsed.alpha();
		}
	}

	updateFromHsv(h: number, s: number, v: number, a?: number) {
		this.h = h;
		this.s = s;
		this.v = v;
		if (a !== undefined) this.a = a;
	}
}
