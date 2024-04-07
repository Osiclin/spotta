import React from 'react';
import PropTypes from 'prop-types';

export default function TextArea({ id, name, placeholder, label, value, onChange, readOnly, rows, maxLength, disabled, className }) {
    return (
        <div className="relative mb-[16px]">
            {label && <label
                htmlFor={id}
                className="text-[14px] text-light"
            >
                {label}
            </label>}
            <textarea
                id={id}
                name={name}
                rows={rows}
                maxLength={maxLength}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder || ''}
                aria-labelledby={id}
                readOnly={readOnly}
                value={value}
                className={`
                border-[#D4DCF1] p-[12px] text-light text-14 w-full outline-0 border mt-[14px]
                rounded-[8px] placeholder:text-[14px] placeholder:text-light placeholder:font-normal ${className}`
                }
            />
        </div>
    );
}

TextArea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};
