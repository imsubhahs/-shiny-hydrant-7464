
let middle_slide_bar_div = document.querySelector(".middle_s_w");

let top_slide_images_arr = [
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/b69d2fc2-53f5-45ed-8e89-8dcd108ed2b6.jpg",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/e352ada8-9b87-43ff-a84a-6ed425b0d55c.gif",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/9f8fe6f9-3ebe-4d1b-9b15-d5e5e642868b.jpg",
  },
];

let bestSellersLeftArr = [
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
    name: "LIP ZIP MATTE TOPPER",
    price: "499",
    text: "ADD TO CART",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955",
    name: "MATTE AS HELL CRAYON LIPSTICK",
    price: "799",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513",
    name: "KOHL OF HONOUR INTENSE KAJAL",
    price: "249",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
    name: "TIPSY LIPS MOISTURIZING BALM",
    price: "199",
    text: "SELECT SHADE",
  },
];

let bestSellersRightArr = [
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513",
    name: "KOHL OF HONOUR INTENSE KAJAL",
    price: "249",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
    name: "TIPSY LIPS MOISTURIZING BALM",
    price: "199",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
    name: "CONTOUR DE FORCEFACE PALETTE",
    price: "799",
    text: "SELECT SHADE",
  },
  {
    img_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652",
    name: "ACE OF FACE FOUNDATION STICK",
    price: "999",
    text: "SELECT SHADE",
  },
];

let middle_slide_bar_arr = [
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/a78e7ad2-9fa3-4792-9cb4-4cbcfcb1a06c.jpg",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/f9c0043b-0f54-4ad2-89a6-237fdad41f08.gif",
  },
  {
    url: "https://d32baadbbpueqt.cloudfront.net/Homepage/abe31497-beb2-4d37-96d5-6d2967c6e1cd.jpg",
  },
];

let hotDealsarr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/d9560110-40f7-4d14-a98d-5599b45a84ef.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/fb82e32a-164e-432a-af89-b6593001d384.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/043d43d2-66eb-4d93-b725-a3d948ca3871.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",
    },
  ],
];

let videoPlayArr = [
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836045-uerkdvpa/watermarked/540/InShot_20220309_1844460631.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644919919-drjtghip/watermarked/540/EasyEyelinerHackusingaSpoon.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4",
  },
  {
    src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4",
  },
];

let superSaversarr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706264477779.jpg?v=1619116135",
      name: "METTLE SATIN LIPSTICK - O1 SOPHIE [BRIGHT FUCHSIA...]",
      price: "499",
      text: "ADD TO CART",
      stoffPrice: "999",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-eye-warned-you-so-double-matte-eyeliner-03-green-book-marsh-green-13954500100179.jpg?v=1619116854",
      name: "EYE WARNED YOU SO! DOUBLE MATTEL EYELINER - O3 GREEN...",
      price: "349",
      text: "ADD TO CART",
      stoffPrice: "699",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-12-don-fawn-yellow-brown-12788425097299.jpg?v=1619108497",
      name: "SMUDGE NOT LIP DUO - 12 DON FAWN (YELLOW BROWN)",
      price: "299",
      text: "ADD TO CART",
      stoffPrice: "599",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
      name: "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...",
      price: "359",
      text: "ADD TO CART",
      stoffPrice: "599",
      disPer: "(40% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
      name: "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-twist-and-shout-fadeproof-kajal-01-black-velvet-black-14255312109651.jpg?v=1619100296",
      name: "TWIST AND SHOUT FADEPROOF KAJAL",
      price: "399",
      text: "SELECT SHADE",
      stoffPrice: "599",
      disPer: "(40% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-27-brown-crown-plum-brown-15384235180115.jpg?v=1619103565",
      name: "SMUDGE ME NOT LIQUID LIPSTICK - 27 BROWN CROWN...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
      name: "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)",
      price: "549",
      text: "ADD TO CART",
      stoffPrice: "1099",
      disPer: "(50% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-10-eirene-blue-toned-red-12796091236435.jpg?v=1619110221",
      name: "METTLE MATTE LIPSTICK - 10 EIRENE (BLUE TONED RED)",
      price: "549",
      text: "ADD TO CART",
      stoffPrice: "1099",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-55-americano-deep-12775603372115.jpg?v=1619106493",
      name: "DREAM COVER SPF15 MATTIFYING COMPACT - 55...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-it-s-a-pout-time-vivid-lipstick-09-better-call-salmon-peach-pink-12785014308947.jpg?v=1619101864",
      name: "ITS A POUT TIME! VIVID LIPSTICK - O9 BETTER CALL...",
      price: "359",
      text: "ADD TO CART",
      stoffPrice: "599",
      disPer: "(40% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-45-grape-drape-deep-mauve-with-hints-of-purple-15384300027987.jpg?v=1619107024",
      name: "SMUDGE ME NOT LIQUID LIPSTICK - 45 GRAPE DRAPE...",
      price: "249",
      text: "ADD TO CART",
      stoffPrice: "499",
      disPer: "(50% Off)",
      rupee: "₹",
    },
  ],
];

