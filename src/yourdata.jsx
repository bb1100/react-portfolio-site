import React from 'react';

// import all images and videos
import pic from "./images/portrait.jpg";
import project1 from "./images/work/work1.jpg";
import project2 from "./images/work/work2.jpg";
import project3 from "./images/work/work3.jpg";
import project4 from "./images/work/work4.jpg";
import project5 from "./images/work/work5.jpg";
import project6 from "./images/work/work6.jpg";
import project7 from "./images/work/work7.jpg";
import project8 from "./images/work/work8.jpg";
import project9 from "./images/work/work9.jpg";
import project10 from "./images/work/work10.jpg";
import project11 from "./images/work/work11.jpg";
import project12 from "./images/work/work12.jpg";
import project13 from "./images/work/work13.jpg";
import project14 from "./images/work/work14.jpg";
import project15 from "./images/work/work15.jpg";
import project16 from "./images/work/work16.jpg";
import project17 from "./images/work/work17.jpg";
import project18 from "./images/work/work18.jpg";
import project19 from "./images/work/work19.jpg";
import project20 from "./images/work/work20.jpg";
import project21 from "./images/work/work21.jpg";
import project22 from "./images/work/work22.jpg";
import project23 from "./images/work/work23.jpg";
import project24 from "./images/work/work24.jpg";

import codepen1 from "./images/codepen1.png";
import codepen2 from "./images/codepen2.png";
import codepen3 from "./images/codepen3.png";

import bbcLogo from "./images/clients/bbc.png";
import coachellaLogo from "./images/clients/coachella.png";
import eltonjohnLogo from "./images/clients/eltonjohn.svg";
import gardenMuseumLogo from "./images/clients/gardenmuseum.png";
import girlswhocodeLogo from "./images/clients/girlswhocode.png";
import glamourLogo from "./images/clients/glamour.svg";
import ijmLogo from "./images/clients/ijm.png";
import instagramLogo from "./images/clients/instagram.svg";
import maybellineLogo from "./images/clients/maybelline.png";
import metaLogo from "./images/clients/meta.svg";
import nexusLogo from "./images/clients/nexus.png";
import rcaLogo from "./images/clients/rca.png";
import royalcollegeofartLogo from "./images/clients/royalcollegeofart.png";
import snapLogo from "./images/clients/snap.png";
import themillLogo from "./images/clients/themill.png";
import tiktokLogo from "./images/clients/tiktok.png";
import universalLogo from "./images/clients/universal.png";


// const clientModules = import.meta.glob("./images/clients/*.{png,jpg,jpeg,svg}", { 
//   eager: true,
//   as: 'url' // Correct - returns direct URLs
// });

// const clientMap = (modules = clientModules, keepExtensions = false) => {
//   return Object.entries(modules).reduce((acc, [path, url]) => {  // Use 'modules' parameter
//     const fileName = keepExtensions 
//       ? path.split('/').pop() // 'logo.png'
//       : path.split('/').pop().replace(/\..+$/, ''); // 'logo'
//     acc[fileName] = url; // Correct - no .default needed with as: 'url'
//     return acc;
//   }, {});
// };

// const clients = clientMap;//(clientModules);


