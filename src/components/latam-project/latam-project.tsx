import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-project',
  shadow: false,
})
export class LatamProject {
  @Prop() image: string;

  @Prop() name: string;

  @Prop() category: string;

  render() {
    return (
      <Host>
        <div class="project">
          <img src={this.image} />
          <h3>{this.name}</h3>
          <p>{this.category}</p>
        </div>
      </Host>
    );
  }
}
