import React, { useState } from "react";
import Navbar from "components/Navbar/Navbar";
import Search from "components/Inputs/Search/Search";
import { ReactComponent as HomeBg } from "assets/svg/home-bg.svg";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    return (
        <main className="app-layout">
            <Navbar className="bg-white pt-[25px] px-[16px] xl:px-0" />
            <div className="lg:flex items-center justify-between">
                <div className="pt-[250px] lg:pt-0">
                    <div className="text-start sm:text-center lg:text-start mx-auto lg:mx-0 max-w-[507px] mb-[24px] sm:mb-[40px]">
                        <h1 className="text-[40px] sm:text-[64px] text-light leading-[48px] sm:leading-[77.5px] font-bold mb-[16px] sm:mb-[40px]">Find a place you
                            will love to live!</h1>
                        <p>See through the lenses of people who have
                            lived or visited the neighbourhood you might
                            have in mind.</p>
                    </div>
                    <div className="mx-auto lg:mx-0 max-w-[557px]">
                        <Search className="w-full" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Button name="SEARCH" theme="primary" className="mt-[20px]" onClick={() => navigate(`reviews?search=${search}`)}/>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <HomeBg />
                </div>
            </div>
        </main>
    )
}