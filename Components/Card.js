export default function Card(props) {
  return (
    <div className="mx-auto">
      <div className="min-h-[550px] flex items-center">
        <img
          src={props.img}
          alt=""
          className="max-w-[300px] min-w-[200px] sm:max-w-[400px] sm:min-w-[300px] "
        />
      </div>
      <h1 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl">
        {props.name}
      </h1>
      <p className="font-semibold text-gray-600 text-md sm:text-lg md:text-xl italic">
        {props.price}
      </p>
    </div>
  );
}
