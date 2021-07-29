import React, { useState, useEffect } from 'react';
import { ScreenContainer, GridList, Input, PageTitle } from '~/components';
import { DataResponse, useGetData } from '~/services/hooks';

export const SearchScreen = (): JSX.Element => {
  const { getSearchResult } = useGetData();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DataResponse[]>([]);

  const callGetSearchResult = async () => {
    setLoading(true);
    const result = await getSearchResult(query);
    if (!result.error) {
      setResults(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <ScreenContainer>
      <PageTitle title="Pesquisar" />
      <Input
        mb={24}
        value={query}
        onChangeText={text => setQuery(text)}
        placeholder="Filme ou nome do personagem"
      />
      <GridList loading={loading} data={results} type="search" />
    </ScreenContainer>
  );
};
