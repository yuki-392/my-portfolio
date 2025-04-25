import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* ヘッダー */}
      <Header />

      {/* ページ固有のコンテンツ */}
      <main className="flex-grow">{children}</main>

      {/* フッター */}
      <Footer />
    </div>
  );
}

export default Layout;