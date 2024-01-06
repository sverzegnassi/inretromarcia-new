import { config } from "@keystatic/core";
import { createReader } from "@keystatic/core/reader";
import collection_Assets from '../collections/assets'
import { useEffect, type FC, useState } from "react";


const minimalReaderConfig = config({
    storage: {
        kind: 'local',
    },
    collections: {
        assets: collection_Assets
    }
})

const reader = createReader("", minimalReaderConfig);

const PreviewComponent: FC<HTMLImageElement> = () => {
    const [props, setProps] = useState(null as any);
    
    useEffect(() => {    
        async function getImageProps() {
            const data = await reader.collections.assets.all();
//
            setProps(data);
        }

        getImageProps().catch(console.error);
    })

    return (
        <div>{props}</div>
    )
}

export default PreviewComponent;