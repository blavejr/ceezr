import { useEffect, useState } from "react";
import "./App.css";
import ApiClient from "./api/src/ApiClient";
import DefaultApi from "./api/src/api/DefaultApi";
import PokemonCard from "./components/pokemonCard/pokemonCard";
import Loader from "./components/loader/loader";

const apiClient = new ApiClient("http://localhost:3000");
apiClient.authentications['basic'] = {
  type: 'basic',
  username: 'admin',
  password: 'password'
}
const api = new DefaultApi(apiClient);

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openStack, setOpenStack] = useState([]);
  const [damageData, setDamageData] = useState(undefined);

  function hideLoading() {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  // Get the damage report
  useEffect(() => {
    if (openStack.length !== 2) return
    const attackerPokemon = pokemonData[openStack[0]];
    const defenderPokemon = pokemonData[openStack[1]];
    // clear the damage data
    setDamageData(undefined);
    setIsLoading(true)
    api.pokemonControllerDamage(attackerPokemon.id, defenderPokemon.id, (err, res) => {
      hideLoading()
      if (err) {
        console.error(err);
        return;
      }
      setDamageData({
        attacker: attackerPokemon.name,
        defender: defenderPokemon.name,
        damage: res
      });
    })
  }, [openStack])


  useEffect(() => {
    setIsLoading(true);
    // Using callbacks because nestjs api generator does not have async functions, axios does
    api.pokemonControllerFindAll(page, 10, (err, res) => {
      // delay loading a little
      hideLoading();
      // If could not get data
      if (err) {
        console.error(err);
        return;
      }
      setPokemonData(pokemonData.concat(res));
    });
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (isLoading || pokemonData.length === 0) {
        return;
      }

      const lastCard = document.querySelector(".pokemon-card:last-child");
      const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;

      if (pageOffset > lastCardOffset) {
        setPage(page + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pokemonData, isLoading]);

  return (
    <div className="App">
      <Loader isLoading={isLoading} />
      <h1>Ceezar Pokédex</h1>
      <section className="collection">
        {pokemonData.map((pokemon, idx) => (
          <PokemonCard {...pokemon} idx={idx} openStack={openStack} setOpenStack={setOpenStack} />
        ))}
      </section>
          {
            damageData && <div className="damage-banner">
            <h3>Damage Report</h3>
            <h4>{damageData.attacker} vs {damageData.defender}</h4>
            <p>Damage dealt: {Math.round(damageData.damage)}</p>
        </div>
          }
    </div>
  );
}

export default App;
