import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-faq',
  shadow: true,
})
export class LatamFaq {
  @Prop() question: string;

  @Prop() answer: string;

  render() {
    return (
      <Host>
        <div class="shadow-md cursor-pointer">
          <details class="p-5 bg-white rounded">
            <summary class="bg-white text-lg font-semibold marker:text-primary-color">{this.question}</summary>
            <p>{this.answer}</p>
          </details>
        </div>
      </Host>
    );
  }
}
