import axios from 'axios';

const App = () => {
 const [user, setUser] = useState(null);

 useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
 }, []);

 const handleLogout = () => {
    axios.post('/api/logout')
      .then(response => {
        setUser(null);
      })
      .catch(error => {
        console.log(error);
      });
 };

 return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
    </Router>
 );
};

const Home = () => {
 return <h2>Home</h2>;
};

const Dashboard = () => {
 return <h2>Dashboard</h2>;
};

const Login = () => {
 return <h2>Login</h2>;
};

export default App;
setupCounter(document.querySelector('#counter'))
        document.querySelector('.hero h2').textContent = 'New Hero Name';
        document.querySelector('.hero p:nth-child(2)').textContent = 'Power: Superpower';
        document.querySelector('.hero p:nth-child(3)').textContent = 'Weakness: Superpower';
