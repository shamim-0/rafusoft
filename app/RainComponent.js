"use client"

// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Navbar from './Navbar';
// import WavesSVG from './Waves';
// import BannerContent from './BannerContent';
import "../public/css/rain.scss"

// const RainComponent = () => {
//   const canvas1Ref = useRef(null);
//   const canvas2Ref = useRef(null);
//   const canvas3Ref = useRef(null);

//   useEffect(() => {

 

//     const canvas1 = canvas1Ref.current;
//     const canvas2 = canvas2Ref.current;
//     const canvas3 = canvas3Ref.current;

//     const ctx1 = canvas1.getContext('2d');
//     const ctx2 = canvas2.getContext('2d');
//     const ctx3 = canvas3.getContext('2d');

//     canvas1.addEventListener('click', (e) => {
//       e.stopPropagation();
//     });
  
//     canvas2.addEventListener('click', (e) => {
//       e.stopPropagation();
//     });
  
//     canvas3.addEventListener('click', (e) => {
//       e.stopPropagation();
//     });

//     var rainthroughnum = 500;
//     var speedRainTrough = 205;
//     var RainTrough = [];

//     var rainnum = 500;
//     var rain = [];

//     var lightning = [];
//     var lightTimeCurrent = 0;
//     var lightTimeTotal = 0;

//     var w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
//     var h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;

//     window.addEventListener('resize', function () {
//       w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
//       h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
//     });

//     function random(min, max) {
//       return Math.random() * (max - min + 1) + min;
//     }

//     function clearCanvas1() {
//       ctx1.clearRect(0, 0, w, h);
//     }

//     function clearCanvas2() {
//       ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
//     }

//     function clearCanvas3() {
//       ctx3.globalCompositeOperation = 'destination-out';
//       ctx3.fillStyle = 'rgba(0,0,0,' + random(1, 30) / 100 + ')';
//       ctx3.fillRect(0, 0, w, h);
//       ctx3.globalCompositeOperation = 'source-over';
//     }

//     function createRainTrough() {
//       for (var i = 0; i < rainthroughnum; i++) {
//         RainTrough[i] = {
//           x: random(0, w),
//           y: random(0, h),
//           length: Math.floor(random(1, 830)),
//           opacity: Math.random() * 0.2,
//           xs: random(-2, 2),
//           ys: random(10, 20)
//         };
//       }
//     }

//     function createRain() {
//       for (var i = 0; i < rainnum; i++) {
//         rain[i] = {
//           x: Math.random() * w,
//           y: Math.random() * h,
//           l: Math.random() * 1,
//           xs: -4 + Math.random() * 4 + 2,
//           ys: Math.random() * 10 + 10
//         };
//       }
//     }

//     function createLightning() {
//       var x = random(100, w - 100);
//       var y = random(0, h / 4);

//       var createCount = random(1, 3);
//       for (var i = 0; i < createCount; i++) {
//         var single = {
//           x: x,
//           y: y,
//           xRange: random(5, 30),
//           yRange: random(10, 25),
//           path: [{
//             x: x,
//             y: y
//           }],
//           pathLimit: random(40, 55)
//         };
//         lightning.push(single);
//       }
//     }

//     function drawRainTrough(i) {
//       ctx1.beginPath();
//       var grd = ctx1.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length);
//       grd.addColorStop(0, "rgba(255,255,255,0)");
//       grd.addColorStop(1, "rgba(255,255,255," + RainTrough[i].opacity + ")");

//       ctx1.fillStyle = grd;
//       ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
//       ctx1.fill();
//     }

//     function drawRain(i) {
//       ctx2.beginPath();
//       ctx2.moveTo(rain[i].x, rain[i].y);
//       ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
//       ctx2.strokeStyle = 'rgba(174,194,224,0.5)';
//       ctx2.lineWidth = 1;
//       ctx2.lineCap = 'round';
//       ctx2.stroke();
//     }

//     function drawLightning() {
//       for (var i = 0; i < lightning.length; i++) {
//         var light = lightning[i];

//         light.path.push({
//           x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
//           y: light.path[light.path.length - 1].y + (random(0, light.yRange))
//         });

//         if (light.path.length > light.pathLimit) {
//           lightning.splice(i, 1);
//         }

