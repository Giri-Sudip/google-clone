import { Link } from 'react-router-dom'
import './SearchPage.css';
import Search from './Search.js';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import icon from './icon.png'


const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img className="searchPage_logo" src={icon} alt="googlelogo"/>
         </Link>
         <div className="searchPage_headerbody">
          <Search hideButtons />
        </div>


      </div>

    </div>
  )
}

export default SearchPage