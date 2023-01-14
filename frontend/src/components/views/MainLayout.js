import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className='container mt-5 pt-5'>
      {children}
    </div>
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;