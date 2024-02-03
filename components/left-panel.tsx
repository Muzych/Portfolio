"use client"
import Image from "next/image"
import { siteConfig } from "./config/site-config"

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
                      src="/wave.png"    //Todo:更新avatar
                      width={220}
                      height={220}
                    />
                </div>

                <div className="mt-6">
                    <div className="text-xl font-medium text-primary">
                        {siteConfig.title}
                    </div>
                    <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel