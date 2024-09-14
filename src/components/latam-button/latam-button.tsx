import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-button',
  shadow: false,
})
export class LatamButton {
  @Prop() href: string;

  @Prop() label: string;

  render() {
    return (
      <a class={`bg-primary-color rounded-3xl text-white block h-fit p-4 w-fit no-underline shadow-md`} href={this.href}>
        {this.label}
      </a>
    );
  }
}
