import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


export default function WebDesign() {
  const testimonials = [
    {
      quote:
        "The F-pattern guides users' attention in an 'F' shape—ideal for text-heavy designs like blogs or news sites.",
      name: "F-Pattern",
      designation: "",
      src: "/images/f-pattern.png",
    },
    {
      quote:
        "The Z-pattern draws attention in a 'Z' shape, making it perfect for simpler layouts with a clear start and end.",
      name: "Z-Pattern",
      designation: "",
      src: "/images/z-pattern.png",
    },
    {
      quote:
        "The Layer Cake Pattern organizes text with distinct headings and subheadings, allowing users to scan easily.",
      name: "Layer Cake Pattern",
      designation: "",
      src: "/images/layer-cake-pattern.png",
    },
    {
      quote:
        "The Spot Pattern caters to users who skim for key visuals or elements like product images or CTAs.",
      name: "Spot Pattern",
      designation: "",
      src: "/images/spot-pattern.png",
    },
    {
      quote:
        "The Marketing Pattern presents bold headers, visuals, and CTAs in a storytelling layout to guide conversions.",
      name: "Marketing Pattern",
      designation: "",
      src: "/images/marketing-pattern.png",
    },
    {
      quote:
        "The Bypassing Pattern skips traditional linear flow, letting users jump to what interests them via bold anchors or cards.",
      name: "Bypassing Pattern",
      designation: "",
      src: "/images/bypassing-pattern.png",
    },
    {
      quote:
        "The Commitment Pattern gradually builds user engagement, leading to actions like sign-ups or purchases.",
      name: "Commitment Pattern",
      designation: "",
      src: "/images/commitment-pattern.png",
    },
  ];

  return (
    <>
<div className="text-center mb-16 pt-[150px]">
  <h1 className="text-3xl md:text-5xl font-bold mb-4">Web Design</h1>
  <p className="text-muted-foreground max-w-2xl mx-auto">
      Discover modern web design principles including layout patterns, responsive components, and interactive elements.
  </p>
</div>


      <div className="mt-12">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* Section 2: Eye-Catchy Design */}
      <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/eye-catchy.png"
              alt="Eye-Catchy Design"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white">
              2. Eye-Catchy Website
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Eye-catchy website design uses bold colors, images, and clean
              layouts to grab attention quickly. It helps make the site more
              attractive, easy to use, and fun to explore.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Responsive Design */}
      <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white">
              3. Responsive Website
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Responsive components adjust their size and layout to fit
              different screen sizes like mobile, tablet, or desktop. This makes
              the website look good and work well on any device.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/responsive-design.png"
              alt="Responsive Design"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Interactive Website (Image Left, Text Right) */}
<div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px] mb-10">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Clickable Image (Left) */}
    <div className="w-full md:w-1/2 flex justify-center">
      <a href="https://interactive-design-example.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/interactive-design.png"
          alt="Interactive Design"
          width={500}
          height={500}
          className="rounded-3xl shadow-lg object-cover w-full h-auto"
        />
      </a>
    </div>

    {/* Text Content (Right) */}
    <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold mb-4 text-white">
        4. Interactive Website
      </h2>
      <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
        Interactive design lets users click, hover, or swipe to see
        real-time changes on a website. It makes the experience more
        engaging and helps users feel more connected to the content.
      </p>
    </div>
  </div>
</div>


    </>
  );
}
