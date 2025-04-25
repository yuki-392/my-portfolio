import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <header className="text-center mt-16">
        <h1 className="text-5xl font-bold mb-4">こんにちは！</h1>
        <p className="text-xl mb-8">
          私は <span className="text-blue-400">Yuki</span> です。
          <br /> フロントエンドとバックエンドを勉強中の大学生です。
          <br /> 
        </p>
      </header>
    </Layout>
  );
}

export default Home;