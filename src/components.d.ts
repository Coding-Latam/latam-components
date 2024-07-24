/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LatamButton {
        "customStyles"?: string;
        "href": string;
        "label": string;
    }
    interface LatamFaq {
        "answer": string;
        "question": string;
    }
    interface LatamService {
        "description": string;
        "image": string;
        "name": string;
    }
    interface LatamTestimonials {
        "area": string;
        "author": string;
        "image": string;
        "testimonial": string;
    }
}
declare global {
    interface HTMLLatamButtonElement extends Components.LatamButton, HTMLStencilElement {
    }
    var HTMLLatamButtonElement: {
        prototype: HTMLLatamButtonElement;
        new (): HTMLLatamButtonElement;
    };
    interface HTMLLatamFaqElement extends Components.LatamFaq, HTMLStencilElement {
    }
    var HTMLLatamFaqElement: {
        prototype: HTMLLatamFaqElement;
        new (): HTMLLatamFaqElement;
    };
    interface HTMLLatamServiceElement extends Components.LatamService, HTMLStencilElement {
    }
    var HTMLLatamServiceElement: {
        prototype: HTMLLatamServiceElement;
        new (): HTMLLatamServiceElement;
    };
    interface HTMLLatamTestimonialsElement extends Components.LatamTestimonials, HTMLStencilElement {
    }
    var HTMLLatamTestimonialsElement: {
        prototype: HTMLLatamTestimonialsElement;
        new (): HTMLLatamTestimonialsElement;
    };
    interface HTMLElementTagNameMap {
        "latam-button": HTMLLatamButtonElement;
        "latam-faq": HTMLLatamFaqElement;
        "latam-service": HTMLLatamServiceElement;
        "latam-testimonials": HTMLLatamTestimonialsElement;
    }
}
declare namespace LocalJSX {
    interface LatamButton {
        "customStyles"?: string;
        "href"?: string;
        "label"?: string;
    }
    interface LatamFaq {
        "answer"?: string;
        "question"?: string;
    }
    interface LatamService {
        "description"?: string;
        "image"?: string;
        "name"?: string;
    }
    interface LatamTestimonials {
        "area"?: string;
        "author"?: string;
        "image"?: string;
        "testimonial"?: string;
    }
    interface IntrinsicElements {
        "latam-button": LatamButton;
        "latam-faq": LatamFaq;
        "latam-service": LatamService;
        "latam-testimonials": LatamTestimonials;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "latam-button": LocalJSX.LatamButton & JSXBase.HTMLAttributes<HTMLLatamButtonElement>;
            "latam-faq": LocalJSX.LatamFaq & JSXBase.HTMLAttributes<HTMLLatamFaqElement>;
            "latam-service": LocalJSX.LatamService & JSXBase.HTMLAttributes<HTMLLatamServiceElement>;
            "latam-testimonials": LocalJSX.LatamTestimonials & JSXBase.HTMLAttributes<HTMLLatamTestimonialsElement>;
        }
    }
}
