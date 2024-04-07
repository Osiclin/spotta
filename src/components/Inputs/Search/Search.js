import React, { memo } from "react"
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const Search = ({
    id, name, placeholder, value, onChange, readOnly,
    defaultValue, pattern, inputMode, className, onKeyDown
}) => {
    return (
        <div className="relative mb-[3.5px]">
            <input
                id={id}
                name={name}
                type="search"
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                inputMode={inputMode}
                pattern={pattern}
                aria-labelledby={id}
                onChange={onChange}
                onKeyDown={onKeyDown}
                readOnly={readOnly}
                className={`
                h-[50px] pl-[40px] pr-[8px] text-neutral_500
                text-14 text-black w-full outline-0 border border-[#D4DCF1] font-normal hide_tap
                rounded-[6px] focus:border-blue_7 ${className}
                `}
            />
            <div className="flex items-center absolute top-0 left-[13.48px] cursor-pointer hide_tap h-full">
                <SearchIcon />
            </div>
        </div>
    )
}

export default memo(Search)

Search.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    pattern: PropTypes.string,
    inputMode: PropTypes.string,
    className: PropTypes.string,
    onKeyDown: PropTypes.func
};