let topPicksArr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/fd062254-fcc7-432d-94dc-9d7da4a6fc62.gif",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/9f9d2095-f019-4bb5-b961-db87fab439f6.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/c325cb7a-0c27-454d-a631-1e184b071e55.jpg",
    },
  ],
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg",
    },
  ],
//   [
//     {
//       img_url:
//         "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg",
//     },
//     {
//       img_url:
//         "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8a71a460-cd8f-4166-8ac5-b19407d23699.jpg",
//     },
//     {
//       img_url:
//         "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg",
//     },
//   ],
];

let giftSetsArr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
      name: "MOTHERS DAY GIFT CARD",
      price: "500",
      text: "SELECT VALUE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1621586014",
      name: "MATTE AS HELL CRAYON LIPSTICK MINIS SET",
      price: "1099",
      text: "SHOP NOW",
      stoffPrice: "1799",
      disPer: "(38% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
      name: "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET",
      price: "799",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "999",
      disPer: "(20% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
      name: "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET",
      price: "849",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1048",
      disPer: "(18% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
      name: "SMUDGE ME NOT LIQUID LIPSRICK MINIS SET",
      price: "799",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "999",
      disPer: "(20% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1.jpg?v=1646298577",
      name: "FACE PALLET + MINI LIQUID LIPSTICK VALUE SET",
      price: "849",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1048",
      disPer: "(18% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1649260645",
      name: "ANNIVERSARY KIT",
      price: "1999",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "2793",
      disPer: "(28% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
      name: "HI-5 KIT",
      price: "999",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1295",
      disPer: "(22% Off)",
      rupee: "₹",
    },
  ],
];

let thisorthatarr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg",
    },
  ],
];

let justInArr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6a5fa1af-0d0e-4e9e-85d1-579495fb5030.jpg?v=1648482145",
      name: "ARCH ARRIVAL MICRO BROW PENCIL",
      price: "499",
      text: "SELECT SHADE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649078383",
      name: "SUMMER MAKEUP KIT",
      price: "1799",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "2442",
      disPer: "(38% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
      name: "CITRUS GOT REAL RETINOL BRIGHTENING SERUM ",
      price: "499",
      text: "ADD TO CART ",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/373515742-01.jpg?v=1646207364",
      name: "SUGAR CITRUS GOT REAL BRIGHTENING PEEL",
      price: "599",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1d9f20a6-69b8-4585-9d09-d4d1f8f309d6.jpg?v=1649433263",
      name: "FLAW LESS FACE MAKEUP TRIO SET",
      price: "1199",
      text: "CHOOSE PRODUTS",
      stoffPrice: "1390",
      disPer: "(14% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
      name: "POWER CLAY MASK STICK",
      price: "699",
      text: "SELECT SHADE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-1.jpg?v=1642089034",
      name: "BEGINNERS MAKEUP COMBO",
      price: "999",
      text: "ADD TO CART",
      stoffPrice: "1190",
      disPer: "(16% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_1bde8549-cb5e-40e8-8779-83e8c0aae451.jpg?v=1638200716",
      name: "TOO GOOD TO BE TRUE DUAL EYESHADOW",
      price: "499",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1635834942",
      name: "ARCH ARRIVAL BROW PEN",
      price: "499",
      text: "SELECT SHADE",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
      name: "PARTY READY KIT",
      price: "1299",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1994",
      disPer: "(34% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
      name: "OWN THE HIGH LIQUID HIGHLIGHTER",
      price: "649",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
      name: "TRIPLE DELIGHT MAKEUP SET",
      price: "649",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "847",
      disPer: "(23% Off)",
      rupee: "₹",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1639397456",
      name: "PARTY READY KIT",
      price: "1299",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "1994",
      disPer: "(34% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891",
      name: "OWN THE HIGH LIQUID HIGHLIGHTER",
      price: "649",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/1_6.jpg?v=1643903231",
      name: "TRIPLE DELIGHT MAKEUP SET",
      price: "649",
      text: "CHOOSE PRODUCTS",
      stoffPrice: "847",
      disPer: "(23% Off)",
      rupee: "₹",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Double-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg?v=1636386431",
      name: "DOUBLE DATE EXTREME VOLUME MASCARA DUO 01...",
      price: "799",
      text: "SHOP NOW",
      stoffPrice: "",
      disPer: "",
      rupee: "",
    },
  ],
];

