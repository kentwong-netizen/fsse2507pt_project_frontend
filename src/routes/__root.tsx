import { Outlet, createRootRoute } from '@tanstack/react-router'
import {useEffect, useState} from "react";
import type {UserData} from "../data/user/user.type.ts";
import {onAuthStateChanged} from "../authService/FirebaseAuthService.ts";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  const [loginUser, setLoginUser] = useState<UserData | null>(null);

  useEffect(()=> {
    onAuthStateChanged(setLoginUser);
  }, []);

  return (
    <Outlet/>
  )
}
