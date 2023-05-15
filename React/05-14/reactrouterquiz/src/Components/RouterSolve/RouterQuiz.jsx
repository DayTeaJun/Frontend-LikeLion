import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";

function RouterQiuz() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to="/"> Home Page </Link>
      <br />
      <Link to="/cart"> cart </Link>
      <br />
      <Link to="/users"> users </Link>
      <br />
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="" element={<Product />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/notice" element={<Notice />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/users/" element={<Outlet />}>
          <Route path="" element={<Users />} /> */}
        <Route path="/users/" element={<Users />}>
          <Route path="coupon/" element={<Coupon />} />
          <Route path="question/" element={<Question />} />
          <Route path="notice/" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function Product() {
  // const param = useParams()
  // {param.id}
  // 위 내용을 간략하게 구조분해 할당함
  const { id } = useParams();
  return <h1>Product Detail Page {id}</h1>;
}

function Cart() {
  const location = useLocation();
  console.log(location);
  return <h1>Cart Page</h1>;
}

function Users() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>User Page</h1>
      <Link to="/users/coupon">usersCoupon</Link>
      <br />
      <Link to="/users/notice">Notice</Link>
      <br />
      <Link to="/users/question">Question</Link>
      <Outlet />
    </>
  );
}

function Coupon() {
  const location = useLocation();
  console.log(location);
  return <h1>Coupon</h1>;
}

function Question() {
  const location = useLocation();
  console.log(location);
  return <h1>Question</h1>;
}

function Notice() {
  const location = useLocation();
  console.log(location);
  return <h1>Notice</h1>;
}

export default RouterQiuz;