let sugarbeautyArr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/a78e7ad2-9fa3-4792-9cb4-4cbcfcb1a06c.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/f9c0043b-0f54-4ad2-89a6-237fdad41f08.gif",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/abe31497-beb2-4d37-96d5-6d2967c6e1cd.jpg",
    },
  ],
];

let skincareBasicsArr = [
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Hyderattingkit.jpg?v=1626968294",
      name: "AQUAHOLIC HYDRATING STICK",
      price: "899",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-priming-moisturizer-13548826886227.jpg?v=1619115290",
      name: "AQUAHOLIC PRIMING MOISTURIZER",
      price: "499",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
      name: "BLING LEADER ILLUMINATING MOISTURIZER",
      price: "499",
      text: "SELECT SHADE",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-spf30-sunscreen-28038344736851.jpg?v=1619155723",
      name: "CITRUS GOT REAL SPF30 SUNSCREEN",
      price: "399",
      text: "ADD TO CART",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",
      name: "CITRUS GOT REAL DAILY MOISTURIZER",
      price: "499",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
      name: "SWIPE RIGHT CLEANSING WATER",
      price: "399",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393",
      name: "CHEAT SHEET CLARIFYING MARK",
      price: "99",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341",
      name: "CHARCOAL PATROL BUBBLE MASK",
      price: "149",
      text: "ADD TO CART",
    },
  ],
  [
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
      name: "SWIPE RIGHT CLEANSING WATER",
      price: "399",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1586848393",
      name: "CHEAT SHEET CLARIFYING MARK",
      price: "99",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1586848341",
      name: "CHARCOAL PATROL BUBBLE MASK",
      price: "149",
      text: "ADD TO CART",
    },
    {
      img_url:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1586848309",
      name: "CHEAT SHEET ANTI-AGING MASK",
      price: "99",
      text: "ADD TO CART",
    },
  ],
];

let exploreArr = [
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/a7b72adf-7e02-45c4-a208-552d46eefc4c.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/88ee8d58-7cc5-450a-953b-aa16ef190d52.jpg",
    },
  ],
  [
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
    },
    {
      img_url:
        "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
    },
  ],
  [
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/60bdba27-5962-401b-b03e-2c55baa74bd1.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/259217a4-239d-4103-8bf7-cd2a7e1529c1.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/8e3d35ed-5e1f-4056-b36a-575761e2c995.jpg",
    },
    {
      img_url:
        "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
    },
  ],
  [
    {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/60bdba27-5962-401b-b03e-2c55baa74bd1.jpg",
      },
      {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/259217a4-239d-4103-8bf7-cd2a7e1529c1.jpg",
      },
      {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/8e3d35ed-5e1f-4056-b36a-575761e2c995.jpg",
      },
      {
        img_url:
          "https://d32baadbbpueqt.cloudfront.net/Homepage/97722164-55b4-4030-a9f6-0219a9575a24.jpg",
      },
  ],
  [
    {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
      }
  ],
  [
    {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
      }
  ],
  [
    {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/5a14d6cc-2414-4cc8-bf2b-11f881c756c6.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8028cf4f-a5d5-4896-b4c6-5cae8da64b26.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/16951257-44d5-4b7e-81cb-55628f498d94.jpg",
      },
      {
        img_url:
          "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/887ac04a-d449-4793-b6ef-f7dfddf1a214.jpg",
      }
  ],
];

