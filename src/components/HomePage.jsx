const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Our Mini SPA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing products and services tailored just for you
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Featured Content
            </h2>
            <p className="text-gray-600">
              This is the home page of your mini SPA application. Here you can showcase
              your main features, latest products, or any important information for your users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 