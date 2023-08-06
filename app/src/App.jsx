import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        veniam exercitationem consequatur maiores vitae odit, nostrum debitis
        enim ipsa in minus dicta? Magni dolorum quos dicta ut nisi minima
        nesciunt?
      </p>

      <Link to="/store">Go To Store</Link>
    </div>
  );
}

export default App;