// Sliding images part
let top_slide_bar_div = document.querySelector(".sliding_window");
let isPaused = false;
let topTemp = 0;
let winWidth = 1263;
setInterval(() => {
  if (!isPaused) {
    topTemp = topTemp + winWidth;

    if (topTemp < winWidth * (top_slide_images_arr.length - 1)) {
      top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`;
      top_slide_bar_div.style.transition = ".4s";
      console.log(topTemp, winWidth, i++);
    } else {
      top_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
      top_slide_bar_div.style.transition = "0.2s";
      topTemp = 0;
    }
  }
}, 3000);

let start = (arr, container) => {
  container.innerText = "";

  for (let i = 0; i < arr.length; i++) {
    let img = document.createElement("img");
    img.className = "top_img";
    img.src = arr[i].url;
    container.append(img);
  }
};
start(top_slide_images_arr, top_slide_bar_div);

top_slide_bar_div.addEventListener("mouseover", () => {
  pause();
});
top_slide_bar_div.addEventListener("mouseout", () => {
  play();
});
document.querySelector(".lArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".rArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".lArrow").addEventListener("mouseout", () => {
  play();
});
document.querySelector(".rArrow").addEventListener("mouseout", () => {
  play();
});

let play = () => {
  isPaused = false;
  ispaused = false;
};
let pause = () => {
  isPaused = true;
  ispaused = true;
};

document.querySelector(".lArrow").addEventListener("click", () => {
  // let winWidth = 1263
  topTemp = topTemp - winWidth;
  let final = winWidth * (top_slide_images_arr.length - 1);
  if (topTemp >= 0) {
    console.group("left", topTemp);
    top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`;
    top_slide_bar_div.style.transition = ".4s";
  } else {
    top_slide_bar_div.style.transform = `translate3d(${-final}px,0px,0px)`;
    top_slide_bar_div.style.transition = "0.2s";
    topTemp = final;
  }
});

document.querySelector(".rArrow").addEventListener("click", () => {
  // let winWidth = 1263

  topTemp = topTemp + winWidth;

  if (topTemp < winWidth * top_slide_images_arr.length) {
    top_slide_bar_div.style.transform = `translate3d(${-topTemp}px,0px,0px)`;
    top_slide_bar_div.style.transition = ".4s";
  } else {
    top_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
    top_slide_bar_div.style.transition = "0.1s";
    topTemp = 0;
  }
});

//    Best sellers part

let pro_div = document.querySelector(".best_seller_products");
let bestSeller = (bestSellersLeftArr, container) => {
  container.innerText = "";
  bestSellersLeftArr.forEach((el) => {
    // console.log(el)

    let div = document.createElement("div");
    div.className = "four_pro_div";

    let bsimg = document.createElement("img");
    bsimg.src = el.img_url;
    bsimg.style.height = "250px";
    bsimg.style.width = "100%";

    let bsname = document.createElement("div");
    bsname.className = "pro_name";
    bsname.innerText = el.name;

    let pdiv = document.createElement("div");
    pdiv.className = "pdiv";
    let bsprice = document.createElement("p");
    bsprice.innerText = `₹ ${el.price}`;
    pdiv.append(bsprice);

    let bstag = document.createElement("div");
    bstag.className = "text_tag";
    bstag.innerText = el.text;

    let img_name_price_div = document.createElement("div");
    img_name_price_div.className = "img_name_price_div";

    img_name_price_div.append(bsimg, bsname, pdiv);
    div.append(img_name_price_div, bstag);
    // console.log(div)
    container.append(div);
  });
};
bestSeller(bestSellersLeftArr, pro_div);
let flag1 = true;

document.querySelector(".left_arr_div").addEventListener("click", () => {
  flag1 = !flag1;
  if (flag1) {
    bestSeller(bestSellersLeftArr, pro_div);
  } else {
    bestSeller(bestSellersRightArr, pro_div);
  }
});
let flag2 = false;
document.querySelector(".right_arr_div").addEventListener("click", () => {
  flag2 = !flag2;
  if (flag2) {
    bestSeller(bestSellersRightArr, pro_div);
  } else {
    bestSeller(bestSellersLeftArr, pro_div);
  }
});

// quick beauty tips
let midTemp = 0;
let ispaused = false;
start(middle_slide_bar_arr, middle_slide_bar_div);
setInterval(() => {
  if (!ispaused) {
    midTemp = midTemp + winWidth;

    if (midTemp < winWidth * middle_slide_bar_arr.length) {
      middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px,0px,0px)`;
      middle_slide_bar_div.style.transition = ".4s";
    } else {
      middle_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
      middle_slide_bar_div.style.transition = "0.2s";
      midTemp = 0;
    }
  }
}, 3000);

middle_slide_bar_div.addEventListener("mouseover", () => {
  pause();
});
middle_slide_bar_div.addEventListener("mouseout", () => {
  play();
});
document.querySelector(".lArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".rArrow").addEventListener("mouseover", () => {
  pause();
});
document.querySelector(".lArrow").addEventListener("mouseout", () => {
  play();
});
document.querySelector(".rArrow").addEventListener("mouseout", () => {
  play();
});

document.querySelector(".qbLArr").addEventListener("click", () => {
  pause();

  midTemp = midTemp - winWidth;
  let final = winWidth * (middle_slide_bar_arr.length - 1);
  if (midTemp >= 0) {
    console.group("left", midTemp);
    middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px)`;
    middle_slide_bar_div.style.transition = ".4s";
  } else {
    middle_slide_bar_div.style.transform = `translate3d(${-final}px)`;
    middle_slide_bar_div.style.transition = "0.2s";
    midTemp = final;
  }
});

document.querySelector(".qbRArr").addEventListener("click", () => {
  midTemp = midTemp + winWidth;
  pause();
  if (midTemp < winWidth * middle_slide_bar_arr.length) {
    middle_slide_bar_div.style.transform = `translate3d(${-midTemp}px,0px,0px)`;
    middle_slide_bar_div.style.transition = ".4s";
  } else {
    middle_slide_bar_div.style.transform = `translate3d(${-0}px,0px,0px)`;
    middle_slide_bar_div.style.transition = "0.2s";
    midTemp = 0;
  }
});

// Hot deals part

let main_div = document.querySelector(".slider");
let imageSlide = (arr, container) => {
  container.innerText = "";
  for (let i = 0; i < arr.length; i++) {
    //    console.log(arr)
    arr[i].map((el) => {
      let sliding_div = document.createElement("div");
      sliding_div.className = "sliding_div";
      let img_div = document.createElement("img");
      img_div.className = "bannerimg";
      img_div.src = el.img_url;
      sliding_div.append(img_div);
      container.append(sliding_div);
    });
  }
};
imageSlide(hotDealsarr, main_div);
let hdSlide = document.querySelector(".slider");
let temp = 0;
document.querySelector(".hdLarr").addEventListener("click", () => {
  let winWidth = 1263;
  temp = temp - winWidth;
  let final = winWidth * (hotDealsarr.length - 1);
  if (temp > 0) {
    console.group("left", temp);
    hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`;
    hdSlide.style.transition = ".4s";
  } else {
    hdSlide.style.transform = `translate3d(${-final}px,0px,0px)`;
    hdSlide.style.transition = "0.2s";
    temp = final;
  }
});

document.querySelector(".hdRarr").addEventListener("click", () => {
  let winWidth = 1263;

  temp = temp + winWidth;
  console.group("right", temp);
  if (temp < winWidth * 7) {
    hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`;
    hdSlide.style.transition = ".4s";
  } else {
    hdSlide.style.transform = `translate3d(${-0}px,0px,0px)`;
    hdSlide.style.transition = "0.2s";
    temp = 0;
  }
});

//  Sugar streaming part

let vid_div = document.querySelector(".vidSlider");
let videoPlay = (data) => {
  data.forEach((el) => {
    let video_div = document.createElement("div");
    video_div.className = "video_div";
    let video = document.createElement("video");
    video.src = el.src;
    video.style.border = "0";
    video.className = "videoshorts";
    video.style.cursor = "pointer";
    // console.log(video)
    vid_div.append(video);
  });
};
videoPlay(videoPlayArr);
const clip = document.querySelectorAll(".videoshorts");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", (e) => {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", (e) => {
    clip[i].pause();
  });
}
let vidTemp = 0;
document.querySelector("#left").addEventListener("click", () => {
  let winWidth = window.outerWidth;
  vidTemp = vidTemp - winWidth * 0.74;

  if (vidTemp > 0) {
    console.group("left", vidTemp);
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vid_div.style.transform = `translateX(${-0}px)`;
    vid_div.style.transition = ".4s";
    vidTemp = 0;
  }
});
document.querySelector("#right").addEventListener("click", () => {
  let winWidth = window.outerWidth;

  vidTemp = vidTemp + winWidth * 0.74;
  console.group("right", vidTemp, winWidth);
  if (vidTemp < winWidth * 3) {
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vidTemp = vidTemp - winWidth * 0.74;
  }
});

