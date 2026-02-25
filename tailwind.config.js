/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1525',
        secondary: '#2A9C6C',
        tertiary: "#12233D",
        paragraph: '#626262',
        heading: '#1C1C1C',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
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
        heading: ['32px', '40px'],
        subheading: ['24px', '32px'],
        paragraph: ['16px', '24px'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
}
