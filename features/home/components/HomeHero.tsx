import { SiteHeader } from "@/components/layout/SiteHeader";
import { SearchField } from "@/components/ui/SearchField";
import { CourseStatCard } from "@/features/home/components/CourseStatCard";
import { HeroScene } from "@/features/home/components/HeroScene";
import { ProgressCard } from "@/features/home/components/ProgressCard";
import { StudentsCard } from "@/features/home/components/StudentsCard";

export function HomeHero() {
  return (
    <div className="hero-viewport">
      <div className="hero-viewport-clip">
        <section id="home" className="hero-stage">
          <HeroScene />
          <div className="absolute top-159.75 left-[404px] z-20">
            <CourseStatCard />
          </div>
          <div className="absolute top-[651px] left-[842px] z-20">
            <ProgressCard />
          </div>
          <div className="absolute top-[837px] left-[328px] z-20">
            <StudentsCard />
          </div>
          <div className="absolute top-[169px] left-1/2 z-30 flex w-[1200px] -translate-x-1/2 flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center gap-8 text-center">
              <h1 className="w-[935px] font-heading text-[72px] leading-[1.2] font-semibold tracking-[-0.72px] text-white">
                Get Access to Hundreds Courses Available
              </h1>
              <p className="text-[18px] leading-[1.6] whitespace-nowrap text-mist">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>
            </div>
            <SearchField />
          </div>
          <SiteHeader />
        </section>
      </div>
    </div>
  );
}
