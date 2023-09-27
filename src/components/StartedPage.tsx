/* eslint-disable no-useless-escape */
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import CodeHighlighter from '../reusable/CodeHighlerter';
import '../styles/started.css'
import { ReusableButtonFill } from '../reusable/Button';
import { AiFillFileText, AiOutlineKey } from "react-icons/ai";

export default function StartedPage(): JSX.Element {
  const linkStyle = {
    color: '#1a73e8',
    textDecoration: 'none',
  }

  const handleButtonClick = () => {
    alert('Tombol ditekan!');
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const javascript = `
  {
    "status": "ok",
    "totalResults": 1412,
    -"articles": [
    -{
    -"source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Steve Dent",
    "title": "Apple's 10.9-inch iPad is $379 right now",
    "description": "There's never been a better time to buy Apple's 10.9-inch 2022 iPad, as the 64GB Wi-Fi model has dropped down to $379 on B&H Photo Video, near an all time low. That's a savings of $70 off the regular $449 price on the blue and silver options, or $399 for the …",
    "url": "https://www.engadget.com/apples-109-inch-ipad-is-379-right-now-113542418.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/tigCKbebaU9VCZdJdSpOng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/0b39c380-5c53-11ee-bb53-86260d7ef5ee",
    "publishedAt": "2023-09-26T11:35:42Z",
    "content": "There's never been a better time to buy Apple's 10.9-inch 2022 iPad, as the 64GB Wi-Fi model has dropped down to $379 on B&amp;H Photo Video, near an all time low. That's a savings of $70 off the reg… [+1681 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "namerah.saud-fatmi@futurenet.com (Namerah Saud Fatmi)",
    "title": "Does the iPhone 15 use USB-C?",
    "description": "Apple hasn't revolutionized the world of smartphones this time around, but there is a major improvement in the iPhone 15 series.",
    "url": "https://www.androidcentral.com/phones/does-the-iphone-15-use-usb-c",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/7tvyDcEubpM5X2f4QcVFcQ-1200-80.jpg",
    "publishedAt": "2023-09-26T12:54:00Z",
    "content": "Does the iPhone 15 use USB-C?\r\nYes, the iPhone 15 comes with a USB-C port. However, the version of USB-C is different on each iPhone 15 series model.\r\nWhy you can trust Android Central \r\nOur expert r… [+1825 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "namerah.saud-fatmi@futurenet.com (Namerah Saud Fatmi)",
    "title": "Best USB-C cables for iPhone 15",
    "description": "Time to grab a USB-C cable for your iPhone 15 series device if you've invested in one. Here are your best options.",
    "url": "https://www.androidcentral.com/accessories/best-usb-c-cables-for-iphone-15",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/Lgm27dmqK5QcEEG3BxDpUo-1200-80.jpeg",
    "publishedAt": "2023-09-26T12:54:11Z",
    "content": "Apple sent the Lightning connector to its permanent resting place by adding USB-C to the iPhone 15 lineup. It's important to know that not all the Type-C connectors on the iPhone 15 series are the sa… [+1383 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Apple Watch Users Report Weather Complication Issues in watchOS 10",
    "description": "Some Apple Watch users on watchOS 10 have reported experiencing issues with Weather complications failing to display data on the watch face, despite the Weather app itself presenting no such issues. \n\n\n\n\n\nApple Watch users have taken to the MacRumors forums, …",
    "url": "https://www.macrumors.com/2023/09/26/watchos-10-weather-complication-issues/",
    "urlToImage": "https://images.macrumors.com/t/l-Ca4Y_Vc1A6f5IsvLM3Wx4LYTA=/1920x/article-new/2023/09/weather-complications.jpg",
    "publishedAt": "2023-09-26T07:21:43Z",
    "content": "Some Apple Watch users on watchOS 10 have reported experiencing issues with Weather complications failing to display data on the watch face, despite the Weather app itself presenting no such issues. … [+1073 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple's Back to School Promotion Ends Soon: Here's What You Can Get",
    "description": "In June, Apple launched its annual Back to School promotion in the U.S. for college students. This year's promotion offers students a free Apple gift card with the purchase of an eligible Mac or iPad from Apple, along with 20% off AppleCare+ plans.\n\n\n\n\n\nIn th…",
    "url": "https://www.macrumors.com/2023/09/26/apples-back-to-school-2023-promotion-ends-soon/",
    "urlToImage": "https://images.macrumors.com/t/uMHf-9WyB74WTL6stE4wxkYcPUs=/2178x/article-new/2022/06/2022-back-to-school-apple-feature.jpg",
    "publishedAt": "2023-09-26T12:38:55Z",
    "content": "In June, Apple launched its annual Back to School promotion in the U.S. for college students. This year's promotion offers students a free Apple gift card with the purchase of an eligible Mac or iPad… [+976 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "EU Chief Calls on Apple CEO Tim Cook to Open Hardware and Software Ecosystem",
    "description": "EU industry chief Thierry Breton today publicly called on Apple CEO Tim Cook to open the company's ecosystem of hardware and software to rivals (via Reuters).\n\n\n\n\n\nFollowing an in-person meeting with Cook earlier today in Brussels, Belgium, Breton told Reuter…",
    "url": "https://www.macrumors.com/2023/09/26/eu-calls-on-apple-to-open-ecosystem/",
    "urlToImage": "https://images.macrumors.com/t/sMSL9x9rGpB0mKcQjyg_5E2d5PQ=/1600x/article-new/2016/01/European-Commisssion.jpg",
    "publishedAt": "2023-09-26T15:01:56Z",
    "content": "EU industry chief Thierry Breton today publicly called on Apple CEO Tim Cook to open the company's ecosystem of hardware and software to rivals (via Reuters).\r\nFollowing an in-person meeting with Coo… [+1467 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "macOS Sonoma Optimizes Latest 13-Inch MacBook Air's Battery Health",
    "description": "macOS Sonoma better optimizes the long-term battery health of the 13-inch MacBook Air with the M2 chip, according to Apple's release notes for the software update.\n\n\n\n\n\n\"Battery health management updated on 13-inch MacBook Air with M2 chip to better optimize …",
    "url": "https://www.macrumors.com/2023/09/26/macos-sonoma-13-macbook-air-m2-battery-health/",
    "urlToImage": "https://images.macrumors.com/t/ZIsLyQh8PwOkcZy3nrc2o2eE_cs=/1920x/article-new/2023/09/macbook-air-spacegray-purple-battery.jpg",
    "publishedAt": "2023-09-26T15:15:00Z",
    "content": "macOS Sonoma better optimizes the long-term battery health of the 13-inch MacBook Air with the M2 chip, according to Apple's release notes for the software update.\r\n\"Battery health management updated… [+1351 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "iPhone 13 Pro vs. iPhone 15 Pro Buyer's Guide: 50 Differences Compared",
    "description": "The iPhone 15 Pro brings 50 new features and improvements to Apple's high-end smartphones compared to the iPhone 13 Pro, which was released two years prior. This buyer's guide breaks down every major difference you should be aware of between the two generatio…",
    "url": "https://www.macrumors.com/guide/iphone-13-pro-vs-iphone-15-pro/",
    "urlToImage": "https://images.macrumors.com/t/kDDKHu2f1sTtuJRfcwk9mxs7Pcg=/2500x/article-new/2023/09/iPhone-13-Pro-vs-15-Pro-Feature-1.jpg",
    "publishedAt": "2023-09-26T10:40:34Z",
    "content": "The iPhone 15 Pro brings 50 new features and improvements to Apple's high-end smartphones compared to the iPhone 13 Pro, which was released two years prior. This buyer's guide breaks down every major… [+7578 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Apple Music Radio Shows Now Available in Apple Podcasts App",
    "description": "Apple Music subscribers can now stream shows from Apple's original radio catalog via the Apple Podcasts app, fulfilling a new services pledge made by the company earlier this year.\n\n\n\n\n\nThe new Podcasts app integration means eligible subscribers can delve int…",
    "url": "https://www.macrumors.com/2023/09/26/apple-music-radio-shows-podcasts-app/",
    "urlToImage": "https://images.macrumors.com/t/AxPLqRePDGOFi-f7RujSEHwX_KE=/1920x/article-new/2023/09/apple-music-channel-podcasts.jpg",
    "publishedAt": "2023-09-26T09:52:41Z",
    "content": "Apple Music subscribers can now stream shows from Apple's original radio catalog via the Apple Podcasts app, fulfilling a new services pledge made by the company earlier this year.\r\nThe new Podcasts … [+887 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Hartley Charlton",
    "title": "Apple Looking to Save Space in Future iPhones With Thinner Circuit Boards",
    "description": "Apple will begin using a new material to make its printed circuit boards thinner starting next year, according to a source with a good track record.\n\n\n\n\n\nApple will reportedly switch to using resin coated copper (RCC) foil as a new printed circuit board (PCB)…",
    "url": "https://www.macrumors.com/2023/09/26/apple-looking-to-save-space-with-thinner-pcbs/",
    "urlToImage": "https://images.macrumors.com/t/IVZhzM2GRs4phrpsKPH_q1To7UI=/1920x/article-new/2020/10/Apple-Silicon-Teal-Feature.jpg",
    "publishedAt": "2023-09-26T13:42:48Z",
    "content": "Apple will begin using a new material to make its printed circuit boards thinner starting next year, according to a source with a good track record.\r\nApple will reportedly switch to using resin coate… [+1118 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "22 New Features You May Have Missed in watchOS 10",
    "description": "Apple last week launched watchOS 10, the latest major software update for compatible Apple Watch models, as well as the new Apple Watch Series 9 and second-generation Apple Watch Ultra, both of which come with ‌watchOS 10‌ pre-installed. Headline ‌watchOS 10‌…",
    "url": "https://www.macrumors.com/guide/22-hidden-features-watchos-10-apple-watch/",
    "urlToImage": "https://images.macrumors.com/t/gWPDtBDtK4euvXlOjSgKeMe1MvQ=/2248x/article-new/2023/09/22-Hidden-Features-in-watchOS-10-Feature.jpg",
    "publishedAt": "2023-09-26T14:33:17Z",
    "content": "Apple last week launched watchOS 10, the latest major software update for compatible Apple Watch models, as well as the new Apple Watch Series 9 and second-generation Apple Watch Ultra, both of which… [+11427 chars]"
    },
    -{
    -"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Hasan Chowdhury",
    "title": "Apple's revenue from products made in China could plummet to less than a third in the next five years, a top investor says",
    "description": "Apple depends on China for manufacturing its top products, but geopolitical pressures could lead to a significant drop in revenue.",
    "url": "https://www.businessinsider.com/apple-revenue-china-smartphones-products-fall-analysts-2023-9",
    "urlToImage": "https://i.insider.com/65101df6e4e6ee001901bbde?width=1200&format=jpeg",
    "publishedAt": "2023-09-26T11:21:20Z",
    "content": "Apple has had a longstanding dependence on China for manufacturing its products.Mario Tama/Getty Images\r\n<ul><li>Apple has become a revenue-generating machine thanks in large part to products made in… [+2122 chars]"
    },
    -{
    -"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Beatrice Nolan",
    "title": "Apple's iPhone 15 shipped with a bug that left some users with frozen phones",
    "description": "Some users complained a bug led to the \"Apple logo of death\" when they tried to transfer their information directly from an old iPhone.",
    "url": "https://www.businessinsider.com/apple-iphone-15-shipped-frustrating-setup-bug-frozen-screens-2023-9",
    "urlToImage": "https://i.insider.com/651159bae4e6ee001901cb41?width=1200&format=jpeg",
    "publishedAt": "2023-09-26T10:23:17Z",
    "content": "Apple announced the iPhone 15 at its Wonderlust event this month.CFOTO/Future Publishing via Getty Images\r\n<ul><li>Apple's iPhone 15 shipped with a bug that left some users with the \"Apple logo of de… [+1940 chars]"
    },
    -{
    -"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Tom Carter",
    "title": "Why you should consider getting the cheaper iPhone 14 and not the iPhone 15 if you're upgrading",
    "description": "The iPhone 14 is selling for $100 cheaper than the new iPhone 15.",
    "url": "https://www.businessinsider.com/what-to-consider-upgrade-to-iphone-15-2023-9",
    "urlToImage": null,
    "publishedAt": "2023-09-26T14:08:26Z",
    "content": "Apple announced the iPhone 15 at its 'Wonderlust' event earlier in SeptemberCFOTO/Future Publishing via Getty Images\r\n<ul><li>The iPhone 15 went on sale around the world over the weekend, with some f… [+3721 chars]"
    },
    -{
    -"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Joseph Wilkins",
    "title": "A slice of the Golden State Warriors could fetch $700 million as sellers look to offload part of the NBA team, report says",
    "description": "The Golden State Warriors have made good progress since an ownership group led by investor Joe Lacob paid $450 million for the team in 2010.",
    "url": "https://markets.businessinsider.com/news/stocks/golden-state-warriors-stake-up-for-sale-700-million-valuation-2023-9",
    "urlToImage": "https://i.insider.com/65119018e2c0220019ef4413?width=1200&format=jpeg",
    "publishedAt": "2023-09-26T10:11:23Z",
    "content": "Apple exec Eddy Cue celebrating at a Golden State Warriors basketball game.Photo by Scott Strazzante/San Francisco Chronicle via Getty Images\r\n<ul>\n<li>A minority stake in the Golden State Warriors i… [+1847 chars]"
    },
    -{
    -"source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Aaron Mok",
    "title": "Open AI CEO Sam Altman and his boyfriend Oliver Mulherin want to have kids soon",
    "description": "ChatGPT head Sam Altman says he likes big families and will raise the children with his boyfriend, who he recently brought to the White House.",
    "url": "https://www.businessinsider.com/openai-chatgpt-ceo-sam-altman-wants-kids-boyfriend-2023-9",
    "urlToImage": "https://i.insider.com/6511d94359fd710019f00ad5?width=1200&format=jpeg",
    "publishedAt": "2023-09-26T09:06:01Z",
    "content": "OpenAI CEO Sam Altman, right, with his boyfriend, Oliver Mulherin, at a White House dinner in late June. Altman said the couple wants to have children.JULIA NIKHINSON/Getty\r\n<ul><li>OpenAI CEO Sam Al… [+2387 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Harvard Business Review"
    },
    "author": "Martin Reeves, Mihnea Moldoveanu, Adam Job",
    "title": "The Strategic Benefits of Randomized Decision-Making",
    "description": "In highly ambiguous and challenging contexts, a random approach to decision-making confers a number of advantages. Operations managers have been using randomized decision-making since World War II (randomized search was used to locate enemy submarines in the …",
    "url": "https://hbr.org/2023/09/the-strategic-benefits-of-randomized-decision-making",
    "urlToImage": "https://hbr.org/resources/images/article_assets/2023/09/Sep23_26_1161120429.jpg",
    "publishedAt": "2023-09-26T12:05:33Z",
    "content": "In a volatile environment, searching for the single best course of action stalls progress.\r\n\"&gt;\r\nThe Naskapi, a nomadic people indigenous to Quebec and Labrador, hunted most of their food. You migh… [+17496 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Harvard Business Review"
    },
    "author": null,
    "title": "The PGA Tour and LIV Golf Merger: Competition Vs. Cooperation",
    "description": "Did the PGA Tour take the right actions in response to LIV Golf’s entry?",
    "url": "https://hbr.org/podcast/2023/09/the-pga-tour-and-liv-golf-merger-competition-vs-cooperation",
    "urlToImage": "https://hbr.org/resources/images/article_assets/2023/04/wide-cold-call-hbr.png",
    "publishedAt": "2023-09-26T13:33:00Z",
    "content": "BRIAN KENNY: On July 11th, 2023, the Senate Permanent Subcommittee on Investigations convened a hearing on a proposed merger of the PGA Tour and its upstart rival, the LIV Golf tour. Golf may be a ge… [+29199 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Harvard Business Review"
    },
    "author": null,
    "title": "Improve Your Impromptu Speaking",
    "description": "A conversation with Stanford’s Matt Abrahams on an essential skill for leaders.",
    "url": "https://hbr.org/podcast/2023/09/improve-your-impromptu-speaking",
    "urlToImage": "https://hbr.org/resources/images/article_assets/2020/09/wide-ideacast.png",
    "publishedAt": "2023-09-26T12:20:00Z",
    "content": "ALISON BEARD: Welcome to the HBR IdeaCast from Harvard Business Review. I’m Alison Beard.\r\nWe all know the feeling of being asked to speak, or feeling like we should speak when we aren’t really expec… [+29359 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Kotaku"
    },
    "author": "Ashley Bardhan",
    "title": "Resident Evil 4 Remake Will Cost $60 On iPhone",
    "description": "The Resident Evil 4 remake costs $60 for its iPhone 15 Pro port, as much as is charged for standard console editions.Read more...",
    "url": "https://kotaku.com/resident-evil-4-remake-iphone-15-pro-release-date-1850873665",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eb6d8b9e7c22b97812092e40a06ed56d.jpg",
    "publishedAt": "2023-09-26T15:40:05Z",
    "content": "The Resident Evil 4 remake costs $60 for its iPhone 15 Pro port, as much as is charged for standard console editions.\r\nThere are ways to justify spending $60 in the App Store, where pre-orders for RE… [+2167 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Boing Boing"
    },
    "author": "Boing Boing's Shop",
    "title": "No more sad puppy dog eyes! DOGTV and Wicked Ball can keep your doggo happy and entertained",
    "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nTL;DR: Leaving your pup home alone is tough, so why not get them some toys and entertainment made to keep them happy …",
    "url": "https://boingboing.net/2023/09/26/no-more-sad-puppy-dog-eyes-dogtv-and-wicked-ball-can-keep-your-doggo-happy-and-entertained.html",
    "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/09/Boing-Boing-Dog-TV.jpeg?fit=1200%2C800&ssl=1",
    "publishedAt": "2023-09-26T15:00:00Z",
    "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nTL;DR: Leaving your pup home alone is tough, so why not get… [+2186 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Eduardo Arcos",
    "title": "El iPhone 16 tendría un nuevo botón capacitivo llamado «botón de captura»",
    "description": "El iPhone 15 acaba de ser lanzado, pero los rumores relacionados con el iPhone 16 ya están circulando. Es normal, Apple empieza a trabajar en nuevos smartphones años antes de su puesta en venta. De acuerdo a un reporte publicado por MacRumors, el futuro teléf…",
    "url": "http://hipertextual.com/2023/09/iphone-16-boton-captura",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/09/iphone-16-hptx-scaled.jpg",
    "publishedAt": "2023-09-26T11:59:32Z",
    "content": "El iPhone 15 acaba de ser lanzado, pero los rumores relacionados con el iPhone 16 ya están circulando. Es normal, Apple empieza a trabajar en nuevos smartphones años antes de su puesta en venta. De a… [+2513 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "José María López",
    "title": "Las mejores apps para el modo en reposo o StandBy de iOS 17",
    "description": "Si has actualizado tu iPhone a iOS 17 habrás notado muchos cambios. Uno de ellos lo verás cuando cargues la batería de tu teléfono y lo coloques en horizontal. La pantalla del iPhone mostrará la hora. Y si deslizas el dedo por encima, podrás ver otras cosas c…",
    "url": "http://hipertextual.com/2023/09/apps-widgets-modo-standby-reposo",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/06/apple-standby-ios17-scaled.jpeg",
    "publishedAt": "2023-09-26T08:07:11Z",
    "content": "Si has actualizado tu iPhone a iOS 17 habrás notado muchos cambios. Uno de ellos lo verás cuando cargues la batería de tu teléfono y lo coloques en horizontal. La pantalla del iPhone mostrará la hora… [+6310 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Javier Pastor",
    "title": "CMF, la submarca de Nothing, se estrena con auriculares, cargador GaN y, sorpresa, reloj cuantificador",
    "description": "El pasado mes de agosto supimos que Nothing lanzaba su propia submarca. Se llamaría CMF by Nothing, y su objetivo era el de ofrecer productos similares pero más asequibles. Ahora ya conocemos esos primeros productos, que se lanzan desde la web oficial de la n…",
    "url": "https://www.xataka.com/accesorios/cmf-submarca-nothing-se-estrena-auriculares-cargador-gan-sorpresa-reloj-cuantificador",
    "urlToImage": "https://i.blogs.es/2333ed/watch1/840_560.jpeg",
    "publishedAt": "2023-09-26T13:16:58Z",
    "content": "El pasado mes de agosto supimos que Nothing lanzaba su propia submarca. Se llamaría CMF by Nothing, y su objetivo era el de ofrecer productos similares pero más asequibles. Ahora ya conocemos esos pr… [+3068 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Yúbal Fernández",
    "title": "MacOS 14 Sonoma : sus principales novedades, dispositivos compatibles y cómo instalarlo",
    "description": "Esta tarde del 26 de septiembre llega oficialmente la versión final de macOS 14 Sonoma, la nueva versión del sistema operativo de sobremesa de Apple. Si tienes un Mac te interesa, y nosotros te traemos la lista con todas las novedades que vas a encontrarte cu…",
    "url": "https://www.xataka.com/basics/macos-14-sonoma-sus-principales-novedades-dispositivos-compatibles-como-instalarlo",
    "urlToImage": "https://i.blogs.es/6ec07e/macos/840_560.jpeg",
    "publishedAt": "2023-09-26T11:01:56Z",
    "content": "Esta tarde del 26 de septiembre llega oficialmente la versión final de macOS 14 Sonoma, la nueva versión del sistema operativo de sobremesa de Apple. Si tienes un Mac te interesa, y nosotros te traem… [+4505 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Enrique Pérez",
    "title": "Xiaomi Watch 2 Pro: el reloj inteligente más completo de Xiaomi abraza WearOS para mirar de tú a tú a los mejores",
    "description": "Xiaomi ya está preparado para competir por la categoría de mejor reloj inteligente. El nuevo Xiaomi Watch 2 Pro, presentado junto a los Xiaomi 13T y la Smart Band 8, es el reloj más completo hasta la fecha del fabricante en esta categoría. Un reloj que apuest…",
    "url": "https://www.xataka.com/relojes-inteligentes/xiaomi-watch-2-pro-caracteristicas-precio-ficha-tecnica",
    "urlToImage": "https://i.blogs.es/2955ac/xiaomi-watch-2-pro/840_560.jpeg",
    "publishedAt": "2023-09-26T13:31:25Z",
    "content": "Xiaomi ya está preparado para competir por la categoría de mejor reloj inteligente. El nuevo Xiaomi Watch 2 Pro, presentado junto a los Xiaomi 13T y la Smart Band 8, es el reloj más completo hasta la… [+3280 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "John Tones",
    "title": "La huelga de guionistas ha llegado a su fin pero su impacto va a ser muy largo: la cadena de producción se ha roto",
    "description": "Tras cinco meses en huelga, ha llegado al fin el acuerdo entre el sindicato Writers Guild of America y la asociación de productoras, la Alliance of Motion Picture and Television Producers. Cinco días de negociación que culminaron con un preacuerdo que aún hay…",
    "url": "https://www.xataka.com/cine-y-tv/huelga-guionistas-ha-llegado-a-su-fin-su-impacto-va-a-ser-muy-largo-cadena-produccion-se-ha-roto",
    "urlToImage": "https://i.blogs.es/3ebdf5/dune-en-huelga/840_560.jpeg",
    "publishedAt": "2023-09-26T12:31:23Z",
    "content": "Tras cinco meses en huelga, ha llegado al fin el acuerdo entre el sindicato Writers Guild of America y la asociación de productoras, la Alliance of Motion Picture and Television Producers. Cinco días… [+4213 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Ruky.me"
    },
    "author": null,
    "title": "I was happy, sad, lost and lonely without a smartphone at the same time",
    "description": "I haven't posted on my blog for a long time, partly because I have been super busy with my personal and work life. I moved to Switzerland to work as a health informatics specialist for the Swiss Tropical and Public Health Institute, and moving to Switzerland …",
    "url": "https://ruky.me/2023/09/26/i-was-happy-sad-lost-and-lonely-without-a-smartphone-at-the-same-time/",
    "urlToImage": "https://ruky.me/wp-content/uploads/2020/12/15A7DE22-2C11-4D5A-A2EE-9CCE51B929B5.jpeg",
    "publishedAt": "2023-09-26T05:24:10Z",
    "content": "I haven’t posted on my blog for a long time, partly because I have been super busy with my personal and work life. I moved to Switzerland to work as a health informatics specialist for the Swiss Trop… [+3754 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Weaviate.io"
    },
    "author": "https://www.linkedin.com/in/804250ab/",
    "title": "What Is a Vector Database?",
    "description": "Vector databases explained by their core concepts of vector embeddings, vector search, and vector indexing",
    "url": "https://weaviate.io/blog/what-is-a-vector-database",
    "urlToImage": "https://weaviate.io/assets/images/hero-37f423d8f63557af10a15fd7eb2ce652.png",
    "publishedAt": "2023-09-26T07:09:46Z",
    "content": "If you have just recently heard the term vector database for the first time, you are not alone. Although vector databases have been around for a few years, theyve just recently drawn the wider develo… [+14806 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Kleines iPhone 15 Pro: Erneut ProRes-Einschränkungen – doch es gibt einen Trick",
    "description": "Apple reduziert beim kleinsten iPhone 15 Pro den Videofunktionsumfang aus technischen Gründen. Doch hier gibt es einen Workaround.",
    "url": "https://www.heise.de/news/Kleines-iPhone-15-Pro-Erneut-ProRes-Einschraenkungen-doch-es-gibt-einen-Trick-9309721.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/5/1/8/7/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large_2x-e51a86c94c0c360d.png",
    "publishedAt": "2023-09-26T09:14:00Z",
    "content": "Wer das kleinste iPhone 15 Pro mit 128 GByte erwirbt, kann nicht alle Kamerafunktionen nutzen. Wie Apple in seinem Gerätevergleich in der Apple-Store-Anwendung bestätigt, sind hier nur maximal 1080p-… [+2358 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "Teardowns: Schlechte Noten fürs iPhone 15 Pro Max, Lob für Apple Watch Ultra 2",
    "description": "iFixIt hat sowohl das teuerste iPhone 15 Pro Max als auch die neue Apple Watch Ultra 2 zerlegt. In Sachen Reparierbarkeit gibt es unterschiedliche Wertungen.",
    "url": "https://www.heise.de/news/Teardowns-Schlechte-Noten-fuers-iPhone-15-Pro-Max-Lob-fuer-Apple-Watch-Ultra-2-9317411.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/9/2/7/2/Screenshot_2023-09-26_at_10.57.35-d02ac299d5387cd0.png",
    "publishedAt": "2023-09-26T10:09:00Z",
    "content": "Der Reparaturdienstleister iFixIt hat sich sowohl iPhone 15 Pro Max als auch Apple Watch Ultra 2 für einen Teardown vorgenommen. Während die Ultra 2 einige Verbesserungen bei der Reparierbarkeit zeig… [+2055 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Malte Kirchner",
    "title": "AirPods Pro und die Gesprächserkennung: Welche Rolle Kieferbewegungen spielen",
    "description": "Apple gibt weitere Details rund um die neuen Funktionen der AirPods bekannt. Mit welchen Tricks das Team arbeitete, um die Software intelligenter zu machen.",
    "url": "https://www.heise.de/news/AirPods-Pro-und-die-Gespraechserkennung-Welche-Rolle-Kieferbewegungen-spielen-9318173.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/9/6/9/4/og__ch3csr9zmviq_overview-7ea02fc4965bc48d.png",
    "publishedAt": "2023-09-26T15:25:00Z",
    "content": "Inhaltsverzeichnis\r\nApple hat weitere Details preisgegeben, wie die neuen Softwarefunktionen für adaptiven Ton und die Gesprächserkennung der AirPods Pro 2 funktionieren. Ein Verantwortlicher gab dab… [+3320 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Clemens Gleich",
    "title": "heise+ | Smart Heizen: Wie Sie Wärmepumpen optimal betreiben",
    "description": "Die Wärmepumpe hat sich als häufigste Neubau-Heiztechnik etabliert. Dabei gibt einiges zu beachten, da manche Optimierung sogar Zusatzkosten erzeugen kann.",
    "url": "https://www.heise.de/ratgeber/Smart-Heizen-Wie-Sie-Waermepumpen-optimal-betreiben-9297900.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/8/8/4/7/ct.2023.22_heizungen_moritz_reichartz_126034_jow_a_online-2376db404c8ff7a6.jpg",
    "publishedAt": "2023-09-26T07:30:00Z",
    "content": "Inhaltsverzeichnis\r\nEs gibt keine Gadgets oder versteckten Einstellungsmenüs, die eine ineffizient laufende Wärmepumpe plötzlich effizient machen. Haustechnik besteht hauptsächlich aus Planung, und j… [+3985 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Steffen Herget",
    "title": "Xiaomi 13T Pro: Smartphone mit Leica-Kamera, aber ohne Snapdragon",
    "description": "Xiaomi wappnet sich mit dem 13T und dem 13T Pro fürs Weihnachtsgeschäft und schickt zudem neue Wearables ins Rennen.",
    "url": "https://www.heise.de/news/Xiaomi-13T-Pro-Smartphone-mit-Leica-Kamera-aber-ohne-Snapdragon-9316269.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/8/6/8/9/Green-Horizontal-4b783f338be56db2.jpg",
    "publishedAt": "2023-09-26T13:30:00Z",
    "content": "Zwischen dem Apple iPhone 15 und dem kommende Woche erwarteten Google Pixel 8 stellt Xiaomi mit dem 13T und 13T Pro seine neuen Topmodelle vor. Die beiden Smartphones ähneln sich stark, unterscheiden… [+3176 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Andreas Knobloch",
    "title": "Dienstag: ChatGPT kann nun sprechen, Tinder mit 500-Dollar-Monatsabo",
    "description": "ChatGPT mit Sprach- und Bildfunktionen + Premium-Abo bei Tinder + Datenweitergabe an Schufa + Schluss mit Basic-HTML-Ansicht von Gmail + Drohne mit Rundumsicht",
    "url": "https://www.heise.de/news/Dienstag-ChatGPT-kann-nun-sprechen-Tinder-mit-500-Dollar-Monatsabo-9316316.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/8/7/1/3/Wochentage-source-sans-788cbad913e85b3c.png",
    "publishedAt": "2023-09-26T04:30:00Z",
    "content": "Eine neue Version des KI-Chatbots ChatGPT von OpenAI erhält Sprach- und Bildfunktionen. Es lassen sich Gespräche führen oder Probleme anhand von Fotos lösen. Die Dating-Plattform Tinder bietet ihren … [+4047 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Heinz Behling",
    "title": "heise+ | 3D-Drucker mit Klipper optimieren",
    "description": "Mit der 3D-Druck-Firmware Klipper lässt sich die Druckzeit erheblich verkürzen, denn damit kann der Drucker mit erheblich höherem Tempo arbeiten.",
    "url": "https://www.heise.de/ratgeber/3D-Drucker-mit-Klipper-optimieren-9304748.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/0/2/5/3/0/0x0_n_1-f01e7606ee59d33e.jpg",
    "publishedAt": "2023-09-26T15:00:00Z",
    "content": "Inhaltsverzeichnis\r\nFalls Sie schon einmal der fast unwiderstehlichen Verlockung nachgegeben und einem 3D-Drucker bei der Arbeit zugeschaut haben, wissen Sie: Hotend und Drucktisch sind ständig in Be… [+3962 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "You can now access Apple Music radio shows in the Apple Podcasts app with iOS 17",
    "description": "With iOS 17, Apple has introduced a new interface for its Podcasts app, which now has a new Now Playing screen, as well as more search filters and a better Up Next experience. The company also announced that third-party apps can now connect an App Store subsc…",
    "url": "https://9to5mac.com/2023/09/25/apple-music-radio-shows-podcasts/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/Apple-Music-Radio-Podcasts.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T00:52:18Z",
    "content": "With iOS 17, Apple has introduced a new interface for its Podcasts app, which now has a new Now Playing screen, as well as more search filters and a better Up Next experience. The company also announ… [+1786 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Freediving supported on both Apple Watch Ultra models with Oceanic+ 2.0",
    "description": "The new Oceanic+ 2.0 app finally supports freediving of up to 130 feet (40 meters) on both the original Apple Watch Ultra and the new Ultra 2.\n\n\n\nThe ability to use the Apple Watch Ultra as a fully-fledged dive computer was one of the headline features when A…",
    "url": "https://9to5mac.com/2023/09/26/freediving-apple-watch-ultra/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/Freediving-with-Apple-Watch-Ultra.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T12:29:44Z",
    "content": "The new Oceanic+ 2.0 app finally supports freediving of up to 130 feet (40 meters) on both the original Apple Watch Ultra and the new Ultra 2.\r\nThe ability to use the Apple Watch Ultra as a fully-fle… [+3621 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "iPhone 15 Pro: Why Apple made the right call requiring a ‘press and hold’ for the Action button",
    "description": "When Apple unveiled the iPhone 15 Pro and its new Action button, there was a detail that caught a lot of people off guard. Instead of just pressing the Action button to trigger its assigned task, you had to press and hold the button. \n\n\n\nAfter three days with…",
    "url": "https://9to5mac.com/2023/09/26/iphone-15-pro-action-button-press-and-hold/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-max-colors.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T14:37:24Z",
    "content": "When Apple unveiled the iPhone 15 Pro and its new Action button, there was a detail that caught a lot of people off guard. Instead of just pressing the Action button to trigger its assigned task, you… [+2706 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "After USB-C win, EU tells Tim Cook that Apple must ‘open up its gates to competitors’",
    "description": "The iPhone 15 has USB-C, a move largely due to impending legislation in the European Union requiring smartphones and other products to use a common charger. Apple also might soon be forced to open the iPhone up to third-party app stores and sideloading thanks…",
    "url": "https://9to5mac.com/2023/09/26/tim-cook-eu-app-store-laws/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-max-usb-c-cable.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T15:57:16Z",
    "content": "The iPhone 15 has USB-C, a move largely due to impending legislation in the European Union requiring smartphones and other products to use a common charger. Apple also might soon be forced to open th… [+2479 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Eddy Cue set to testify in Google antitrust case, will explain why Apple has never made its own search engine",
    "description": "Eddy Cue, Apple’s senior vice president of Services, is set to take the stand on Tuesday to testify in the Department of Justice’s antitrust case against Google. Cue’s testimony, which is expected to last most of the day, will focus largely on the deal betwee…",
    "url": "https://9to5mac.com/2023/09/26/eddy-cue-google-testimony-apple-search/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/11/eddy-cue-duke-university.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T09:00:00Z",
    "content": "Eddy Cue, Apple’s senior vice president of Services, is set to take the stand on Tuesday to testify in the Department of Justice’s antitrust case against Google. Cue’s testimony, which is expected to… [+3443 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "Apple considered using GPS to control Adaptive Audio levels in AirPods Pro",
    "description": "As iOS 17 is now available, Apple has also released a firmware update for the second-generation AirPods Pro that brings some new features, including Adaptive Audio. The feature combines both Transparency and Noise Cancellation modes together and balances betw…",
    "url": "https://9to5mac.com/2023/09/25/apple-gps-adaptive-audio-airpods/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/turn-on-airpods-pro-adaptive-audio.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T03:41:15Z",
    "content": "As iOS 17 is now available, Apple has also released a firmware update for the second-generation AirPods Pro that brings some new features, including Adaptive Audio. The feature combines both Transpar… [+3211 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Here’s where you can use your iPhone as your digital driver’s license or ID so far [September 2023]",
    "description": "Apple announced plans to turn the iPhone into your driver’s license in 2021. Plane tickets, movie passes, and credit cards were already digital. Now it was time to digitize government-issued identification cards.\n\n\n\nSo far, very few U.S. states actually let y…",
    "url": "https://9to5mac.com/2023/09/26/digital-id-drivers-license-iphone-states-airports/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/where-is-my-wallet.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T08:00:00Z",
    "content": "Apple announced plans to turn the iPhone into your drivers license in 2021. Plane tickets, movie passes, and credit cards were already digital. Now it was time to digitize government-issued identific… [+5281 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple pens memo to retail teams on how to manage FineWoven complaints: ‘A luxurious microtwill’",
    "description": "Apple’s new FineWoven cases for iPhone 15 are looking like a surefire flop so far. Now, in response to the blowback, Apple has sent a new memo to its retail employees with guidance on how to address customer questions on things like FineWoven’s durability, ma…",
    "url": "https://9to5mac.com/2023/09/25/iphone-15-finewoven-complaints-retail-stores/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/finewoven-apple-stores.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T02:17:33Z",
    "content": "Apple’s new FineWoven cases for iPhone 15 are looking like a surefire flop so far. Now, in response to the blowback, Apple has sent a new memo to its retail employees with guidance on how to address … [+1997 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "French iPhone 12 drama set to end, as Apple issues software update",
    "description": "The iPhone 12 enjoyed some unexpected time in the spotlight, some three years after launch, when French authorities suddenly announced that it was found to have exceeded legal radiation exposure limits. There was talk of having the model withdrawn from sale.\n…",
    "url": "https://9to5mac.com/2023/09/26/french-iphone-12-drama/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/French-iPhone-12-drama.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T12:02:34Z",
    "content": "Back in the days when blue iPhones were blue ...\r\nThe iPhone 12 enjoyed some unexpected time in the spotlight, some three years after launch, when French authorities suddenly announced that it was fo… [+2541 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5google.com"
    },
    "author": "9to5Google",
    "title": "Hands-on: iPhone 15’s ‘FineWoven’ has Google’s Pixel fabric cases rolling over in their graves",
    "description": "Apple ditched leather accessories with its latest lineup and instead moved to a new “FineWoven” fabric material for iPhone 15. But, after some time using it, FineWoven just reminds me how good Google’s old fabric cases for Pixel were.\n\n\n\n more…",
    "url": "https://9to5google.com/2023/09/26/apple-iphone-15-finewoven-vs-google-pixel-fabric-cases/",
    "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/09/iphone-15-finewoven-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T14:32:01Z",
    "content": "Apple ditched leather accessories with its latest lineup and instead moved to a new “FineWoven” fabric material for iPhone 15. But, after some time using it, FineWoven just reminds me how good Google… [+3407 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Apple’s environmental credentials way ahead of major rivals, but product cycle is biggest issue, says CNET",
    "description": "Apple’s environmental credentials were front and center in the iPhone 15 event thanks to a lengthy and somewhat cringeworthy skit (making an unfunny video with Octavia Spencer is kind of an achievement in itself, but I guess that’s what happens when you commi…",
    "url": "https://9to5mac.com/2023/09/26/apple-environmental-credentials/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/Apples-environmental-credentials.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T14:18:13Z",
    "content": "Apple’s environmental credentials were front and center in the iPhone 15 event thanks to a lengthy and somewhat cringeworthy skit (making an unfunny video with Octavia Spencer is kind of an achieveme… [+3013 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Spotify unveils new ‘Jam’ feature for real-time listening parties",
    "description": "Remember the days of Turntable FM? Spotify is looking to channel that energy with a new feature called Jam. This feature will let users create real-time listening sessions that other people can join in on “from wherever” they are. Here’s how the feature works…",
    "url": "https://9to5mac.com/2023/09/26/spotify-jam-new-feature-music/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/Jam-Image.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T07:00:00Z",
    "content": "Remember the days of Turntable FM? Spotify is looking to channel that energy with a new feature called Jam. This feature will let users create real-time listening sessions that other people can join … [+2431 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Things for macOS Sonoma adds new widgets, and they’re all interactive and desktop-ready",
    "description": "It’s macOS Sonoma launch day, and Cultured Code is out with a new widget-packed version of Things. macOS 14 introduces...",
    "url": "https://9to5mac.com/2023/09/26/things-macos-sonoma/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/things-macos-sonoma-widgets.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T14:29:18Z",
    "content": "It’s macOS Sonoma launch day, and Cultured Code is out with a new widget-packed version of Things.\r\nmacOS 14 introduces the ability to place app widgets directly on your desktop. Previously, widgets … [+953 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Rikka Altland",
    "title": "iPhone 15 Pro is free on Boost Infinite, official iPhone 14 leather cases $35, MagSafe Duo, more",
    "description": "Missing out on all of the new iPhone action? Boost Infinite has your back by offering iPhone 15 Pro for free. The best part? There’s no trade in required! It’s joined by some official iPhone 14 Pro leather case discounts at $35, as well as the last hurrah for…",
    "url": "https://9to5mac.com/2023/09/26/iphone-15-pro-boost-infinite-iphone-14-leather-cases/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iPhone-15-Pro-Blue-lights.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2023-09-26T15:50:08Z",
    "content": "Missing out on all of the new iPhone action? Boost Infinite has your back by offering iPhone 15 Pro for free. The best part? There’s no trade in required! It’s joined by some official iPhone 14 Pro l… [+4370 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Rajesh Pandey",
    "title": "Google Pixel Watch 2's features and fancy new straps shown off in leaked commercial",
    "description": "A leaked promotional video tells all about the Pixel Watch 2",
    "url": "https://www.androidpolice.com/google-pixel-watch-2-features-fancy-new-straps-shown-off-leaked-commercial/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/09/pixel-watch-2-closeup.jpg",
    "publishedAt": "2023-09-26T06:02:51Z",
    "content": "Summary\r\n<ul><li> The Pixel Watch 2 could pack advanced health features, including skin temperature reading and stress level measurements. </li><li> The watch will have a Safety Check feature that sh… [+3081 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "John Bradbury",
    "title": "How to send money from PayPal to Cash App",
    "description": "Manage your money effectively with these simple steps",
    "url": "https://www.androidpolice.com/send-money-paypal-cash-app/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/11/PayPal-Unsplash-1.jpg",
    "publishedAt": "2023-09-26T09:36:28Z",
    "content": "Managing your money remotely from an easy-going Android phone is easier than ever. The Play Store provides a great selection of payment apps to get you saving, spending, and investing with confidence… [+4018 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "José Alberto Lizana",
    "title": "Hoy llega macOS Sonoma: esto es todo lo que tienes que saber para instalarlo sin problemas",
    "description": "El pasado mes de junio durante la WWDC 2023 fuimos testigo de la presentación del nuevo macOS Sonoma. El sistema operativo que marcaría una nueva generación como estamos acostumbrados cada año (aunque cada vez es más difícil traer increíbles novedades. Los wi…",
    "url": "https://www.genbeta.com/a-fondo/hoy-llega-macos-sonoma-esto-todo-que-tienes-que-saber-para-instalarlo-problemas",
    "urlToImage": "https://i.blogs.es/23ffe4/1366_2000-14/840_560.jpeg",
    "publishedAt": "2023-09-26T08:01:21Z",
    "content": "El pasado mes de junio durante la WWDC 2023 fuimos testigo de la presentación del nuevo macOS Sonoma. El sistema operativo que marcaría una nueva generación como estamos acostumbrados cada año (aunqu… [+4170 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "Bárbara Bécares",
    "title": "Steve Jobs sabía cuál era la forma, muy simple, de conseguir la ayuda que quería de los demás y los expertos lo avalan",
    "description": "En 1994 el cofundador de Apple, Steve Jobs, ofreció una entrevista grabada a la Asociación Histórica de Silicon Valley, donde dio un consejo muy simple, pero muy acertado y que a él le funcionaba estupendamente para conseguir todo lo que quería. Y desde muy j…",
    "url": "https://www.genbeta.com/a-fondo/steve-jobs-sabia-cual-era-forma-muy-simple-conseguir-ayuda-que-queria-demas-expertos-avalan",
    "urlToImage": "https://i.blogs.es/2b2918/1366_2000-1-1-/840_560.jpeg",
    "publishedAt": "2023-09-26T09:01:23Z",
    "content": "En 1994 el cofundador de Apple, Steve Jobs, ofreció una entrevista grabada a la Asociación Histórica de Silicon Valley, donde dio un consejo muy simple, pero muy acertado y que a él le funcionaba est… [+3270 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Jon Swartz",
    "title": ": Meta Connect will focus on AI and mixed reality, but does that include Apple?",
    "description": "AI and mixed reality are likely to be the focus of Meta Platforms Inc.'s annual developers conference Wednesday. But the lingering question is whether Meta will address a certain nemesis down the road.",
    "url": "https://www.marketwatch.com/story/meta-connect-will-focus-on-ai-and-mixed-reality-but-does-that-include-apple-9369863",
    "urlToImage": "https://images.mktw.net/im-857146/social",
    "publishedAt": "2023-09-26T12:30:00Z",
    "content": "AI and mixed reality are likely to be the focus of Meta Platforms Inc.s annual developers conference Wednesday. But the lingering question is whether Meta will address a certain nemesis down the road… [+2720 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Dr Byron Cole, Contributor, \n Dr Byron Cole, Contributor\n https://www.forbes.com/sites/byroncole/",
    "title": "Meet The Boss: Dr ‘Tayo Adeyemi Adiatu’s Influence On Energy, Aviation And Real Estate",
    "description": "There’s an undeniable relationship between exceptional service and business profitability. The quality of service a company delivers determines its customer’s experience.",
    "url": "https://www.forbes.com/sites/byroncole/2023/09/26/meet-the-boss-dr-tayo-adeyemi-adiatus-influence-on-energy-aviation-and-real-estate/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65119cfaaf6e4c208c4acec9/0x0.jpg?format=jpg&width=1200",
    "publishedAt": "2023-09-26T12:15:14Z",
    "content": "Dr Tayo Adeyemi Adiatu is a leader, entrepreneur and businessman with over 15 years experience in the oil and gas, real estate, construction and medical diagnostic sectors.\r\nDr Adiatus commitment to … [+10421 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Apple Music radio shows & narrated News+ articles now available in Podcasts app",
    "description": "Customers with active Apple Music and Apple News+ subscriptions now have access to exclusive, premium content within Apple Podcasts.Podcasts app includes News+ and Apple Music contentApple revealed updates to many of its services during WWDC 2023 that are slo…",
    "url": "https://appleinsider.com/articles/23/09/26/apple-music-radio-shows-narrated-news-articles-now-available-in-podcasts-app",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56522-114825-IMG_3503-xl.jpg",
    "publishedAt": "2023-09-26T03:04:50Z",
    "content": "Podcasts app includes News+ and Apple Music content\r\nCustomers with active Apple Music and Apple News+ subscriptions now have access to exclusive, premium content within Apple Podcasts.\r\nApple reveal… [+1824 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Apple won't make a Google search rival, says Cue",
    "description": "Apple executive Eddy Cue is expected to testify in court that the company has no plan to make an \"Apple Search\" engine, because its deal with Google is the best for users.Eddy Cue at the 2014 Code Conference (Source: Re/code)As previously reported, Apple's Se…",
    "url": "https://appleinsider.com/articles/23/09/26/apple-wont-make-a-google-search-rival-says-cue",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56524-114852-000-lead-Eddy-Cue-xl.jpg",
    "publishedAt": "2023-09-26T09:47:37Z",
    "content": "Eddy Cue at the 2014 Code Conference (Source: Re/code)\r\nApple executive Eddy Cue is expected to testify in court that the company has no plan to make an \"Apple Search\" engine, because its deal with G… [+1374 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Apple wants to use magnets to help cool overheating devices",
    "description": "Future iPhones and iPads could come with a new cooling system that uses magnets to circulate fluids and transfer heat.Overheating can damage components in an iPhoneIf your state allows it and you've put an iPhone on a car mount in your window, you've that pho…",
    "url": "https://appleinsider.com/articles/23/09/26/apple-wants-to-use-magnets-to-help-cool-overheating-devices",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56530-114861-000-lead-Overheating-xl.jpg",
    "publishedAt": "2023-09-26T13:21:34Z",
    "content": "Overheating can damage components in an iPhone\r\nFuture iPhones and iPads could come with a new cooling system that uses magnets to circulate fluids and transfer heat.\r\nIf your state allows it and you… [+4177 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "Customer FineWoven complaints lead to threadbare response from Apple",
    "description": "An internal memo from Apple to retail employees offers little help regarding iPhone FineWoven case material complaints over durability and build quality.Apple's FineWoven caseApple has moved away from leather products in favor of a more sustainable FineWoven …",
    "url": "https://appleinsider.com/articles/23/09/26/customer-finewoven-complaints-lead-to-threadbare-response-from-apple",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56523-114827-IMG_3509-xl.jpg",
    "publishedAt": "2023-09-26T03:32:01Z",
    "content": "Apple's FineWoven case\r\nAn internal memo from Apple to retail employees offers little help regarding iPhone FineWoven case material complaints over durability and build quality.\r\nApple has moved away… [+1343 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "EU tells Apple to open everything up to its rivals",
    "description": "European Commissioner Thierry Breton says the Digital Markets Act is just a beginning, and Apple must open up its whole ecosystem to competitors.The EU's Digital Markets Act (DMA) was created to target Big Tech firms like Apple, and make a fairer business env…",
    "url": "https://appleinsider.com/articles/23/09/26/eu-tells-apple-to-open-everything-up-to-its-rivals",
    "urlToImage": "https://photos5.appleinsider.com/gallery/51155-101060-european-union-flag-xl.jpg",
    "publishedAt": "2023-09-26T13:41:12Z",
    "content": "European Commissioner Thierry Breton says the Digital Markets Act is just a beginning, and Apple must open up its whole ecosystem to competitors.\r\nThe EU's Digital Markets Act (DMA) was created to ta… [+1080 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Jess Pingrey)",
    "title": "Daily deals Sept. 26: $120 off Apple Watch Series 8, 41% off Beats Studio Buds Plus, 27% off MagSafe Duo Fast Wireless Charger, more",
    "description": "Today's hottest deals include 24% off a GPS + Cellular Apple Watch Series 8, 92% off an Apple iPhone XS Max leather folio case, $200 off a 65\" 4K Amazon Fire TV, 38% off Bowers & Wilkins Px7 S2 headphones, and more.Save $200 on a 65-inch 4K Amazon Fire TVThe …",
    "url": "https://appleinsider.com/articles/23/09/26/daily-deals-sept-26-120-off-apple-watch-series-8-41-off-beats-studio-buds-plus-27-off-magsafe-duo-fast-wireless-charger-more",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56521-114862-daily-deals-sept-26-xl.jpg",
    "publishedAt": "2023-09-26T14:03:56Z",
    "content": "Save $200 on a 65-inch 4K Amazon Fire TV\r\nToday's hottest deals include 24% off a GPS + Cellular Apple Watch Series 8, 92% off an Apple iPhone XS Max leather folio case, $200 off a 65\" 4K Amazon Fire… [+3475 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Michael Stroup)",
    "title": "14 top Amazon deals on Apple gear offer up to $550 in savings",
    "description": "It's now officially fall, and as days become cooler, it's time to think about how you'll keep yourself and the kids entertained. Luckily, Amazon has huge discounts on Apple products, including savings on the latest releases.Amazon's best deals for the week of…",
    "url": "https://appleinsider.com/articles/23/09/26/14-top-amazon-deals-on-apple-gear-offer-up-to-550-in-savings",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56506-114793-Untitled-design-(63)-xl.jpg",
    "publishedAt": "2023-09-26T02:34:04Z",
    "content": "Amazon's best deals for the week of September 25th. \r\nIt's now officially fall, and as days become cooler, it's time to think about how you'll keep yourself and the kids entertained. Luckily, Amazon … [+1829 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Mike Wuerthele)",
    "title": "Apple submits update that will weaken iPhone 12 modem to French government",
    "description": "As it said it would, Apple has developed an update to turn down the strength of the radio on the cellular modem on the iPhone 12, and has now submitted it to the French government for analysis.iPhone 12 on the edge of a recallJust under the two-week deadline …",
    "url": "https://appleinsider.com/articles/23/09/26/apple-submits-update-that-will-weaken-iphone-12-modem-to-french-government",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56361-114482-iPhone-12-Pro-xl.jpg",
    "publishedAt": "2023-09-26T10:15:06Z",
    "content": "iPhone 12 on the edge of a recall\r\nAs it said it would, Apple has developed an update to turn down the strength of the radio on the cellular modem on the iPhone 12, and has now submitted it to the Fr… [+4113 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Mike Wuerthele)",
    "title": "No, you're not going to damage your iPhone 15 with an Android USB-C cable",
    "description": "Over the weekend, a few third-party Apple vendors in China made the incredibly stupid claim that using Android USB-C cables would destroy your iPhone 15 — which quickly went viral. In actuality, the claim is bogus, and there is no danger.Is this an 'Android' …",
    "url": "https://appleinsider.com/articles/23/09/26/no-youre-not-going-to-damage-your-iphone-15-with-an-android-usb-c-cable",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56528-114855-USB-C-cable-xl.jpg",
    "publishedAt": "2023-09-26T11:39:46Z",
    "content": "Is this an 'Android' USB-C cable, or an Apple one?\r\nOver the weekend, a few third-party Apple vendors in China made the incredibly stupid claim that using Android USB-C cables would destroy your iPho… [+3034 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "iPhone 15 Pro first to use new incredibly dense Micron memory chips",
    "description": "Apple is using a new denser form of memory for the first time in its iPhones, with a teardown discovering the use of Micron's new ultra-dense D1b LPDDR5 DRAM chips in the iPhone 15 Pro.iPhone 15 ProAs well as advances in features, the march of technology also…",
    "url": "https://appleinsider.com/articles/23/09/26/iphone-15-pro-first-to-use-new-incredibly-dense-micron-memory-chips",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56527-114858-56374-114504-15_pro_action_button-xl-xl.jpg",
    "publishedAt": "2023-09-26T12:04:23Z",
    "content": "iPhone 15 Pro\r\nApple is using a new denser form of memory for the first time in its iPhones, with a teardown discovering the use of Micron's new ultra-dense D1b LPDDR5 DRAM chips in the iPhone 15 Pro… [+1676 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "iPhone 15 overheat complaints are inconsistent, and it's unclear what's going on",
    "description": "Some iPhone 15 users are complaining their smartphones are getting too hot, but not everyone feels the burn, and in nearly every case, the temperatures are still within spec.Just like any other major piece of hardware that is regularly updated, the release of…",
    "url": "https://appleinsider.com/articles/23/09/26/iphone-15-overheat-complaints-are-inconsistent-and-its-unclear-whats-going-on",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56529-114864-everything-is-fine-heat-iphone-xl.jpg",
    "publishedAt": "2023-09-26T15:26:16Z",
    "content": "Some iPhone 15 users are complaining their smartphones are getting too hot, but not everyone feels the burn, and in nearly every case, the temperatures are still within spec. \r\nJust like any other ma… [+8724 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Indian iPhone factory shut for third day, and may be closed all week",
    "description": "Production at an iPhone assembly facility in Chennai, India has not started back up again on the third day of a shutdown following a factory fire, and may not open this week at all.A Pegatron factoryOn Sunday, Pegatron halted production lines for iPhones at i…",
    "url": "https://appleinsider.com/articles/23/09/26/indian-iphone-factory-shut-for-third-day-and-may-be-closed-all-week",
    "urlToImage": "https://photos5.appleinsider.com/gallery/56526-114854-56500-114788-000-lead-Pegatron-xl-xl.jpg",
    "publishedAt": "2023-09-26T11:07:31Z",
    "content": "A Pegatron factory\r\nProduction at an iPhone assembly facility in Chennai, India has not started back up again on the third day of a shutdown following a factory fire, and may not open this week at al… [+1441 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Lifehacker.jp"
    },
    "author": "Haruki Matsumoto",
    "title": "iPhone15じゃなくてもOK！ USB-C 1本でApple3種の神器を同時充電できる「P1-Pro」が便利だったよ",
    "description": "今回ご紹介する「P1-Pro」は、iPnone・Apple Watch・Air PodsなどAppleの人気デバイスをまとめて充電できる3in1な充電スタンド。3台をケーブル一本で充電できるので配線もスマートになり、折りたたみ式でコンパクトに携帯できるため出張や旅行にも便利です。MagSafe対応なので、縦向き・横向き自在で、動画視聴にも便利なアイテムとなっています。",
    "url": "https://www.lifehacker.jp/article/machi-ya-p1pro-review-689463/",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/09/14/P1-Pro_render-12.png?w=1280&h=630&f=jpg",
    "publishedAt": "2023-09-26T10:45:00Z",
    "content": "iPhone 15USB-C 1OK\r\nLightningiPhone 14LightningP1-Pro\r\niPhoneApple WatchAirPods3\r\nLightning\r\nPhoto: Haruki Matsumoto\r\nP1-Pro\r\niPhoneAirPodsApple Watch3USB-C 1iPhone 15Lightning\r\nPhoto: Haruki Matsumo… [+373 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "小暮ひさのり",
    "title": "【iPhone 15 Pro用】「3,000円以下クリアケース」のちがいをチェックしてみた",
    "description": "Photo:小暮ひさのりどのケースを選べば良いんだ！って多分みんな頭を抱えていると思うの。だって、僕がそうだったから…。そうなのです。この季節になると、iPhoneどれを買おうか？からのiPhoneのケースどうしようか…。という悩みが連鎖的に起こるわけで、ケース選びってホント難しいですよね。僕も毎年悩んでいて、今年なんて気がついたら同じようなケースを3つもポチってしまいました。なのでレビューします",
    "url": "https://www.gizmodo.jp/2023/09/iphone-15-pro-cases-sweticheasy-spigen-simplism.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/09/25/2023-09-25kek00.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2023-09-26T03:00:00Z",
    "content": "iPhone iPhone\r\n3\r\nPhoto: \r\nSwitchEasy1,780\r\nSpigenMagSafe2,999\r\nSimplismMagSafe1,980\r\n2MagSafe \r\n1,000\r\n8g\r\nPhoto: \r\niPhone 15 ProSwitchEasyiPhone 15 Pro\r\nPP8g\r\niPhone 15 Pro\r\nMagSafe\r\niPhone 15 Pro … [+450 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "CNET"
    },
    "author": "David Carnoy",
    "title": "Sonos Move 2 Review: Two Key Improvements Make for a Better Speaker - CNET",
    "description": "With double the battery life of the original Move and new drivers that deliver a wider sound stage, the Move 2 is an impressive indoor-outdoor wireless speaker.",
    "url": "https://www.cnet.com/tech/home-entertainment/sonos-move-2-review/",
    "urlToImage": "https://www.cnet.com/a/img/resize/7c7e3e4ee2b51ed47badcaebaf0cf306f3cc1933/hub/2023/09/22/e9a65269-ba76-40a5-a20a-185326c78cc6/sonos-move-2-olive-1.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2023-09-26T13:27:35Z",
    "content": "Sonos' Move 2 portable speaker is a pretty straightforward product to review. That's because it improves upon its already very good predecessor in a couple of key ways. In addition to offering more s… [+8259 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Microsiervos.com"
    },
    "author": "alvy@microsiervos.com (Alvy)",
    "title": "La canción del 6502",
    "description": "It’s an 8-bit world,and we’re 8-bit girls,it’s true,oh yeah!– The 8 Bit Girls\n\nTaylor y Amy han subido a su canal una creación musical con las 8 Bit Girls titulada La canción del 6502. Es un homenaje musical al mítico microprocesador MOS 6502 con el que funci…",
    "url": "https://www.microsiervos.com/archivo/musica/la-cancion-del-6502.html",
    "urlToImage": "https://i.ytimg.com/vi/LrPxM-qYNTI/0.jpg",
    "publishedAt": "2023-09-26T09:21:55Z",
    "content": "Por @Alvy 26 de Septiembre de 2023\r\nIts an 8-bit world,and were 8-bit girls,its true,oh yeah!\r\n The 8 Bit Girls\r\nTaylor y Amy han subido a su canal una creación musical con las 8 Bit Girls titulada L… [+925 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "tristan carballeda",
    "title": "Les iPhone 15 sont-ils réparables ? iFixit n’est pas convaincu",
    "description": "Le démontage annuel des nouveaux iPhone par iFixit vient d'être publié. Le verdict est plutôt salé pour Apple, encore loin du compte. \nLes iPhone 15 sont-ils réparables ? iFixit n’est pas convaincu",
    "url": "https://www.journaldugeek.com/2023/09/26/les-iphone-15-sont-ils-reparables-ifixit-nest-pas-convaincu/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/09/apple-iphone-15-dynamic.jpg",
    "publishedAt": "2023-09-26T10:00:12Z",
    "content": "Le démontage annuel des nouveaux iPhone par iFixit vient d'être publié. Le verdict est plutôt salé pour Apple, encore loin du compte.Chaque année, les équipes d’iFixit s’occupent de désosser en détai… [+2554 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Thomas Estimbre",
    "title": "Hausse de prix chez Deezer : les abonnements en France visés",
    "description": "La plateforme devient l'un des services de streaming musical les plus chers. Voici les offres Deezer concernées par cette hausse de prix.\nHausse de prix chez Deezer : les abonnements en France visés",
    "url": "https://www.journaldugeek.com/2023/09/26/hausse-de-prix-chez-deezer-les-abonnements-en-france-vises/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/09/deezer-app-musique.jpg",
    "publishedAt": "2023-09-26T11:00:17Z",
    "content": "La plateforme devient l'un des services de streaming musical les plus chers. Voici les offres Deezer concernées par cette hausse de prix.Nouvelle hausse de prix chez Deezer. La plateforme a commencé … [+2237 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "A Beautiful Mess"
    },
    "author": "Laura Gummerman",
    "title": "Apple Tart",
    "description": "This homemade French apple desert is a simple way to make an elegant looking version of an apple pie that is sure to wow your guests. The layers of tender sliced apples and buttery crust make the best companions and it’s easy to make but looks impressive. A c…",
    "url": "https://abeautifulmess.com/apple-tart/",
    "urlToImage": "https://abeautifulmess.com/wp-content/uploads/2023/08/easy-apple-tart-recipe-.-.jpg",
    "publishedAt": "2023-09-26T13:00:00Z",
    "content": "This homemade French apple desert is a simple way to make an elegant looking version of an apple pie that is sure to wow your guests. The layers of tender sliced apples and buttery crust make the bes… [+8498 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "El mejor cargador para el iPhone 15 Pro Max no es de Apple",
    "description": "Hace una semana que Apple ha presentado, en su ya habitual evento de septiembre, los iPhone 15, iPhone 15 Plus\r\n, iPhone 15 Pro y iPhone 15 Pro Max\r\n, entre otros dispositivos. Uno de los mayores cambios este año ha sido la sustitución del puerto Lightning po…",
    "url": "https://www.applesfera.com/accesorios/mejor-cargador-para-iphone-15-pro-max-no-apple",
    "urlToImage": "https://i.blogs.es/d2d312/ue-quiere-evitar-trampas-apple-cables-usb-c-iphone-15-3025780-1-1-/840_560.jpeg",
    "publishedAt": "2023-09-26T11:20:09Z",
    "content": "Hace una semana que Apple ha presentado, en su ya habitual evento de septiembre, los iPhone 15, iPhone 15 Plus\r\n, iPhone 15 Pro y iPhone 15 Pro Max\r\n, entre otros dispositivos. Uno de los mayores cam… [+1839 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Alberto García",
    "title": "Amazon vuelve a dejar más barato este iPhone 14 con 128 GB de almacenamiento",
    "description": "Los nuevos iPhone 15 llegan con interesantes novedades, pero es en los iPhone 14 donde podemos encontrar actualmente descuentos que merecen la pena considerar si vamos a dar o no el salto de generación. La última oferta podemos encontrarla en el iPhone 14 Pro…",
    "url": "https://www.applesfera.com/seleccion/amazon-vuelve-a-dejar-barato-este-iphone-14-128-gb-almacenamiento",
    "urlToImage": "https://i.blogs.es/e296a2/iphone-14-pro-xataka/840_560.jpeg",
    "publishedAt": "2023-09-26T09:32:08Z",
    "content": "Los nuevos iPhone 15 llegan con interesantes novedades, pero es en los iPhone 14 donde podemos encontrar actualmente descuentos que merecen la pena considerar si vamos a dar o no el salto de generaci… [+3245 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Si quieres un cargador inalámbrico para iPhone en el Prime Day, estos son los que más recomendamos",
    "description": "Cada vez queda menos para la Fiesta de Ofertas Prime, el nuevo evento de Amazon que tendrá lugar durante los días 10 y 11 de octubre, y en el que los usuarios con suscripción Amazon Prime podrán adquirir todo tipo de productos con descuentos, incluso los de e…",
    "url": "https://www.applesfera.com/seleccion/quieres-cargador-inalambrico-para-iphone-prime-day-estos-que-recomendamos",
    "urlToImage": "https://i.blogs.es/c7d59e/cargador-inalambrico-iphone/840_560.jpeg",
    "publishedAt": "2023-09-26T15:31:24Z",
    "content": "Cada vez queda menos para la Fiesta de Ofertas Prime, el nuevo evento de Amazon que tendrá lugar durante los días 10 y 11 de octubre, y en el que los usuarios con suscripción Amazon Prime podrán adqu… [+4816 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "La polémica del iPhone 15 Pro: el titanio no ha engañado a nadie, ha permitido a Apple dar el siguiente paso",
    "description": "La llegada de los nuevos iPhone 15 tienen como el principal protagonista el puerto USB-C y todo lo que eso implica. Pero a medida que los primeros compradores de los iPhone 15 Pro han probado el teléfono va surgiendo un debate centrado en otra característica:…",
    "url": "https://www.applesfera.com/iphone/polemica-iphone-15-pro-titanio-no-ha-enganado-a-nadie-ha-permitido-a-apple-dar-siguiente-paso",
    "urlToImage": "https://i.blogs.es/bee835/captura-de-pantalla-2023-09-26-a-las-13.21.42/840_560.jpeg",
    "publishedAt": "2023-09-26T12:15:46Z",
    "content": "La llegada de los nuevos iPhone 15 tienen como el principal protagonista el puerto USB-C y todo lo que eso implica. Pero a medida que los primeros compradores de los iPhone 15 Pro han probado el telé… [+2311 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Isra Fdez",
    "title": "Deportes, comida clásica y foto digital: la agenda de Tim Cook por España nos revela el siguiente paso de Apple",
    "description": "Tim Cook pasó, pillando a todo el mundo por sorpresa, un fin de semana en España. En Madrid, más concretamente, compartiendo tiempo con nuestros compañeros de Xataka. Y su mini gira ha sido tildada de inusual. ¿Un club de fútbol? Entendible. Pero, ¿una escuel…",
    "url": "https://www.applesfera.com/curiosidades/deportes-buena-comida-foto-digital-agenda-tim-cook-espana-nos-revela-siguiente-paso-apple",
    "urlToImage": "https://i.blogs.es/b36a8b/tim-cook-con-futbolistas/840_560.jpeg",
    "publishedAt": "2023-09-26T14:01:24Z",
    "content": "Tim Cook pasó, pillando a todo el mundo por sorpresa, un fin de semana en España. En Madrid, más concretamente, compartiendo tiempo con nuestros compañeros de Xataka. Y su mini gira ha sido tildada d… [+9559 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "Este usuario utiliza su iPhone 15 Pro como consola: ha llegado un nuevo contendiente a la guerra del videojuego",
    "description": "Hace unos días que se pusieron a la venta de manera oficial los iPhone 15, iPhone 15 Plus\r\n, iPhone 15 Pro y iPhone 15 Pro Max\r\n. Estos dos últimos modelos incluyen el nuevo chip A17 Pro, fabricado en un proceso de tres nanómetros y con una mejora sustancial …",
    "url": "https://www.applesfera.com/iphone/este-usuario-utiliza-su-iphone-15-pro-como-consola-ha-llegado-nuevo-contendiente-a-guerra-videojuego",
    "urlToImage": "https://i.blogs.es/d8979d/1366_2000-1-5-/840_560.png",
    "publishedAt": "2023-09-26T15:00:28Z",
    "content": "Hace unos días que se pusieron a la venta de manera oficial los iPhone 15, iPhone 15 Plus\r\n, iPhone 15 Pro y iPhone 15 Pro Max\r\n. Estos dos últimos modelos incluyen el nuevo chip A17 Pro, fabricado e… [+1685 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "\"Bad Steve\", el apodo que se ganó Steve Jobs por un explosivo evento",
    "description": "Si te has leído la biografía oficial de Steve Jobs no dudarás decir que Steve Jobs era un genio, pero que al mismo tiempo su carácter y forma de ser hacía que más de uno le temiera o le detestara. De hecho, entre las filas de Apple había quien le apodaba de u…",
    "url": "https://www.applesfera.com/curiosidades/bad-steve-apodo-que-se-gano-steve-jobs-explosivo-evento",
    "urlToImage": "https://i.blogs.es/b87bb4/steve-jobs-keynote-apple/840_560.jpeg",
    "publishedAt": "2023-09-26T10:01:23Z",
    "content": "Si te has leído la biografía oficial de Steve Jobs no dudarás decir que Steve Jobs era un genio, pero que al mismo tiempo su carácter y forma de ser hacía que más de uno le temiera o le detestara. De… [+2419 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Desmontan el iPhone 15 Pro Max y descubren en su interior el gran problema que ya nos temíamos",
    "description": "Es una tradición: los iPhone se rumorean, después se presentan, después se reservan, se lanzan con todas las colas para conseguirlo el primer día... y a los pocos días después tienes el despiece completo. Naturalmente eso también ha ocurrido con los iPhone 15…",
    "url": "https://www.applesfera.com/iphone/desmontan-iphone-15-pro-max-descubren-su-interior-gran-problema-que-nos-temiamos",
    "urlToImage": "https://i.blogs.es/a59f74/iphone-15-pro-max-desmontaje/840_560.jpeg",
    "publishedAt": "2023-09-26T09:01:23Z",
    "content": "Es una tradición: los iPhone se rumorean, después se presentan, después se reservan, se lanzan con todas las colas para conseguirlo el primer día... y a los pocos días después tienes el despiece comp… [+2576 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Fran Bouzas",
    "title": "Un nuevo y misterioso botón llegará al iPhone 16, según MacRumors",
    "description": "Hace menos de una semana que ha salido a la venta el iPhone 15. Muchos ni siquiera han recibido el suyo todavía, pero como no podía ser de otro modo, ya han comenzado los rumores sobre el iPhone 16. Faltando tanto tiempo para que salga, no tiene hay que darle…",
    "url": "https://www.applesfera.com/rumores/nuevo-misterioso-boton-llegara-al-iphone-16-macrumors",
    "urlToImage": "https://i.blogs.es/469a96/1366_2000-13-/840_560.png",
    "publishedAt": "2023-09-26T08:01:20Z",
    "content": "Hace menos de una semana que ha salido a la venta el iPhone 15. Muchos ni siquiera han recibido el suyo todavía, pero como no podía ser de otro modo, ya han comenzado los rumores sobre el iPhone 16. … [+2148 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Sahil Kapoor",
    "title": "AirPods Not Connecting to Chromebook? Try These Fixes",
    "description": "Do you have trouble connecting your AirPods with a Chromebook? Here are some quick and easy ways to fix it.",
    "url": "https://www.makeuseof.com/airpods-not-connecting-to-chromebook-fixes/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/09/connect-airpods-to-chromebook.jpg",
    "publishedAt": "2023-09-26T14:46:27Z",
    "content": "Chromebooks might not be the most widely used laptop series, but nonetheless, it's difficult to overlook its utility in the lives of its users. Despite its limited functionalities, many people use it… [+6264 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Adilia Castellon",
    "title": "How to Export Your Emails as PDF Files on a Mac",
    "description": "Exporting your emails will help you keep them on record, and it's possible to do so as PDFs.",
    "url": "https://www.makeuseof.com/mac-how-to-export-emails-as-pdf/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/09/export-emails-as-pdfs-on-mac.jpg",
    "publishedAt": "2023-09-26T13:00:26Z",
    "content": "Apple Mail is often the best option to use on your Mac. Not only can you access your messages from any mail service like Gmail or Yahoo, but you also have a lot of tools to make your life a lot easie… [+2944 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Mike Viray",
    "title": "Overheating, eSim Issues: iPhone 15 Users Report Technical Difficulties",
    "description": "A number of iPhone 15 Pro Max owners have complained that their new devices have occasionally gotten hot.\nThe post Overheating, eSim Issues: iPhone 15 Users Report Technical Difficulties appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/09/26/overheating-esim-issues-iphone-15-users-report-technical-difficulties/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2023/09/iphone-15-pro-1-640x354.png",
    "publishedAt": "2023-09-26T11:51:07Z",
    "content": "One thing to consider when purchasing a new smartphone is that while it might be brand new, there’s still a chance that it can be affected by hardware and software issues, no matter what the brand. W… [+2097 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Ajit Singh",
    "title": "iPhone 15 Pro Max vs Pixel 7 Pro: Which Pro is for you?",
    "description": "Here is a quick specs and features comparison between iPhone 15 Pro Max and Pixel 7 Pro.\nThe post iPhone 15 Pro Max vs Pixel 7 Pro: Which Pro is for you? appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/09/26/iphone-15-pro-max-vs-pixel-7-pro-which-pro-is-for-you/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2023/09/iPhone-15-Pro-Max-vs-Pixel-7-Pro-Comparison.jpg",
    "publishedAt": "2023-09-26T11:47:24Z",
    "content": "Apple’s latest and greatest iPhone is now out. It is the iPhone 15 Pro Max that comes packed with various improvements and upgrades. It is the first iPhone to come with a USB-C port and Titanium meta… [+8000 chars]"
    },
    -{
    -"source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Philips Hue will soon force users to create an account",
    "description": "It seems that the Philips Hue app will soon make it mandatory for users to create an account to control their smart lights.\nThe post Philips Hue will soon force users to create an account appeared first on Phandroid.",
    "url": "https://phandroid.com/2023/09/26/philips-hue-will-soon-force-users-to-create-an-account/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2022/09/philips-hue-light-strip.jpg",
    "publishedAt": "2023-09-26T13:59:25Z",
    "content": "A lot of online services these days require users to create an account to access its features. Sometimes it makes sense, but other times it doesnt. For example, why would I need to create an account … [+1357 chars]"
    },
  `;

  return (
    <>
      <div className="container-contents">
    {/* window articles */}
        <div className='artikel-contents'>
          <h1 id="contents">Get Started</h1>
          <p>To get started you'll need an API key. They're free while you are in development.</p>
          <ReusableButtonFill text="Get API Key" onClick={handleButtonClick}/>
          <br/>
          <br/>
          <p>You should know how to make web requests in your chosen programming language. We have included some crude ways to do this in our examples below if you need a place to start. Alternatively you can use one of our <a href='#' style={linkStyle}>client libraries.</a></p>
          <br/>
          <p>Now let's consider two of the most popular use cases for News API and walk through each one:</p>
          <br/>
          <div className='container-card-ariticles'>
            <div className='card'>
              <AiOutlineKey size="80px" color="#1a73e8" />
              <br/>
              <p>Search for articles on the web that mention a keyword or phrase</p>
            </div>
            <div className='card'>
              <AiFillFileText size="80px" color="#1a73e8" />
              <br/>
              <p>Get the current top headlines for a country, category, or publisher</p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 style={{ marginTop: 50 }}>Search for news articles that mention a specific topic or keyword</h2>
          <p>The main use of News API is to search through every article published by over 80,000 news sources and blogs in the last 5 years. Think of us as Google News that you can interact with programmatically!
            <br/>
            <br/>

          In this example we want to find all articles that mention Apple published today, and sort them by most popular source first (i.e. Engadget articles will be returned ahead of Mom and Pop's Little iPhone Blog). For this we need to use the <code style={{ color: 'red', backgroundColor: '#f7f7f9' }}>/everything</code> endpoint.
            <br/>
            <br/>

          For more information about the <code style={{ color: 'red', backgroundColor: '#f7f7f9' }}>/everything</code> endpoint, including valid parameters for narrowing your search, see the <a href='#' style={linkStyle}>Everything endpoint reference.</a></p>
          <br/>
            <br/>

          <h2>Get the current top headlines for a country or category</h2>
          <br/>
          <p>News API is great as a data source for news tickers and other applications where you want to show your users live headlines. We track headlines in 7 categories across over 50 countries, and at over a hundred top publications and blogs, in near real time.
            <br/>
            <br/>

          Let's make a request to get live top headlines in the US right now. We'll use the <code style={{ color: 'red', backgroundColor: '#f7f7f9' }}>/top-headlines</code> endpoint for this.
          <br/>
          <br/>

          This returns a JSON object with the results in an array we can iterate over.
          <br/>
          <br/>
          For more information about the <code style={{ color: 'red', backgroundColor: '#f7f7f9' }}>/top-headlines</code> endpoint, including valid parameters for focusing on specific countries and categories, see the <a href='#' style={linkStyle}>Top Headlines endpoint reference.</a></p>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>If you want headlines just from a specific source, for example BBC News, we can do that too.
          <br/>
          <br/>
          The identifier for BBC News is bbc-news, which we can get by querying the sources endpoint.</p>
          <br/>
          <p>For more details about the endpoints and modifiers you can lookup articles with, including possible responses, check <a href='#' style={linkStyle}>the full documentation.</a></p>
        </div>
    {/* window articles end */}

    {/* window code */}
        <div className='code-contents'>
          <CodeHighlighter code={javascript} language="json" />
        </div>
    {/* window code end */}
      </div>
    </>
  )
}
