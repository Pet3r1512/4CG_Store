function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"h-6 w-6"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

interface NoticeProps {
  content: string;
  status: string;
}

export default function Notice({ content, status }: NoticeProps) {
  const baseCss =
    "z-10 text-white max-w-[400px] max-h-[150px] text-md font-semibold absolute bottom-5 left-5 px-4 py-3 flex gap-x-2 rounded-lg";

  if (status === "success") {
    return (
      <div className={`${baseCss} bg-teal-400`}>
        <p>{content}</p>
        <CheckIcon />
      </div>
    );
  }

  return (
    <div className={`${baseCss} bg-rose-500`}>
      <p>{content}</p>
      <CheckIcon />
    </div>
  );
}
