interface QuestionTitleProps {
  children: string;
}

export default function QuestionTitle({children}: QuestionTitleProps) {
  return (
    <h1 className="text-[22px] font-bold tracking-tight md:text-[28px]">
      {children}
    </h1>
  );
}
