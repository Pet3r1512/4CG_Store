interface BranchProps {
  branch: string;
  address: string;
  address2?: string;
}

export default function Branch({ branch, address, address2 }: BranchProps) {
  return (
    <div className="mx-auto mb-16 text-xl">
      <h1 className="title font-bold text-center underline underline-offset-4">
        {branch}
      </h1>
      <div className="flex flex-col gap-y-1">
        <p className="text-center">{address}</p>
        <p className="text-center">{address2}</p>
      </div>
    </div>
  );
}

Branch.defaultProps = {
  address2: "",
};
