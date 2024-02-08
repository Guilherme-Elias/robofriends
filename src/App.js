import './App.css';
import Header from './comps/Header';
import SearchBox from './comps/SearchBox';
import Content from './comps/Content';
import Footer from './comps/Footer';

export default function App(){
    return (
      <>
        <Header/>
        <SearchBox/>
        <Content/>
        <Footer/>
      </>
    );   
}