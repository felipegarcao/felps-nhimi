// criando o contexto de autenticação 
import { createContext, useState } from 'react';
import firebase from '../lib/firebase';
import Router from 'next/router';

const AuthContext = createContext();

export function AuthProvider({children}) { // todo que tiver dentro do meu provider vai ter acesso as variaveis de alteração
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // loading enquanto estiver acessando nosso provedor

  
  const signin = () => { //fazendo a conexão com o github Provider
    try {
      setLoading(true);
      return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
        Router.push('/dashboard');
      });
    } finally {
      setLoading(false);
    }
  }


  const signout = () => { // redirecionar para a pagina de login
    try {
      Router.push('/');

      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } finally {
      setLoading(false);
    }
  }

  return <AuthContext.Provider value={{
    user,
    loading, // valores como default
    signin,
    signout
  }}>{children}</AuthContext.Provider>
    
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;