export const yourData = {
  // Please Do Not Remove The comma(,) after every variable)
  // Change The Website Template:
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Header Section --------------------------
  headername: "BALRAJ CREATIVE x TECHNOLOGIST",
  // End Header Section -----------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Work Section ------------------------
  workHeading: "Projects",
  workPara: 
    <>
      <p>
        A selection of spatial and real-time projects bringing together art 
        and technology for unique, boundary pushing designs and builds. 
      </p>
      <p>
        Click each video to see more.
      </p>
    </>,
  projects: [
    {
      id: 23,
      videoThumb: project24,
      videoTitle: "Elton John",
      paragraph:
        <>
          <p>Bringing his legacy into the world of AR on TikTok for fans to try and create videos with.
            From a sequin baseball hat to muticolour star glasses as custom 3D models, UI and VFX. 
            Made with Effect House, Blender 3D with custom made textures, materials and interaction logic.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/909145520?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 21,
      videoThumb: project22,
      videoTitle: "Harmony the Hare, Coachella",
      paragraph:
        <>
          <p>Created with Coachella and Meta from creative to final delivery. Harmony is the audio, spatial and 
            time reactive sidekick who explores the festival with you. The official Discord community created an AI
            generated image as the inspiration for Harmony. I designed with concept sketches and UX flows to form the colourful 
            character and get the user to move intuitively in their world to become highly immersed. The 
            spatial understanding and interactions were built myself, with JavaScript and audio reactive fur
             and refractive layered glass with GLSL.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/1079365814?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 9,
      videoThumb: project10,
      videoTitle: "Latto x Girls Who Code",
      paragraph:
        <>
          <p>Made in collaboration with Meta, Girls Who Code and RCA Records. Mentoring and training
            young women of colour interested in STEM and music to concept, design, 
            code with JavaScript in an AR engine and develop team skills.
            Effect features makeup using face tracking that adapts to lighting, for the front camera 
            and a world effect, for the back camera.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/786771636?h=7e55e38721&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
      projectLink: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Freel%2FCoabmejtY6V%2F%3Futm_source%3Dig_web_copy_link%26fbclid%3DIwAR0L4ssQKf261iZkcvRo4ZsW1jMqbYay4g2AEpA1SsixtemFyrKf7k62sZ4&h=AT10H9bWPgLKMuF1CN1Dh-HwdqrLeEkpkGo_z1loJC0ZW2_MSq9gcxzDCr7wyjcTsZhMhL2i67Zga-tzNXceq_jXK8v58hlMHNr9Qlz1hNjhiH_JpJqPgRJc-rQepWlkV7TqdT0&__tn__=-UK-R&c[0]=AT2Um7VVVhwX4BgPCDbhk5_IMX4ISrnLFpsHQmeh2P3cg5PgYPKRcqm88kWEL6-nww22ku-ft80omRgfoZLQiP0z794FluSnF8ANCTEf7CGBpGbx3GlJTUWyXAXhDXKgL5w9FzgUrVy9WbmI7vP9dFPs9iSi5MikWINdd283_UN1T5_cn2EYUNuGZTOrvuImdEV5OPwp7tvPMPyrq3Uv5TJRK-hIUQ",
    },
    {
      id: 0,
      videoThumb: project1,
      videoTitle: "Glamour x Willow TikTok Cover",
      paragraph:
        <>
          <p>Glamour UK digital makeup and gems cover look for TikTok. 
          Inclusive makeup and procedurally animated 3D gems.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775340965?h=825942e541?amp;loop=1",
      projectLink: "https://www.glamourmagazine.co.uk/article/balraj-bains-interview",
    },
    {
      id: 1,
      videoThumb: project2,
      videoTitle: "Garden Museum Installation",
      paragraph:
        <>
          <p>Magical virtual tree for British Flowers Week. 
            The design subverts reality with the tree growing from a leafy ceiling. 
            Built as Augmented Reality, the magical glow intensifies as sunset hits 
            and returns to its base state during the day.
            Featuring scripted animations and custom render pipeline poisson blurs and 
            a 3D custom designed and modelled tree.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775356208?h=60e613c2f4?amp;loop=1",
    },
    {
      id: 2,
      videoThumb: project3,
      videoTitle: "Metal Nails",
      paragraph:
        <>
          <p>Viral 3D digital art nails. 
            Custom hand gesture developed with JavaScript. 
            Nails designed and modelled as custom 3D models with hand painted textures. 
            For Snapchat made with Lens Studio.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775359980?h=e74225c983?amp;loop=1",
    },
    {
      id: 3,
      videoThumb: project4,
      videoTitle: "Dream Pod",
      paragraph:
        <>
          <p>Relaxing audio-reactive raymarching shader with PBR world particles. 
            Shader's shape animates to the user's Instagram track of choice. 
            Made with Meta Spark and GLSL.</p>
          <p>Video by Manuel Borrero</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775361868?h=f82d60529b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 4,
      videoThumb: project5,
      videoTitle: "Maybelline Lash Generator",
      paragraph:
        <>
          <p>Multiple rounds scripted 3D game to provide randomised mascara products and 
            matching label, audio, makeup and immersive shaders. 
            Tap to restart the game. Made with Meta Spark and Blender.
          </p>
          <p>Video by Panta X Rhei</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/777518332?h=04dc71f533&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 5,
      videoThumb: project6,
      videoTitle: "Creators Week Wearable",
      paragraph:
        <>
          <p>Meta @Creators digital swag for the in person events week using 
            the exclusive Instagram brand gradient for a future fashion piece. 
            Optical flow and head movement controls mist emission. 
            Visual shaders to map the gradient to the glasses.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775346908?h=af5a829f42&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 12,
      videoThumb: project13,
      videoTitle: "Midnight Tarot",
      paragraph:
        <>
          <p>Winner of Lenslist's 'These Long Nights' challenge. 
            Custom render pipeline and shader setup to create a living 
            tarot card where the user and surrounding elements are similar 
            to a portals experience. Card spins to reveal itself from a 
            blurred blank background with audio to immerse the user into the storyline.
            Crown made of particles and occluded with segmentation to 
            maintain correct scale. 
            Team project with Katya Pavlenko.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/780921727?h=23696ca1c6&badge=0&autopause=0&player_id=0&app_id=58479/embed;loop=1",
    },
    {
      id: 19,
      videoThumb: project20,
      videoTitle: "Too Much Mod",
      paragraph:
        <>
          <p>Cyber character with metallic skin shader and voice distortion. 
            Turns the user into a cyborg.
            Detecting a change in face detection triggers electric flame mode 
            inspired by Cyberpunk 2077 character Lizzie Wizzie.
            3D models combined with occluders, segmentation, 
            mapped SDF shaders and particles for spatial believability.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/788520699?h=a8a8d6df0c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;loop=1",
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

  projects2: [
    {
      id: 22,
      videoThumb: project23,
      videoTitle: "Crystal Collection Game",
      paragraph:
        <>
          <p>
            A Unity3D web game created to step into a magical world and encourage 'non-traditional' gamers
            or those interested in immersive experiences to experience a fun mini game with a magical atmosphere.
            VFX, procedural lighting, programming with C# and node graphs along with character skeleton adjustments
            to control the range of motion. Terrain and audio bring together the world design with classic WASD 
            and arrow controls.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/909123948?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      projectLink: "https://crystalcollectiongame.netlify.app/",
    },
    {
      id: 20,
      videoThumb: project21,
      videoTitle: "Fur Slides",
      paragraph:
        <>
          <p>Snapchat Lens made with FootTracking ML to erase the feet and shoes,
            to replace them with digital fashion of a custom fur slides shoe design.
          </p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/797185742?h=6fcf8f2130&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 7,
      videoThumb: project8,
      videoTitle: "Identity 2.0 Exhibition",
      paragraph:
        <>
          <p>This Machine is Black explores race and technology and surreal cyber future identity.
            The effect usess SDFs, 3D models cusotmised to the face tracker, procedural noise and glow,
            delay frames, texture distortion, with dynamic text to display the date.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775356092?h=a168a33143&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
      projectLink: "https://identity20.org/thismachineisblack/",
    },
    {
      id: 8,
      videoThumb: project9,
      videoTitle: "Heads Up! Videocall Game",
      paragraph:
        <>
          <p>Played on the Ellen Show and on Meta Messenger's blog, made with Nexus,
            this timed game uses Multipeer to create a multi-pack liveplay in app responsive game.
            Each user receives a unique 3D costume and results are shown at the end.</p>
        </>,
      videoSrcURL: "https://www.youtube.com/embed/XpSJE1CNXMo",
      projectLink: "https://messengernews.fb.com/2021/12/14/play-heads-up-with-your-friends-on-instagram-and-messenger/",
      isHorizontal: true,
    },
    {
      id: 6,
      videoThumb: project7,
      videoTitle: "Zodiac Soulmate Quiz",
      paragraph:
        <>
          <p>Pastel magic themed, Effect House challenge winning randomiser quiz on Tiktok.
            Procedurally animated rotations and colour transition on answer reveal.</p>
          <p>Video by lala_sadii</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775364856?h=4b9d587bd5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 10,
      videoThumb: project11,
      videoTitle: "Immersive Future World",
      paragraph:
        <>
          <p>Our Future collaboration world and self facing project. Featuring an underwater world with 3D animated models, sunbeam SDFs,
            wave distortion shader, noise detail and a face oxygen mask. Team project with Katya Pavlenko.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/780922300?h=6935fed973&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 11,
      videoThumb: project12,
      videoTitle: "Break Free to Fly",
      paragraph:
        <>
          <p>A team Meta x IJM immersive narrative project, following the story of trafficked children to raise awareness of their stories.
            The journey follows a butterfly from a dark room and breaks through to a safe restoration space.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775357990?h=e176c29a7a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
      projectLink: "https://www.ijm.org/news/meta-partners-ijm-immersive-awareness-campaign",
    },
    {
      id: 13,
      videoThumb: project14,
      videoTitle: "Cyberpunk Makeup",
      paragraph:
        <>
          <p>An audio reactive and makeup effect. SDFs used to generate shapes and hair segmentation texture,
            3D models animated with head, screen and dissolve shader animations.
            3D necklace modelled and textured with Blender and rigged with a neck occluder. Post processing blur and gradient applied for atmosphere.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/780922175?h=58b53c9a5d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 14,
      videoThumb: project15,
      videoTitle: "Evangelion Rei",
      paragraph:
        <>
          <p>Anime character made with custom render pipeline, hair removal,
            rigged 3D wig, clips, eyes, moon and blend shapes for face meshes and makeup, custom textures for eyebrows and particles.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/780922090?h=d1cf47010e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 15,
      videoThumb: project16,
      videoTitle: "Jellied",
      paragraph:
        <>
          <p>Lens studio custom shader to render the user semi-invisible with fluid texture distortion and segmentation.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775363611?h=382eaea382&badge=0&autopause=0&player_id=0&app_id=58479/embed;loop=1",
    },
    {
      id: 16,
      videoThumb: project17,
      videoTitle: "Swiftie",
      paragraph:
        <>
          <p>Body avatar drive comedy effect made with Effect House and Blender, used by BBC Radio 1.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/775364444?h=be8611f310&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;loop=1",
    },
    {
      id: 17,
      videoThumb: project18,
      videoTitle: "Metal Punk",
      paragraph:
        <>
          <p>Glass refraction spikes with custom render pipeline to render layered meshes within the glass.
            Eyebrows lowered interaction to emit nose particles and customised HDRI texture.
            Post-processing applied for TV effect and neck tattoo rigged to head rotation.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/780922129?h=42544eafef&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;loop=1",
    },
    {
      id: 18,
      videoThumb: project19,
      videoTitle: "Life in Colour II",
      paragraph:
        <>
          <p>Delay frame with shader code for a gamma corrected rainbow tile effect driven by the user's movement.</p>
        </>,
      videoSrcURL: "https://player.vimeo.com/video/780922248?h=c9c03f5f1a&badge=0&autopause=0&player_id=0&app_id=58479/embed;loop=1",
    },
  ],
  // End Work Section -----------------------
  // ----------------------------------------------------// * * * * * * * * * *
  // ----------------------------------------------------
  // Promotion Section -----------------------------
  promotionHeading: "Playground",
  promotionPara:
    <>
      <p>Enter the playground, shaders are cool, so are metallic 3D ponies that roam the web.</p>
    </>,
  codepens: [
    {
      heading: "Reflective Horse",
      paragraph: "Three.js and GLSL GLFT import, rotation matrix, PBR Material, Lighting and Environment Mapping.",
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
    <p><b>Immersive Director, Multi-Disciplinary Artist and Creative Technologist</b> with experience in XR, wearables, product, design, research 
      and writing for immersive experiences and social innovation spaces. Former Technical Artist at <b>Meta Reality
      Labs</b> working Extended Realities. Clients include <b>Universal, Nexus Studios and more</b>.
    </p>
    <p>Specialities include creative, protoyping and delivery of industry leading projects with an interest
        in beautiful design, intuitive UX and immersive narrative. Collaborations with creatives, production
        and engineers of vast specialities supports exploring spatial design processes. 
        
        Platforms and tools include 
        <b> Unreal Engine 5, Unity 3D, RealityKit, Reality Composer Pro,
        Web, 3D Web, WebXR, A-Frame, 8th Wall, P5, TouchDesigner, 
        3D direction, Blender, Maya, ZBrush, Substance Suite,
        GLSL, C#, JavaScript, TypeScript, React.</b>
    </p>
    <p>
      Press includes <b> BBC, Glamour UK, Tiktok Newsroom, Meta, Techcrunch, 
      AWE, VidCon, Creative Lives in Progress, Lenslist. </b>
      Talks, judging and workshops include 
      <b> Somerset House, Royal Collage of Art, Meta, Snap, Lenslist, Hacktiv8, Reskill.</b>
    </p>
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
      img: "",
      title: "",
      para: "",
      // if you have a skills certificate, link to it
      url: ""
    },
  ],
  // End Skills Section ---------------------
  // ----------------------------------------------------
  // * * * * * * * * * *
  // ----------------------------------------------------
  // Clients Section --------------------------

  clients: [
    {
      // Import Icons from the top and add name here
      img: universalLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: instagramLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: metaLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: bbcLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: snapLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: rcaLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: nexusLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: royalcollegeofartLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: tiktokLogo,
      title: "",
      para: "",
      url: ""
    },    
    {
      // Import Icons from the top and add name here
      img: ijmLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: eltonjohnLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: themillLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: glamourLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: gardenMuseumLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: girlswhocodeLogo,
      title: "",
      para: "",
      url: ""
    },
    {
      // Import Icons from the top and add name here
      img: coachellaLogo,
      title: "",
      para: "",
      url: ""
    },
  ],
  // End Clients Section --------------------------
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
  footerlabel: "[creative archive]"
  // End Footer Section -----------------------
  // ----------------------------------------------------
}
