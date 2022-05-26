export default function Card(props) {
  return (
    <div className="">
      <div>
        <img src={props.img} alt="" />
      </div>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
}
