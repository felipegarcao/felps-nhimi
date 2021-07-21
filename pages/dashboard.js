import useAuth from "../hooks/useAuth"

function DashBoard(){

  const { user, signout } = useAuth()

  return (
    <>
      <h2>DASH :{user?.displayName}</h2>
      <button onClick={() => signout()}>Voltar</button>
    </>
  )
}

export default DashBoard;