// Super savers part

let superSaversdiv = document.querySelector(".ninth_box_slide_div");
let superSavers = (superSaversarr, container) => {
  container.innerText = "";
  superSaversarr.forEach((el) => {
    // console.log(el)

    let div = document.createElement("div");
    div.className = "four_pro_div";

    let bsimg = document.createElement("img");
    bsimg.src = el.img_url;
    bsimg.style.height = "250px";
    bsimg.style.width = "100%";

    let bsname = document.createElement("div");
    bsname.className = "pro_name";
    bsname.innerText = el.name;

    let main_price_div = document.createElement("div");
    main_price_div.className = "ssprice_div";
    let stoffdiv = document.createElement("div");
    stoffdiv.className = "stoffdiv";
    let rupee = document.createElement("p");
    rupee.innerText = el.rupee;
    let stoffPrice = document.createElement("p");
    stoffPrice.innerText = `${el.stoffPrice}`;
    stoffdiv.append(rupee, stoffPrice);

    let pdiv = document.createElement("div");
    pdiv.className = "pdiv";
    let bsprice = document.createElement("p");
    bsprice.innerText = ` ₹ ${el.price}`;
    pdiv.append(bsprice);

    let disPer = document.createElement("p");
    disPer.style.color = "#fc3183";
    disPer.innerText = el.disPer;
    main_price_div.append(stoffdiv, pdiv, disPer);

    let bstag = document.createElement("div");
    bstag.className = "text_tag";
    bstag.innerText = el.text;

    let img_name_price_div = document.createElement("div");
    img_name_price_div.className = "img_name_price_div";

    img_name_price_div.append(bsimg, bsname, main_price_div);
    div.append(img_name_price_div, bstag);
    // console.log(div)
    container.append(div);
  });
};
superSavers(superSaversarr[0], superSaversdiv);
let ssleft = 0;
let ssright = 0;
document.querySelector(".ssleft_arr_div").addEventListener("click", () => {
  ssleft--;
  if (ssleft >= 0) {
    ssright--;
    superSavers(superSaversarr[ssleft], superSaversdiv);
  } else {
    ssleft = 2;
    ssright = 2;
    superSavers(superSaversarr[2], superSaversdiv);
  }
});

