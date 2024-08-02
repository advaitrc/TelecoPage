import Layout from "../app/components/Layout";

const Custom404 = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-blue-100">
        
        <nav className="bg-blue-700 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">Telco</h1>
          </div>
        </nav>

       
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
          <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
          <p className="mt-2 text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Go back home
          </a>
        </div>

        
        <footer className="bg-blue-700 text-white text-center p-4">
          <p>&copy; 2024 Telecom Company. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default Custom404;
