export function CourseStatCard() {
  return (
    <article className="rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
      <h2 className="text-[16px] leading-[1.2] font-medium text-ink">
        UI/UX Design
      </h2>
      <p className="flex items-start gap-2 text-[12px] leading-[1.6] text-muted">
        <span>200 Courses</span>
        <span className="text-[10px] leading-[1.5]" aria-hidden>
          •
        </span>
        <span>1000+ Students</span>
      </p>
    </article>
  );
}
