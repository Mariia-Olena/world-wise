import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountriesList from './components/CountriesList';
import City from './components/City';
import Form from './components/Form';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
