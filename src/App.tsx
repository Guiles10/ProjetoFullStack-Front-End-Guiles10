import { StyledGlobal } from './GlobalStyle'
import { ToastContainer } from 'react-toastify'
import { RouterMain } from './Routes'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from './Context/Provider'

function App() {

  return (
    <>
      <StyledGlobal />
      <Provider>
        <RouterMain /> 
      </Provider>
      <ToastContainer
        position='top-left'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        />
    </>
  )
}

export default App
