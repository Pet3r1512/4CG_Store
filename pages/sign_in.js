import Header from "../Components/Header";

export default function Sign_in() {
  const accountList = accountInput.map((item) => {
    return (
      <AccountLabel
        key={item.htmlFor}
        type={item.type}
        htmlFor={item.htmlFor}
        icon={item.icon}
      />
    );
  });
  console.log(accountList);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-16 min-h-[70vh]">
        <div>
          <h1 className="text-4xl font-bold">Log in</h1>
          <p className="font-semibold text-lg">
            Discover more products from 4CG Store
          </p>
        </div>
        <div className="flex flex-col gap-y-3">{accountList}</div>
      </div>
    </>
  );
}

function AccountLabel(props) {
  return (
    <label htmlFor={props.htmlFor} className="bg-red-500">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="text-black"
      />
    </label>
  );
}

const accountInput = [
  {
    type: "text",
    htmlFor: "account",
    placeholder: "Enter your email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    type: "password",
    htmlFor: "password",
    placeholder: "Password",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];
