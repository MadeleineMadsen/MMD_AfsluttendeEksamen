/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
          colors: {
            //Neutrale farver
            hvid: "#FFFFFF", //farve til baggrund, logo, primary text, button & default border
            beige: "#F7F4EE", //farve til baggrund, subtle surface & subtle border
            sort: "#090A0A",
            neu100: "#EFEFEF", //farve til default surface
            neu300: "#A5A5A5",
            neu500: "#4D4645", //farve til button primary & secondary, title & default text
    
            //Grøn
            gron100: "#C7CFC8", //farve til sublte surface
            gron300: "#91A194", //farve til lighter surface
            gron500: "#4E6754", //farve til header, footer, logo, secondary text & default surface
            gron700: "#384B3C", //farve til subtitle & darker border
            gron900: "#233026",
    
            //Rød
            rod100: "#C8B1B0", //farve til subtle border
            rod300: "#7F5050", //farve til lighter border
            rod500: "#470A12", //farve til secondary button & default border
            rod700: "#280307", //farve til hover secondary button & darker border
            rod900: "#160102", //farve til clicked secondary button & dark border
    
            //Gul
            gul100: "#E1D4BB", //farve til sublte border
            gul300: "#CAB589", //farve til nav links & lighter border
            gul500: "#CAB589", //farve til primary button, title version 2 & default border
            gul700: "#856E3E", //farve til hover primary button & darker border
            gul900: "#584927", //farve til clicked primary button & dark border
          },
          fontFamily: {
            serif: ["Playfair Disiplay"], //Font til special
            normal: ["Lato", "sans-serif"], //Font til brødtekst og mindre headere
          },
          fontSize: {
            //Desktop
            serifh1: "4.8rem", //Bruges til serif header h1
            serifh2: "3rem", //Bruges til serif header h2
            serifh3: "2rem", //Bruges til serif header h3
            serifh4: "1.375rem", //Bruges til serif header h4
            normalh1: "3rem", //Bruges til header h1
            normalh2: "2.25rem", //Bruges til header h2
            normalh3: "1.5rem", //Bruges til header h3
            normalh4: "1.25rem", //Bruges til header h4
            pbody: "1rem", //Bruges til normal text
            pbodybig: "1.5rem", //Bruges til stor text
            pbodysmall: "0.875rem", //Bruges til small text
            button: "1rem", //Bruges til button
    
            //Mobil
            mserifh1: "2.5rem", //Bruges til serif header h1
            mserifh2: "2.125rem", //Bruges til serif header h2
            mserifh3: "1.688rem", //Bruges til serif header h3
            mserifh4: "1.25rem", //Bruges til serif header h4
            mnormalh1: "2.5rem", //Bruges til header h1
            mnormalh2: "2.125rem", //Bruges til header h2
            mnormalh3: "1.688rem", //Bruges til header h3
            mnormalh4: "1.25rem", //Bruges til header h4
            mbutton: "0.875rem", //Bruges til button
          },
          padding: {
            //Desktop
            xs: "12px", //X-small padding
            s: "20px", //Small padding
            m: "40px", //Medium padding
            l: "60px", //Large padding
            xl: "100px", //X-Large padding
            xxl: "200px", //XX-Large padding
    
            //Mobil
            ms: "10px", //Small padding
            mm: "20px", //Medium padding
            ml: "30px", //Large padding
          },
          spacing: {
            //Desktop
            s: "10px", //Small gap
            m: "20px", //Medium gap
            l: "30px", //Large gap
            xl: "60px", //X-large gap
            xxl: "100px", //Xx-large gap
            xxxl: "140px", //3-xlarge gap
    
            //Mobil
            ms: "5px", //Small gap MOBIL
            mm: "10px", //Medium gap MOBIL
            ml: "15px", //Large gap MOBIL
            mxl: "30px", //X-large gap
            mxxl: "50px", //Xx-large gap
          },
          borderRadius: {
            //Desktop & mobil
            m: "8px", //Medium borderradius
            l: "12px", //Large borderradius
            xl: "16px", //X-large borderradius
          },
          boxShadow: {
            skygge: "0 10px 30px rgba(77, 70, 69, 0.10)", //Skygge på cards
          },
          textUnderlineOffset: {
            off: "12px", // Margin mellem tekst og guld-linje
            big: "24px", //Margin mellem tekst og guld-linje header
          },
          backgroundSize: {},
        },
      },
  };