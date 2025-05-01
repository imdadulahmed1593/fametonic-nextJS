import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-4 lg:mt-0">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-2 lg:gap-8 px-6 pb-16">
        <div className="flex flex-col lg:gap-2 lg:pt-10 w-full lg:w-[516px]">
          <h1 className="text-2xl text-center lg:text-start lg:text-4xl font-bold leading-tight">
            Want to Turn Social Media Into a Profitable Career?
          </h1>

          <h2 className="text-2xl text-center lg:text-start lg:text-4xl  text-[#10CBE0] font-bold  text-shadow-lg/50 text-shadow-[#FC004E]">
            Discover your way to success with Fametonic:
          </h2>

          <ul className="space-y-3 py-4 font-medium lg:font-semibold text-white">
            <li className="flex items-center gap-2">
              <span>✨</span> Start growing your influence right away—no waiting
              required!
            </li>
            <li className="flex items-center gap-2">
              <span>✨</span> Create viral TikToks and Reels step by step with
              easy-to-follow lessons
            </li>
            <li className="flex items-center gap-2">
              <span>✨</span> Use a Personal AI Worker to boost your content
            </li>
            <li className="flex items-center gap-2">
              <span>✨</span> Learn from expert-led courses designed for
              aspiring influencers
            </li>
          </ul>

          <div className="flex flex-col-reverse lg:flex-col gap-8">
            <div className="flex flex-col gap-2 w-full lg:w-[313px]">
              <button className="bg-[#FC004E] w-full lg:w-[313px] h-[40px] rounded-lg hover:opacity-90 transition-opacity px-8 text-lg font-semibold shadow-md/50 shadow-[#00E7F9]">
                GET STARTED &gt;{" "}
              </button>
              <p className="text-xs text-center">
                1-minute quiz for personalized insights
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-xs text-center lg:text-start">
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className="text-gray-400 text-xs text-center lg:text-start">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="w-full rounded-3xl relative overflow-hidden">
            <Image
              src="/hero-img.png"
              alt="Fametonic App Dashboard"
              width={666}
              height={679}
              priority
              className=""
            />{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

