import Header from './components/Header/Header'
import './App.scss'
import { Collection } from './components/Collection/Collection';
import {useState , useEffect} from 'react'
import axios from 'axios'

function App() {
    const [punklist,setPunkList] = useState([])

    useEffect(() =>{
      const getmynft = async () => {          
        const openseadata = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xdA690104881Ac31ECf8E9694E8FD652593c0B9F8&order_direction=asc')
        console.log(openseadata.data.assets)
        setPunkList(openseadata.data.assets)
      }
      return getmynft()
    },[])

  return ( <div className="app_container">
      <Header/>
      <Collection id={0} name={'Bandana Punk'} traits={[{'value': 7 }]} image={'https://ipfs.thirdweb.com/ipfs/QmVDHP7P7PG8PHzbXsTSnquuPTqPMmwY5DpNmNe6ay2BSx/0.jpg'}/>
  </div>
  
    )
}
export default App;
