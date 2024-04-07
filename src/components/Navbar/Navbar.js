import React from "react";
import PropTypes from "prop-types"
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import Avatar from "../Avatar/Avatar";
import Search from "../Inputs/Search/Search";
import Profile from "assets/images/avatar.png"

export default function Navbar({ className, search, setSearch, onKeyDown }) {
    return (
        <div className={`flex justify-between absolute left-0 top-0 w-full pb-[10.5px] ${className}`}>
            <div className="flex items-center">
                <Logo className="mr-[42px]" />
                {setSearch &&
                    <div className="hidden md:block">
                        <Search className="unset-min-w lg:min-w-[778px]" value={search} onChange={setSearch} onKeyDown={onKeyDown} />
                    </div>
                }
            </div>
            <div className="flex items-center">
                <p className="text-16 text-[#101012] font-medium mr-[13px]">Welcome!</p>
                <Avatar
                    alt="profile"
                    size={36}
                    url={Profile}
                />
            </div>
        </div>
    )
}

Navbar.propTypes = {
    className: PropTypes.string,
    search: PropTypes.string,
    setSearch: PropTypes.func,
    onKeyDown: PropTypes.func
}