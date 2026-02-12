import { useEffect, useState } from 'react'
import { Col, Container, Form, ListGroup, Row } from 'react-bootstrap'

const PostList = () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts'

  const [postList, setPostList] = useState([])
  const [search, setSearch] = useState('')

  const getPosts = function () {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore recupero post')
        }
      })
      .then((arrayOfPosts) => {
        setPostList(arrayOfPosts.slice(0, 10)) // i primi 10 post
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  useEffect(() => {
    getPosts()
  }, []) // solo al montaggio

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center" xs={12} md={6}>
          <h2 className="my-3">LISTA POST</h2>
          <Form.Control
            type="text"
            placeholder="Cerca Post"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <ListGroup>
            {postList
              .filter((p) => p.body.includes(search.toLowerCase()))
              .map((post) => {
                return (
                  <ListGroup.Item key={post.id} data-testid="elemento lista">
                    {post.body}
                  </ListGroup.Item>
                )
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default PostList
