export function ProgressCard() {
  return (
    <article className="flex flex-col gap-2 rounded-[16px] bg-white p-4 backdrop-blur-[10px]">
      <h2 className="text-[14px] leading-[1.2] font-medium text-ink">
        Learning Progress
      </h2>
      <p className="font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.48px] text-ink">
        55%
      </p>
      <div
        className="h-2 w-[200px] rounded-[24px] bg-track"
        role="meter"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-2 w-[112px] rounded-[24px] bg-lime" />
      </div>
    </article>
  );
}
