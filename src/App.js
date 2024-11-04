import QuizSection from "./components/QuizSection";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <h1>프로그래밍 문제 풀이</h1>
        <div className="content-wrapper">
          <QuizSection />
        </div>
      </main>
    </div>
  );
}

export default App;
