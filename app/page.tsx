import LoginButton from "./auth/LoginButton";
import ProductList from "./products/productList";

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">NestMart 🛒</h1>
        <LoginButton />
      </div>
      <ProductList />
    </main>
  );
}
