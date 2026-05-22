export default function Navbar() {
  return (
    <>
      <div className="flex justify-between gap-[2px]">
        <h1>Logo</h1>
        <h2>Contatct</h2>
        <div>Search</div>
        <div>User Account</div>
        <div>Whishlist</div>
        <div>Cart</div>
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className="flex justify-between gap-[20px]">
          <div>Category</div>
          <div>Collections</div>
          <div>Flash Deals</div>
          <div>New Arrivals</div>
          <div>Bundle Products</div>
        </div>
        <div className="flex justify-between gap-[20px]">
          <div>Corporate Inqueries</div>
          <div>Track Your Order</div>
        </div>
      </div>
    </>
  );
}
