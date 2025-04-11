import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import { Routes } from "react-router";
import Loader from "./components/Loader/Loader";
import { Route } from "react-router";
import RegistrationRoute from "./components/RestrictedRoute";
import PrivateRoute from './components/PrivateRoute';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <React.Fragment>
      <CssBaseline />
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationRoute redirectYo='/contacts' component={<RegistrationPage/>}/>} />
          <Route path="/login" element={<RegistrationRoute redirectTo="/contacts" component={<LoginPage/>}/>} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      </Suspense>
    </Layout>
    </React.Fragment>

  );
}
;

export default App;
