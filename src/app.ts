import { html, LitElement } from "lit";

/*****************
 * Custom element
 * with shadow dom
 */
export class App extends LitElement {
  render() {
    return html`
      <div class="flex gap-3">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
    `;
  }
}

/**************
 * Stylesheet
 */
import styles from "./stylesheet.css?inline";
console.log(styles);
const css = new CSSStyleSheet();
css.replaceSync(styles);
App.styles = css;
// document.adoptedStyleSheets.push(css);

/*****************
 * Composing app
 */
window.customElements.define("app-element", App);
const app = new App();
document.body.appendChild(app);
