import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-service',
  shadow: true,
})
export class LatamService {
  @Prop() image: string;

  @Prop() name: string;

  @Prop() description: string;

  render() {
    return (
      <Host>
        <div class="text-center">
          {/* <img class="min-h-[230px] mx-auto mb-3" src={this.image} /> */}
          <h3 class="mb-4">{this.name}</h3>
          <p class="mt-0 mx-auto mb-5 max-w-[316px]">{this.description}</p>
          <a class="text-primary-color no-underline" href="/">
            Learn More
          </a>
        </div>
      </Host>
    );
  }
}
