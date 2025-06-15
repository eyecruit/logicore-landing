export default function WebDesign() {

  return (
    <>
      <h1 className="flex items-center justify-center mt-10 text-4xl font-bold pt-[150px]">
        Web Development
      </h1>

      {/* <div className="mt-12">
        <AnimatedTestimonials testimonials={testimonials} />
      </div> */}

            <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white">
              1. Custom Design & User Experience
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Custom design ensures that each part of the website matches your brand style, while user-focused layouts make it easy for visitors to navigate and find what they need.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/customwebsite.jpg"
              alt="Responsive Design"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Eye-Catchy Design */}
      <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/security.jpg"
              alt="Eye-Catchy Design"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white">
              2. Robust Security
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Security features protect your website from threats by using up-to-date measures like firewalls, data encryption, and regular vulnerability checks. This keeps your users’ information safe and builds trust.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Responsive Design */}
      <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px]">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white">
              3. Faster Response
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Fast-loading pages and optimized code ensure your website responds quickly, reducing wait times and improving user experience across all devices.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/response.jpg"
              alt="Responsive Design"
              width={500}
              height={500}
              className="rounded-3xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Interactive Website (Image Left, Text Right) */}

    {/* Text Content (Right) */}
              <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-12 xl:px-[200px] mb-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/db.png"
              alt="Eye-Catchy Design"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-white">
              4. Database Support 
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Database support allows your website to store, manage, and access data efficiently. This makes it easy to display dynamic content like user profiles, product listings, or blog posts.
            </p>
          </div>
        </div>
      </div>



    </>
  );
}
