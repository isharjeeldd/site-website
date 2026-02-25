import { container, paragraph } from "../../styles/globals";
import LazyImage from "../LazyImage";
import businessLAi from "../../assets/Images/buisness.jpg";
import govAgencies from "../../assets/Images/gov.jpg";
import nonProfitOrg from "../../assets/Images/nonprofit.jpg";
import educationIns from "../../assets/Images/education.jpg";
import securityOrg from "../../assets/Images/security.jpg";

const sectors = [
  { src: businessLAi, alt: "Business professionals using AI technology", label: "Businesses leveraging AI for competitive advantage", wide: true },
  { src: govAgencies, alt: "Government agencies collaborating on AI policy", label: "Government agencies shaping AI policy and regulation", wide: false },
  { src: nonProfitOrg, alt: "Nonprofit organizations working on ethical AI", label: "Nonprofit organizations advocating for ethical AI deployment", wide: true },
  { src: educationIns, alt: "Educational institution advancing AI research", label: "Educational institutions advancing AI ethics research", wide: false },
  { src: securityOrg, alt: "Security organization countering AI threats", label: "Security organizations countering AI-driven threats", wide: false },
];

const WhoWeServe = () => {
  return (
    <section className={`${container} my-[150px]`} aria-labelledby="who-we-serve-heading">
      <div className="text-start lg:text-center">
        <h2 id="who-we-serve-heading" className="text-[42px] text-foreground font-bold">Who We Serve</h2>
        <p className={`${paragraph} sm:w-[50%] w-full mt-4 mx-auto dark:text-muted-foreground`}>
          In today&apos;s rapidly evolving technological environment, responsible AI
          integration is crucial. SITE provides essential expertise for:
        </p>
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {sectors.slice(0, 2).map((s, i) => (
            <figure key={i} className="bg-muted/30 dark:bg-muted/10 p-4 w-fit">
              <LazyImage
                className={`h-[400px] ${s.wide ? 'w-[500px]' : 'w-[350px]'} rounded-sm object-cover`}
                src={s.src}
                alt={s.alt}
              />
              <figcaption className={`text-center text-muted-foreground font-semibold mt-4 text-[14px] ${!s.wide ? 'w-[200px] mx-auto' : ''}`}>
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center w-full mt-6">
          {sectors.slice(2).map((s, i) => (
            <figure key={i} className="bg-muted/30 dark:bg-muted/10 p-4 w-fit">
              <LazyImage
                className={`h-[400px] ${s.wide ? 'w-[500px]' : 'w-[350px]'} rounded-sm object-cover`}
                src={s.src}
                alt={s.alt}
              />
              <figcaption className={`text-center text-muted-foreground font-semibold mt-4 text-[14px] ${!s.wide ? 'w-[200px] mx-auto' : ''}`}>
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
