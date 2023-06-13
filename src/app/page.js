import Link from "next/link";

const App = () => {
  return (
    <div>
      <h1>I'm the Home</h1>
      <p>
        Click on <Link href="/users" className="text-pink-300">Users</Link> to check them out
      </p>
    </div>
  );
};

export default App;
