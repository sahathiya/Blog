import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

function BlogList() {
  const { blogs } = useContext(BlogContext);

  if (!blogs) {
    return <h2>Loading...</h2>; // Loading state if blogs are still being fetched
  }

  if (blogs.length === 0) {
    return <h2 style={{color:'red'}}>No blogs available!</h2>; // Empty state message
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Blogs</h2>
          <ListGroup>
            {blogs.map((blog) => (
              <ListGroup.Item key={blog.id} className="mb-2">
                <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
                  {blog.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogList;
