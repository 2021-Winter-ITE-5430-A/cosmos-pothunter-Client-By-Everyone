import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';



const JsonApiWords = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://pothunter-shel-server.herokuapp.com/api/words').then((response) => {
      setPosts(response.data);
      console.log(response);
    });

  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const mystyle5 = {
  width: "90%",
  height: "20%",
  color: 'black',
  backgroundColor: "#334C3A",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'center',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const mystyle4 = {
  width: "90%",
  height: "20%",
  color: 'black',
  backgroundColor: "white",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'center',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const Post = (props) => {
  return (
    
<Card style={mystyle5} class="center">
    <div>
    <Card style={mystyle4} class="center">
      <h2>{props.post.term}</h2>
      <h3>{props.post.sentence}</h3>
      </Card>
    </div>
    </Card>
  );
};
export default JsonApiWords;
