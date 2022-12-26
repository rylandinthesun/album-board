import { supabase } from "~/utils/db.server"
import { Form, useActionData, NavLink } from "@remix-run/react"
import { ActionFunction, redirect } from "@remix-run/node"

export const action: ActionFunction = async ({ request }) => {
  let form = await request.formData()
  let email = form.get("email") as string
  let password = form.get("password") as string

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (user) {
    return redirect("/login")
  }

  return { user, error }
}

export default function SignUp() {
  const data = useActionData()

  return (
    <div
      className="w-screen h-screen flex flex-col lg:flex-row items-center justify-center lg:space-x-36"
      data-theme="dark"
    >
      <div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-sky-600">
          Album Board
        </h1>
        <h3 className="text-base sm:text-2xl font-semibold mb-3 text-center">
          Task management for your next album
        </h3>
      </div>
      <div className="border-2 p-6 rounded-lg w-11/12 max-w-sm">
        <div className="flex flex-col">
          <Form className="w-full" method="post">
            <div className="form-control w-full">
              <label className="label pt-0">
                <span className="label-text">Email:</span>
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="john@email.com"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col mt-4">
              <button className="btn w-full btn-secondary" type="submit">
                Sign up
              </button>
              <NavLink to="/login" className="w-full">
                <button className="btn w-full btn-ghost mt-3">Login</button>
              </NavLink>
            </div>
          </Form>
        </div>
        <div>{data?.error ? data?.error?.message : null}</div>
      </div>
    </div>
  )
}
