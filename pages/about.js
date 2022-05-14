import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function About({ showSideBar, setShowSideBar }) {
  return (
    <div className="bg-cover fixed w-full" style={{backgroundImage: `url("images/aboutUs.jpg")`}}>
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div>
        <Header />
        <div className="p-6 h-screen text-[#383838] md:flex md:justify-center" >
          <div className="flex flex-col h-3/4 justify-evenly md:w-2/4 items-center md:justify-between">
            <h1 className="text-5xl font-libre font-bold md:text-6xl">About Us</h1>
            <p className="leading-relaxed font-libre text-sm md:text-lg md:leading-loose">
              Là một thương hiệu thời trang được thành lập từ nằm 2022, sau 2 ngày hình thành và phát triển, 4CG đã chiếm được tình cảm của các bạn trẻ theo đuổi phong cách đường phố, không phân biệt giới tính. Chúng mình ở đây với mong muốn mang đến cho bạn những sản phầm chất lượng giúp bạn trở nên tự tin và cá tính hơn bao giờ hết. Hãy yêu bản thân theo cách của bạn, hãy tự tin mặc đẹp! <br />
              Đồng thời 4CG xin bày tỏ lòng cảm ơn sự quan tâm và đồng hành của các G-er trong suốt thời gian phát triển của chúng mình. Chúng mình sẽ luôn hoàn thiện và đổi mới từng ngày để mang đến cho các bạn những sản phẩm tuyệt vời hơn nữa, from 4CG with love!
            </p>
            <div className="border border-[#1C0A00] rounded-lg p-4"><q>FASHION HAS NO LIMIT</q></div>
            <div className="flex justify-evenly w-2/4 md:w-1/4">
              <Facebook/>
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
