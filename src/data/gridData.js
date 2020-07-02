import React from 'react';


const GridData = [
    {
        id: 1,
        title: "Chord Theory",
        infoText: [<div className="modalInfo">
            <p>To the horror of, I assume most ‘hardcore’ jazz fans, I started listening to the genre after watching ‘La La Land’. As part of it, I wanted to take the piano skills I already had and expand them to playing jazz piano. So, I bought a book filled with complicated chords and complex melodies and then forgot about it for a while, picking it back up in 2020 in a not-new-years resolution. To help learn chords when not at the piano, I created a little guess the right answer game: Chord Theory.</p>
            <p>However, jazz has a lot to it. One question set wouldn’t be enough, and so after initially just creating a javascript game, I decided to expand it to be built with react and node, as well as a PostgreSQL database to store user info (such as stats on how many right answers a user got) and redis for additional security in signing people in with tokens.</p>
        </div>],
        stack: ["React", "Node", "PostgreSQL"],
        filterStack: ["React", "Node", "Express", "SQL", "NoSQL"],
        gridImg: "chordtheory.jpg",
        live: "https://chordtheory.jonlemarquand.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 2,
        title: "I Know Mando",
        infoText: [<div className="modalInfo">
            <p>The mandolin has a rich history in some songs you’ve probably never heard of, and also Maggie May. On the other hand, if like me, you’re learning the mandolin, you’ll find it difficult to find a site that puts chords, scales and arpeggios together to learn… until now. Enter: I Know Mando.</p>
            <p>The project began by sorting out the Fretboard of a Mandolin using CSS Grid. I did this because grid makes it easy to change around the layout (for alternate tunings or positions) as well as quickly allowing you to reference a specific fret. It’s also responsive which is a great help when wanting the website to be accessible on phones.</p>
            <p>Well, I initially only had plans to use it myself, so I went down the javascript route, figuring if I could get all the info in, that would almost be the project complete. The site’s Javascript is fairly straight forward, with IF statements running if a change is detected on the buttons. From there, the script first hides all the circles (undoing the previous switch), and then runs the chord notes to add them back in. This allows very quick changes to be made, all within the same CSS grid.</p>
            <p>Version 1 currently runs well, but is not as straight forward to input more options (such as positions), so a version built with React is also being developed.</p>
        </div>],
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
        infoText: [<div className="modalInfo">
            <p>After successfully putting in a GDPR request to Spotify, in a curious effort to see what data they were storing about me, I was given, along with what brand of bluetooth headphones I was listening through, my listening data since 2012ish. When combined with the results from iTunes/Apple Music after brief dabbling, I wanted some way to visualise what I had been listening to. This seemed like it would be a good opportunity to use SQL, node.js and react to create a site that would let me see trends in my music options.</p>
            <p>Starting with the backend, I began to develop a database schema featuring all the tables that were needed to compile the data, and then using a small batch of dummy data, inputted it to build the queries. Alongside this, I began to work on the Spotify/Apple Music data I had to turn them into readable JSON data.</p>
            <p>Once the backend API was sorted, I began to build a front end in React, with the basic pages as well as a couple of test artist pages. The next challenge was to form automatically generating pages, with an artist image and stats, based on a query api address.</p>
        </div>],
        stack: ["React", "Node"],
        filterStack: ["React", "Node"],
        gridImg: "quaver.jpg",
        live: "https://quavermusic.jonlemarquand.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 4,
        title: "Anti-Bribery Guidance",
        infoText: [<div className="modalInfo">
<p>Transparency International UK (TI-UK) are the UK chapter of the global anti-corruption charity… Transparency International. As part of their work they have the Business Integrity Programme, which is designed to work with businesses to improve their anti-corruption efforts. One of the ways they do this is to provide anti-bribery guidance through their website: antibriberyguidance.org. Although this website was initially developed in 2017 by an external company, they recently wanted it to be updated to include various bribery legislations from different countries, along with a refresh of the homepage.</p>
<p>The site itself is built in Drupal 7, and so any modifications needed to be built into that framework that existed. This required building a new content type into the existing type for the bribery legislation pages, as well as editing some of the php templates.</p>
<p>One of the most interesting things about the redesign was the use of a 3D Globe on the homepage to display where relevant bribery legislation was located. To build this I used three.js, learning it for the work above. I have written more about my experience learning three.js here.</p>
<p>Overall, the homepage and new content gave the site a fresh feel, and allowed Transparency International UK to market the site with the updated content on, drawing more visitors to the site and further establishing their reputation as a knowledge hub for anti-corruption.</p>
        </div>],
        stack: ["Drupal", "PHP", "MySQL"],
        filterStack: ["Drupal", "PHP", "SQL"],
        gridImg: "cpei.png",
        live: "https://www.antibriberyguidance.org",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 5,
        title: "TenCount",
        infoText: [<div className="modalInfo">
            <p>Ever since the days of Stone Cold and the Rock, I’ve been a fan of pro wrestling. One of the things I noticed is that although Opta exists for a lot of sports, there doesn’t seem to be a pro wrestling equivalent. Smelling an opportunity, I decided to create TenCount stats, starting with All Elite Wrestling (AEW). AEW launched in 2019, so provided an easy entry point into recording stats, with a limited number of shows already taking place.</p>
            <p>The plan was to initially create a backend in Node/PostgreSQL, that could run queries that could be turned into social media posts. Once a bit of a following was built up, a react website displaying more stats would be available. To do this, I drew a database schema out, with the different tables that were needed, as well as the foreign keys between them. After that, I used some dummy data to create the different API endpoints needed for the Node App.</p>
            <p>The current functionality of the backend, allows me to use common API endpoints to regularly update data, for example to see wins/losses, as well as write more customisable queries for more specialised data.</p>
            <p>The React frontend is still currently in development.</p>
        </div>],
        stack: ["Node", "PostgreSQL"],
        filterStack: ["Node", "SQL"],
        gridImg: "tencount.jpg",
        live: "https://www.tencountstats.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 6,
        title: "Corporate Political Engagement Index",
        infoText: [<div className="modalInfo">
            <p>Transparency International UK developed the Corporate Political Engagement Index to measure what information 104 leading global companies make public about how they engage with politics and rank them based on this. To accompany the report that was produced, they also wanted a microsite to be launched, that would also incorporate an animated video explaining the results. It needed to include a filterable table of the results, along both the themes of the Index itself, as well as by the company groupings, so comparisons could be made between industries. Although the results table was mainly to be used by the public, as part of TI-UK’s work they also wanted to help businesses improve. Therefore, the brief also included a self-assessment quiz for companies that weren’t selected for the Index this time as well as best practice guidelines and a link to the full report.</p>
            <p>After some initial discussions with the team (see above for sketched wireframes) I designed static versions of each screen of the one-page website. A one-page website felt most natural, as the information became more in depth as the user scrolled down. The microsite I developed for this project was originally built using Webflow. This had both highs and lows, in that it was easy to show  the client how the site was developing and make changes, however, the more technical side of the project (a self-assessment quiz) proved impossible to do in Webflow and so I rebuilt the site based on the layout, and incorporated the self-assessment quiz via SurveyMonkey, which the team were already using for monitoring other projects with businesses.</p>
        </div>],
        stack: ["Drupal", "PHP"],
        filterStack: ["Drupal", "PHP"],
        gridImg: "cpei2.jpg",
        live: "https://www.transparency.org.uk/cpei",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 7,
        title: "Loving People, Changing Lives",
        infoText: [<div className="modalInfo">
            <p>‘Loving People, Changing Lives’ was an annual conference hosted at Woodside Church between 2015 - 2017. The brief for the design was to create a logo that would encompass the name of the conference, a programme to go with it, powerpoint slides and an online marketing campaign to encourage signups. The initial logo we used was a ‘stained glass heart’ made up of many colours and in a slightly distorted shape.</p>
            <p>For the 2017 conference, I also drafted a spec of a microsite. However, as invitees were mostly internal signups from the church rather than external, it was decided to focus more on email marketing with direct links. I later built this site with React, as a personal project, integrating a signup form along with Stripe payment option. Although the customisation of the site is nice, the extra work, for a comparatively small event (around 300 people), on top of other responsibilities, would be better handled by Eventbrite or something similar.</p>
        </div>],
        stack: ["React"],
        filterStack: ["React"],
        gridImg: "lpcl.jpg",
        live: "https://www.lpcl.jonlemarquand.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 8,
        title: "Adrian Bailey MP",
        infoText: [<div className="modalInfo">
            <p>MPs are public figures, who need to be seen to be doing something. So when a new parliamentary staffer started with Adrian Bailey in 2017, they quickly realised that Mr. Bailey didn’t have a website at the time and this needed to be fixed! So I was brought on to design a website that would be able to showcase the work Mr. Bailey was doing for the community of West Bromwich West, gives times of surgeries where he could be met, allow people to sign up for a mailing list, as well as check that they were his MP before emailing him about casework. The website would also need to be easily-updated by a staff member, thus needed an easy CMS to use that could be quickly updated.</p>
            <p>One of the biggest challenges was using imagery, as photo opportunities, despite being important for MPs, had previously been few and far between for Mr. Bailey. Therefore, we decided to create a slider with his campaign promises, along with an accompanying photo. This hero section provided the opportunity to use impactful imagery, despite only being a limited number.</p>
            <p>A feature that was developed for the site was a ‘Who is my MP?’ section, as MPs are only allowed to take on casework of their own constituents. To check this, the plan was originally to use an external API, however, due to budget constraints, was scaled back to a more simple list of postcodes that were in West Bromwich West.</p>
            <p>Overall, it was a successful website that allowed constituents to get in touch with Adrian easier and see what he was doing for them.</p>
            <p><em>Note: Adrian Bailey is now no longer the MP for West Bromwich West having decided to step down at the December 2019 election, thus the site is no longer live, having previously been updated around July 2018.</em></p>
        </div>],
        stack: ["Wordpress", "PHP", "MySQL"],
        filterStack: ["Wordpress", "PHP", "SQL"],
        gridImg: "adrianbailey.jpg",
        live: "https://www.adrianbaileymp.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 9,
        title: "TI-UK Reports",
        infoText: [<div className="modalInfo">
            <p>Transparency International UK (TI-UK) are the UK chapter of the global anti-corruption charity… Transparency International. Their main output, to enable them to further their goals of stopping corruption has been research and evidence-based reports which have needed designing. When I initially joined the charity in 2017, they were currently just being produced in Microsoft Word, which whilst definitely capable of putting words on a page, didn’t help expand the brand of TI-UK as much as possible.</p>
            <p>Although, designing reports can often be straight forward, one of the hardest things has often been agreeing a stand out cover image for the report with the teams involved. It has often been considered One of the many highlights of this process was undoubtedly seeing Hiding in Plain Sight featured on the BBC’s news website complete with the designed front cover.</p>
            <p>During my time with Transparency International UK I have designed over 20 publications. The quality of the work has been praised by external readers, donors and people within the organisation, suggesting that the layouts and design of the reports has definitely been a cause in increasing the reading of them, and thus furthering the causes of Transparency International.</p>
        </div>],
        stack: ["Branding", "Print"],
        filterStack: ["Branding", "Print"],
        gridImg: "reports.jpg",
        live: "",
        github: "",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 10,
        title: "David Devenish",
        infoText: [<div className="modalInfo">
            <p>David Devenish is an author and speaker, whose decade-spanning career left him with a lot of material that he wanted to share online. Based out of Bedford, UK, he needed a way to share content globally but in an organised fashion. He also wanted to push links to books for purchase on the site, which the old blog-format site didn’t allow easily. The briefing for the site was short but simple: A site that hosts audio and video, gives links to books and has a blog section. All of this needs to be filterable, and sortable so that users can easily find material they’re looking for.</p>
            <p>At the beginning of the project, Wordpress seemed like the obvious solution to the issue of ever-changing content. As I wouldn’t be continually updating the site with new content, instead a communications officer at the organisation would be, it needed a user-friendly experience for someone with minimal experience in web development. To enable this to function, I developed an easy to use interface where the user would simply have to copy/paste the YouTube/ Vimeo/ Soundcloud link as well as the accompanying text and header image and they would have a post.</p>
            <p>Since launch, the site has been updated by a couple of people, and so doesn’t quite look like my initial designs, although it seems the same functionality has remained.</p>
        </div>],
        stack: ["Wordpress", "PHP", "MySQL"],
        filterStack: ["Javascript", "SQL"],
        gridImg: "ddweb.jpg",
        live: "https://www.daviddevenish.com",
        github: "",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 11,
        title: "TI25 Exhibition",
        infoText: [<div className="modalInfo"><p>Every year Transparency International UK host an anti-corruption lecture, with speakers such as former Prime Minister David Cameron. In 2018, they were celebrating 25 Years of Transparency International and wanted an exhibition outside the lecture theatre commemorating some of their achievements during this time. It was a big challenge, literally, as I had previously only really produced print design for around A4/A5 sizes.</p>
        <p>The TI-UK brand is fairly straightforward, 2 fonts, a TI Blue, black and white with the addition of the yellow from the TI25 Logo they had commissioned. Although I had initially had the designs printed off in A4, I then took to printing off full sized posters on A4 sheets, to see what the design looked like larger. It was here that I realised that enough space was needed to keep the designs at eye level, rather than leaving people straining to see the bottom text.</p>
        <p>I was glad I did this as once we arrived at the venue to put up the exhibition, we realised a slight problem. The sizes given to a colleague for the board measured the entire board, including the wheels. Thankfully, because the posters were designed with a large blue footer section, we could just fold them over so they were the appropriate size and all was well.</p>
        <p>Having never designed anything to that scale and size, I was really pleased with how they came out and I received great feedback from both colleagues and guests at the lecture. What did I learn for next time? Always be crystal-clear on what sizes you are asking for and always check the image resolution. Never settle for blurry!</p>
        </div>],
        stack: ["Print"],
        filterStack: ["Print", "Branding"],
        gridImg: "exhibition.jpg",
        live: "",
        github: "",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    },
    {
        id: 12,
        title: "Portfolio",
        infoText: [<div className="modalInfo"><p>A web developer’s portfolio is often the hardest thing to get right. Everyone is aware that it’s a means to an end, in displaying the projects and code worked on, but with an opportunity to show a personal flare and style. To that end, this portfolio went through several iterations before settling on using a simple React App to display projects in a modal, along with an about, a blog and a contact form.</p></div>],
        stack: ["React"],
        filterStack: ["React"],
        gridImg: "portfolio.jpg",
        live: "https://www.jonlemarquand.com",
        github: "https://www.iknowmando.com",
        imgOne: "cpei2.jpg",
        imgTwo: "cpei2.jpg",
        imgThree: "cpei2.jpg"
    }
]

export default GridData
