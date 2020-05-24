import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styles from './styled';

export default function Repos() {
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        let repoNames = localStorage.getItem('RepoNames');
        if(repoNames !== null) {
            repoNames = JSON.parse(repoNames);
            setRepositories(repoNames);
            localStorage.clear();
        } else {
            history.push('/');
        }
        
    }, [history]);

    return(
        <Styles.Container>
            <Styles.Title>Repositories</Styles.Title>
            <Styles.List>
                {
                    repositories.map(repository => {
                        return (
                            <Styles.ListItem>
                                Repo name: { repository }
                            </Styles.ListItem>
                        )
                    })
                }
            </Styles.List>
            <Styles.LinkHome to='/'>Back to home page</Styles.LinkHome>
        </Styles.Container>
    )
}