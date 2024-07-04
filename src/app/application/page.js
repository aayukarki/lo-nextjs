"use client";

import React, { useEffect } from "react";

const Application = () => {
    useEffect(() => {
        const handleMessage = (event) => {
            const { origin, data } = event;
            if (origin !== "https://seashell-app-34mr3.ondigitalocean.app") return;

            switch (data.type) {
                case "goBack":
                    window.location.href = "/";
                    break;
                case "GA_EVENT":
                    window.gtag("event", data.eventAction, data.params);
                    break;
                case "REDIRECT":
                    window.location.href = data.url;
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let v2Data = localStorage.getItem("quote");
        const gclId = localStorage.getItem("gclid");
        const fbclId = localStorage.getItem("fbclid");

        let data;
        let entryUrl = urlParams.get("entry_url") || "https://www.loanoptions.co.nz";

        if (!v2Data) {
            data = urlParams.get("data")
                ? { data: urlParams.get("data"), entry_url: entryUrl }
                : {
                    type: urlParams.get("loan_type") || "CAR_LOAN",
                    amount: urlParams.get("loan_amount") || 10000,
                    term: urlParams.get("loan_term") || 5,
                    usage: urlParams.get("loan_usage") || "CONSUMER",
                    externalPartnerId: urlParams.get("partnerId") || 1960,
                    source: urlParams.get("source") || "loanoptions",
                    sourceUrl: urlParams.get("sourceUrl") || entryUrl,
                    targetSystem: urlParams.get("targetSystem") || "SKYNET",
                    targetSystem: urlParams.get("countryCode") || "NZ",
                };
        } else {
            v2Data = JSON.parse(v2Data);
            if (gclId) v2Data.gclId = gclId;
            if (fbclId) v2Data.fbclId = fbclId;
            data = encodeURIComponent(JSON.stringify(v2Data));
        }

        const src = `https://seashell-app-34mr3.ondigitalocean.app/?data=${data || JSON.stringify(data)}&entry_url=${entryUrl}&quote_id=`;
        document.getElementById("myIframe").src = src;
    }, []);

    return (
        <section>
            <iframe id="myIframe" className="w-full h-screen"></iframe>
        </section>
    );
};

export default Application;
