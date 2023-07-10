import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { classMap } from 'lit/directives/class-map';
import Styles from './Dropdown.styles';

@customElement('ds-dropdown')
export class Dropdown extends LitElement {
  static styles = [Styles];

  @property({ type: Boolean }) open = false;

  @property({ type: Boolean }) noStyle: boolean = false;

  @property({ type: String }) title = 'Customize view';

  @property({ type: Boolean }) isFirst = false;

  @property({ type: Boolean }) isLast = false;

  toggle() {
    this.open = !this.open;
  }

  render() {
    const { open, title, toggle, noStyle } = this;
    return html`
      <div
        class=${!noStyle ?
        classMap({
          'outter': true,
          'first': this.isFirst,
          'middle': !this.isFirst && !this.isLast,
          'last': this.isLast,
        }):''}
      >
        <div class="trigger">
          <slot
            class="flex flex-grow"
            name="title"
            @click="${toggle}"
            tabindex="0"
            @keydown="${toggle}"
          >
            ${title}
          </slot>
          <div class="flex">
            <div
              tabindex="0"
              @click="${toggle}"
              @keydown="${toggle}"
            >
              ${open
                ? html`<mwc-icon>expand_less</mwc-icon>`
                : html`<mwc-icon>expand_more</mwc-icon>`}
            </div>
            <slot name="more"></slot>
          </div>
        </div>
        ${open ? html` <slot></slot> ` : html``}
      </div>
    `;
  }
}