//         ctx3.strokeStyle = 'rgba(255, 255, 255, .1)';
//         ctx3.lineWidth = 3;
//         if (random(0, 15) === 0) {
//           ctx3.lineWidth = 6;
//         }
//         if (random(0, 30) === 0) {
//           ctx3.lineWidth = 8;
//         }

//         ctx3.beginPath();
//         ctx3.moveTo(light.x, light.y);
//         for (var pc = 0; pc < light.path.length; pc++) {
//           ctx3.lineTo(light.path[pc].x, light.path[pc].y);
//         }
//         if (Math.floor(random(0, 30)) === 1) {
//           ctx3.fillStyle = 'rgba(255, 255, 255, ' + random(1, 3) / 100 + ')';
//           ctx3.fillRect(0, 0, w, h);
//         }
//         ctx3.lineJoin = 'miter';
//         ctx3.stroke();
//       }
//     }

//     function animateRainTrough() {
//       clearCanvas1();
//       for (var i = 0; i < rainthroughnum; i++) {
//         if (RainTrough[i].y >= h) {
//           RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5;
//         } else {
//           RainTrough[i].y += speedRainTrough;
//         }
//         drawRainTrough(i);
//       }
//     }

//     function animateRain() {
//       clearCanvas2();
//       for (var i = 0; i < rainnum; i++) {
//         rain[i].x += rain[i].xs;
//         rain[i].y += rain[i].ys;
//         if (rain[i].x > w || rain[i].y > h) {
//           rain[i].x = Math.random() * w;
//           rain[i].y = -20;
//         }
//         drawRain(i);
//       }
//     }

//     function animateLightning() {
//       clearCanvas3();
//       lightTimeCurrent++;
//       if (lightTimeCurrent >= lightTimeTotal) {
//         createLightning();
//         lightTimeCurrent = 0;
//         lightTimeTotal = 200;
//       }
//       drawLightning();
//     }

//     function init() {
//       createRainTrough();
//       createRain();
//       window.addEventListener('resize', createRainTrough);
//     }
//     init();

//     function animloop() {
//       animateRainTrough();
//       animateRain();
//       animateLightning();
//       requestAnimationFrame(animloop);
//     }
//     animloop();

//   }, []);

//   return (
//     <div className='relative w-full'>
//       <div className='absolute top-0 z-50 w-full'>
//        <Navbar/>
       
//       </div>
      
//       <div className="thunder">
//       <canvas ref={canvas1Ref} id="canvas1"></canvas>
//       <canvas ref={canvas2Ref} id="canvas2"></canvas>
//       <canvas ref={canvas3Ref} id="canvas3"></canvas>
//       <div className='h-[100vh] w-full'>

//       <div>
// 		</div>
//       </div>
//     </div>


//     <div className='max-w-6xl mx-auto'>
//     <div className='absolute md:top-[45%] top-[35%]'>
//         <BannerContent/>
//     </div>
//     </div>

//     <div className='absolute bottom-1 w-full'>
//       <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
//     <defs>
//       <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
//     </defs>
//     <g className="wave_parallax">
//       <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
//       <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
//       <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.6)" />
//       <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,1)" />
//     </g>
//       </svg>
//       </div>   
//     </div>
//   );
// };

// export default RainComponent;

// "use client"
import { useEffect } from 'react';

