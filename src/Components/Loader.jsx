import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
   <div style={{margin:"100px",marginLeft:"300px"}}>
     <Spinner style={{margin:"120px",marginLeft:"350px"}} animation="border" variant="primary" role="status" size="lg">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   </div>
  );
}

export default Loader;