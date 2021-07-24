import React, { useEffect, useState } from 'react';
import {
  ScreenScrollContainer,
  HomeList,
  Hero,
  Loader,
  Container,
} from '~/components';

import { useGetData } from '~/services/hooks';
import { Film, Characters } from '~/services/hooks/useGetData';

export const Home = (): JSX.Element => {
  const { getFilms, getCharacters } = useGetData();
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState<Film[]>([]);
  const [characters, setCharacters] = useState<Characters[]>([]);

  const callGetData = async () => {
    const filmsResponse = await getFilms();
    const charactersResponse = await getCharacters();

    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse as Film[]);
      setCharacters(charactersResponse as Characters[]);
      setLoading(false);
    }
  };

  useEffect(() => {
    callGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Container align="center" justify="center">
        <Loader />
      </Container>
    );
  }

  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          ...(films[0] as Film),
          type: 'Filme',
        }}
      />
      <HomeList title="Filmes" data={films} type="Filme" />
      <HomeList title="Personagens" data={characters} type="Personagem" />
    </ScreenScrollContainer>
  );
};
