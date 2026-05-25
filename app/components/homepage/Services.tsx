export default function Services() {
  return (
    <div className="flex justify-between gap-[10px]">
      <div>
        <div className="flex justify-between gap-6">
          <div>
            <img src="/icon-delivery.png" alt="" />
          </div>
          <div>
            <h2>Fast, Free Shipping</h2>
            <p>On order over BDT-2000</p>
          </div>
          <div className="border-r-2 border-r-gray-400"></div>
        </div>
      </div>

      <div>Delivery</div>
      <div></div>
      <div>Quality</div>
    </div>
  );
}
