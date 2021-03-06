import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Template from "../src/layout/Template";

export default function About() {
  const about_content1 = `Là một thương hiệu thời trang được thành lập từ nằm 2022, sau 2 ngày hình thành và phát triển, 4CG đã chiếm được tình cảm của các bạn trẻ theo đuổi phong cách đường phố, không phân biệt giới tính. Chúng mình ở đây với mong muốn mang đến cho bạn những sản phầm chất lượng giúp bạn trở nên tự tin và cá tính hơn bao giờ hết. Hãy yêu bản thân theo cách của bạn, hãy tự tin mặc đẹp!`;
  const about_content2 = `Đồng thời 4CG xin bày tỏ lòng cảm ơn sự quan tâm và đồng hành của các G-er trong suốt thời gian phát triển của chúng mình. Chúng mình sẽ luôn hoàn thiện và đổi mới từng ngày để mang đến cho các bạn những sản phẩm tuyệt vời hơn nữa, from 4CG with love!`;

  return (
    <div
      className="bg-cover fixed w-full h-screen overflow-auto flex flex-col"
      style={{ backgroundImage: `url("images/aboutUs.jpg")` }}
    >
      <Template>
        <div className="px-6 py-10 h-screen text-[#383838] md:py-0">
          <div className="flex flex-col h-full md:w-full items-center justify-start gap-y-10 md:justify-center md:gap-y-14">
            <h1 className="text-3xl sm:text-5xl font-libre font-bold md:text-6xl">
              About Us
            </h1>
            <div className="leading-relaxed font-libre text-sm sm:text-sm md:text-lg lg:text-xl md:leading-loose flex flex-col max-w-7xl mx-auto">
              <p>{about_content1}</p>
              <br />
              <p>{about_content2}</p>
            </div>
            <div className="border border-[#1C0A00] rounded-lg p-4 cursor-pointer">
              <q>FASHION HAS NO LIMIT</q>
            </div>
            <div className="flex justify-evenly w-2/4 md:w-1/4 md:hidden">
              <div className="flex gap-x-3">
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
}
