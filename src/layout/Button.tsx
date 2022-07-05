interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-red-400 text-white font-semibold text-xl px-6 py-1 rounded-lg flex justify-center items-center border-[3px] border-red-400 hover:text-red-500 hover:bg-white transition duration-100 ease-linear font-dancing max-w-[150px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Add to cart",
};
