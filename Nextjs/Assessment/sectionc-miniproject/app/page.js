"use client";

import { useEffect, useState } from "react";

import MobileShell from "@/components/layout/MobileShell";
import ProfileHeader from "@/components/profile/ProfileHeader";
import EditProfileForm from "@/components/profile/EditProfileForm";
import LinkList from "@/components/links/LinkList";

export default function Home() {
    const [profile, setProfile] =
        useState({
            name: "Creator Name",
            bio: "Frontend Developer",
        });

    const [links, setLinks] =
        useState([]);

    useEffect(() => {
        const savedProfile =
            localStorage.getItem("profile");

        const savedLinks =
            localStorage.getItem("links");

        if (savedProfile)
            setProfile(
                JSON.parse(savedProfile)
            );

        if (savedLinks)
            setLinks(JSON.parse(savedLinks));
        else {
            const demoLinks = [
                {
                    id: 1,
                    title: "Portfolio",
                    url: "https://portfolio.com",
                },
                {
                    id: 2,
                    title: "GitHub",
                    url: "https://github.com",
                },
            ];

            setLinks(demoLinks);
        }
    }, []);

    const handleProfileUpdate = (
        updatedProfile
    ) => {
        setProfile(updatedProfile);

        localStorage.setItem(
            "profile",
            JSON.stringify(updatedProfile)
        );
    };

    return (
        <MobileShell>
            <MobileShell>
                <div className="text-center mb-6">
                    <h1 className="text-5xl font-bold text-indigo-700">
                        BioStack
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Your creator profile in one place
                    </p>
                </div>

                <ProfileHeader
                    name={profile.name}
                    bio={profile.bio}
                />

                <EditProfileForm
                    profile={profile}
                    onSave={handleProfileUpdate}
                />

                <LinkList links={links} />
            </MobileShell>
        </MobileShell>
    );
}