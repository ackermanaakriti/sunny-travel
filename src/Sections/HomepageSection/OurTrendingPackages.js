import React, { useEffect } from 'react';
import OurTrendingPackCard from '../../Components/Cards/OurTrendingPackCard';
import { Col, Container, Row } from 'react-bootstrap';
import ExploreMoreBtn from '../../Components/Buttons/ExploreMoreBtn';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogPosts } from '../../features/Post/postsActions';

const OurTrendingPackages = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='outrendingpack--container'>
      <Container>
        <div className='sections--wrapper'>
          <div className='sections--header'>
            <h2>Our Trending Packages</h2>
          </div>
          <div className='ourtrendingpac--contents'>
            <Row className='gy-4'>
              {posts && posts.packages ? (
                posts.packages.map((post) => (
                  <Col key={post.id} md={4}>
                    <OurTrendingPackCard post={post} />
                  </Col>
                ))
              ) : (
                <div>No packages found.</div>
              )}
            </Row>
          </div>
          <div className='topvacationdesti--btn'>
            <ExploreMoreBtn Value='Explore More' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurTrendingPackages;
