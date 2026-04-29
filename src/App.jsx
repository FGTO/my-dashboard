import PostList from "./PostList";
import StatCard from "./StatCard";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div>
        <h1>My Dashboard</h1>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide Stats" : "Show Stats"}
        </button>
        {isVisible && (
          <>
            <StatCard title="Total Orders" value={143} color="steelblue" />
            <StatCard title="Revenue" value="$12,400" color="seagreen" />
            <StatCard title="Active Users" value={87} color="coral" />
          </>
        )}
      </div>
      <div>
        <PostList />
      </div>
    </>
  );
}

export default App;
