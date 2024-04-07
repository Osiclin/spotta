import React, { useState } from "react";
import TextArea from "components/Inputs/Textarea/Textarea";
import { ReactComponent as Star } from "assets/icons/star.svg";
import { ReactComponent as Down } from "assets/icons/chevron-down.svg";
import Checkbox from "components/Inputs/Checkbox/Checkbox";
import Button from "components/Button/Button";
import useAmenities from "hooks/useAmenities";

export default function CreateReview({ title, cancel }) {
    const [showAmenities, setShowAmenities] = useState(false)
    const { amenities, selectAmenities } = useAmenities()
    const [anonymous, setAnonymous] = useState(false)
    const [formData, setFormData] = useState({
        review: '',
        rating: 0
    })

    return (
        <div className="overlay">
            <div className="modal modal-center w-full bg-[#1D3045] h-screen">
                <form className="max-w-[90%] sm:max-w-[695px] mx-auto bg-white rounded-[6px] p-[24px] mt-[100px]">
                    <p className="text-[18px] text-light text-center font-medium mb-[16px]">Review Location</p>
                    <p className="text-[20px] text-light mb-[24px]">{title}</p>
                    <div className="relative mb-[16px]">
                        <div className="relative" onClick={() => setShowAmenities(!showAmenities)}>
                            <input
                                id="amenities"
                                name="amenities"
                                type="text"
                                placeholder="Select amenities"
                                readOnly={true}
                                // value={selected}
                                // readOnly={readOnly}
                                autoComplete="off"
                                className={`h-[50px] rounded-[8px] px-4 text-neutral_black w-full outline-0
                                    cursor-pointer font-normal hide_tap border-0 capitalize bg-[#F3F7FE] placeholder:text-[14px] placeholder:text-light placeholder:font-normal
                                `}
                            />
                            <Down className="absolute right-[10px] top-[16px]" />
                        </div>
                        {showAmenities &&
                            <div className="grid grid-cols-1 sm:grid-cols-5 max-h-[323px] overflow-y-auto no-scrollbar p-[16px] bg-[#F3F7FE] rounded-br-[6px] rounded-bl-[6px] absolute w-full z-10">
                                {amenities.availableAmenities.map(item =>
                                    <Checkbox
                                        key={item}
                                        label={item}
                                        id={item}
                                        checked={amenities.selectedAmenities.includes(item)}
                                        className="text-[14px] text-[#484851] font-normal mr-[16px] mb-[24px]"
                                        onChange={(e) => selectAmenities(e, item)}
                                    />
                                )}
                            </div>
                        }
                    </div>
                    <div className="mb-[24px]">
                        <p className="text-[14px] text-light mb-[14px]">Rate location</p>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((item) =>
                                <Star
                                    key={item}
                                    fill={formData.rating >= item ? "#FABB07" : "#FFC70066"}
                                    className="mr-[6px] cursor-pointer w-[24px]"
                                    onClick={() => setFormData({ ...formData, rating: item })}
                                />
                            )}
                        </div>
                    </div>
                    <TextArea
                        id="review"
                        name="review"
                        label="Write Review"
                        placeholder="Placeholder"
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                        rows={6}
                    />
                    <Checkbox
                        label="Post as Anonymous"
                        id="anonymous"
                        checked={anonymous}
                        className="text-[14px] text-[#484851] font-normal mr-[16px] mb-[24px]"
                        onChange={(e) => setAnonymous(!anonymous)}
                    />
                    <div className="flex">
                        <Button
                            name="SUBMIT"
                            theme="primary"
                            className="px-[40px] h-[50px] mr-[24px] w-full"
                            textSize="text-[14px] sm:text-[16px]"
                            disabled={!formData.review || !amenities.selectedAmenities}
                        />
                        <Button
                            name="CANCEL"
                            theme="secondary"
                            className="px-[40px] h-[50px] w-full"
                            textSize="text-[14px] sm:text-[16px]"
                            type="button"
                            onClick={cancel}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}