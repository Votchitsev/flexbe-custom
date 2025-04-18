import styled from "styled-components"
import usePosts from "./usePosts";

function App() {
  const { data } = usePosts();
  return (
    <Container>
      <h1>Hello flexbe</h1>
      { data?.map(post => (
        <Post
          key={post.id}
        >
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.body}</PostText>
        </Post>
      )) }
    </Container>
  )
}

const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: sans-serif;
`

const Post = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 2rem;
  background-color: #ccc;
  font-size: 0.75rem;

  &:hover {
    background-color: #aaa;
    cursor: pointer;
    scale: 1.01;
  }
`

const PostTitle = styled.div`
  font-weight: bold;
`

const PostText = styled.div``

export default App;
