import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Branch from "../Components/Branch";
import SubSearchBar from "../Components/SubSearchBar";
import Footer from "../Components/Footer"

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
        <div className="bg-gray-600 pb-5">
          <Header />
          <SubSearchBar />
        </div>
        <div className="flex flex-col mt-14 gap-10">
          <h1 className="text-4xl font-bold text-black text-center">Store</h1>
          <div className="min-h-screen flex flex-col items-center justify-center">
            {branchMap}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
