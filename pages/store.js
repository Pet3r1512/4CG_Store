import Header from "./Components/Header";
import Branch from "./Components/Branch";

const branchData = [
  {
    branch: "4CG Ho Chi Minh",
    address: "So 19, duong Nguyen Huu Tho, P.Tan Phong, Q.7, TP.HCM",
    address2: "So 98, duong Ngo Tat To, P.19, Q.Binh Thanh",
  },

  {
    branch: "4CG Nha Trang",
    address:
      "So 22, duong Nguyen Dinh Chieu, P.Vinh Phuoc, TP.Nha Trang, Khanh Hoa",
  },

  {
    branch: "4CG Lam Dong",
    address: "Duong Nguyen Tuan, P.Loc Tien, TP.Bao Loc, Lam Dong",
  },

  {
    branch: "4CG Ca Mau",
    address: "Duong Mau Than, Khom 6, P.9, TP.Ca Mau, Tinh Ca Mau",
  },
];

export default function Store() {
  const branchMap = branchData.map((data) => {
    return (
      <Branch
        branch={data.branch}
        address={data.address}
        address2={data.address2}
      />
    );
  });
  return (
    <div>
      <Header />
      <div className="mt-2 min-h-screen flex justify-center items-centers flex-col gap-y-1">
        {branchMap}
      </div>
    </div>
  );
}
