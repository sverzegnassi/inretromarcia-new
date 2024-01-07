import { NotEditable } from "@keystatic/core";
import React, { useEffect, useState } from "react";
import { LabelWithCaption } from "../ui-common";

export interface YoutubeOembedResponse extends Record<string, any> {
    status: string | number,
    statusText?: string,
}

async function getYoutubeOembed(youtubeVideoUrl: string): Promise<YoutubeOembedResponse> {
    const requestUrl = `https://www.youtube.com/oembed?url=${youtubeVideoUrl}`
    const response = await fetch(requestUrl)

    if (!response.ok) {
        return { status: response.status, statusText: response.statusText }
    }

    const data = await response.json()
    return { status: "OK", ...data }
}

export interface YoutubePreviewProps {
    youtubeVideoUrl: string,
}

export const YoutubePreview: React.FunctionComponent<YoutubePreviewProps> = ({ youtubeVideoUrl }) => {

    let [oembed, setOembed] = useState({ status: -1 } as YoutubeOembedResponse);

    useEffect(() => {
        getYoutubeOembed(youtubeVideoUrl).then(res => setOembed(res));
    }, [])

    return (
        <NotEditable>
            {oembed.status !== "OK" &&
                <LabelWithCaption caption="Youtube" text={
                    oembed.status === -1 ? "Generazione anteprima in corso..."
                        : "Errore durante la generazione dell'anteprima. Controlla l'URL fornito."
                } />
            }
            {oembed.status === "OK" &&
                <>
                    <img src={oembed.thumbnail_url} loading="lazy" />
                    <LabelWithCaption caption={`Video da Youtube — ${oembed.author_name}`} text={oembed.title} />
                </>
            }
        </NotEditable>
    )
}