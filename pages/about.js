import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

export default function About({ showSideBar, setShowSideBar }) {
  return (
    <div className="bg-white fixed w-full" style={{backgroundImage: `url("images/aboutUs.jpg")`}}>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div>
        <Header />
        <div className="p-6 h-screen text-[#D6FFF5]" >
          <div className="flex flex-col h-3/4 justify-evenly md:w-2/4 items-center">
            <h1 className="text-5xl font-libre font-bold">About Us</h1>
            <p className="leading-relaxed font-libre text-sm">
              Là một thương hiệu thời trang được thành lập từ nằm 2022, sau 2 ngày hình thành và phát triển, 4CG đã chiếm được tình cảm của các bạn trẻ theo đuổi phong cách đường phố, không phân biệt giới tính. Chúng mình ở đây với mong muốn mang đến cho bạn những sản phầm chất lượng giúp bạn trở nên tự tin và cá tính hơn bao giờ hết. Hãy yêu bản thân theo cách của bạn, hãy tự tin mặc đẹp! <br />
              Đồng thời 4CG xin bày tỏ lòng cảm ơn sự quan tâm và đồng hành của các G-er trong suốt thời gian phát triển của chúng mình. Chúng mình sẽ luôn hoàn thiện và đổi mới từng ngày để mang đến cho các bạn những sản phẩm tuyệt vời hơn nữa, from 4CG with love!
            </p>
            <div className="border rounded-lg p-4"><q>FASHION HAS NO LIMIT</q></div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
