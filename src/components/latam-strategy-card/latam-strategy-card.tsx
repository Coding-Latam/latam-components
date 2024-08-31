import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-strategy-card',
  shadow: false,
})
export class LatamStrategyCard {
  @Prop() order: number;

  @Prop() name: string;

  @Prop() description: string;

  render() {
    return (
      <Host>
        <div class="items-center bg-white shadow-md flex gap-5 max-2-[520px] p-5 relative [&:nth-child(2)]:left-[50px] [&:nth-child(3)]:left-[20px]">
          <div class="bg-skyblue rounded-full text-primary-color text-[22px] font-semibold py-3 px-3 w-fit">{`0${this.order}`}</div>
          <div class="info">
            <h3>{this.name}</h3>
            <p>{this.description}</p>
          </div>
        </div>
      </Host>
    );
  }
}
