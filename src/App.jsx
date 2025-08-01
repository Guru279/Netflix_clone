import Row from './Row';
import requests from './requests'

const App = () => {
  
  return (
    <div>
      <h1>There it is the path of Excellance</h1>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies
      } />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="fetchHorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default App;
