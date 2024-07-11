import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import MessageContainer from "./components/MessageContainer";
import Market from "./components/Market";
import Settings from "./components/Settings";
import Bid from "./components/Bid";
import Saved from "./components/Saved";
import Collection from "./components/Collection";
import Wallet from "./components/Wallet";
import AllCreators from "./components/AllCreators";
// ProtectedRoute component

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthReady(true);
     
    });

    return () => unsubscribe();
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute><Dashboard /></ProtectedRoute>
    },
    {
      path: "/message",
      element: <ProtectedRoute><MessageContainer /></ProtectedRoute>
    },
    {
      path: "/market",
      element: <ProtectedRoute><Market /></ProtectedRoute>
    },
    {
      path: "/settings",
      element: <ProtectedRoute><Settings /></ProtectedRoute>
    },
    {
      path: "/bid",
      element: <ProtectedRoute><Bid /></ProtectedRoute>
    },
    {
      path: "/saved",
      element: <ProtectedRoute><Saved /></ProtectedRoute>
    },
    {
      path: "/collection",
      element: <ProtectedRoute><Collection /></ProtectedRoute>
    },
    {
      path: "/wallet",
      element: <ProtectedRoute><Wallet /></ProtectedRoute>
    },
    {
      path: "/all-creators",
      element: <ProtectedRoute><AllCreators /></ProtectedRoute>
    },
  ]);

  if (!isAuthReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
