interface SkillsBannerProps {
  reverse?: boolean;
  speed?: number; // Animation speed in seconds
}

const skills = [
  "WordPress",
  "HTML",
  "ReactJS",
  "Node.js",
  "CSS",
  "Shopify",
  "Web Design",
  "TypeScript",
  "Next.js",
  "MongoDB",
  "GraphQL",
  "Figma",
  "Tailwind",
  "Vue.js",
];

// Repeat skills 4 times for smooth infinite loop
const repeated = [...skills, ...skills, ...skills, ...skills];

export function SkillsBanner({
  reverse = false,
  speed = 35,
}: SkillsBannerProps) {
  return (
    <div className="relative w-full overflow-hidden py-8 md:py-10">
      {/* Two-tone diagonal background */}
      <div className="absolute inset-0 flex">
        {/* Dark left section */}
        <div className="w-1/3 bg-black/90 transform -skew-x-12 origin-center scale-150" />
        
        {/* Pink right section */}
        <div className="w-2/3 bg-[#FF4757] transform skew-x-6 origin-center scale-150" />
      </div>

      {/* Skewed overlay for diagonal effect */}
      <div
        className="absolute inset-0 transform -skew-y-3 origin-top-left"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(255,71,87,1) 50%)",
          height: "150%",
        }}
      />

      {/* Content wrapper */}
      <div className="relative overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .marquee-container {
            display: flex;
            width: fit-content;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            padding: 0.75rem 0;
          }

          .marquee-container:hover {
            animation-play-state: paused;
          }

          .skill-item {
            display: inline-flex;
            align-items: center;
            gap: 1.25rem;
            padding: 0 1.25rem;
            white-space: nowrap;
            font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-weight: 700;
            font-size: 0.95rem;
            text-transform: capitalize;
            letter-spacing: 0.02em;
            color: white;
            flex-shrink: 0;
          }

          .skill-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: white;
            opacity: 0.8;
          }

          /* For smaller screens */
          @media (max-width: 768px) {
            .skill-item {
              font-size: 0.85rem;
              padding: 0 1rem;
              gap: 1rem;
            }

            .skill-dot {
              width: 5px;
              height: 5px;
            }
          }
        `}</style>

        <div
          className="marquee-container"
          style={{
            animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
          }}
        >
          {repeated.map((skill, i) => (
            <div key={i} className="skill-item">
              <span>{skill}</span>
              <div className="skill-dot" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}