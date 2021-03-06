import React, { useEffect, useState } from 'react';
import {
  ScreenScrollContainer,
  HomeList,
  Hero,
  Container,
  LoaderLottie,
} from '~/components';

import { useGetData } from '~/services/hooks';
import { DataResponse } from '~/services/hooks/useGetData';

export const Home = (): JSX.Element => {
  const {
    getFilms,
    getCharacters,
    getPlanets,
    getSpecies,
    getStarships,
    getVehicles,
  } = useGetData();

  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState<DataResponse[]>([]);
  const [characters, setCharacters] = useState<DataResponse[]>([]);
  const [planets, setPlanets] = useState<DataResponse[]>([]);
  const [species, setSpecies] = useState<DataResponse[]>([]);
  const [starships, setStarships] = useState<DataResponse[]>([]);
  const [vehicles, setVehicles] = useState<DataResponse[]>([]);

  const callGetData = async () => {
    const filmsResponse = await getFilms();
    const charactersResponse = await getCharacters();
    const planetsResponse = await getPlanets();
    const speciesResponse = await getSpecies();
    const starshipsResponse = await getStarships();
    const vehiclesResponse = await getVehicles();

    if (!filmsResponse.error) setFilms(filmsResponse);
    if (!charactersResponse.error) setCharacters(charactersResponse);
    if (!planetsResponse.error) setPlanets(planetsResponse);
    if (!speciesResponse.error) setSpecies(speciesResponse);
    if (!starshipsResponse.error) setStarships(starshipsResponse);
    if (!vehiclesResponse.error) setVehicles(vehiclesResponse);
    setLoading(false);
  };

  useEffect(() => {
    callGetData();
  }, []);

  if (loading) {
    return (
      <Container align="center" justify="center">
        <LoaderLottie loading />
      </Container>
    );
  }

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          ...films[0],
          type: 'Filme',
        }}
      />
      <HomeList title="Filmes" data={films} type="Filme" />
      <HomeList title="Personagens" data={characters} type="Personagem" />
      <HomeList title="Planetas" data={planets} type="Planeta" />
      <HomeList title="Esp??cies" data={species} type="Esp??cie" />
      <HomeList title="Naves" data={starships} type="Nave" />
      <HomeList title="Ve??culos" data={vehicles} type="Ve??culo" />
    </ScreenScrollContainer>
  );
};
