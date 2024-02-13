import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useContext, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'src/i18n/i18n'
import ErrorBoundary from './components/ErrorBoundary'
import { AppContext } from './contexts/app.context'
import useRouteElements from './useRouteElements'
import { LocalStorageEventTarget } from './utils/auth'

function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)

    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <div className='font-Inter'>
      <HelmetProvider>
        <ErrorBoundary>
          {routeElements}
          <ToastContainer />
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </HelmetProvider>
    </div>
  )
}

export default App
