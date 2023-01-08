import React from 'react'

// import all images and videos
import pic from "./images/snap-avatar.jpg";
import project1 from "./images/work1.jpg";
import project2 from "./images/work2.jpg";
import project3 from "./images/work3.jpg";
import project4 from "./images/work4.png";
import project5 from "./images/work5.png";
import project6 from "./images/work6.png";
import codepen1 from "./images/codepen1.jpg";
import codepen2 from "./images/codepen2.png";
import codepen3 from "./images/codepen3.png";
import Spark from "./images/icons/spark.png";
import Lens from "./images/icons/lens.png";
import EffectHouse from "./images/icons/effectHouse.png";
import Unity from "./images/icons/unity.png";
import Unreal from "./images/icons/unreal.png";


export const yourData = {
  // Please Do Not Remove The comma(,) after every variable)
  // Change The Website Template:
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Header Section --------------------------
  headername: "BALRAJ AR DESIGNER",
  // End Header Section -----------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Work Section ------------------------
  projects: [
    {
      videoThumb: project1,
      videoTitle: "Glamour x Willow x TikTok Cover",
      paragraph:
        <>
          <p>Glamour UK TikTok cover effect made with Effect House. Inclusive makeup and procedurally animated gems.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775340965?h=825942e541?amp;loop=1",
      projectLink: "https://www.glamourmagazine.co.uk/article/balraj-bains-interview",
    },
    {
      videoThumb: project2,
      videoTitle: "Garden Museum Installation",
      paragraph:
        <>
          <p>Plane tracking magical tree made with Meta Spark. Scripted animations and custom render pipeline poisson blurs.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775356208?h=60e613c2f4?amp;loop=1",
    },
    {
      videoThumb: project3,
      videoTitle: "Metal Nails",
      paragraph:
        <>
          <p>Viral finger tracking effect in Lens Studio. Custom hand gesture creation with JavaScript. Nails designed and modelled in Blender.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775359980?h=e74225c983?amp;loop=1",
    },
    {
      videoThumb: project4,
      videoTitle: "Dream Pod",
      paragraph:
        <>
          <p>Relaxing raymarching shader with PBR world particles. Shader's shape animates to the user's Instagram track of choice. Made with Meta Spark and SparkSL.</p>
          <p>Video by Manuel Borrero</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775361868?h=f82d60529b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      videoThumb: project5,
      videoTitle: "Maybelline Lash Generator",
      paragraph:
        <>
          <p>Multiple rounds scripted game to provide randomised mascara products and matching label, audio, makeup and immersive shaders. Tap to restart the game. Made with Meta Spark and Blender.</p>
          <p>Video by Panta X Rhei</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/777518332?h=04dc71f533&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      videoThumb: project6,
      videoTitle: "Creators Week Wearable",
      paragraph:
        <>
          <p>Meta @Creators digital swag for the in person events week using the exclusive Instagram brand gradient for a future fashion piece. Optical flow and head movement controls mist emission. Shaders to map the gradient to the glasses.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775346908?h=af5a829f42&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    // copy section to add more projects
    // {
    //   videoThumb: project3,
    //   videoTitle: "Project Title",
    //   paragraph:
    //     <>
    //       <p>Description</p>
    //     </>,
    //   videoSrcURL: "",
    // },
  ],
  // End Work Section -----------------------
  // ----------------------------------------------------// * * * * * * * * * *
  // ----------------------------------------------------
  // Promotion Section -----------------------------
  promotionHeading: "Creative Code",
  promotionPara:
    <>
      <p>Three.js and P5.js experiments.</p>
    </>,
  codepens: [
    {
      heading: "Shiny Torus",
      paragraph: "Three.js and GLSL rotation matrix, PBR Material, Lighting and Environment Mapping.",
      imgUrl: codepen1,
      projectLink: "https://codepen.io/bb1100/pen/MWrEbZY",
    },
    {
      heading: "Fireball",
      paragraph: "Three.js and GLSL noise and vertex displacement. User input interactivity and light chunks.",
      imgUrl: codepen2,
      projectLink: "https://codepen.io/bb1100/pen/QWaMxpo",
    },
    {
      heading: "Pastel Party",
      paragraph: "Explosion of circles bouncing in the window. Made with P5.js.",
      imgUrl: codepen3,
      projectLink: "https://codepen.io/bb1100/pen/dyOgyXq",
    },
  ],
  // End Promotion Section -----------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // About Section -------------------------
  aboutParagraph: <>
    <p>Creative technologist with experience in AR, XR, HMDs, product, design, research and writing for immersive experiences and social innovation spaces. Former Technical Artist at Meta Reality Labs working on Spark AR.</p>
    <p>Specialities include idea development, critical thinking and project management. I continue to expand in the AR, creative and tech spaces by collaborating with creatives and engineers of vast specialities, learning new AR design processes such as Unreal Engine 5, Unity and programming with JavaScript, TypeScript, React, GLSL, SparkSL, P5.js, Three.js, whilst building with Meta Spark AR, TikTok Effect House, Snap Lens Studio.</p>
  </>,
  aboutImage: pic,
  //   End About Section ---------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Skills Section --------------------------
  skills: [
    {
      // Import Icons from the top and add name here
      img: Spark,
      title: "Meta Spark",
      para:
        "Official Meta Spark Community Expert. Creative direction, Asynchronous JavaScript, TypeScript, SparkSL, Optimisation and Patch Editor.",
      // if you have a skills certificate, link to it
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: Lens,
      title: "Lens Studio",
      para:
        "Official Snap Lens Network Creator. Creative Direction, JavaScript, Visual Scripting, Material Editor, VFX.",
      // if you have a skills certificate, link to it
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: EffectHouse,
      title: "Effect House",
      para:
        "Early Beta Effect House Adopter. Creative Direction, Viral Effects, Visual Scripting, Asset Generation.",
      // if you have a skills certificate, link to it
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: Unity,
      title: "Unity",
      para:
        "Unity learning in progress...",
      // if you have a skills certificate, link to it
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: Unreal,
      title: "Unreal Engine",
      para:
        "Unreal Engine 5 learning in progress...",
      // if you have a skills certificate, link to it
      url: ""
    },
  ],
  // End Skills Section --------------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // ---------------------------
  // Contact Section
  contactSubHeading: "Follow me",
  social: [
    // Add Or Remove The Link Accordingly
    {
      // img: codepenIcon,
      title: "Codepen",
      url: "https://codepen.io/bb1100"
    },
    {
      // img: shopIcon,
      title: "Shop",
      url: "https://shop.blraj.com",
    },
    // {
    //   // img: facebookIcon,
    //   title: "Instagram AR Effects",
    //   url: "https://www.facebook.com/sparkarhub/portfolios/ig/hellobeyondinc/",
    // },
    // {
    //   // img: lensIcon,
    //   title: "snapchat AR lenses",
    //   url: "https://lensstudio.snapchat.com/creator/-D1vojaseAyPOGBDAyvgKw",
    // },
    // {
    //   // img: tiktokIcon,
    //   title: "tiktok AR effects",
    //   url: "https://www.tiktok.com/sticker/Zodiac-Soulmate-1449912?_d=secCgYIASAHKAESPgo8ru6rn1xdW%2FFbp8I55ZLHhoazfnbG%2BQHtgBw5PRwVImOUSPg75sscYSwH2tN8DDCd7pM6BsxkmHXktUcDGgA%3D&_r=1&checksum=68add0078570d09521247fcfebcc5771e184adb9256a8df1f0a10000e89e9767&sec_user_id=MS4wLjABAAAAOBzHU5fuFUgitdBp4mvpb-aRu1ZYmUfYZCFyWbeAMnd_KOEroFosLKinAa5XO_Kp&share_app_id=1233&share_link_id=2DBA453B-AA58-4D79-B684-BF44D57D2F51&share_sticker_id=1449912&social_sharing=v1&source=h5_m&tt_from=more&u_code=d9d55a2fel4f4a&user_id=6762307782470599686&utm_campaign=client_share&utm_medium=ios&utm_source=more",
    // },
  ],
  // End Contact Section ---------------
  // ----------------------------------------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Footer Section --------------------------
  name: "Balraj Bains",
  footerlink: "https://balrajbains.wixsite.com/blraj",
  footerlabel: "[See creative archive here]"
  // End Footer Section -----------------------
  // ----------------------------------------------------
}
