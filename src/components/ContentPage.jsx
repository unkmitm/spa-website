const ContentPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with Our Platform',
      excerpt: 'Learn how to make the most of our services and features.',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best Practices for Success',
      excerpt: 'Discover the proven strategies that lead to better results.',
      date: '2024-01-10',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Advanced Features Guide',
      excerpt: 'Explore the advanced capabilities of our platform.',
      date: '2024-01-05',
      readTime: '12 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Content Library
          </h1>
          <p className="text-xl text-gray-600">
            Explore our collection of articles, guides, and resources
          </p>
        </div>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {article.readTime}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Published on {article.date}
                </span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;