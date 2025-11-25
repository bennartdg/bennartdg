interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div data-title={title}>
      <h1 className="mb-12 text-5xl leading-none">{title}</h1>
    </div>
  );
} 