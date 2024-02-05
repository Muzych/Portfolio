"use client"
import Image from "next/image"
import { siteConfig } from "./config/site-config"
import TypewriterComponent from "typewriter-effect"
import { MapPin, Mail } from "lucide-react"


const LeftPanel = () => {
    return (
        <div
            key="left-panel"
            className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
        >
            <div>
                <div>
                    <Image 
                      priority
                      loading="eager"
                      alt="avatar"
                      src="/avatar.png"
                      width={330}
                      height={330}
                    />
                </div>

                <div className="mt-6">
                    <div className="text-xl font-medium text-primary">
                        {siteConfig.title}
                    </div>
                    <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
                    <TypewriterComponent
                        options={{
                            strings: [
                                siteConfig.bio
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 80,
                            delay: 100
                        }}
                    />
                    <p className="w-11/12 text-sm font-light text-neutral-500">
                        Find all of my useful Links and Get to know more about my projects & experience.
                    </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                    <a
                        href={`${siteConfig.locationLink}`}
                        className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800"
                    >
                        <MapPin size="16" />
                        {siteConfig.location}
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800"
                    >
                        <Mail size="16"/>
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel