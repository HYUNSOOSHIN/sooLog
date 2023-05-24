import React from "react";

const Bio = () => {
    return (
        <div className="bio-card">
            <img src={"/images/hyunsoo.jpg"} alt="my img" />
            <div className="text-view">
                <p className="name">HYUNSOOSHIN</p>
                <p className="intro">안녕하세요. 신현수입니다.</p>
                <div className="link-view">
                    <a href="https://github.com/HYUNSOOSHIN" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    <a href="https://instagram.com/hyunsoooooshin" target="_blank" rel="noreferrer">
                        Instargram
                    </a>
                    <a href="mailto:shs0655@gmail.com" target="_blank" rel="noreferrer">
                        E-mail
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bio;
