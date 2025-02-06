import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import SongList from './pages/SongList.tsx'
import SongCreate from './pages/SongCreate.tsx'
import SongDetails from './pages/SongDetails.tsx'
import './index.css'
import App from './App.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<SongList />} />
            <Route path="songs/new" element={<SongCreate />} />
            <Route path="songs/:id" element={<SongDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
)
