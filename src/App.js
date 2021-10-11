import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
    </div>
  )
} 
// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(response => response.json())
//       // .then(data => console.log(data))
//       .then(data => setCountries(data))
//   }, []);

//   return (
//     <div>
//       <h1>Around the world!!</h1>
//       <h4>Countries available: {countries.length}</h4>
//       {
//         countries.map(country=> <Country name={country.name.common} capital={country.capital}></Country>)
//       }
      
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Capital: {props.capital}</p>
//     </div>
//   )
// }
export default App;
