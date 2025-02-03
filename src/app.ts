import {html, LitElement, render} from 'lit';
import tailwindStyles from './stylesheet.css?inline';

///////////////////////////
window.customElements.define(
	'custom-element-without-tailwind',
	class extends LitElement {
		render = () => html`<p>Normal paragraph without tailwindcss.</p>`;
	}
);

///////////////////////////
const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(tailwindStyles);

window.customElements.define(
	'custom-element-with-tailwind',
	class extends LitElement {
		static styles = stylesheet;
		render() {
			return html`
				<p>Paragraph with tailwindcss, the base layer is breaking defaults.</p>
			`;
		}
	}
);

///////////////////////////
render(
	html`
		<custom-element-without-tailwind></custom-element-without-tailwind>
		<custom-element-with-tailwind></custom-element-with-tailwind>
	`,
	document.body
);
