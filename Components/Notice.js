function checkIcon(color) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"h-6 w-6 text-[" + color + "]"}
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
function checkStatus(status) {
  if (status === "success") {
    return checkIcon("#06d6a0");
  }
  return checkIcon("#ef233c");
}

export default function Notice({ content, status }) {
  const noticeTailwind =
    "z-10 text-white bg-black max-w-[300px] max-h-[50px] text-md font-semibold absolute bottom-5 left-5";
  return (
    <div className={noticeTailwind}>
      <p>{content}</p>
      {checkStatus(status)}
    </div>
  );
}
