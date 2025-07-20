import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <header className="text-center mt-16">
        <h1 className="text-5xl font-bold mb-4">こんにちは。</h1>
        <p className="text-xl mb-8">
          私は <span className="text-blue-400">高橋侑暉</span> と申します。
          <br /> Webアプリ開発を学ぶ情報系の大学生で、来年度から大学院に進学予定です。
          <br /> 将来はWebエンジニアとして、多様な技術とチーム経験を積みたいと考えています。
        </p>
      </header>
    </Layout>
  );
}

export default Home;