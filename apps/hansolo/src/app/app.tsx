import { useState, useEffect } from 'react';

import { r2d2 } from  '@millenniumfalcon/r2d2';
import { c3po } from  '@millenniumfalcon/c3po';

import {
  Main,
  Title,
  SubTitle,
  List,
  ListItem,
  Emoji,
  Loading,
} from './app.styles';

interface Person {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export const App = () => {
  const [people, setPeople] = useState<Person[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('api/people')
      .then(people => people.json())
      .then((people: Person[]) => {
        // E.g.: Fake a low latency device with 3G 😛
        setTimeout(() => {
          setPeople(people);
          setLoading(false);
        }, 3000);

      })
      .catch(err => {
        setPeople(people);
        setLoading(false);
      })
  }, [])

  const getName = (name: string): string => {
    if (name === 'R2-D2') {
      return `${name} ${r2d2()}`;
    }

    if (name === 'C-3PO') {
      return `${name} ${c3po()}`;
    }

    return name;
  }

  return (
    <Main>
      <Title>Star Wars</Title>
      <SubTitle>People List</SubTitle>
      {
        loading
          ? ( <Loading>Please wait a few seconds...</Loading> )
          : (

              <List>
                {
                  people.map(data => (
                    <ListItem key={data.id}>
                      <Emoji role="img" aria-label="check">▪️</Emoji> { getName(data.name) }
                    </ListItem>
                  ))
                }
              </List>
          )
      }
      </Main>
  );
}

export default App;
