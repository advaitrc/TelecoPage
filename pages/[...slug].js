
import { useRouter } from 'next/router';
import Custom404 from './404';

const CatchAllPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  
  const knownRoutes = ['/home', '/about', '/contact'];

  if (slug && knownRoutes.includes(`/${slug.join('/')}`)) {
   
    return <div>Actual page content for {slug.join('/')}</div>;
  } else {
    
    return <Custom404 />;
  }
};

export default CatchAllPage;
