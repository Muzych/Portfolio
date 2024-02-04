"use client"
import { siteConfig } from "@/components/config/site-config";
import GridItem from "./grid-item";
import Equipments from "./grid-items/equipments";


const MidPanel = () => {
    return   (
        <div
            className="grid w-full grid-cols-4 xl:gap-10 gap-6"
        >
            {siteConfig.itemsLower.map((item, index) => {
                return (
                    <GridItem key={item.title + item.type + index} size={item.layout}>
                        {item.type === "equipment" ? (<Equipments item={item} />) : (
                                    <div>Need to create new component type.</div>
                                )}
                    </GridItem>
                )
            })}
        </div>
    )
}

export default MidPanel