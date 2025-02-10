import * as PropTypes from "prop-types";
import {Component} from "react";

export default class Section extends Component {
    render() {
        let {name, category, src, href, ...props} = this.props;
        return (
            <>
                <section {...props} className="section relative w-full h-[100lvh]">
                    {src &&
                        <a data-name={name} data-category={category} className="snap-image group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw]" href={href}>
                            <video className="video relative w-full h-full object-center object-cover" src={src} muted loop />
                            <div className="bg-dark absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 transition-opacity duration-700 text-light flex flex-row justify-center items-center uppercase">Open live website</div>
                        </a>
                    }
                    {!src &&
                        <div data-name={name} data-category={category} className="snap-image"></div>
                    }
                </section>
            </>
        )
    }
}

Section.propTypes = {
    name: PropTypes.any,
    category: PropTypes.any,
    src: PropTypes.any,
    href: PropTypes.any
}