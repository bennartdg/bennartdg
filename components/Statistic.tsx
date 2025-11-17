export default function Statistic() {
  return (
    <div className="grid grid-cols-1 items-center justify-between gap-12 md:grid-cols-2 lg:flex lg:gap-0">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl">2+</h1>
        <p>Years of experiences</p>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl">3</h1>
        <p>Companies worked with</p>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl">10+</h1>
        <p>Projects completed</p>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl">20+</h1>
        <p>Technology & tools mastered</p>
      </div>
    </div>
  );
}
