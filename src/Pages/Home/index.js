
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import * as Styles from './styled';

function Home(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState("");
  const [ error, setError ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repoNames = [];

        repositories.map(repository => {
          repoNames.push(repository.name);
        });

        localStorage.setItem('RepoNames', JSON.stringify(repoNames));
        setError(false);
        history.push('/repositories');
      })
      .catch(err => {
        setError(true);
      });
  }

  return (
      <Styles.MainContainer>
        <h1>Github User Repos API</h1>
        <Styles.ContentContainer>
          <Styles.Input 
            className="input-usuario"
            type="text"
            placeholder="usuário github"
            onChange={ e => setUsuario(e.target.value) }
            value= { usuario }
          />
          <Styles.Button type="button" onClick={ handlePesquisa }>Pesquisar</Styles.Button>
        </Styles.ContentContainer>

        { error ? <Styles.ErrorMessage>User not found or connection error with Github API. Try again!</Styles.ErrorMessage> : ''}
        
      </Styles.MainContainer>
  );
}

export default Home;
