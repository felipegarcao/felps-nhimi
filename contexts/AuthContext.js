// criando o contexto de autenticação 
import { createContext, useState, useEffect } from 'react';
import firebase from '../lib/firebase';
import Router from 'next/router';
import cookie from 'js-cookie'

const AuthContext = createContext();

const formatUser = async (user) => ({ // o firebase que esta retornando esses dados
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoUrl,
})

export function AuthProvider({children}) { // todo que tiver dentro do meu provider vai ter acesso as variaveis de alteração
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // loading enquanto estiver acessando nosso provedor



  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      setSession(true);
      return formatedUser.email;
    }
    setUser(false);
    setSession(false)
    return false;
  }

  const setSession = (session) => {
    if (session) {
      cookie.set('luisfelipe-auth', session, {
        expires: 1,
      });
    } else {
      cookie.remove('luisfelipe-auth');
    }
  }

  const signinGitHub = async () => { //fazendo a conexão com o github Provider
    try {
      setLoading(true);
      const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider());

      handleUser(response.user)

    } finally {
      setLoading(false);
    }
  }

  const signinGoogle = async () => { //fazendo a conexão com o github Provider
    try {
      setLoading(true);
      const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      handleUser(response.user)

    } finally {
      setLoading(false);
    }
  }



  const signout = async () => { // redirecionar para a pagina de login
    try {
      Router.push('/');
      await firebase.auth().signOut();
      handleUser(false)

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, [])

  return <AuthContext.Provider value={{
    user,
    loading, // valores como default
    signinGitHub,
    signinGoogle,
    signout,
  }}>{children}</AuthContext.Provider>
    
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;