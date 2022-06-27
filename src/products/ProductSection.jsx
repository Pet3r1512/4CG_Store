import Image from "next/image";
import { convertPrice } from "./formatPrice";
import Button from "../layout/Button";

export default function ProductSection({ img, name, price, onClick }) {
  return (
    <div className="max-w-7xl mx-auto px-12 flex min-h-screen justify-center items-center">
      <div className="my-20 w-full flex flex-col sm:flex-row sm:justify-center items-center">
        <div className="max-w-[300px] sm:max-w-[450px] md:max-w-[500px] mx-auto">
          <Image
            src={img}
            alt={`${name} image`}
            width={600}
            height={900}
          />
        </div>
        <div className="mx-[30px] sm:mx-auto w-full flex flex-col justify-center gap-y-5 sm:pl-12 md:pl-36">
          <div className="flex flex-col gap-y-1">
            <h1 className="font-poppins font-bold text-2xl">
              {name}
            </h1>
            <p className="font-semibold text-lg">
              {convertPrice(price)}
            </p>
          </div>
          <Button onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
