import { useEffect } from "react";
import GameDetail from "../components/GameDetail";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Game from "../components/Game";
import { upcomingGamesURL } from "../api";

const Home = () => {
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get Data Back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  const types = [
    { title: "Upcoming Games", data: upcoming },
    { title: "Popular Games", data: popular },
    { title: "New Games", data: newGames },
  ];

  return (
    <GameList>
      <GameDetail />
      {types.map((type) => (
        <div>
          <h2>{type.title}</h2>
          <Games>
            {type.data.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      ))}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
