import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "components/Button/Button";
import Search from "components/Inputs/Search/Search";
import Suggestion from "components/Suggestion/Suggestion";
import Review from "components/Review/Review";
import Navbar from "components/Navbar/Navbar";
import CreateReview from "components/CreateReview/CreateReview";
import { ReactComponent as Save } from "assets/icons/save.svg";
import { ReactComponent as Share } from "assets/icons/share.svg";
import { ReactComponent as Right } from "assets/icons/chevron-right.svg";
import { allReviews, suggestions } from "mocks/reviews";
import Placeholder1 from "assets/images/Placeholder-1.png"
import Placeholder2 from "assets/images/Placeholder-2.png"
import Placeholder3 from "assets/images/Placeholder-3.png"
import Placeholder4 from "assets/images/Placeholder-4.png"

export default function Reviews() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState('')
    const searchValue = searchParams.get('search')
    const [leaveReview, setLeaveReview] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        setSearch(searchParams.get('search'))
    }, [searchParams])

    useEffect(() => {
        setReviews(allReviews)
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) setSearchParams({ search });
    }

    const submitReview = (e) => {
        const review = { ...e, id: reviews.length + 1 }
        setReviews([review, ...reviews])
    }

    return (
        <main>
            <div className="md:bg-[#F2F6FD] md:mb-[16px] py-[16px]">
                <Navbar className="app-layout" search={search} setSearch={handleChange} onKeyDown={handleKeyDown} />
                <div className="app-layout">
                    <div className="block md:hidden mt-[9px]">
                        <Search className="md:min-w-[778px]" value={search} onChange={handleChange} onKeyDown={handleKeyDown} />
                    </div>
                    {searchValue &&
                        <div className="block md:flex justify-between mb-[16px]">
                            <div>
                                <h1 className="text-[16px] sm:text-[24px] text-light font-medium mb-[4px] capitalize">{searchValue}</h1>
                                <p className="text-[12px] sm:text-[16px] text-black">
                                    <span className="font-bold">“450”</span>{' '}
                                    <span className="font-medium">Reviews</span>{' '}
                                    <span className="font-normal">(People are raving about the selected location)</span>
                                </p>
                            </div>
                            <div className="block md:hidden overflow-x-scroll whitespace-nowrap no-scrollbar my-[16px]">
                                {suggestions.map(item =>
                                    <Suggestion
                                        key={item}
                                        name={item}
                                        className="text-[12px] sm:text-[14px] font-normal text-black border-[0.2px] border-[#1E1E1E] px-[8px] h-[24px] rounded-[4px] whitespace-nowrap mr-[8px]"
                                    />
                                )}
                            </div>
                            <div className="flex">
                                <Button
                                    name="LEAVE A REVIEW"
                                    theme="primary"
                                    className="px-[40px] h-[50px] mr-[16px]"
                                    textSize="text-[14px] sm:text-[16px]"
                                    onClick={() => setLeaveReview(true)}
                                />
                                <Button className="mr-[16px] h-[50px] border-primary">
                                    <Save />
                                </Button>
                                <Button className="h-[50px] border-primary">
                                    <Share />
                                </Button>
                            </div>
                        </div>
                    }
                    <div className="hidden md:flex">
                        <div className="hidden md:block overflow-x-scroll whitespace-nowrap no-scrollbar">
                            {suggestions.map(item =>
                                <Suggestion
                                    key={item}
                                    name={item}
                                    className="text-[14px] font-normal text-black border-[0.2px] border-light bg-white px-[8px] h-[24px] rounded-[4px] whitespace-nowrap mr-[8px]"
                                />
                            )}
                        </div>
                        <Right />
                    </div>
                </div>
            </div>
            {searchValue ?
                <div className="flex flex-col md:flex-row app-layout">
                    <section className="max-w-[722px] md:mr-[28px]">
                        {reviews.map(r =>
                            <Review
                                key={r.id}
                                name={r.name}
                                duration={r.duration}
                                review={r.review}
                                rating={r.rating}
                                likes={r.likes}
                                dislikes={r.dislikes}
                                comments={r.comments}
                            />
                        )}
                    </section>
                    <section className="md:pt-[16px] order-first md:order-last mb-[16px] sm:shrink-0">
                        <div className="flex md:grid grid-cols-2 gap-[8px] md:gap-[16px] overflow-x-scroll no-scrollbar">
                            <div className="shrink-0">
                                <img src={Placeholder2} alt="1" className="image rounded-[8px]" />
                            </div>
                            <div className="shrink-0">
                                <img src={Placeholder1} alt="2" className="image rounded-[8px]" />
                            </div>
                            <div className="shrink-0">
                                <img src={Placeholder3} alt="3" className="image rounded-[8px]" />
                            </div>
                            <div className="shrink-0 cursor-pointer">
                                <img src={Placeholder4} alt="4" className="image rounded-[8px]" />
                            </div>
                        </div>
                    </section>
                </div> : <div></div>
            }
            {leaveReview &&
                <CreateReview
                    title={search}
                    cancel={() => setLeaveReview(false)}
                    submitReview={submitReview}
                />
            }
        </main>
    )
}