export default function RainContent() {
  useEffect(() => {
    const canvas1 = document.getElementById('canvas1');
    const canvas2 = document.getElementById('canvas2');
    const canvas3 = document.getElementById('canvas3');
    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctx3 = canvas3.getContext('2d');

    const rainthroughnum = 500;
    const speedRainTrough = 25;
    const RainTrough = [];

    const rainnum = 500;
    const rain = [];

    const lightning = [];
    let lightTimeCurrent = 0;
    let lightTimeTotal = 0;

    let w = window.innerWidth;
    let h = window.innerHeight;

    function random(min, max) {
      return Math.random() * (max - min + 1) + min;
    }

    function clearCanvas(context) {
      context.clearRect(0, 0, w, h);
    }

    function clearCanvas3() {
      ctx3.globalCompositeOperation = 'destination-out';
      ctx3.fillStyle = 'rgba(0,0,0,' + random(1, 30) / 100 + ')';
      ctx3.fillRect(0, 0, w, h);
      ctx3.globalCompositeOperation = 'source-over';
    }

    function createRainTrough() {
      for (let i = 0; i < rainthroughnum; i++) {
        RainTrough[i] = {
          x: random(0, w),
          y: random(0, h),
          length: Math.floor(random(1, 830)),
          opacity: Math.random() * 0.2,
          xs: random(-2, 2),
          ys: random(10, 20),
        };
      }
    }

    function createRain() {
      for (let i = 0; i < rainnum; i++) {
        rain[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10,
        };
      }
    }

    function createLightning() {
      const x = random(100, w - 100);
      const y = random(0, h / 4);

      const createCount = random(1, 3);
      for (let i = 0; i < createCount; i++) {
        const single = {
          x,
          y,
          xRange: random(5, 30),
          yRange: random(10, 25),
          path: [{ x, y }],
          pathLimit: random(40, 55),
        };
        lightning.push(single);
      }
    }

    function drawRainTrough(i) {
      ctx1.beginPath();
      const grd = ctx1.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length);
      grd.addColorStop(0, 'rgba(255,255,255,0)');
      grd.addColorStop(1, 'rgba(255,255,255,' + RainTrough[i].opacity + ')');

      ctx1.fillStyle = grd;
      ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length);
      ctx1.fill();
    }

    function drawRain(i) {
      ctx2.beginPath();
      ctx2.moveTo(rain[i].x, rain[i].y);
      ctx2.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys);
      ctx2.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx2.lineWidth = 1;
      ctx2.lineCap = 'round';
      ctx2.stroke();
    }

    function drawLightning() {
      for (let i = 0; i < lightning.length; i++) {
        const light = lightning[i];

        light.path.push({
          x: light.path[light.path.length - 1].x + (random(0, light.xRange) - light.xRange / 2),
          y: light.path[light.path.length - 1].y + random(0, light.yRange),
        });

        if (light.path.length > light.pathLimit) {
          lightning.splice(i, 1);
        }

        ctx3.strokeStyle = 'rgba(255, 255, 255, .1)';
        ctx3.lineWidth = 3;
        if (random(0, 15) === 0) {
          ctx3.lineWidth = 6;
        }
        if (random(0, 30) === 0) {
          ctx3.lineWidth = 8;
        }

        ctx3.beginPath();
        ctx3.moveTo(light.x, light.y);
        for (let pc = 0; pc < light.path.length; pc++) {
          ctx3.lineTo(light.path[pc].x, light.path[pc].y);
        }
        if (Math.floor(random(0, 30)) === 1) {
          ctx3.fillStyle = 'rgba(255, 255, 255, ' + random(1, 3) / 100 + ')';
          ctx3.fillRect(0, 0, w, h);
        }
        ctx3.lineJoin = 'miter';
        ctx3.stroke();
      }
    }

    function animateRainTrough() {
      clearCanvas(ctx1);
      for (let i = 0; i < rainthroughnum; i++) {
        if (RainTrough[i].y >= h) {
          RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5;
        } else {
          RainTrough[i].y += speedRainTrough;
        }
        drawRainTrough(i);
      }
    }

    function animateRain() {
      clearCanvas(ctx2);
      for (let i = 0; i < rainnum; i++) {
        rain[i].x += rain[i].xs;
        rain[i].y += rain[i].ys;
        if (rain[i].x > w || rain[i].y > h) {
          rain[i].x = Math.random() * w;
          rain[i].y = -20;
        }
        drawRain(i);
      }
    }

    function animateLightning() {
      clearCanvas3();
      lightTimeCurrent++;
      if (lightTimeCurrent >= lightTimeTotal) {
        createLightning();
        lightTimeCurrent = 0;
        // lightTimeTotal = random(100, 200);
        lightTimeTotal = 200; // Use a constant value for now
      }
      drawLightning();
    }

    function handleResize() {
      w = canvas1.width = canvas2.width = canvas3.width = window.innerWidth;
      h = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;
      createRainTrough();
    }

    createRainTrough();
    createRain();
    window.addEventListener('resize', handleResize);

    function animloop() {
      animateRainTrough();
      animateRain();
      animateLightning();
      requestAnimationFrame(animloop);
    }
    animloop();

    return () => {
      // Cleanup or remove event listeners if needed
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <div className="thunder">
        <canvas id="canvas1"></canvas>
        <canvas id="canvas2"></canvas>
        <canvas id="canvas3"></canvas>
      </div>
    </div>
  );
}

