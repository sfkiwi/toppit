import React from 'react';
import Topic from './Topic.jsx';
import {Container} from 'semantic-ui-react';

const TopicList = (props) => (
  <Container>
    {props.topicList.map((topic, index) => (
      <Topic topic={topic} key={index} />))}
  </Container>  
);

export default TopicList;