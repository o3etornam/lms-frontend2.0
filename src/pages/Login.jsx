import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../shadcn-components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../shadcn-components/ui/form";
import { Input } from "../../shadcn-components/ui/input";
import { useUser } from "../components/UserProvider";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function ProfileForm() {
  const navigate = useNavigate(); // Initialize useNavigate
  const { setUser } = useUser(); // Get the setUser function from UserContext
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      const params = new URLSearchParams();
      params.append("username", values.email);
      params.append("password", values.password);
      const res = await axios.post("http://127.0.0.1:8000/login", params);
      console.log(res.data);
      localStorage.setItem("token", res.data.token.access_token);

      setUser(res.data.user); // Update the user context with returned user details
      navigate("/"); // Navigate to the home page
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* <section className="flex justify-between">
          <div>bread</div>
          <div>Gob3</div>
        </section> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Choose a strong password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <section className="flex justify-between">
              <div className="flex flex-col justify-between">
                <p>
                  {" "}
                  <input type="checkbox" name="" id="" />
                  Stay Signed In
                </p>
                <p className="pl-3">Forgot Password</p>
              </div>
              <Button
                className="bg-blue-500 text-white hover:bg-blue-700 p-3"
                type="submit"
              >
                Log In
              </Button>
            </section>
          </form>
        </Form>
      </div>
    </div>
  );
}
