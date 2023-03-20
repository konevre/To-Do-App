import React from "react";
import { useNavigate } from "react-router-dom";

const Page404: React.FC = () => {
    const navigate = useNavigate();

    const onReturn = () => {
        navigate("/today");
    };
    return (
        <div className="flex h-full items-center justify-center">
            <div className="flex flex-col gap-y-5">
                <div className="">Sorry, but this page does not exits.</div>
                <button
                    onClick={onReturn}
                    className="flex h-10 items-center justify-center rounded-lg bg-amber-300 text-sm font-semibold"
                >
                    Return to homepage
                </button>
            </div>
        </div>
    );
};

export default Page404;
