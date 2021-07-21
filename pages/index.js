import useAuth from './../hooks/useAuth'

export default function Home() {

  const { user, signin } = useAuth();
  console.log('user', user)
  return (
    <>
   <h2>Teste</h2>
   <button onClick={() => signin()}>Entrar com o GitHub</button>
   </>
  )
}
