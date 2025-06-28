import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ContentPage from "./components/ContentPage";
import QuestionsPage from "./components/QuestionsPage";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'content':
        return <ContentPage />;
      case 'questions':
        return <QuestionsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
