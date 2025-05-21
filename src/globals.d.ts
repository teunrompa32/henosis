export {};

declare global {
	interface Window {
		asciifier: () => Asciifier;
	}
}

interface Asciifier {
	(): AsciifierInstance;
	renderers: () => AsciifierRenderers;
	fontSize: (size: number) => void;
}

interface AsciifierInstance {
	renderers: () => AsciifierRenderers;
	fontSize: (size: number) => void;
	// Add other methods you use
}

interface AsciifierRenderers {
	get(name: string): AsciifierRenderer;
}

interface AsciifierRenderer {
	update(options: AsciifierRendererOptions): void;
}

interface AsciifierRendererOptions {
	enabled?: boolean;
	characters?: string;
	characterColor?: string;
	characterColorMode?: 'sampled' | 'fixed';
	backgroundColor?: string;
	backgroundColorMode?: 'fixed' | 'sampled';
	invertMode?: boolean;
	rotationAngle?: number;
	flipVertically?: boolean;
	flipHorizontally?: boolean;
}
