import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError();
  console.error(error)
  return (
    <div id="error-id" className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-medium text-5xl">Oops!</h1>
      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage