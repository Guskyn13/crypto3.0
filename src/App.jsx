import { Navbar, Footer, Loader, Services, Transactions, Welcome } from './components';

const App = () => {

  return (
    <div className='min-h-screen'>
      <div className='bg-gray-400'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;