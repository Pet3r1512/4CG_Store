/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { AppContext } from "../hooks/state";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Branch from "../Components/Branch";

const branchData = [
  {
    key: 1,
    branch: "4CG Ho Chi Minh",
    address: "So 19, duong Nguyen Huu Tho, P.Tan Phong, Q.7, TP.HCM",
    address2: "So 98, duong Ngo Tat To, P.19, Q.Binh Thanh",
  },

  {
    key: 2,
    branch: "4CG Nha Trang",
    address:
      "So 22, duong Nguyen Dinh Chieu, P.Vinh Phuoc, TP.Nha Trang, Khanh Hoa",
  },

  {
    key: 3,
    branch: "4CG Lam Dong",
    address: "Duong Nguyen Tuan, P.Loc Tien, TP.Bao Loc, Lam Dong",
  },

  {
    key: 4,
    branch: "4CG Ca Mau",
    address: "Duong Mau Than, Khom 6, P.9, TP.Ca Mau, Tinh Ca Mau",
  },
];

export default function Store() {
  const context = useContext(AppContext);
  const [showSideBar, setShowSideBar] = context.sideBarState;
  const branchMap = branchData.map((item) => {
    return (
      <Branch
        key={item.key}
        branch={item.branch}
        address={item.address}
        address2={item.address2}
      />
    );
  });
  return (
    <>
      <SideBar />
      <div>
        <Header />
        <h1 className="text-4xl font-bold text-black text-center mt-24">
          Store
        </h1>
        <div className="min-h-screen mt-14 flex justify-center items-centers flex-col gap-y-1">
          {branchMap}
        </div>
      </div>
    </>
  );
}
