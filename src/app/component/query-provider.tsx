'use client'
import {useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

export default function QueryProvider({children}: {children: React.ReactNode }) {

  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 6 * 1000,
          refetchInterval: 6 * 1000000,
          refetchOnMount: false,
        }
      }
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}