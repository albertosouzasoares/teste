import{d as e,G as a,j as s}from"./index-BljYPDii.js";const n=e.main`
    padding: 12px;
    display: flex;
    justify-content: center;
    gap: 12px;
        
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`,d=e.section`
    width: 100%;
    max-width: 500px;

    @media screen and (max-width: 800px) {
        margin: 0px auto;
    }
`;function c(i){return a({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"},child:[]}]})(i)}const t=e.div`
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #04040466;
    margin-bottom: 12px;

    .city-time {
        padding: 12px;
        background-color: #313F4F;
        border-radius: 4px 4px 0px 0px;

        display: flex;
        align-items: center;
        gap: 12px;

        span {
            display: block;
            color: #FFFFFF;
        }

        .city {
            font-size: 16px;
            font-weight: 700;
        }

        .time {
            font-size: 14px;
        }

        @media screen and (max-width: 300px) {
            padding: 8px;

            .city {
                font-size: 14px;
            }

            .time {
                font-size: 12px;
            }
        }
    }

    .weather {
        padding: 20px;
        display: flex;
        align-items: center;

        span {
            display: block;
        }

        .temp {
            font-size: 50px;
            font-weight: 900;
            margin: -10px 0px;
        }

        .description {
            font-size: 16px;
            text-transform: capitalize;
            font-weight: 600;
        }

        @media screen and (max-width: 300px) {
            padding: 12px;

            .temp {
                font-size: 42px;
            }

            .description {
                font-size: 14px;
            }
        }
    }
`,l=e(c)`
    display: block;
    fill: #FFFFFF;
    font-size: 24px;

    @media screen and (max-width: 300px) {
        font-size: 20px;
    }
`,r=()=>s.jsxs(t,{children:[s.jsxs("div",{className:"city-time",children:[s.jsx("div",{children:s.jsx(l,{})}),s.jsxs("div",{children:[s.jsx("span",{className:"city",children:"Brumado - BA"}),s.jsx("span",{className:"time",children:"quinta-feira, 15 de agosto"})]})]}),s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]})]});function x(i){return a({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"},child:[]}]})(i)}function p(i){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2zm-4.17-6c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12a.75.75 0 0 1 .74-.87z"},child:[]}]})(i)}function o(i){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"},child:[]},{tag:"path",attr:{d:"M4 9h4"},child:[]},{tag:"path",attr:{d:"M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124"},child:[]},{tag:"path",attr:{d:"M13 3v1"},child:[]},{tag:"path",attr:{d:"M21 12h1"},child:[]},{tag:"path",attr:{d:"M13 20v1"},child:[]},{tag:"path",attr:{d:"M19.4 5.6l-.7 .7"},child:[]},{tag:"path",attr:{d:"M18.7 17.7l.7 .7"},child:[]}]})(i)}function h(i){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24"},child:[]},{tag:"path",attr:{d:"M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24"},child:[]},{tag:"path",attr:{d:"M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24"},child:[]}]})(i)}function m(i){return a({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316m-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"},child:[]}]})(i)}function j(i){return a({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"},child:[]},{tag:"path",attr:{d:"M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676 5.5 5.5 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"},child:[]}]})(i)}const g=e.div`
    padding: 12px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #04040466;

    display: flex;
    flex-direction: column;
    gap: 12px;

    .forecast {
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #04040466;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        .box {
            display: flex;
            align-items: center;
            gap: 12px;

            .icon {
                display: block;
                font-size: 16px;
            }
        }

        div span {
            display: block;
            font-size: 14px;
            font-weight: 600;
        }
    }
    
    @media screen and (max-width: 300px) {
        padding: 8px;
        gap: 8px;

        .forecast {
            padding: 8px;

            .box {
                gap: 8px;

                .icon {
                    font-size: 13px;
                }
            }
            
            div span {
                font-size: 13px;
            }
        } 
    }
`,v=e(o)`
    fill: #B9A305AA;
    stroke: #B9A305;
`,f=e(x)`
    fill: #A50909;
`,u=e(p)`
    fill: #345DB8;
`,w=e(h)`
    fill: #783FA8AA;
    stroke: #783FA8;
`,N=e(j)`
    fill: #7DAAA0;
`,b=e(m)`
    fill: #2B2D4F;
`,F=()=>s.jsxs(g,{children:[s.jsxs("div",{className:"forecast",children:[s.jsxs("div",{className:"box",children:[s.jsx("div",{children:s.jsx(v,{className:"icon"})}),s.jsx("div",{children:s.jsx("span",{children:"Sensação"})})]}),s.jsx("div",{children:s.jsx("span",{children:"30°"})})]}),s.jsxs("div",{className:"forecast",children:[s.jsxs("div",{className:"box",children:[s.jsx("div",{children:s.jsx(f,{className:"icon"})}),s.jsx("div",{children:s.jsx("span",{children:"Min / Max "})})]}),s.jsx("div",{children:s.jsx("span",{children:"17° / 30°"})})]}),s.jsxs("div",{className:"forecast",children:[s.jsxs("div",{className:"box",children:[s.jsx("div",{children:s.jsx(u,{className:"icon"})}),s.jsx("div",{children:s.jsx("span",{children:"Umidade"})})]}),s.jsx("div",{children:s.jsx("span",{children:"60%"})})]}),s.jsxs("div",{className:"forecast",children:[s.jsxs("div",{className:"box",children:[s.jsx("div",{children:s.jsx(w,{className:"icon"})}),s.jsx("div",{children:s.jsx("span",{children:"Vento"})})]}),s.jsx("div",{children:s.jsx("span",{children:"3 km/h"})})]}),s.jsxs("div",{className:"forecast",children:[s.jsxs("div",{className:"box",children:[s.jsx("div",{children:s.jsx(N,{className:"icon"})}),s.jsx("div",{children:s.jsx("span",{children:"Nebulosidade"})})]}),s.jsx("div",{children:s.jsx("span",{children:"30%"})})]}),s.jsxs("div",{className:"forecast",children:[s.jsxs("div",{className:"box",children:[s.jsx("div",{children:s.jsx(b,{className:"icon"})}),s.jsx("div",{children:s.jsx("span",{children:"Chuva"})})]}),s.jsx("div",{children:s.jsx("span",{children:"3% / 10mm"})})]})]}),z=e.aside`
    width: 100%;
    max-width: 350px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #04040466;

    .title {
        height: 59px;
        padding: 12px;
        display: flex;
        align-items: center;
        background-color: #313F4F;
        border-radius: 4px 4px 0px 0px;

        span {
            display: block;
            font-size: 16px;
            font-weight: 700;
            color: #FFFFFF;
        }

        @media screen and (max-width: 300px) {
            padding: 8px;

            span {
                font-size: 14px;
            }
        }
    }

    .hours-forecast {
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .box {
            padding: 8px 12px;
            border-radius: 4px;
            border: 1px solid #04040466;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .weather {
                display: flex;
                align-items: center;
                gap: 6px;
    
                span {
                    display: block;
                }
    
                .temp {
                    font-size: 18px;
                    font-weight: 800;
                    margin: -4px 0px;
                }
    
                .description {
                    font-size: 14px;
                    text-transform: capitalize;
                    font-weight: 600;
                }
    
                img {
                    height: 40px;
                }
            }
    
            .time {
                font-size: 14px;
                font-weight: 600;
            }
        }
    }

    @media screen and (max-width: 800px) {
        max-width: 500px;
        margin: 0px auto;

        .title {
            height: auto;
            display: block;
        }

        .hours-forecast {
            padding: 8px;
            gap: 8px;

            .box {
                padding: 6px 8px;

                .weather {
                    gap: 8px;

                    .temp {
                        font-size: 16px;
                        font-weight: 700;
                        margin: -2px 0px;
                    }

                    .description {
                        font-size: 13px;
                    }

                    img {
                        height: 32px;
                    }
                }

                .time {
                    font-size: 13px;
                }
            }
        }
    }
`,M=()=>s.jsxs(z,{children:[s.jsx("div",{className:"title",children:s.jsx("span",{children:"Próximas 3 horas"})}),s.jsxs("div",{className:"hours-forecast",children:[s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"12:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"15:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"18:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"21:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"21:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"21:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"21:00"})})]}),s.jsxs("div",{className:"box",children:[s.jsxs("div",{className:"weather",children:[s.jsxs("div",{children:[s.jsx("span",{className:"temp",children:"28°"}),s.jsx("span",{className:"description",children:"nublado"})]}),s.jsx("div",{children:s.jsx("img",{src:"https://openweathermap.org/img/wn/04d.png",alt:"icon-weather"})})]}),s.jsx("div",{className:"time",children:s.jsx("span",{children:"21:00"})})]})]})]}),k=()=>s.jsxs(n,{children:[s.jsxs(d,{children:[s.jsx(r,{}),s.jsx(F,{})]}),s.jsx(M,{})]});export{k as default};
