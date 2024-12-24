import React from "react";
import "./AnimePlatform.css";
import Image from "next/image";
import Link from "next/link";

export default function AnimePlatform() {
    const features = [
        {
            icon: "https://anilist.co/img/landing/stats.svg",
            title: "Discover your obsessions",
            description:
                "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.",
        },
        {
            icon: "https://anilist.co/img/landing/apps.svg",
            title: "Bring AniList anywhere",
            description:
                "Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.",
        },
        {
            icon: "https://anilist.co/img/landing/social.svg",
            title: "Join the conversation",
            description:
                "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.",
        },
        {
            icon: "https://anilist.co/img/landing/custom.svg",
            title: "Tweak it to your liking",
            description:
                "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.",
        },
    ];

    return (
        <section className="anime-platform-container">
            <div className="content-box">
                <header>
                    <h1 className="heading">The next-generation anime platform</h1>
                    <p className="subheading">
                        Track, share, and discover your favorite anime with DreamWatch.
                    </p>
                </header>

                <div className="features">
                    {features.map((feature, index) => (
                        <div className="feature" key={index}>
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={75}
                                height={75}
                                className="feature-icon"
                            />
                            <div className="detail">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href="/login" className="join-btn">
                    <span className="label">Join Now</span>
                    <span className="circle">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 380 512"
                            className="svg-icon"
                        >
                            <path
                                fill="currentColor"
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
}
