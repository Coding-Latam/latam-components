import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-team',
  shadow: false,
})
export class LatamTeam {
  @Prop() image: string;

  @Prop() area: string;

  @Prop() name: string;

  @Prop() slogan: string;

  render() {
    return (
      <Host>
        <div class="bg-white shadow-md p-5">
          <img src={this.image} />
          <h3 class="text-[20px]">{this.name}</h3>
          <p class="text-[#aab0bc] uppercase">{this.area}</p>
          <p>{this.slogan}</p>
        </div>
      </Host>
    );
  }
}
