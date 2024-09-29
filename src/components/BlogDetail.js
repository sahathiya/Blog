import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { Container, Row, Col, Card } from 'react-bootstrap';

function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  if (!blogs) {
    return <h2>Loading...</h2>;
  }

  const blog = blogs.find(blog => blog.id === parseInt(id, 10)); // Parsing as a base-10 integer

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogDetail;