document.querySelector(".ssright_arr_div").addEventListener("click", () => {
  ssright++;
  if (ssright < 3) {
    ssleft++;
    superSavers(superSaversarr[ssright], superSaversdiv);
  } else {
    ssleft = 0;
    ssright = 0;
    superSavers(superSaversarr[0], superSaversdiv);
  }
});

// Top pics of the week part

let topPicksdiv = document.querySelector(".tpSlider");
imageSlide(topPicksArr, topPicksdiv);
let tpTemp = 0;
document.querySelector(".tpLarr").addEventListener("click", () => {
  tpTemp = tpTemp - winWidth;
  let final = winWidth * (topPicksArr.length - 1);
  if (tpTemp >= 0) {
    console.group("left", tpTemp);
    topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`;
    topPicksdiv.style.transition = ".4s";
  } else {
    topPicksdiv.style.transform = `translate3d(${-final}px,0px,0px)`;
    topPicksdiv.style.transition = "0.2s";
    tpTemp = final;
  }
});

document.querySelector(".tpRarr").addEventListener("click", () => {
  tpTemp = tpTemp + winWidth;
  console.group("right", tpTemp);
  if (tpTemp < winWidth * topPicksArr.length) {
    topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`;
    topPicksdiv.style.transition = ".4s";
  } else {
    topPicksdiv.style.transform = `translate3d(${-0}px,0px,0px)`;
    topPicksdiv.style.transition = "0.2s";
    tpTemp = 0;
  }
});

//  Gift sets part

