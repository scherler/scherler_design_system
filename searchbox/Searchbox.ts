import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import Styles from './Searchbox.styles';

@customElement('ds-searchbox')
export class Searchbox extends LitElement {
  static styles = [Styles];

  @property({ type: String }) searchText = '';

  @property({ type: Boolean }) canSearch = true;

  submitOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search(event);
    }
  }

  search(event: KeyboardEvent) {
    this.dispatchEvent(
      new CustomEvent('search', {
        composed: true,
        detail: (event.target as HTMLInputElement).value,
      })
    );
  }

  render() {
    return html`
      <mwc-textfield
        class="w-full h-full"
        outlined=""
        label="Search"
        icon="search"
        value=${this.canSearch ? this.searchText : ''}
        @keydown=${this.submitOnEnter}
        ?disabled=${!this.canSearch}
        title=${this.canSearch
          ? ''
          : 'You do not have permission to search.'}
      ></mwc-textfield>
    `;
  }
}
