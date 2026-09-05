export function SectionHead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-13 max-w-200 text-center">
      <h2 className="text-4xl font-bold leading-[1.18] max-[600px]:text-[27px]">
        {title}
      </h2>

      <p className="text-[#565c68] mt-3">{description}</p>
    </div>
  );
}
