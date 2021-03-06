import Template from "../src/layout/Template";

export default function Policy() {
  return (
    <Template>
      <div className="flex flex-col items-center gap-y-14 p-6 font-playfair text-xl md:items-start">
        <h1 className="text-3xl font-libre">OUR RETURN POLICY</h1>
        <p>
          &bull; 4CG accepts returns of unworn, unwashed and undamaged product
          for full refund or exchange within 14 days of original purchase. Items
          received after 14 days will be refunded via store credit.
        </p>
        <p>
          &bull; Customer is responsible for any additional shipping costs.
          Return labels will not be provided.
        </p>
        <p>
          &bull; If you need to return an items, please contact us with your
          order number at <strong>4CGstore@gmail.com</strong>
        </p>
      </div>
    </Template>
  );
}
