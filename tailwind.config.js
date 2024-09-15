/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1525',
        secondary: '#2A9C6C',
        tertiary: "#12233D",
        paragraph: '#626262',
        heading: '#1C1C1C',  // Dull Black
      },
      backgroundImage: {
        'expert-cons': "url('/assets/Images/expertCons.png')",
        'in-depth': "url('/assets/Images/inDepth.png')",
        'ethical-ai-nav': "url('/assets/Images/ethicalAiNav.png')",
        'footer-bg': "url('/assets/Images/footerBg.png')",
        'home-bg': "url('/assets/Images/homeBg.png')",
        'consultancy-bg': "url('/assets/Images/consultancyBg.png')",
        'ai-consultancy-bg': "url('/assets/Images/aiConsultancy.png')",
        'predict-ai-future-bg': "url('/assets/Images/predictAiFuture.png')",
        'cta-bg': "url('/assets/Images/ctaBg.png')",
        'site-founding-bg': "url('/assets/Images/siteFounding.png')",
        'our-mission-bg': "url('/assets/Images/ourMission.png')",
        'research-bg': "url('/assets/Images/researchBg.png')",
        'research-about-bg': "url('/assets/Images/researchAboutUs.png')",
        'contact-us-bg': "url('/assets/Images/bgContact.png')",
      },
      fontSize: {
        heading: ['32px', '40px'],  // Adjust as needed
        subheading: ['24px', '32px'],  // Adjust as needed
        paragraph: ['16px', '24px'],  // Adjust as needed
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
}