let giftSetsdiv = document.querySelector(".eleventh_box_slide_div");
superSavers(giftSetsArr[0], giftSetsdiv);
let gsleft = 0;
let gsright = 0;
document.querySelector(".gsleft_arr_div").addEventListener("click", () => {
  gsleft--;
  if (gsleft >= 0) {
    gsright--;
    superSavers(giftSetsArr[gsleft], giftSetsdiv);
  } else {
    gsleft = 1;
    gsright = 1;
    superSavers(giftSetsArr[1], giftSetsdiv);
  }
});

document.querySelector(".gsright_arr_div").addEventListener("click", () => {
  gsright++;
  if (gsright < 2) {
    gsleft++;
    superSavers(giftSetsArr[gsright], giftSetsdiv);
  } else {
    gsleft = 0;
    gsright = 0;
    superSavers(giftSetsArr[0], giftSetsdiv);
  }
});

//  This or That part

let thisorthatdiv = document.querySelector(".twelth_box_div");
imageSlide(thisorthatarr, thisorthatdiv);

//  Just in part

let justInDiv = document.querySelector(".thirteenth_box_slide_div");
superSavers(justInArr[0], justInDiv);
let jileft = 0;
let jiright = 0;
document.querySelector(".jileft_arr_div").addEventListener("click", () => {
  jileft--;
  if (jileft >= 0) {
    jiright--;
    superSavers(justInArr[jileft], justInDiv);
  } else {
    jileft = 3;
    jiright = 3;
    superSavers(justInArr[3], justInDiv);
  }
});

document.querySelector(".jiright_arr_div").addEventListener("click", () => {
  jiright++;
  if (jiright < 4) {
    jileft++;
    superSavers(justInArr[jiright], justInDiv);
  } else {
    jileft = 0;
    jiright = 0;
    superSavers(justInArr[0], justInDiv);
  }
});

//   Sugar beauty blog part

let sugarbeautydiv = document.querySelector(".fourteenth_box_div");
imageSlide(sugarbeautyArr, sugarbeautydiv);

//   Skincare Basics part

let skincareBasicDiv = document.querySelector(".fifteenth_box_slide_div");
bestSeller(skincareBasicsArr[0], skincareBasicDiv);
let sbleft = 0;
let sbright = 0;
document.querySelector(".sbleft_arr_div").addEventListener("click", () => {
  console.log("i am in");
  sbleft--;
  if (sbleft >= 0) {
    sbright--;
    bestSeller(skincareBasicsArr[sbleft], skincareBasicDiv);
  } else {
    sbleft = 2;
    sbright = 2;
    bestSeller(skincareBasicsArr[2], skincareBasicDiv);
  }
});

document.querySelector(".sbright_arr_div").addEventListener("click", () => {
  console.log("i am in");
  sbright++;
  if (sbright < 3) {
    sbleft++;
    bestSeller(skincareBasicsArr[sbright], skincareBasicDiv);
  } else {
    sbleft = 0;
    sbright = 0;
    bestSeller(skincareBasicsArr[0], skincareBasicDiv);
  }
});

//   Explore part

let exploreDiv = document.querySelector(".exSlider");
imageSlide(exploreArr, exploreDiv);
let exTemp = 0;
document.querySelector(".exLarr").addEventListener("click", () => {
  exTemp = exTemp - winWidth;
  let final = winWidth * (exploreArr.length - 1);
  if (exTemp >= 0) {
    console.group("left", exTemp);
    exploreDiv.style.transform = `translate3d(${-exTemp}px,0px,0px)`;
    exploreDiv.style.transition = ".4s";
  } else {
    exploreDiv.style.transform = `translate3d(${-final}px,0px,0px)`;
    exploreDiv.style.transition = "0.2s";
    exTemp = final;
  }
});

document.querySelector(".exRarr").addEventListener("click", () => {
  exTemp = exTemp + winWidth;
  console.group("right", exTemp);
  if (exTemp < winWidth * exploreArr.length) {
    exploreDiv.style.transform = `translate3d(${-exTemp}px,0px,0px)`;
    exploreDiv.style.transition = ".4s";
  } else {
    exploreDiv.style.transform = `translate3d(${-0}px,0px,0px)`;
    exploreDiv.style.transition = "0.2s";
    exTemp = 0;
  }
});