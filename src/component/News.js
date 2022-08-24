import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =  [
        {
           "source": {
           "id": null,
           "name": "Lifehacker.com"  },
           "author": "Jake Peterson",
           "title": "Your Mac Has Secret Reset ‘Buttons’",
           "description": "All computers act up from time to time. When things go awry, my first recommendation is always to simply shut down and reboot: Often, this simple power cycle fixes the issue. However, you might run into the odd problem that doesn’t go away. Maybe your MacBook…",
           "url": "https://lifehacker.com/your-mac-has-secret-reset-buttons-1849445974",
           "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/84e6fb0df7c721a1b5176e8a1e985674.jpg",
           "publishedAt": "2022-08-23T17:00:00Z",
           "content": "All computers act up from time to time. When things go awry, my first recommendation is always to simply shut down and reboot: Often, this simple power cycle fixes the issue. However, you might run i… [+3909 chars]"
           },
        {
           "source": {
           "id": "engadget",
           "name": "Engadget"
           },
           "author": "Terrence O'Brien",
           "title": "LANDR Studio has everything you need to make and release music (except a DAW)",
           "description": "If you're a music maker, chances are you've signed up for a music distribution service like DistoKid, maybe you have a subscription to a sample depot like Splice, and even pay monthly for an instrument like Output's Arcade. LANDR is now bring all of those dis…",
           "url": "https://www.engadget.com/landr-studio-subscription-everything-you-need-to-make-and-release-music-143835793.html",
           "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/ac556fe0-22ec-11ed-afec-db41ee3a0d28",
           "publishedAt": "2022-08-23T14:38:35Z",
           "content": "If you're a music maker, chances are you've signed up for a music distribution service like DistoKid, maybe you have a subscription to a sample depot like Splice, and even pay monthly for an instrume… [+1756 chars]"
           },
        {
           "source": {
           "id": "the-verge",
           "name": "The Verge"
           },
           "author": "Umar Shakir",
           "title": "Fitbit’s smartwatch event tomorrow will bring back buttons",
           "description": "Fitbit is set to announce new smartwatch hardware on August 24th, and a teaser image indicates buttons are making a comeback after a generation full of all-touch devices, like the most recent Versa, Sense, and Inspire.",
           "url": "https://www.theverge.com/2022/8/23/23318186/fitbit-versa-sense-buttons-teaser-rumor-announcement",
           "urlToImage": "https://cdn.vox-cdn.com/thumbor/dCc-DdqXkTCzR9O87l50Wgd9Ftw=/0x155:2160x1286/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23965226/fitbit_teaser.001.jpeg",
           "publishedAt": "2022-08-23T17:42:27Z",
           "content": "Image: Fitbit\r\n\n \n\n Fitbit teased a new wearable that it’ll reveal tomorrow during a special product event. The company posted a shadowy close-up of what looks like a new Fitbit Sense or Versa device… [+1051 chars]"
           },
        {
           "source": {
           "id": "the-verge",
           "name": "The Verge"
           },
           "author": "Ariel Shapiro",
           "title": "YouTube is consolidating podcast listening with new strikes deal with NPR",
           "description": "New data shows that YouTube is the most-used podcast platform, and the streamer is leaning in — it launched a dedicated podcast page last month and cut a new deal with NPR.",
           "url": "https://www.theverge.com/2022/8/23/23318305/youtube-podcast-npr-spotify-meghan-markle-prince-harry-archewell",
           "urlToImage": "https://cdn.vox-cdn.com/thumbor/kYRYZhMTjZWW2Ucak1JFhFPJorM=/0x132:2040x1200/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954043/VRG_Illo_STK427_Podcasting_playbars.jpg",
           "publishedAt": "2022-08-23T17:30:00Z",
           "content": "Plus, Meghan Markle finally makes her Spotify debut\r\nKristen Radtke / The Verge; Getty Images\r\nThis story is part of a group of stories called \r\nHot Pod is The Verges premier audio industry newslette… [+5911 chars]"
           },
        {
           "source": {
           "id": "ars-technica",
           "name": "Ars Technica"
           },
           "author": "Jennifer Ouellette",
           "title": "We’re loving the lavish epic visuals in the new LOTR: Rings of Power trailer",
           "description": "\"Choose not the oath of fear, but that of faith.\"",
           "url": "https://arstechnica.com/gaming/2022/08/latest-rings-of-power-trailer-showcases-galadriel-searching-for-heroes/",
           "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/08/lotr1-760x380.jpg",
           "publishedAt": "2022-08-23T15:18:42Z",
           "content": "24 with 22 posters participating\r\nPrime Video's new original series, Lord of the Rings: The Rings of Power.\r\nWith HBO's House of the Dragon debuting to a record nearly 10 million viewers, one might h… [+4626 chars]"
           },
        {
           "source": {
           "id": "reuters",
           "name": "Reuters"
           },
           "author": null,
           "title": "Former Apple car engineer pleads guilty to trade secret theft - Reuters",
           "description": "A former Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> engineer on Monday pleaded guilty to trade secret theft - one of two people accused of stealing trade secrets from the iPhone maker's nascent self-driving car p…",
           "url": "https://www.reuters.com/legal/former-apple-car-engineer-pleads-guilty-trade-secret-theft-2022-08-23/",
           "urlToImage": "https://www.reuters.com/resizer/sQcx3MbgGJMUAx1f5bauhCSCw94=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UEA7RRTBBNIGBOJZTOK4JVGY5Q.jpg",
           "publishedAt": "2022-08-23T02:30:00Z",
           "content": "Aug 22 (Reuters) - A former Apple Inc (AAPL.O) engineer on Monday pleaded guilty to trade secret theft - one of two people accused of stealing trade secrets from the iPhone maker's nascent self-drivi… [+1130 chars]"
           },
        {
           "source": {
           "id": "reuters",
           "name": "Reuters"
           },
           "author": null,
           "title": "Google Wallet launches in South Africa as digital payments boom - Reuters",
           "description": "Alphabet Inc <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> launched Google Wallet in South Africa on Tuesday, as the tech giant tries to gain a foothold in the country's rapidly growing digital payments space.",
           "url": "https://www.reuters.com/world/africa/google-wallet-launches-south-africa-digital-payments-boom-2022-08-23/",
           "urlToImage": "https://www.reuters.com/resizer/7HIqTObs0YiRUmDnFDJVyrdzS9M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QIYHGYVBDNM65JFLS7FQJEV4QM.jpg",
           "publishedAt": "2022-08-23T16:52:00Z",
           "content": "Aug 23 (Reuters) - Alphabet Inc (GOOGL.O) launched Google Wallet in South Africa on Tuesday, as the tech giant tries to gain a foothold in the country's rapidly growing digital payments space.\r\nThe C… [+1075 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "The Guardian"
           },
           "author": "Presented by Max Rushden with Barry Glendenning, Ceylon Andi-Hickman, Jonathan Wilson and Nick Ames. Produced by Joel Grove and executive produced by Max Sanderson.",
           "title": "Manchester United bounce back and Ellen White bows out – Football Weekly",
           "description": "Max Rushden is joined by Barry Glendenning, Ceylon Andi-Hickman and Jonathan Wilson discuss Monday night’s game at Old Trafford. Plus: Nick Ames joins from Ukraine, where domestic football is about to resumeRate, review, share on Apple Podcasts, Soundcloud, A…",
           "url": "https://www.theguardian.com/football/audio/2022/aug/23/manchester-united-liverpool-football-weekly-podcast",
           "urlToImage": "https://i.guim.co.uk/img/media/2554ff07dbf4c98f7162a7e545b3ec7e677cde01/0_32_1026_616/master/1026.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8ac6a709aa3476b436f370e6e324f0e2",
           "publishedAt": "2022-08-23T12:38:48Z",
           "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nToday: Manchester United beat Liverpool with Cri… [+543 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "The Guardian"
           },
           "author": "Nigel Slater",
           "title": "Nigel Slater’s recipe for spiced sesame lamb, mint and cucumber yoghurt",
           "description": "A juicy meaty dish full of spicy, herby flavoursPut 500g of minced lamb in a mixing bowl, add 1 tbsp of black mustard seeds (they are less hot than the yellow kind), 4 tbsp of white sesame seeds, 2 chopped spring onions, 2 tsp of garam masala and a generous s…",
           "url": "https://amp.theguardian.com/food/2022/aug/23/nigel-slater-midweek-dinner-recipe-spiced-sesame-lamb-mint-and-cucumber-yoghurt",
           "urlToImage": "https://i.guim.co.uk/img/media/78ae2554020ebab1a6f1991379f8b789c004a616/0_178_5723_3434/master/5723.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=89e1c39e73ff47ce998929354d36f5bf",
           "publishedAt": "2022-08-23T11:00:05Z",
           "content": "Put 500g of minced lamb in a mixing bowl, add 1 tbsp of black mustard seeds (they are less hot than the yellow kind), 4 tbsp of white sesame seeds, 2 chopped spring onions, 2 tsp of garam masala and … [+1669 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "The Guardian"
           },
           "author": "Luke Buckmaster",
           "title": "Vampire’s Kiss: Nicolas Cage is unforgettable in this freakishly great cult classic",
           "description": "This 1989 black comedy features an unnerving performance and actual cockroach eating. Cage superfan Luke Buckmaster explains why it works<ul><li>Vampire’s Kiss is streaming in Australia on Apple TV. For more recommendations of what to stream in Australia, cli…",
           "url": "https://amp.theguardian.com/film/2022/aug/24/vampires-kiss-nicolas-cage-is-unforgettable-in-this-freakishly-great-cult-classic",
           "urlToImage": "https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9f3eeaa01260e419ea976d1832743227",
           "publishedAt": "2022-08-23T17:30:13Z",
           "content": "Every film review, every article of cultural analysis, and in fact every piece of writing ever written, is informed by a system of expression we call language, which is used to describe aspects of a … [+4545 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Juli Clover",
           "title": "Apple Seeds Seventh Beta of tvOS 16 to Developers",
           "description": "Apple today seeded the seventh beta of an upcoming tvOS 16 update to developers for testing purposes, with the beta coming one week after Apple seeded the sixth beta of tvOS 16 to developers.\n\n\n\n\n\nDevelopers can download the new tvOS 16 beta by downloading a …",
           "url": "https://www.macrumors.com/2022/08/23/apple-seeds-seventh-beta-of-tvos-16-to-developers/",
           "urlToImage": "https://images.macrumors.com/t/m5ttUvJzP4f5bFZoNJCGaHAi7Qo=/2500x/article-new/2021/04/apple-tv-4k-design-triad.jpg",
           "publishedAt": "2022-08-23T17:01:00Z",
           "content": "Apple today seeded the seventh beta of an upcoming tvOS 16 update to developers for testing purposes, with the beta coming one week after Apple seeded the sixth beta of tvOS 16 to developers.\r\nDevelo… [+851 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Juli Clover",
           "title": "Apple Seeds Seventh Beta of watchOS 9 to Developers",
           "description": "Apple today seeded the seventh beta of an upcoming watchOS 9 update to developers for testing purposes, with the new beta coming one week after Apple released the sixth beta to developers.\n\n\n\n\n\nTo install ‌‌watchOS 9‌, developers will need to download the con…",
           "url": "https://www.macrumors.com/2022/08/23/apple-seeds-seventh-beta-of-watchos-9-to-developers/",
           "urlToImage": "https://images.macrumors.com/t/eXhNHYXbNppBslGlpQBfxwVlS6g=/2250x/article-new/2022/06/Apple-watchOS-9-Feature.jpg",
           "publishedAt": "2022-08-23T17:02:00Z",
           "content": "Apple today seeded the seventh beta of an upcoming watchOS 9 update to developers for testing purposes, with the new beta coming one week after Apple released the sixth beta to developers.\r\nTo instal… [+1565 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Sami Fathi",
           "title": "Apple Holds Meeting With Retail Staff to Discuss Recent Unionization Activities",
           "description": "Apple is doubling down on its efforts to comfort retail employees and dampen any possible resurgence of active unionization in its 270+ stores by downplaying the significance of Apple Towson Town Center as the first store to unionize. According to employees w…",
           "url": "https://www.macrumors.com/2022/08/23/apple-meeting-retail-staff-unions/",
           "urlToImage": "https://images.macrumors.com/t/P2qR7dpwF7zDy_i4fvuzjlvLBzU=/3000x/article-new/2022/02/apple-store-employees-los-angeles-tower.jpg",
           "publishedAt": "2022-08-23T19:40:07Z",
           "content": "Apple is doubling down on its efforts to comfort retail employees and dampen any possible resurgence of active unionization in its 270+ stores by downplaying the significance of Apple Towson Town Cen… [+5596 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Hartley Charlton",
           "title": "iPhone 14 Reportedly Spotted in Indian Regulatory Filings",
           "description": "A device believed to be the iPhone 14 has been spotted in the Bureau of Indian Standards (BIS), MySmartPrice reports.\n\n\n\n\n\nThe device is filed under the model number \"A2882,\" which is believed to correspond to one of the standard ‌iPhone 14‌ models. The iPhon…",
           "url": "https://www.macrumors.com/2022/08/23/iphone-14-reportedly-spotted-in-indian-regulatory-filings/",
           "urlToImage": "https://images.macrumors.com/t/OOIqyu4HYxiESZoaxKdogYqpjM0=/2531x/article-new/2022/05/iPhone-14-Lineup-Feature-Black.jpg",
           "publishedAt": "2022-08-23T11:25:09Z",
           "content": "A device believed to be the iPhone 14 has been spotted in the Bureau of Indian Standards (BIS), MySmartPrice reports.\r\nThe device is filed under the model number \"A2882,\" which is believed to corresp… [+779 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "CNET"
           },
           "author": "Meara Isenberg",
           "title": "The Best Horror Movies on HBO Max - CNET",
           "description": "HBO Max mixes some newer gems with the must-see classics.",
           "url": "https://www.cnet.com/culture/entertainment/the-best-horror-movies-streaming-now-on-hbo-max/",
           "urlToImage": "https://www.cnet.com/a/img/resize/355f6ab216cb0862a615d1e1879b242b34eb71e0/2022/06/28/4c9fd542-f814-47f6-8e43-e66a78197fec/screen-shot-2022-06-28-at-3-27-46-pm.jpg?auto=webp&fit=crop&height=630&precrop=1572,883,x0,y0&width=1200",
           "publishedAt": "2022-08-23T18:19:44Z",
           "content": "Trying to conjure up a new scary movie to watch on HBO Max? The Warner Bros. streamer is sitting on a bunch of great flicks, from certified classics (The Shining, A Nightmare on Elm Street), to some … [+4480 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Tim Hardwick",
           "title": "Apple's Self Service Repair Store Now Taking Orders for MacBook Air and MacBook Pro",
           "description": "Apple is now accepting orders through its Self Service Repair Store website for MacBook Air and MacBook Pro models, as per its announcement on Monday.\n\n\n\n\n\nThe online store briefly became unavailable on Tuesday morning while the website was updated to reflect…",
           "url": "https://www.macrumors.com/2022/08/23/self-service-repair-program-macs/",
           "urlToImage": "https://images.macrumors.com/t/sZ6W3qwJyyNpT8X0ns6ou4kCb44=/1960x/article-new/2022/08/Apple-Self-Service-Mac-Repair-August-2022.jpg",
           "publishedAt": "2022-08-23T14:32:28Z",
           "content": "Apple is now accepting orders through its Self Service Repair Store website for MacBook Air and MacBook Pro models, as per its announcement on Monday.\r\nThe online store briefly became unavailable on … [+1335 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Tim Hardwick",
           "title": "Apple's Secrecy Standards Complicate iPhone 14 Production in India",
           "description": "Apple will begin iPhone 14 production in India about two months after the first wave of devices are released out of China as manufacturing partners try to replicate the complex iPhone supply chain operation in another country for the first time.\n\n\n\n\n\nBloomber…",
           "url": "https://www.macrumors.com/2022/08/23/apple-secrecy-iphone-14-production-india/",
           "urlToImage": "https://images.macrumors.com/t/smqTMOkg-e0ZIPRs0ZXA6CHOLS0=/2531x/article-new/2022/05/iPhone-14-Lineup-Feature-Teal.jpg",
           "publishedAt": "2022-08-23T09:14:35Z",
           "content": "Apple will begin iPhone 14 production in India about two months after the first wave of devices are released out of China as manufacturing partners try to replicate the complex iPhone supply chain op… [+2338 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Juli Clover",
           "title": "Apple Seeds Seventh Betas of iOS 16 and iPadOS 16 to Developers",
           "description": "Apple today seeded the seventh betas of upcoming iOS 16 and iPadOS 16 updates to developers for testing purposes, with the updates coming a week after Apple released the sixth developer betas.\n\n\n\n\n\nRegistered developers can download the iOS and ‌iPadOS 16‌ pr…",
           "url": "https://www.macrumors.com/2022/08/23/apple-seeds-ios-16-beta-7-to-developers/",
           "urlToImage": "https://images.macrumors.com/t/8Vqzi11JN_LNuQ6tpB01SfH02Gg=/1920x/article-new/2022/06/ios-16-lock-screen-feature2.jpg",
           "publishedAt": "2022-08-23T17:05:41Z",
           "content": "Apple today seeded the seventh betas of upcoming iOS 16 and iPadOS 16 updates to developers for testing purposes, with the updates coming a week after Apple released the sixth developer betas.\r\nRegis… [+1938 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Mitchel Broussard",
           "title": "Deals: Get Apple's MagSafe Charger for $29.99 ($9 Off)",
           "description": "Woot today introduced a new flash sale on Apple's MagSafe Charger, available for $29.99, down from $39.00. The MagSafe Charger is in new condition and includes a one year Apple limited warranty.\n\n\n\nNote: MacRumors is an affiliate partner with some of these ve…",
           "url": "https://www.macrumors.com/2022/08/23/deals-magsafe-charger-29-99/",
           "urlToImage": "https://images.macrumors.com/t/4OJ3QqPbq2fRuYTkZAeylT7Wdew=/2250x/article-new/2022/06/magsafe-charger-orange.jpg",
           "publishedAt": "2022-08-23T14:50:45Z",
           "content": "Woot today introduced a new flash sale on Apple's MagSafe Charger, available for $29.99, down from $39.00. The MagSafe Charger is in new condition and includes a one year Apple limited warranty.\r\nNot… [+735 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "MacRumors"
           },
           "author": "Mitchel Broussard",
           "title": "Deals: Apple's iPad Mini 6 Drops to $439.99 on Amazon ($59 Off)",
           "description": "Amazon is discounting the 64GB Wi-Fi iPad mini tablet to $439.99 in all colors today, down from $499.00. There's a slight shipping delay for the tablet, with the fastest delivery estimate set for around August 30.\n\n\n\nNote: MacRumors is an affiliate partner wi…",
           "url": "https://www.macrumors.com/2022/08/23/deals-apples-ipad-mini-6-drops/",
           "urlToImage": "https://images.macrumors.com/t/KhRylusqJhYf00ZVkP_CH6U-vB8=/2500x/article-new/2022/05/ipad-mini-better-purple.jpg",
           "publishedAt": "2022-08-23T13:37:20Z",
           "content": "Amazon is discounting the 64GB Wi-Fi iPad mini tablet to $439.99 in all colors today, down from $499.00. There's a slight shipping delay for the tablet, with the fastest delivery estimate set for aro… [+1101 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "NPR"
           },
           "author": "Jill Langlois",
           "title": "PHOTOS: Ukrainian refugees feel surprisingly at home in Brazil's 'Little Ukraine'",
           "description": "Eight families fled the war and traveled 5,000 miles to Brazil to live in a town settled by Ukrainians over a century ago. The language and customs — and kindnesses — have eased their transition.",
           "url": "https://www.npr.org/sections/goatsandsoda/2022/08/23/1118263346/photos-ukrainian-refugees-feel-surprisingly-at-home-in-brazils-little-ukraine",
           "urlToImage": "https://media.npr.org/assets/img/2022/08/22/ukranian_toned_npr-7_wide-d7f704df3a24244c05a859e0b8978f52494aa3b0.jpg?s=1400",
           "publishedAt": "2022-08-23T16:58:07Z",
           "content": "Laryssa Moskvichova and her children fled the war in Ukraine 3 months ago and resettled in Prudentópolis, a Brazilian town founded by Ukrainians. She's been baking and selling Ukrainian specialties i… [+12750 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Entrepreneur"
           },
           "author": "Gabrielle Bienasz",
           "title": "Elon Musk's Jet Took A 9-Minute Flight From San Jose to San Francisco",
           "description": "A public transit enthusiast called out the flight on Twitter, which sparked fury online.",
           "url": "https://www.entrepreneur.com/article/433958",
           "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1661268583-GettyImages-1206292057.jpg",
           "publishedAt": "2022-08-23T15:45:00Z",
           "content": "Elon Musk's jet took a nine-minute flight, and the internet is not thrilled, Unilad reported.\r\nHayden Clarkin, founder of TransitCon, a public transit conference, tweeted about the flight with a pict… [+3238 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Entrepreneur"
           },
           "author": "Emily Washcovick",
           "title": "Building Competency as a Boss While Growing a Business",
           "description": "From the physical environment to interactions with employees, the Uncommon Closet experience is intentionally inclusive. Business-owner Korri has created a tailoring shop that is welcoming to all.",
           "url": "https://www.entrepreneur.com/article/433951",
           "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1661262506-IMG-5935-1200x900.jpg",
           "publishedAt": "2022-08-23T13:49:14Z",
           "content": "Behind the Review host and Yelp's Small Business Expert, Emily Washcovick, shares a look at this week's episode of the podcast.\r\nUncommon Closet\r\nIn building a small business, most owners think of ex… [+5058 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Hipertextual"
           },
           "author": "Ebenizer Pinedo",
           "title": "Apple confirma que iPadOS 16 llegará más tarde de lo esperado",
           "description": "Apple finalmente liberó la beta para desarrolladores de iPadOS 16.1, rompiendo así con el habitual calendario al que estábamos acostumbrados desde años anteriores. Por tal motivo, los de Cupertino también anunciaron que el lanzamiento de iPadOS 16 no coincidi…",
           "url": "https://hipertextual.com/2022/08/apple-confirma-ipados-16-llegara-mas-tarde",
           "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/06/iPadOS-16-iPad-sin-M1-scaled.jpg",
           "publishedAt": "2022-08-23T18:25:05Z",
           "content": "Apple finalmente liberó la beta para desarrolladores de iPadOS 16.1, rompiendo así con el habitual calendario al que estábamos acostumbrados desde años anteriores. Por tal motivo, los de Cupertino ta… [+2797 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Boing Boing"
           },
           "author": "Rob Beschizza",
           "title": "Is this the perfect mechanical keyboard?",
           "description": "The Altar I is a low profile and wireless mechanical keyboard with a very particular aesthetic that reminds me of old-timey Apple, Teenage Engineering and phone handsets designed for the vision-impaired. \n\n\n\nAltar I focuses on one idea: Less, but better. A pr…",
           "url": "https://boingboing.net/2022/08/23/is-this-the-perfect-mechanical-keyboard.html",
           "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/08/Screen-Shot-2022-08-22-at-5.04.52-PM-scaled.jpg?fit=1200%2C534&ssl=1",
           "publishedAt": "2022-08-23T09:08:00Z",
           "content": "The Altar I is a low profile and wireless mechanical keyboard with a very particular aesthetic that reminds me of old-timey Apple, Teenage Engineering and phone handsets designed for the vision-impai… [+671 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Xataka.com"
           },
           "author": "Antonio Sabán",
           "title": "Un padre envió fotos de su hijo desnudo a un pediatra. Google bloqueó sus cuentas y lo denunció",
           "description": "En febrero de 2021, a un niño le apareció una infección en la ingle. Y su padre, Mark, como es normal, le hizo una foto para enviársela a su pediatra, pues no podía atender presencialmente por la pandemia. Así, podría identificar el problema y aportar posible…",
           "url": "https://www.xataka.com/privacidad/padre-envio-fotos-su-hijo-desnudo-a-pediatra-google-bloqueo-sus-cuentas-denuncio",
           "urlToImage": "https://i.blogs.es/d46959/ninos/840_560.jpg",
           "publishedAt": "2022-08-23T10:01:40Z",
           "content": "En febrero de 2021, a un niño le apareció una infección en la ingle. Y su padre, Mark, como es normal, le hizo una foto para enviársela a su pediatra, pues no podía atender presencialmente por la pan… [+4391 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Xataka.com"
           },
           "author": "Antonio Sabán",
           "title": "Samsung está actualizando móviles de hace ocho años que había abandonado. Hay buenos motivos",
           "description": "Las actualizaciones son uno de los principales puntos débiles de Android. El abandono temprano por parte de los fabricantes a sus terminales ha sido una constante que se ha intentado atajar de numerosas maneras, sin demasiado éxito. Detrás del problema de la …",
           "url": "https://www.xataka.com/moviles/samsung-esta-actualizando-moviles-hace-ocho-anos-que-habia-abandonado-hay-buenos-motivos",
           "urlToImage": "https://i.blogs.es/f20828/alpha/840_560.jpg",
           "publishedAt": "2022-08-23T16:01:44Z",
           "content": "Las actualizaciones son uno de los principales puntos débiles de Android. El abandono temprano por parte de los fabricantes a sus terminales ha sido una constante que se ha intentado atajar de numero… [+4512 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Digital Trends"
           },
           "author": "Alex Blake",
           "title": "We may have a first glimpse of haptic Mac keyboards, and I’m already sold",
           "description": "Apple is working on banishing the MacBook’s physical keyboard, but this might not be such a disaster. In fact, it could make Apple’s laptops better than ever.",
           "url": "https://www.digitaltrends.com/computing/first-glimpse-of-mac-haptic-keyboards-has-me-sold/",
           "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-keyboard.jpg?p=1",
           "publishedAt": "2022-08-23T15:00:30Z",
           "content": "Theres a rumor doing the rounds at the moment that Apple is working on an all-glass Mac keyboard that would do away with the physical keys entirely. We’ve seen similar reports on keyboard-less MacBoo… [+3901 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Digital Trends"
           },
           "author": "Joe Maring",
           "title": "Samsung Galaxy Watch 5 review: peak of Android smartwatches",
           "description": "In 2021, the Galaxy Watch 4 stood out as one of Wear OS's best smartwatches. In 2022, the Galaxy Watch 5 does the same thing.",
           "url": "https://www.digitaltrends.com/mobile/samsung-galaxy-watch-5-review/",
           "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/08/samsung-galaxy-watch-5-review-17.jpg?p=1",
           "publishedAt": "2022-08-23T16:00:30Z",
           "content": "So far, 2022 has been a year of iterative updates for much of Samsung’s portfolio, and the Galaxy Watch 5 is perhaps the best example of that. Looking at the Watch 5 and the Watch 4 side by side, it’… [+16992 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Mogery.me"
           },
           "author": "Gergő Móricz",
           "title": "I hope Apple never adopts RCS",
           "description": "RCS embraces the flaws of GSM, and Apple using it would be a step backwards.",
           "url": "https://blog.mogery.me/rcs-is-stupid/",
           "urlToImage": "https://images.unsplash.com/photo-1511233744044-194342066754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fGNlbGwlMjB0b3dlcnxlbnwwfHx8fDE2NjEyMTA4OTU&ixlib=rb-1.2.1&q=80&w=2000",
           "publishedAt": "2022-08-23T10:02:37Z",
           "content": "If you've only read a little bit about RCS, or even if you took a couple minutes and read Android's site about #GettheMessage, it might seem like a great thing: the standard that has finally come to … [+3471 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Robinsloan.com"
           },
           "author": null,
           "title": "An odd discovery on Spotify",
           "description": "New releases; good catastrophes; an alluring and unnerving encounter.",
           "url": "https://www.robinsloan.com/newsletters/visions/#spotify",
           "urlToImage": "https://www.robinsloan.com/img/ashlad-palace.jpg",
           "publishedAt": "2022-08-23T00:30:52Z",
           "content": "From: Robin SloanTo: main newsletterSent: July 2022\r\nFar, Far Away Soria Moria Palace Shimmered Like Gold, 1900, Theodor Kittelsen\r\nThis newslet­ter is a fun one, with lots to explore and think about… [+18721 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Wolf Dieter Dallinger",
           "title": "Programmiersprachen: Reguläre Ausdrücke in Swift neu aufgestellt",
           "description": "Apple führt in Swift 5.7 eine domänenspezifische Sprache ein, um reguläre Ausdrücke sauber zu verarbeiten.",
           "url": "https://www.heise.de/hintergrund/Programmiersprachen-Regulaere-Ausdruecke-in-Swift-neu-aufgestellt-7237616.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/5/1/5/6/shutterstock_1352756288-ced7923de5f386ef.jpg",
           "publishedAt": "2022-08-23T06:03:00Z",
           "content": "Inhaltsverzeichnis\r\nReguläre Ausdrücke sind ein mächtiges Werkzeug im Umgang mit Zeichenketten. Doch die bisherige Umsetzung in Apples Programmiersprache Swift ist ein Erbe von Objective-C mit all de… [+5332 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Markus Stöbe",
           "title": "heise+ | Technische Details zu den Systemen: Das ist neu in iOS 16, macOS 13 & Co.",
           "description": "Apple hat am Unterbau seiner Betriebssysteme mächtig gewerkelt, wie ein Deep Dive in die Entwicklerunterlagen zeigt.",
           "url": "https://www.heise.de/hintergrund/Technische-Details-zu-den-Systemen-Das-ist-neu-in-iOS-16-macOS-13-Co-7223311.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/3/6/5/0/22_04_leo_neue_systeme_aufmacher_tech_digital-c522e9519db826d5.jpg",
           "publishedAt": "2022-08-23T15:00:00Z",
           "content": "Inhaltsverzeichnis\r\nApple befindet sich dank hauseigener Prozessoren und GPUs in der idealen Position, Entwicklern eine immer attraktivere Plattform zu bieten.\r\nInzwischen finden sich M-Chips nicht n… [+1534 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Ben Schwan",
           "title": "Kinderporno-Scan auf iPhones: Apple schweigt, wie's weitergeht",
           "description": "Die umstrittene automatische KI-Analyse von Fotos auf illegale CSAM-Inhalte hatte Apple zunächst auf Eis gelegt. Wie stehen die Chancen, dass sie noch kommt?",
           "url": "https://www.heise.de/news/Kinderporno-Scan-auf-iPhones-Apple-schweigt-wie-s-weitergeht-7220751.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/2/3/6/8/249968568_b7a71e3328-a7a1723766cb016c.jpg",
           "publishedAt": "2022-08-23T09:38:00Z",
           "content": "Nach wie vor ist unklar, ob Apple auf iPhones und iPads Speicherinhalte künftig automatisch auf Missbrauchsbilder scannen wird. Eine entsprechende Funktion hatte der Konzern vor ziemlich genau einem … [+3446 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Leo Becker",
           "title": "Geheimnisverrat bei Apples Autoprojekt: Ex-Mitarbeiter bekennt sich schuldig",
           "description": "US-Ermittler werfen dem Ingenieur vor, technische Details zum Apple Car entwendet zu haben. Er wurde vor dem Abflug nach China verhaftet.",
           "url": "https://www.heise.de/news/Geheimnisverrat-bei-Apples-Autoprojekt-Ex-Mitarbeiter-bekennt-sich-schuldig-7240975.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/6/9/0/2/Screen_Shot_2022-06-12_at_17.34.44-5a4b14814bd763bb.png",
           "publishedAt": "2022-08-23T15:44:00Z",
           "content": "Ein ehemaliger Apple-Mitarbeiter hat sich vor einem US-Gericht des Diebstahls von Geschäftsgeheimnissen nun doch für schuldig bekannt. Dem Ingenieur wird vorgeworfen, interne Apple-Dokumente herunter… [+1796 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Ben Schwan",
           "title": "Windows auf Intel-Macs: Apple rüstet WPA3 bei Boot Camp nach",
           "description": "Der Mac-Hersteller fasst seine Windows-Unterstützung für Intel-Maschinen erneut an. Version 6.1.16 bringt neue Features und Fehlerbehebungen.",
           "url": "https://www.heise.de/news/Windows-auf-Intel-Macs-Apple-ruestet-WPA3-bei-Boot-Camp-nach-7240027.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/6/3/9/8/bootcamp-62da95e7af7d2e81.jpg",
           "publishedAt": "2022-08-23T08:04:00Z",
           "content": "Eigentlich hat Boot Camp keine Zukunft mehr: Mit dieser Apple-Software ist es möglich, nativ Windows auf Intel-Macs auszuführen und genau die nimmt der Hersteller nach und nach aus dem Programm und e… [+2001 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Eva-Maria Weiß",
           "title": "Content-Scanner und Kinderschutz: Wer kontrolliert Google?",
           "description": "Kritik an Googles Kinderschutz gibt es bereits. Nun taucht ein Fallbeispiel auf, bei dem die Technik scheitert – aber auch die Eltern, meint Eva-Maria Weiß.",
           "url": "https://www.heise.de/meinung/Content-Scanner-und-Kinderschutz-Wer-kontrolliert-Google-7239350.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/6/0/6/2/shutterstock_434396323-5092929b34414828.jpg",
           "publishedAt": "2022-08-23T08:20:00Z",
           "content": "Es ist nie eine gute Idee, Nacktfotos eines Kindes per Smartphone ohne Verschlüsselung irgendwohin zu senden. Auch nicht zu einem Arzt, der dies anfragt. So aber geschehen in den USA mit Konsequenzen… [+3980 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "heise online"
           },
           "author": "Eva-Maria Weiß, Dirk Knop",
           "title": "Firefox 104: Verbesserungen am PDF-Viewer und Stromverbrauch-Profiler",
           "description": "Die neue Version von Firefox bringt neben sechs gefixten Sicherheitslücken auch Re-Snapping sowie die Möglichkeit, im PDF-Viewer zu unterschreiben.",
           "url": "https://www.heise.de/news/Firefox-104-Verbesserungen-am-PDF-Viewer-und-Stromverbrauch-Profiler-7240408.html",
           "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/9/6/5/9/1/shutterstock_1085501978-767221bfd55015d0.jpg",
           "publishedAt": "2022-08-23T14:13:00Z",
           "content": "Auch Firefox möchte vielleicht seinen Teil zum Klimaschutz beitragen: Auf jeden Fall bietet der Browser ab Version 104 einen Profiler an, der den Stromverbrauch einer Webseite analysieren kann allerd… [+2557 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Bradley Chambers",
           "title": "Apple @ Work Podcast: Remote workstations with HP Anyware",
           "description": "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Businesses and Schools to easily and automatically deploy, manage &…",
           "url": "https://9to5mac.com/2022/08/23/hp-anyware/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/08/Apple-at-Work.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T10:30:00Z",
           "content": "Apple @ Work is brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that fully integrates 5 different applications on a single Apple-only platform, allowing Busines… [+778 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Filipe Espósito",
           "title": "Apple updates Boot Camp for Intel Macs with WPA3 Wi-Fi support",
           "description": "Apple on Monday released an update to Boot Camp Utility, the company’s tool that lets Intel Mac users run Windows natively on their Apple computers. Today’s update brings Wi-Fi improvements, as it adds support for the WPA3 standard.\n more…\nThe post Apple upda…",
           "url": "https://9to5mac.com/2022/08/22/apple-boot-camp-intel-macs-wpa3-wi-fi/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Apple-Boot-Camp-Mac-Windows.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T02:18:52Z",
           "content": "Apple on Monday released an update to Boot Camp Utility, the company’s tool that lets Intel Mac users run Windows natively on their Apple computers. Today’s update brings Wi-Fi improvements, as it ad… [+1943 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Michael Potuck",
           "title": "How to charge Apple Pencil – 1st or 2nd-gen models",
           "description": "Just get an Apple Pencil or maybe it’s been a while since you used one? Read along for how to charge Apple Pencil. We’ll cover how to juice up both 1st and 2nd gen models.\n more…\nThe post How to charge Apple Pencil – 1st or 2nd-gen models appeared first on 9t…",
           "url": "https://9to5mac.com/2022/08/23/how-to-charge-apple-pencil/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/how-to-charge-apple-pencil.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T07:00:00Z",
           "content": "Just get an Apple Pencil or maybe it’s been a while since you used one? Read along for how to charge Apple Pencil. We’ll cover how to juice up both 1st and 2nd gen models.\r\nApple has different design… [+1916 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Filipe Espósito",
           "title": "Grubhub partners with Apple TV+ to promote Severance’s ‘Waffle Party’",
           "description": "Grubhub, one of the most popular food ordering and delivery platforms in the United States, announced this week a new partnership with Apple. To celebrate National Waffle Day, users can earn a free “perk” with an order placed using a code inspired by the Appl…",
           "url": "https://9to5mac.com/2022/08/22/grubhub-partners-with-apple-tv-to-promote-severances-waffle-party/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Grubhub-partners-with-Apple-TV-Plus-to-promote-Severance-Waffle-Party.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T00:07:34Z",
           "content": "Grubhub, one of the most popular food ordering and delivery platforms in the United States, announced this week a new partnership with Apple. To celebrate National Waffle Day, users can earn a free “… [+1919 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Filipe Espósito",
           "title": "Apple confirms delay in iPadOS 16 release, first 16.1 beta now available to developers",
           "description": "Earlier this month, a Bloomberg report revealed that Apple was considering postponing the release of iPadOS 16 until October as the company was not happy with the Stage Manager experience. Apple has now confirmed that the release of iPadOS 16 is being delayed…",
           "url": "https://9to5mac.com/2022/08/23/apple-delay-ipados-16-1-beta-now-available/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/ipadOS-16-delay.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:25:55Z",
           "content": "Earlier this month, a Bloomberg report revealed that Apple was considering postponing the release of iPadOS 16 until October as the company was not happy with the Stage Manager experience. Apple has … [+2582 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Filipe Espósito",
           "title": "iOS 16.1 to let users delete Wallet app amid antitrust concerns over Apple Pay",
           "description": "Apple on Tuesday surprised developers with the release of both iOS 16.0 beta 7 and iPadOS 16.1 beta 1. And while neither update comes with significant changes, it seems that Apple will soon let users delete the Wallet app from their devices with iOS 16.1.\n mo…",
           "url": "https://9to5mac.com/2022/08/23/ios-16-1-let-users-delete-wallet-app/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/iOS-16.1-to-let-users-delete-Wallet-app-amid-antitrust-concerns-over-Apple-Pay.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T19:11:05Z",
           "content": "Apple on Tuesday surprised developers with the release of both iOS 16.0 beta 7 and iPadOS 16.1 beta 1. And while neither update comes with significant changes, it seems that Apple will soon let users… [+2450 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Chance Miller",
           "title": "Former Apple engineer pleads guilty to stealing Project Titan trade secrets",
           "description": "A former Apple engineer has pled guilty to stealing trade secrets from the company. In a San Jose federal court, Xiaolang Zhang admitted to the theft of Apple’s Project Titan trade secrets and could face up to 10 years in prison and a $250,000 fine…\n more…\nTh…",
           "url": "https://9to5mac.com/2022/08/22/apple-car-trade-secrets-theft/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/apple-car-carplay-design.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T01:07:57Z",
           "content": "A former Apple engineer has pled guilty to stealing trade secrets from the company. In a San Jose federal court, Xiaolang Zhang admitted to the theft of Apple’s Project Titan trade secrets and could … [+2103 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "Tim Cook, Jony Ive, and Laurene Jobs will be interviewed at CodeCon 2022 event",
           "description": "CodeCon 2022 has confirmed it will interview a few Apple personalities this year. Apple CEO Tim Cook, former design chief Jony Ive, and Steve Jobs’ widow Laurene Powell Jobs will join the convention that will take place from September 6 to September 8.\n more……",
           "url": "https://9to5mac.com/2022/08/23/tim-cook-jony-ive-laurene-jobs-code-event/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/code-panel.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:57:55Z",
           "content": "CodeCon 2022 has confirmed it will interview a few Apple personalities this year. Apple CEO Tim Cook, former design chief Jony Ive, and Steve Jobs’ widow Laurene Powell Jobs will join the convention … [+1978 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Ben Lovejoy",
           "title": "Apple store union survey gives insight into sources of dissatisfaction",
           "description": "The Apple Store union established at the Towson, Maryland, store has issued surveys asking staff what they would like to be the priorities when it comes to negotiating with the company. The detailed list gives a good insight into the sources of dissatisfactio…",
           "url": "https://9to5mac.com/2022/08/23/apple-store-union-2/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Apple-store-union.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T13:30:03Z",
           "content": "The Apple Store union established at the Towson, Maryland, store has issued surveys asking staff what they would like to be the priorities when it comes to negotiating with the company. The detailed … [+3555 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "watchOS 9 beta 7 now available, here are its top features",
           "description": "watchOS 9 beta 7 is here. As Apple polishes the Apple Watch’s upcoming operating system after more than two months of beta testing, the company seems to be getting ready for the launch of watchOS 9 in September. Here’s everything new with it.\n more…\nThe post …",
           "url": "https://9to5mac.com/2022/08/23/watchos-9-beta-7-now-available/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/watchOS-9-hero-b7.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:05:15Z",
           "content": "watchOS 9 beta 7 is here. As Apple polishes the Apple Watchs upcoming operating system after more than two months of beta testing, the company seems to be getting ready for the launch of watchOS 9 in… [+2008 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "Tim Cook, Jony Ive, and Laurene Powell Jobs will be interviewed at CodeCon 2022 event",
           "description": "CodeCon 2022 has confirmed it will interview a few Apple personalities this year. Apple CEO Tim Cook, former design chief Jony Ive, and Laurene Powell Jobs will join the convention that will take place from September 6 to September 8.\n more…\nThe post Tim Cook…",
           "url": "https://9to5mac.com/2022/08/23/tim-cook-jony-ive-laurene-powell-jobs-code-event/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/code-panel.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:57:55Z",
           "content": "CodeCon 2022 has confirmed it will interview a few Apple personalities this year. Apple CEO Tim Cook, former design chief Jony Ive, and Laurene Powell Jobs will join the convention that will take pla… [+1961 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Chance Miller",
           "title": "iOS 16 beta 7 now available as Apple wraps up final development",
           "description": "The weekly beta cycle continues. iOS 16 beta 7 is now available to developer beta testers as we inch closer to an official release next month. We aren’t expecting many new features in iOS 16 beta 7 as Apple is finalizing the release ahead of a September launc…",
           "url": "https://9to5mac.com/2022/08/23/ios-16-beta-7/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/ios-16-hero-b7.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:05:57Z",
           "content": "The weekly beta cycle continues. iOS 16 beta 7 is now available to developer beta testers as we inch closer to an official release next month. We aren’t expecting many new features in iOS 16 beta 7 a… [+1652 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "tvOS 16 beta 7 now available to developers as Apple nears end of this beta cycle",
           "description": "tvOS 16 beta 7 is now available to developers as Apple aims for a September release of this operating system. Although the company almost forgot about tvOS 16 during the WWDC 2022 keynote, there are some features users should be excited about when it launches…",
           "url": "https://9to5mac.com/2022/08/23/tvos-16-beta-7-now-available/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/tvOS-hero-b7.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:05:02Z",
           "content": "tvOS 16 beta 7 is now available to developers as Apple aims for a September release of this operating system. Although the company almost forgot about tvOS 16 during the WWDC 2022 keynote, there are … [+2347 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Derek Wise",
           "title": "No, Apple won’t let you replace your MacBook’s main board with a higher-spec option",
           "description": "Apple just expanded its self-service repair program to include M1 MacBook Air and MacBook Pros. You can get replacement screens, batteries, and even logic boards, but don’t expect to be able to upgrade your laptop, as you can only purchase the exact same main…",
           "url": "https://9to5mac.com/2022/08/23/apple-doesnt-support-macbook-upgrades/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/no-upgrading-with-Apple-repair-program.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T17:39:02Z",
           "content": "Apple just expanded its self-service repair program to include M1 MacBook Air and MacBook Pros. You can get replacement screens, batteries, and even logic boards, but don’t expect to be able to upgra… [+1866 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Rikka Altland",
           "title": "Deals: Apple MagSafe Charger hits $30, Magic Trackpad 2 $85, iPhone 13 cases from $28, more",
           "description": "Today’s best deals kick off as Tim Cook makes trying out Apple’s official MagSafe Charger more affordable than ever at $30. You can also upgrade your macOS setup with a new 2022 low on Apple Magic Trackpad 2 at $85 while outfitting your iPhone 13 with officia…",
           "url": "https://9to5mac.com/2022/08/23/magsafe-charger-official-sale-more/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/06/Apple-MagSafe-Charger-sale.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T15:51:34Z",
           "content": "Today’s best deals kick off as Tim Cook makes trying out Apple’s official MagSafe Charger more affordable than ever at $30. You can also upgrade your macOS setup with a new 2022 low on Apple Magic Tr… [+3654 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Ben Lovejoy",
           "title": "iPhone 14 production to start early in India, but secrecy and supply chain problems limit plans",
           "description": "There have been suggestions that iPhone 14 production would start simultaneously in China and India, significantly improving early availability of this year’s lineup. But a new report today said that Apple has had to abandon any hope of achieving this.\nSupply…",
           "url": "https://9to5mac.com/2022/08/23/iphone-14-production-2/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/iPhone-14-production.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T11:17:03Z",
           "content": "There have been suggestions that iPhone 14 production would start simultaneously in China and India, significantly improving early availability of this year’s lineup. But a new report today said that… [+4064 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Seth Kurkowski",
           "title": "9to5Mac Daily: August 23, 2022 – iPad 10 and MacBook Pro rumors",
           "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nSponsored by Kolide: With Kol…",
           "url": "https://9to5mac.com/2022/08/23/9to5mac-daily-august-23-2022-ipad-10-and-macbook-pro-rumors/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T15:45:59Z",
           "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+952 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "iPhone 14 allegedly surfaces in Indian regulator database ahead of September unveil",
           "description": "The Indian Consumer Affairs authority may have leaked important information about the upcoming iPhone 14 ahead of the September 7 Apple event. The possible model number of the next iPhone was spotted on the Bureau of Indian Standards (BIS) as the Cupertino co…",
           "url": "https://9to5mac.com/2022/08/23/iphone-14-model-number-indian-database/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/purple-iphone-14-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T12:49:32Z",
           "content": "The Indian Consumer Affairs authority may have leaked important information about the upcoming iPhone 14 ahead of the September 7 Apple event. The possible model number of the next iPhone was spotted… [+1892 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Derek Wise",
           "title": "Apple’s Self Service Repair store goes live with M1 MacBook replacement parts",
           "description": "Apple announced yesterday that it would add replacement parts for its M1 MacBook Air and Pro laptops. Now, the store is back online after a brief period of maintenance, and now it offers replacement trackpads, displays, batteries, and more parts to fix your o…",
           "url": "https://9to5mac.com/2022/08/23/apples-self-service-repair-store-goes-live-with-m1-macbook-replacement-parts/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/M1-MacBook-self-service-repair.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T14:54:24Z",
           "content": "Apple announced yesterday that it would add replacement parts for its M1 MacBook Air and Pro laptops. Now, the store is back online after a brief period of maintenance, and now it offers replacement … [+2976 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "Facebook Messenger now updated for M1 and M2 Macs",
           "description": "A couple of years after Apple unveiled its first Macs with custom chips, Facebook Messenger has finally been updated to support these machines. With that, those who rely on Messenger to communicate with family, friends, and loved ones will have a better exper…",
           "url": "https://9to5mac.com/2022/08/23/facebook-messenger-apple-silicon-macs-support/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/facebook-messenger-mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T18:41:02Z",
           "content": "A couple of years after Apple unveiled its first Macs with custom chips, Facebook Messenger has finally been updated to support these machines. With that, those who rely on Messenger to communicate w… [+2028 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Chance Miller",
           "title": "iPhone 14 to spur more upgrades than iPhone 13 despite price increase, survey suggests",
           "description": "The iPhone 14 event is just two weeks away, and early data indicates Apple will once again spur existing iPhone users to upgrade. In fact, a new survey published this week suggests more people are planning to upgrade to the iPhone 14 than were planning to upg…",
           "url": "https://9to5mac.com/2022/08/23/iphone-14-upgrade-survey/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/iphone-14-upgrade.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T15:47:35Z",
           "content": "The iPhone 14 event is just two weeks away, and early data indicates Apple will once again spur existing iPhone users to upgrade. In fact, a new survey published this week suggests more people are pl… [+2996 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Ben Lovejoy",
           "title": "Former Twitter security head says company’s systems have ‘extreme, egregious deficiencies’",
           "description": "Former Twitter security head Peiter Zatko has filed a formal complaint that the company has “extreme, egregious deficiencies” in its protections against hackers, and has done little to defeat spam.\nHe accuses the company of deceiving the Federal Trade Commiss…",
           "url": "https://9to5mac.com/2022/08/23/twitter-security-2/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Twitter-security.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T12:10:58Z",
           "content": "Former Twitter security head Peiter Zatko has filed a formal complaint that the company has “extreme, egregious deficiencies” in its protections against hackers, and has done little to defeat spam.\r\n… [+3718 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "José Adorno",
           "title": "Best iOS tips and tricks for your iPhone [Video]",
           "description": "With iOS 16 and iPhone 14 just around the corner, this is the best time to learn tips and tricks that will enhance your experience with your current and next-gen devices. 9to5Mac gathered some of the best tips for your iPhone that will help you save time and …",
           "url": "https://9to5mac.com/2022/08/23/best-ios-tips-tricks-iphone-video/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/best-iphone-ios-tips.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T14:32:09Z",
           "content": "With iOS 16 and iPhone 14 just around the corner, this is the best time to learn tips and tricks that will enhance your experience with your current and next-gen devices. 9to5Mac gathered some of the… [+2969 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Ben Lovejoy",
           "title": "BeReal clone being tested by Instagram as Candid Challenges",
           "description": "It was only a matter of time before one of the established social media apps created a BeReal clone, and it seems Instagram is in the running as it confirms an “internal prototype” feature called Candid Challenges … BeReal launched back in 2019, but didn’t ge…",
           "url": "https://9to5mac.com/2022/08/23/bereal-clone/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/BeReal-clone.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T12:39:04Z",
           "content": "It was only a matter of time before one of the established social media apps created a BeReal clone, and it seems Instagram is in the running as it confirms an “internal prototype” feature called Can… [+3146 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Ben Lovejoy",
           "title": "AT&T 5G Plus will now be fully usable by the iPhone 12 and up, not just iPhone 14",
           "description": "Enhanced 5G services offering higher speeds aren’t yet available to many, but there’s good news for AT&T 5G Plus – the faster service will now be fully usable by the iPhone 12 and up.\nThe carrier had previously indicated that only 2022 devices would be able t…",
           "url": "https://9to5mac.com/2022/08/23/att-5g-plus/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/ATT-5G-Plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T14:23:10Z",
           "content": "Enhanced 5G services offering higher speeds aren’t yet available to many, but there’s good news for AT&amp;T 5G Plus the faster service will now be fully usable by the iPhone 12 and up.\r\nThe carrier … [+3434 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "9to5Mac"
           },
           "author": "Chance Miller",
           "title": "Chamberlin shuts the door on its HomeKit garage door hub citing low sales",
           "description": "The HomeKit ecosystem is losing one of its most useful and most reliable accessories. Chamberlin has announced today that it is discontinuing the myQ Home Bridge Hub, which allowed you to control your garage door with HomeKit and Siri. \n more…\nThe post Chambe…",
           "url": "https://9to5mac.com/2022/08/23/homekit-garagedoor-discontinued/",
           "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/homekit-garage-door.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
           "publishedAt": "2022-08-23T18:07:02Z",
           "content": "The HomeKit ecosystem is losing one of its most useful and most reliable accessories. Chamberlin has announced today that it is discontinuing the myQ Home Bridge Hub, which allowed you to control you… [+2988 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Android Police"
           },
           "author": "Parth Shah",
           "title": "What's the difference between OIS and EIS on my phone's cameras?",
           "description": "Optical image stabilization and electronic image stabilization are smartphone mainstays for  Here's what you need to know about the two technologies.",
           "url": "https://www.androidpolice.com/ois-vs-eis-differences-smartphone-cameras/",
           "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/05/Galaxy-S22-S22-plus-and-S22-Ultra.jpg",
           "publishedAt": "2022-08-23T10:00:14Z",
           "content": "With an almost identical specs sheet among most flagships, smartphone companies are looking at software and cameras to differentiate their offerings from rivals. Instead of glancing over how many cam… [+5273 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Autoblog"
           },
           "author": "Reuters",
           "title": "Former Apple car engineer pleads guilty to trade secret theft",
           "description": "Continue reading Former Apple car engineer pleads guilty to trade secret theft\nFormer Apple car engineer pleads guilty to trade secret theft originally appeared on Autoblog on Tue, 23 Aug 2022 13:44:00 EDT. Please see our terms for use of feeds.\nPermalink | \n…",
           "url": "https://www.autoblog.com/2022/08/23/apple-car-trade-secrets-guilty-plea/",
           "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/2444x1375+0+122/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2022-08/1c7cb260-230b-11ed-becf-f9bb23a95df4",
           "publishedAt": "2022-08-23T17:44:00Z",
           "content": "A former Apple Inc engineer has pleaded guilty to trade secret theft one of two people accused of stealing trade secrets from the iPhone maker's nascent self-driving car program.\r\nU.S. federal prosec… [+1113 chars]"
           },
        {
           "source": {
           "id": "spiegel-online",
           "name": "Spiegel Online"
           },
           "author": "DER SPIEGEL",
           "title": "iCar: Ex-Apple-Mitarbeiter gibt Geheimnisverrat zu",
           "description": "Xiaolang Zhang wird vorgeworfen, am letzten Arbeitstag bei Apple einen Schaltplan gestohlen haben. Nach einem Deal mit der US-Staatsanwaltschaft plädiert er nun auf schuldig.",
           "url": "https://www.spiegel.de/wirtschaft/icar-ex-apple-mitarbeiter-gibt-geheimnisverrat-zu-a-55c13c8e-d837-4c08-b1fd-26660ffc0dc7",
           "urlToImage": "https://cdn.prod.www.spiegel.de/images/6a8e9503-1bd9-41d3-84bc-a3fc1d73e562_w1280_r1.77_fpx48.75_fpy49.97.jpg",
           "publishedAt": "2022-08-23T10:56:23Z",
           "content": "Xpeng, der chinesische Hersteller von Elektroautos, zu dem Zhang nach seinem Ausscheiden bei Apple im Jahr 2018 wechselte, erklärte am Dienstag in dem Twitter-ähnlichen Nachrichtendienst Sina Weibo, … [+461 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Wikihow.com"
           },
           "author": "Josef Storzi",
           "title": "How to Change the Text Size in the Mail App on iOS",
           "description": "Is the text in your iPhone or iPad's Mail app too large or small? In iOS 13, 14, and 15, you can easily format the text of your emails using the Mail app. In this article, we’ll show you how to adjust the font size in your messages. If you’re interested in ad…",
           "url": "https://www.wikihow.com/Change-the-Text-Size-in-the-Mail-App-on-iOS",
           "urlToImage": "https://www.wikihow.com/images/6/65/Change-the-Text-Size-in-the-Mail-App-on-iOS-Step-15.jpg",
           "publishedAt": "2022-08-23T16:00:00Z",
           "content": "This article was written by Josef Storzi and by wikiHow staff writer, Megaera Lorenz, PhD. Josef Storzi is an Apple and Mobile Phone Repair Specialist and the Owner of Imobile LA, a mobile phone repa… [+485 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Malcolm Owen)",
           "title": "Apple issues seventh watchOS 9 developer beta",
           "description": "Apple has seeded its seventh developer beta of watchOS 9 to testers.The latest builds can be downloaded by developers in the beta-testing program via the Apple Developer Center, or as an over-the-air update for devices already using beta builds. The public be…",
           "url": "https://appleinsider.com/articles/22/08/23/apple-issues-seventh-watchos-9-developer-beta",
           "urlToImage": "https://photos5.appleinsider.com/gallery/49189-96035-48715-95190-watchOS-9-Header-xl-1-xl.jpg",
           "publishedAt": "2022-08-23T17:13:13Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2197 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Mike Peterson)",
           "title": "Apple Store union distributes job surveys in preparation for negotiations",
           "description": "The union at an Apple Store in Towson, Maryland recently distributed surveys to union members as it prepares to kick off the bargaining process with Apple.Apple Towson Town CenterWorkers at Apple Towson Town Center voted to union earlier in 2022, and their ef…",
           "url": "https://appleinsider.com/articles/22/08/23/apple-store-union-distributes-job-surveys-in-preparation-for-negotiations",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50017-98105-49175-95990-48215-94182-000-lead-Towson-Town-Center-xl-xl-xl.jpg",
           "publishedAt": "2022-08-23T14:14:45Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1764 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Wesley Hilliard)",
           "title": "Apple TV+ shares first trailer for 'Central Park' season 3",
           "description": "Apple TV+ animated musical comedy \"Central Park\" gets a trailer for season 3 with Kristen Bell's new character making her debut.'Central Park' gets a trailer for season 3\"Central Park\" is an animated series from the creators of \"Bob's Burgers.\" It is a musica…",
           "url": "https://appleinsider.com/articles/22/08/23/apple-tv-shares-first-trailer-for-central-park-season-3",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50022-98110-Central-Park-3-xl.jpg",
           "publishedAt": "2022-08-23T16:08:51Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+970 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Robert Irish)",
           "title": "What Apple learned from skeuomorphism and why it still matters",
           "description": "Apple's focus on skeumorphism changed a decade ago in iOS 7. Here's why Apple started and stopped using it, how it evolved, and why it's still important to interface design.Apple's calculator has had a long history with skeuomorphism.You might have heard the …",
           "url": "https://appleinsider.com/articles/22/08/23/what-apple-learned-from-skeuomorphism-and-why-it-still-matters",
           "urlToImage": "https://photos5.appleinsider.com/gallery/49986-98030-apple-skeuomorphism-xl.jpg",
           "publishedAt": "2022-08-23T11:14:17Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+7431 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Malcolm Owen)",
           "title": "Apple seeds seventh developer beta of tvOS 16",
           "description": "Apple has handed out its seventh developer beta of tvOS 16 to testers to try out on their Apple TVs.The latest builds can be downloaded by developers in the beta-testing scheme via the Apple Developer Center, or as an over-the-air update for hardware already …",
           "url": "https://appleinsider.com/articles/22/08/23/apple-seeds-seventh-developer-beta-of-tvos-16",
           "urlToImage": "https://photos5.appleinsider.com/gallery/49190-96036-48956-95756-Apple-TV-and-Home-Screen-xl-xl.jpg",
           "publishedAt": "2022-08-23T17:15:23Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1911 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Malcolm Owen)",
           "title": "Apple introduces seventh iOS 16 and iPadOS 16 developer betas",
           "description": "Apple has provided developer testers the seventh builds of its iOS 16 and iPadOS 16 betas, as the expected release in September draws nearer.The newest builds can be downloaded via the Apple Developer Center for those enrolled in the test program, or via an o…",
           "url": "https://appleinsider.com/articles/22/08/23/apple-introduces-seventh-ios-16-and-ipados-16-developer-betas",
           "urlToImage": "https://photos5.appleinsider.com/gallery/49188-96034-0-95337-Lock-Screen-xl-xl.jpg",
           "publishedAt": "2022-08-23T17:14:55Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+3061 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Malcolm Owen)",
           "title": "Tim Cook, Jony Ive, Laurene Powell-Jobs will appear at Vox's Code conference",
           "description": "Apple CEO Tim Cook will be speaking at Vox Media's Code conference, with former Apple Chief Design Officer Jony Ive and Laurene Powell Jobs also set to appear on-stage at the event.Code 2022 will run from September 6 to September 8, with the three-day event t…",
           "url": "https://appleinsider.com/articles/22/08/23/tim-cook-joby-ive-laurene-powell-jobs-will-appear-at-voxs-code-conference",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50026-98117-powell-jobs-cook-ive-xl.jpg",
           "publishedAt": "2022-08-23T18:52:03Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1586 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Mike Peterson)",
           "title": "Apple Ginza in Tokyo opening in new eco-friendly building on Aug. 30",
           "description": "The Apple Store in Tokyo's Ginza district is set to move in August to a new innovative, 12-story building that features a fire-resistant and eco-friendly wood and steel design.Credit: Laurenz Heymann/UnsplashApple Ginza is notable because it was the company's…",
           "url": "https://appleinsider.com/articles/22/08/23/apple-ginza-in-tokyo-opening-in-new-eco-friendly-building-on-aug-30",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50024-98115-Apple-Logo-Header-xl.jpg",
           "publishedAt": "2022-08-23T18:13:05Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1528 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Amber Neely)",
           "title": "Former Apple engineer accepts plea deal, pleads guilty to stealing trade secrets",
           "description": "A former Apple employee charged with stealing trade secrets relating to the company's secretive Apple Car project has pleaded guilty in federal court.In 2018, Xiaolang Zhang initially entered a plea of not guilty after it was discovered that he'd downloaded a…",
           "url": "https://appleinsider.com/articles/22/08/23/former-apple-engineer-accepts-plea-deal-pleads-guilty-to-stealing-trade-secrets",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50013-98101-car-xl.jpg",
           "publishedAt": "2022-08-23T01:51:03Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1175 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Malcolm Owen)",
           "title": "First public iPadOS 16 release will actually be iOS 16.1, in October",
           "description": "Skipping September entirely, the first public version of iPadOS 16 will launch in October, and will end up being iPadOS 16.1, not iPadOS 16.0.Apple is currently beta-testing iOS 16 and iPadOS 16, with the former expected to ship to coincide with the iPhone 14…",
           "url": "https://appleinsider.com/articles/22/08/23/first-public-ipados-16-release-will-actually-be-ios-161-in-october",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50023-98111-49717-97414-49204-96162-monitor-xl-xl-xl.jpg",
           "publishedAt": "2022-08-23T17:39:06Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1432 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Mike Peterson)",
           "title": "Apple is now taking orders for MacBook Pro & MacBook Air repair parts",
           "description": "Apple's Self Service Repair Store is now accepting orders for MacBook Air and MacBook Pro parts and tools — and will also allow users to view repair manuals for M1-equipped models.Repair ProgramThe company said Monday that customers would be able to order rep…",
           "url": "https://appleinsider.com/articles/22/08/23/apple-is-now-taking-orders-for-macbook-pro-macbook-air-repair-parts",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50020-98107-47830-93437-44695-86850-43303-84096-A23A64EF-FE63-45D7-A0BB-496B937BA8EA-xl-xl-xl-xl.jpg",
           "publishedAt": "2022-08-23T15:05:54Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2035 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Malcolm Owen)",
           "title": "Apple's legendary secrecy is hampering India production expansion efforts",
           "description": "Apple's attempts to grow India as a manufacturing hub alternative to China is being slowed down by Apple itself, with the company's need for secrecy impacting attempts to get the two regions manufacturing new products simultaneously.Apple has been trying to m…",
           "url": "https://appleinsider.com/articles/22/08/23/apples-legendary-secrecy-is-hampering-india-production-expansion-efforts",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50015-98102-47467-92639-46275-90150-000-lead-Foxconn-xl-xl-xl.jpg",
           "publishedAt": "2022-08-23T10:44:03Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2320 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (AppleInsider Staff)",
           "title": "Daily deals August 23: $299 iPad, $336 off 49-inch Samsung Curved 120Hz Monitor, $700 off EVGA GeForce RTX 3090 Ti, more",
           "description": "Tuesday's best deals include an Anker 737 Power Bank for $120, a Segway Go Kart Pro for $300 off, a Fender Concert Acoustic Guitar for $139, and much more.Best deals for August 23Every day, AppleInsider searches online retailers to find offers and discounts o…",
           "url": "https://appleinsider.com/articles/22/08/23/daily-deals-august-23-299-ipad-336-off-49-inch-samsung-curved-120hz-monitor-700-off-evga-geforce-rtx-3090-ti-more",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50014-98103-Deals-aug-23-xl.jpg",
           "publishedAt": "2022-08-23T12:16:54Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1842 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Andrew O'Hara)",
           "title": "These features won't be in the release of iOS 16",
           "description": "It's been a rocky road to the iOS 16 launch. Here are the high-profile features that aren't going to debut in the initial release of Apple's upcoming operating system.Apple's iOS 16As is often the case, Apple's software aspirations are too ambiguous. Some fea…",
           "url": "https://appleinsider.com/articles/22/08/23/these-features-wont-be-in-the-release-of-ios-16",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50025-98112-42F88351-304F-4191-9677-3A8853878C6F-xl.jpg",
           "publishedAt": "2022-08-23T19:31:19Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2604 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Christine McKee)",
           "title": "Apple's iPad mini 6 drops to $429.99 thanks to back-to-school savings at Amazon",
           "description": "Amazon is stacking bonus savings at checkout with an instant rebate to deliver the cheapest iPad mini 6 price heading back-to-school.Apple's iPad mini 6 is discounted heavily at Amazon for back-to-school.The discounted $429.99 price at Amazon is $20 cheaper t…",
           "url": "https://appleinsider.com/articles/22/08/23/apples-ipad-mini-6-drops-to-42999-thanks-to-back-to-school-savings-at-amazon",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50019-98106-apple-ipad-mini-sale-xl.png",
           "publishedAt": "2022-08-23T14:48:47Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1048 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Mike Peterson)",
           "title": "Chamberlain pulls the plug on its HomeKit smart home bridge",
           "description": "Chamberlain Group is discontinuing its HomeKit-compatible myQ Home Bridge Hub because of low sales, though existing models will continue working.Credit: Chamberlain GroupThe myQ Home Bridge Hub has been out of stock on Chamberlain's website for a few weeks. O…",
           "url": "https://appleinsider.com/articles/22/08/23/chamberlain-pulls-the-plug-on-its-homekit-smart-home-bridge",
           "urlToImage": "https://photos5.appleinsider.com/gallery/50027-98119-Chamberlain-myQ-xl.jpg",
           "publishedAt": "2022-08-23T19:13:57Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1517 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "AppleInsider"
           },
           "author": "news@appleinsider.com (Wesley Hilliard)",
           "title": "How to take advantage of Safari Tab Groups in macOS Ventura",
           "description": "Tab Groups gain new capabilities in macOS Ventura thanks to Focus Modes and SharePlay. Here's how to set them up and get the most out of the feature.Tab Groups bring intelligent, contextually aware sorting to web browsingApple expanded how users can organize …",
           "url": "https://appleinsider.com/inside/macos-ventura/tips/how-to-take-advantage-of-safari-tab-groups-in-macos-ventura",
           "urlToImage": "https://photos5.appleinsider.com/gallery/49951-97994-New-Tab-Group-xl.jpg",
           "publishedAt": "2022-08-23T16:47:40Z",
           "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+6182 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Elespanol.com"
           },
           "author": "Manuel Ramírez",
           "title": "Instagram se inspira en una de las mejores funciones de la red social que es tendencia, BeReal",
           "description": "Y sí, también hay espacio para nuevas redes sociales como BeReal, de la que ahora se ha inspirado Instagram para su próxima y gran novedad.",
           "url": "https://www.elespanol.com/elandroidelibre/aplicaciones/20220823/instagram-inspira-mejores-funciones-social-tendencia-bereal/697680479_0.html",
           "urlToImage": "https://s1.eestatic.com/2022/08/23/elandroidelibre/aplicaciones/697690616_226627617_600x315.jpg",
           "publishedAt": "2022-08-23T17:17:00Z",
           "content": "No es la primera vez que comentamos por estas líneas en El Androide Libre sobre BeReal, una red social nueva que está pegando muy fuerte para que incluso Instagram ya esté detrás de implementar una d… [+2222 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Elespanol.com"
           },
           "author": "Adrián Raya",
           "title": "Esta es la verdadera razón por la que cada vez hay más móviles caros y de gama alta",
           "description": "Un reciente análisis del mercado global de smartphones revela que la demanda de smartphones de gama alta se ha disparado en el último año, explicando un cambio notable entre los fabricantes.",
           "url": "https://www.elespanol.com/elandroidelibre/moviles-android/20220823/verdadera-razon-vez-moviles-caros-gama-alta/697680347_0.html",
           "urlToImage": "https://s1.eestatic.com/2022/08/10/elandroidelibre/moviles-android/694440643_226412993_600x315.jpg",
           "publishedAt": "2022-08-23T12:13:03Z",
           "content": "Lanzamientos recientes como el Samsung Galaxy Z Fold 4, con un precio de 1.799 euros, han reavivado el debate sobre el precio de los nuevos smartphones, especialmente ahora que las pantallas plegable… [+4607 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Elespanol.com"
           },
           "author": null,
           "title": "Samsung Galaxy Watch 5 Pro, análisis: una bestia en tu muñeca",
           "description": "Hemos probado el reloj más extremo de Samsung, el Galaxy Watch 5 Pro, diseñado para deportes de riesgo y con una resistencia y autonomía brutales.",
           "url": "https://www.elespanol.com/elandroidelibre/moviles-android/accesorios/20220823/samsung-galaxy-watch-pro-analisis-bestia-muneca/694680546_0.html",
           "urlToImage": "https://s1.eestatic.com/2022/08/23/elandroidelibre/moviles-android/analisis/697690493_226623337_600x315.jpg",
           "publishedAt": "2022-08-23T15:22:00Z",
           "content": "Los relojes inteligentes siguen siendo uno de los dispositivos electrónicos que más polarizan a los usuarios. La mayoría de ellos no les ven el interés, o no pueden vivir sin ellos. Apple es la empre… [+10497 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Lifehacker.jp"
           },
           "author": "酒井麻里子",
           "title": "iPhone不要！Apple WatchでPodcastを最大限楽しむ方法",
           "description": "Image:shutterstockライフハッカー［日本版］2021年7月8日掲載の記事より転載。記事中の情報は掲載時点でのものです。コロナ禍で人気が高まる音声コンテンツ。最近になって本格的に聴くようになった方も多いのではないでしょうか？Appleの定番アプリ「Podcast」なら、AppleWatchから音声コンテンツを聴けます。音声を聴く際にはBluetooth対応のイヤホンが必要ですが、iP",
           "url": "https://www.lifehacker.jp/article/how-to-use-apple-watch-podcast/",
           "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/08/22/shutterstock_1226709739-w960.jpg",
           "publishedAt": "2022-08-23T00:00:00Z",
           "content": "202178\r\nApplePodcastApple WatchBluetoothiPhone\r\nPodcast\r\nApple1\r\nScreenshot: via Podcast\r\nPodcasttinyhack\r\nApple WatchPodcast\r\nPodcastApple Watch\r\nPodcast\r\niPhonePodcast\r\nScreenshot: via Podcast\r\n×1\r… [+502 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Gizmodo.jp"
           },
           "author": "岩田リョウコ",
           "title": "「Apple Pencilは高い」という人には、機能がほぼ同じのAdonitスタイラスペンがおすすめ",
           "description": "Adonitのスタイラスペン「Neo Pro」。Apple Pencilとほぼ同様の機能なのに、価格は約6,000円とリーズナブル。",
           "url": "https://www.gizmodo.jp/2022/08/adonit-neo-pro.html",
           "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/08/23/neoproall-34f47446-w960.jpg",
           "publishedAt": "2022-08-23T05:00:00Z",
           "content": "iPhoneApple PenciliPadApple PencilAdonit Neo ProApple Pencil44.996,000\r\n323iPadBluetooth\r\nBluetooth1Apple PenciliPad ProLightning2iPad\r\nAdonit2010iPadNeo Pro2Apple PenciliPadiPad29Apple Pencil\r\niPadi… [+98 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Journal du geek"
           },
           "author": "Gregori Pujol",
           "title": "Le Fire TV Stick d’Amazon retrouve son prix du Black Friday ",
           "description": "Le prix du Fire TV Stick Lite avec télécommande vocale Alexa, revient à son plus bas prix, c'est le moment d'en profiter !\nLe Fire TV Stick d’Amazon retrouve son prix du Black Friday 😱",
           "url": "https://www.journaldugeek.com/bon-plan/le-fire-tv-stick-damazon-retrouve-son-prix-du-black-friday/",
           "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/12/sticklite.jpg",
           "publishedAt": "2022-08-23T14:30:39Z",
           "content": "Le prix du Fire TV Stick Lite avec télécommande vocale Alexa, revient à son plus bas prix, c'est le moment d'en profiter !Le Fire TV Stick est un best seller chez Amazon, mais si vous ne voulez pas m… [+2255 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Journal du geek"
           },
           "author": "Elisa Rahouadj",
           "title": "PlayStation accusé d’avoir escroqué ses joueurs de 6 milliards de dollars",
           "description": "Mais qu'a bien pu faire Sony pour s'attirer les foudres de 9 millions de joueurs ? \nPlayStation accusé d’avoir escroqué ses joueurs de 6 milliards de dollars",
           "url": "https://www.journaldugeek.com/2022/08/23/playstation-accuse-davoir-escroque-ses-joueurs-de-6-milliards-de-dollars/",
           "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/09/template-jdg-2021-09-16t154211-262.jpg",
           "publishedAt": "2022-08-23T15:00:54Z",
           "content": "Mais qu'a bien pu faire Sony pour s'attirer les foudres de 9 millions de joueurs ?Depuis quelques années, de nombreux aspects de l’industrie vidéoludique sont remis en question, et l’un d’entre eux c… [+2977 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Journal du geek"
           },
           "author": "Julie Hay",
           "title": "House of the Dragon : la série fait-elle mieux que Game of Thrones ?",
           "description": "House of the Dragon est officiellement lancée, la série a-t-elle battu des records d'audience ? \nHouse of the Dragon : la série fait-elle mieux que Game of Thrones ?",
           "url": "https://www.journaldugeek.com/2022/08/23/house-of-the-dragon-la-serie-fait-elle-mieux-que-game-of-thrones/",
           "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/08/house-of-the-dragon-hbo.jpg",
           "publishedAt": "2022-08-23T09:00:58Z",
           "content": "House of the Dragon est officiellement lancée, la série a-t-elle battu des records d'audience ?Westeros nous ouvre à nouveau ses bras, trois ans après la fin de Game of Thrones. Ce week-end, HBO a di… [+3449 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "Miguel López",
           "title": "Apple aún se acuerda de Windows: Boot Camp se actualiza y resuelve errores con sus controladores",
           "description": "Buenas noticias para todos los que tengáis un Mac con chip Intel y utilicen Windows por el motivo que sea. Apple ha actualizado Boot Camp a la versión 6.1.16 para solucionar algunos errores y estrenar compatibilidades que muchos Mac modernos agradecerán.\n<!--…",
           "url": "https://www.applesfera.com/aplicaciones-os-x-1/apple-se-acuerda-windows-boot-camp-se-actualiza-resuelve-errores-sus-controladores",
           "urlToImage": "https://i.blogs.es/87442c/1366_2000-1/840_560.jpeg",
           "publishedAt": "2022-08-23T11:59:42Z",
           "content": "Buenas noticias para todos los que tengáis un Mac con chip Intel y utilicen Windows por el motivo que sea. Apple ha actualizado Boot Camp a la versión 6.1.16 para solucionar algunos errores y estrena… [+1372 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "Pedro Aznar",
           "title": "El lanzamiento del iPhone 14 no es lo único que se espera: hay quien tiene aún más expectación ante los AirPods Pro 2",
           "description": "Cuanto más se acerca la presentación del iPhone 14, la expectación por su contenido aumenta. Apple volverá a convocar a la prensa en el Apple Park en un formato de evento \"mixto\", donde aún no aparecerá la directiva de Apple en el escenario del Steve Jobs The…",
           "url": "https://www.applesfera.com/airpods/lanzamiento-iphone-14-no-unico-que-se-espera-hay-quien-tiene-expectacion-airpods-pro-2",
           "urlToImage": "https://i.blogs.es/713dea/airpods-pro-2-iphone-14-lanzamiento-aps-006/840_560.jpeg",
           "publishedAt": "2022-08-23T09:02:05Z",
           "content": "Cuanto más se acerca la presentación del iPhone 14, la expectación por su contenido aumenta. Apple volverá a convocar a la prensa en el Apple Park en un formato de evento \"mixto\", donde aún no aparec… [+2747 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "Miguel López",
           "title": "Casi todo lo que he comprado de Apple sigue funcionando, y eso me ha ayudado a tomar una decisión importante",
           "description": "“¿Hay alguno de tus dispositivos de Apple que haya muerto realmente?”, me preguntó mi cuñado hace unos días mientras comíamos en mi retiro vacacional. La respuesta obvia que pasó rápidamente por mi cabeza es que sí, pero parándome a pensar me di cuenta de que…",
           "url": "https://www.applesfera.com/general/casi-todo-que-he-comprado-apple-sigue-funcionando-eso-me-ha-ayudado-a-tomar-decision-importante",
           "urlToImage": "https://i.blogs.es/208245/cadefe1d-494c-4adc-903e-014fd30058a8/840_560.jpeg",
           "publishedAt": "2022-08-23T09:01:40Z",
           "content": "¿Hay alguno de tus dispositivos de Apple que haya muerto realmente?, me preguntó mi cuñado hace unos días mientras comíamos en mi retiro vacacional. La respuesta obvia que pasó rápidamente por mi cab… [+4609 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "Jesús Quesada",
           "title": "El cargador plegable MagSafe triple para iPhone, Apple Watch y AirPods que no puede faltar en tus viajes está de oferta",
           "description": "Si llevas varios dispositivos electrónicos en tus vacaciones, te habrás dado cuenta de lo incómodo que es llevar múltiples cargadores y cables en la maleta. Esta estación de carga inalámbrica MagSafe plegable de BOCLOUD para iPhone, Apple Watch y AirPods se p…",
           "url": "https://www.applesfera.com/seleccion/cargador-plegable-magsafe-triple-para-iphone-apple-watch-airpods-que-no-puede-faltar-tus-viajes-esta-oferta",
           "urlToImage": "https://i.blogs.es/6bc042/cargador-triple-magsafe-oferta/840_560.jpg",
           "publishedAt": "2022-08-23T07:58:54Z",
           "content": "Si llevas varios dispositivos electrónicos en tus vacaciones, te habrás dado cuenta de lo incómodo que es llevar múltiples cargadores y cables en la maleta. Esta estación de carga inalámbrica MagSafe… [+1838 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "Jesús Quesada",
           "title": "'Hermanas hasta la muerte' de Apple TV+ se ve espectacular en esta Smart TV Sony OLED 120 Hz, 700 euros más barata en MediaMarkt",
           "description": "Aunque el número de producciones en su estreno fue muy reducido, lo que le valió muchas críticas, el catálogo de Apple TV+ aumenta ha ido aumentando poco a poco y ya cuenta con varias joyas a las que vale la pena echar un ojo. Y ya que es uno de los servicios…",
           "url": "https://www.applesfera.com/seleccion/hermanas-muerte-apple-tv-se-ve-espectacular-esta-smart-tv-sony-oled-120-hz-700-euros-barata-mediamarkt",
           "urlToImage": "https://i.blogs.es/c7a0c0/oferta-tv-oled-sony/840_560.jpg",
           "publishedAt": "2022-08-23T10:24:50Z",
           "content": "Aunque el número de producciones en su estreno fue muy reducido, lo que le valió muchas críticas, el catálogo de Apple TV+ aumenta ha ido aumentando poco a poco y ya cuenta con varias joyas a las que… [+1733 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "David Bernal Raspall",
           "title": "La beta 7 de iOS 16 y el resto de sistemas ya está disponible para desarrolladores",
           "description": "Después de la importante cantidad de novedades que vimos en la beta 4, y de los cambios de la beta 5, como por ejemplo la posibilidad de ver el nivel de carga de la batería de forma numérica en el iPhone, y de que la sexta beta llegara prácticamente sin ningú…",
           "url": "https://www.applesfera.com/desarrollo-de-software/beta-7-ios-16-resto-sistemas-esta-disponible-para-desarrolladores",
           "urlToImage": "https://i.blogs.es/10c3cc/hero/840_560.jpeg",
           "publishedAt": "2022-08-23T17:06:37Z",
           "content": "Después de la importante cantidad de novedades que vimos en la beta 4, y de los cambios de la beta 5, como por ejemplo la posibilidad de ver el nivel de carga de la batería de forma numérica en el iP… [+1849 chars]"
           },
        {
           "source": {
           "id": null,
           "name": "Applesfera.com"
           },
           "author": "Miguel López",
           "title": "Ya tenemos rastros del iPhone 14 en las bases de datos, y eso es otra señal de que el anuncio del evento es inminente",
           "description": "Estamos en días de calma previa a la tormenta, con el evento del iPhone 14 apuntando al 7 de septiembre (yo apostaba por el 12 o 13 pero me alegro de equivocarme si esperamos menos) y con pistas cada vez más claras. Y pocas cosas pueden haber más claras que u…",
           "url": "https://www.applesfera.com/iphone/tenemos-rastros-iphone-14-bases-datos-eso-otra-senal-que-anuncio-evento-inminente",
           "urlToImage": "https://i.blogs.es/c74cd9/1366_2000/840_560.jpeg",
           "publishedAt": "2022-08-23T17:03:32Z",
           "content": "Estamos en días de calma previa a la tormenta, con el evento del iPhone 14 apuntando al 7 de septiembre (yo apostaba por el 12 o 13 pero me alegro de equivocarme si esperamos menos) y con pistas cada… [+1018 chars]"
           }
           ]
    constructor(){
        super();
        console.log("Hello I am a constructor of News component");
        this.state={
            articles: this.articles,
            loading: false
        }
      }
   

  render() {
    return (
      <div className="container" my-3>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4">
                <NewsItem title="myTitle" description="mydesc"
                 imageUrl="https://cdn.arstechnica.net/wp-content/uploads/2021/10/NASA_SLS-CROPPED-760x380.jpeg" newsUrl="TODO"/>
                     </div>

            })}
                
           </div>  
        </div>           
    
    )
    
  }
}

export default News