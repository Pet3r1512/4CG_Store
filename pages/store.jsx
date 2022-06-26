import Branch from "../src/storeInfo/Branch";
import Template from "../src/layout/Template";

export function getStaticProps() {
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

  return {
    props: {
      branchData,
    }
  }
}

export default function Store({ branchData }) {
  const branchMap = branchData.map((branch) => {
    return (
      <Branch
        key={branch.key}
        branch={branch.branch}
        address={branch.address}
        address2={branch.address2}
      />
    );
  });

  return (
    <Template>
      <div className="flex flex-col mt-14 gap-10">
        <h1 className="text-4xl font-bold text-black text-center">Store</h1>
        <div className="min-h-screen flex flex-col items-center justify-center">
          {branchMap}
        </div>
      </div>
    </Template>
  );
}
