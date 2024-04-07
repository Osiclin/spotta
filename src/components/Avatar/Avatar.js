import React from "react";
import PropTypes from 'prop-types';

export default function Avatar({ alt, size, url, className }) {
    return (
        <div
            className={`rounded-full flex ${className} w-[${size}px] h-[${size}px] 
            justify-center items-center text-neutral_white shrink-0 text-16
            `}
        >
            <img
                src={url}
                width={size}
                height={size}
                alt={alt}
                data-testid="avatar"
                className={`rounded-full w-[${size}px] h-[${size}px] bg-brand_primary object-cover object-top`}
            //onClick={() => url && setShowProfile(true)}
            />
        </div>
    )
}

Avatar.propTypes = {
    alt: PropTypes.string,
    size: PropTypes.number,
    url: PropTypes.string,
    className: PropTypes.string
};
