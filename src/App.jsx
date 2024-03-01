import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import City from "./components/City";
import Form from "./components/Form";
import CityList from "./components/CityList";
import ProtectedRoute from "./pages/ProtectedRoute";
import CountriesList from "./components/CountriesList";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/AuthContext";

const Login = lazy(() => import(`./pages/Login`));
const Product = lazy(() => import(`./pages/Product`));
const Pricing = lazy(() => import(`./pages/Pricing`));
const Homepage = lazy(() => import(`./pages/Homepage`));
const AppLayout = lazy(() => import(`./pages/AppLayout`));
const PageNotFound = lazy(() => import(`./pages/PageNotFound`));

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
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
                <Route path="form" element={<p>Form</p>} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
