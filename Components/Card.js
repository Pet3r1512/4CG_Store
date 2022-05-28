export default function Card(props) {
  return (
    <div className="mx-auto">
      <div className="min-h-[550px] flex items-center">
        <img
          src={props.img}
          alt=""
          className="max-w-[300px] min-w-[200px] sm:max-w-[350px] sm:min-w-[300px] "
        />
      </div>
      <h1 className="font-poppins font-bold text-lg sm:text-xl md:text-2xl cursor-pointer">
        {props.name}
      </h1>
      <p className="font-semibold text-gray-600 text-sm sm:text-md md:text-lg italic cursor-pointer">
        {props.price}
      </p>
    </div>
  );
}
