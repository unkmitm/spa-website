const ShopPage = () => {
    const products = [
      { id: 1, name: 'Product 1', price: '$29.99', image: 'https://via.placeholder.com/200x200?text=Product+1' },
      { id: 2, name: 'Product 2', price: '$39.99', image: 'https://via.placeholder.com/200x200?text=Product+2' },
      { id: 3, name: 'Product 3', price: '$49.99', image: 'https://via.placeholder.com/200x200?text=Product+3' },
      { id: 4, name: 'Product 4', price: '$59.99', image: 'https://via.placeholder.com/200x200?text=Product+4' },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Shop
            </h1>
            <p className="text-xl text-gray-600">
              Discover our amazing collection of products
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopPage;