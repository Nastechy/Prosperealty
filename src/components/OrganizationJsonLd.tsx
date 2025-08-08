import Head from "next/head";

export default function OrganizationJsonLd() {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Prosperealty",
                        url: "https://www.prosperealty.com",
                        logo: "https://www.prosperealty.com/prosperealtylogo.png",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Suite C4, Victory Plaza Onitsha Crescent Area 11",
                            addressLocality: "Garki, Abuja",
                            addressRegion: "FCT",
                            postalCode: "900211",
                            addressCountry: "NG"
                        },
                        email: "prosperealtycompany@gmail.com",
                        telephone: "+2348135246089",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+2348135246089",
                            contactType: "customer support",
                            email: "prosperealtycompany@gmail.com"
                        },
                        sameAs: [
                            "https://www.facebook.com/prosperealty",
                            "https://twitter.com/prosperealty"
                        ]
                    })
                }}
            />
        </Head>
    );
}
