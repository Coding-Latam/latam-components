import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'latam-testimonials',
  shadow: true,
})
export class LatamTestimonial {
  @Prop() testimonial: string;

  @Prop() image: string;

  @Prop() author: string;

  @Prop() area: string;

  render() {
    return (
      <Host>
        <div class="bg-white p-5">
          <p class="text-[18px]">{this.testimonial}</p>
          <div class="flex justify-start gap-7 mb-7">
            <div class="image">
              <img class="max-w-[70px]" src={this.image} />
            </div>
            <div class="bio">
              <h3>{this.author}</h3>
              <p>{this.area}</p>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
