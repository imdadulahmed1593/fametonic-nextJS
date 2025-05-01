import Image from "next/image";
import ChevronRight from "@/app/_components/icons/chevron-right.svg";

export default function Home() {
  return (
    <main className="mt-4 lg:mt-0 font-figtree">
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-2 lg:gap-8 px-6 lg:px-20 pb-16 relative">
        {/* Background Image of Fametonic App Dashboard  */}
        <div className="absolute top-0 right-20 w-[666px] h-full hidden lg:block">
          <Image
            src="/hero-img.png"
            alt="Background Image of Fametonic App Dashboard"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Hero Text Content */}
        <div className="flex flex-col lg:gap-2 lg:pt-10 w-full lg:w-[516px] z-10 relative ">
          <h1 className="text-2xl text-center lg:text-start lg:text-4xl font-bold leading-tight font-urbanist">
            Want to Turn Social Media Into a Profitable Career?
          </h1>

          <h2 className="text-2xl text-center lg:text-start lg:text-4xl  text-secondary font-bold  text-shadow-lg/50 text-shadow-primary font-urbanist">
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
            <div className="flex flex-col gap-2.5 w-full lg:w-[313px]">
              <button className="bg-primary w-full lg:w-[313px] h-[40px] rounded-lg hover:opacity-90 transition-opacity px-8 text-lg font-semibold shadow-[1px_1px_8px_0px_#00E7F9] flex items-center justify-center gap-2">
                GET STARTED{" "}
                <Image src={ChevronRight} alt="" width={8} height={6} />{" "}
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
              <p className="text-gray-400 text-[10px] text-center lg:text-start">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* hero Img for Mobile Screen */}
        <div className="flex items-center justify-center lg:hidden">
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

