import React from "react"
import Avatar from "components/Avatar/Avatar"
import { ReactComponent as Star } from "assets/icons/star.svg"
import { ReactComponent as Like } from "assets/icons/like.svg"
import { ReactComponent as Dislike } from "assets/icons/dislike.svg"
import { ReactComponent as Comment } from "assets/icons/comment.svg"
import User from "assets/images/user.png"

export default function Review({ name, duration, review, rating, likes, dislikes, comments }) {
    return (
        <div className="py-[16px] border-b border-b-[#D9D9D9]">
            <div className="flex justify-between mb-[8px]">
                <div className="flex items-center">
                    <Avatar
                        alt="profile"
                        size={24}
                        url={User}
                    />
                    <p className="text-14 text-light font-normal ml-[8px]">{name}. <span className="text-[#1E1E1E99]">{duration}</span></p>
                </div>
                <p className="text-14 text-light">
                    <Star fill="#FABB07" className="mr-[4px] inline w-[12px]" />
                    {rating?.toFixed(1)}
                </p>
            </div>
            <p className="text-16 font-normal leading-[24px] mb-[8px]">{review}</p>
            <div className="flex text-[14px] text-[#0D2159] font-normal">
                <p className="mr-[17px]">
                    <Like className="mr-[4px] inline cursor-pointer" />
                    {likes}
                </p>
                <p className="mr-[17px]">
                    <Dislike className="mr-[4px] inline cursor-pointer" />
                    {dislikes}
                </p>
                <p>
                    <Comment className="mr-[4px] inline cursor-pointer" />
                    {comments}
                </p>
            </div>
        </div>
    )
}