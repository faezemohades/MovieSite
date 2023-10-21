import React, { useEffect, useState }  from 'react';
import Scroll from '../Components/Scroll';
import Loading from '../Components/Loading';
import HomeCarousel from '../Components/HomeCarousel';
import MovieListing from '../Components/MovieListing';
import MyHelmet from '../Components/MyHelmet';
import Channel from '../Components/Channel';
import logo from '../assets/image/logo.png'
import Anime from '../Components/Anime';
function Home() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]);

    return (
        <>
         <div style={{ position: "relative"}}>
            <MyHelmet title='kids.mp4.ir - دنیای کارتون' description='دنیای کارتون' keywords='کارتون های جدید,انمیشن های جدید,کارتون ها خنده دار ,فیلم مخصوص کودک,دنیای کارتون' url={'https://kids.mp4.ir/'} image={logo}  />
            {loading ? (
            <Loading />
            ) : (
            <div >
                 {/*home slider*/}
                 <HomeCarousel />
                 {/*channel*/}
                 <Channel/>
                 {/*animation*/}
                 <Anime />
                 {/*series*/}
                  <MovieListing />
            <Scroll />
            </div>
            )}
            </div>
        </>
     );
}

export default Home;