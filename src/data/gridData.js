import React from 'react';


const GridData = [
    {
        id: 1,
        title: "Chord Theory",
        infoText: [<strong>This is a test</strong>],
        stack: ["React", "Node", "PostgreSQL"],
        filterStack: ["React", "Node", "Express", "SQL", "NoSQL"],
        gridImg: "chordtheory.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 2,
        title: "I Know Mando",
        infoText: [<div className="modalInfo"><p>The mandolin has a rich history in some songs you’ve probably heard of, depending on how old you are. Those of a certain era will point to Maggie May, others will say Losing My Religion and more newcomers might say Winter Winds. On the other hand, if like me, you’re learning the mandolin, you’ll find it difficult to find a site that puts chords, scales and arpeggios together to learn… until now. Enter: I Know Mando.</p><p>The project began by sorting out the Fretboard of a Mandolin using CSS Grid. I did this because grid makes it easy to change around the layout (for alternate tunings or positions) as well as quickly allowing you to reference a specific fret. It’s also responsive which is a great help when wanting the website to be accessible on phones.</p><p>At this point I had a choice, use more CSS to make it look pretty or code the javascript to make it work. Well, I initially only had plans to use it myself, so I went down the javascript route, figuring if I could get all the info in, that would almost be the project complete. The site’s Javascript is fairly straight forward, with IF statements running if a change is detected on the buttons. From there, the script first hides all the circles (undoing the previous switch), and then runs the chord notes to add them back in. This allows very quick changes to be made, all within the same CSS grid.</p></div>],
        stack: ["Javascript", "Sass"],
        filterStack: ["Javascript", "Sass"],
        gridImg: "mando02.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 3,
        title: "Quaver Music",
        infoText: "<p>This is a test</p>",
        stack: ["React", "Node"],
        filterStack: ["React", "Node"],
        gridImg: "quaver.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 4,
        title: "Anti-Bribery Guidance",
        infoText: "<p>This is a test</p>",
        stack: ["Drupal", "PHP", "MySQL"],
        filterStack: ["Drupal", "PHP", "SQL"],
        gridImg: "cpei.png",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 5,
        title: "TenCount",
        infoText: "<p>This is a test</p>",
        stack: ["Node", "PostgreSQL"],
        filterStack: ["Node", "SQL"],
        gridImg: "cpei2.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 6,
        title: "Corporate Political Engagement Index",
        infoText: [<div className="modalInfo"><p>Transparency International UK (TI-UK) are the UK chapter of the global anti-corruption charity… Transparency International. As part of their work they have the Business Integrity Programme, which is designed to work with businesses to improve their anti-corruption efforts. The Corporate Political Engagement Index was developed to measure what information 104 leading global companies make public about how they engage with politics and rank them based on this.</p><p>As part of this project, they wanted a microsite to be launched, alongside a printed report, that would also incorporate an animated video explaining the results. It needed to include a filterable table of the results, along both the themes of the Index itself, as well as by the company groupings, so comparisons could be made between industries. Although the results table was mainly to be used by the public, as part of TI-UK’s work they also wanted to help businesses improve. Therefore, the brief also included a self-assessment quiz for companies that weren’t selected for the Index this time as well as best practice guidelines and a link to the full report.</p><p>After some initial discussions with the team (see above for sketched wireframes) I designed static versions of each screen of the one-page website. A one-page website felt most natural, as the information became more in depth as the user scrolled down. The microsite I developed for this project was originally built using Webflow. This had both highs and lows, in that it was easy to show  the client how the site was developing and make changes, however, the more technical side of the project (a self-assessment quiz) proved impossible to do in Webflow and so I rebuilt the site based on the layout, and incorporated the self-assessment quiz via SurveyMonkey, which the team were already using for monitoring other projects with businesses.</p></div>],
        stack: ["Drupal", "PHP"],
        filterStack: ["Drupal", "PHP"],
        gridImg: "cpei2.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 7,
        title: "Loving People, Changing Lives",
        infoText: "<p>This is a test</p>",
        stack: ["React"],
        filterStack: ["React"],
        gridImg: "lpcl.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 8,
        title: "Adrian Bailey MP",
        infoText: "<p>This is a test</p>",
        stack: ["Wordpress", "PHP", "MySQL"],
        filterStack: ["Wordpress", "PHP", "SQL"],
        gridImg: "adrianbailey.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 9,
        title: "TI-UK Reports",
        infoText: [<div className="modalInfo"><p>Transparency International UK (TI-UK) are the UK chapter of the global anti-corruption charity… Transparency International. Their main output, to enable them to further their goals of stopping corruption has been research and evidence-based reports which have needed designing. When I initially joined the charity in 2017, they were currently just being produced in Microsoft Word, which whilst definitely capable of putting words on a page, didn’t help expand the brand of TI-UK as much as possible.</p><p>Although, designing reports can often be straight forward, one of the hardest things has often been agreeing a stand out cover image for the report with the teams involved. It has often been considered One of the many highlights of this process was undoubtedly seeing Hiding in Plain Sight featured on the BBC’s news website complete with the designed front cover.</p><p>During my time with Transparency International UK I have designed over 20 publications. The quality of the work has been praised by external readers, donors and people within the organisation, suggesting that the layouts and design of the reports has definitely been a cause in increasing the reading of them, and thus furthering the causes of Transparency International.</p></div>],
        stack: ["Branding", "Print"],
        filterStack: ["Branding", "Print"],
        gridImg: "reports.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 10,
        title: "David Devenish",
        infoText: "<p>This is a test</p>",
        stack: ["Wordpress", "PHP", "MySQL"],
        filterStack: ["Javascript", "SQL"],
        gridImg: "ddweb.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 11,
        title: "TI25 Exhibition",
        infoText: "<p>This is a test</p>",
        stack: ["Print"],
        filterStack: ["Print", "Branding"],
        gridImg: "exhibition.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 12,
        title: "PartnerAid",
        infoText: "<p>This is a test</p>",
        stack: ["Wordpress", "PHP"],
        filterStack: ["Wordpress", "PHP"],
        gridImg: "partneraid.jpg",
        live: "https://www.iknowmando.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    }
]

export default GridData
