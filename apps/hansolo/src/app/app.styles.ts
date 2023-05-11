import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 40px auto 0;
`;

const SubTitle = styled.h3`
  margin: 0 auto 20px;
`;


const List = styled.ul`
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 24px;
`;

const Emoji = styled.span`
  font-size: 12px;
`;

const Loading = styled.p`
  font-size: 16px;
`

export {
  Main,
  Title,
  SubTitle,
  List,
  ListItem,
  Emoji,
  Loading,
}
