"use client";
import { QueryClient, QueryClientProvider } from "react-query";

export default function QueryClientWrapper({ children }: {
  children: React.ReactNode
}) {

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 60 * 1000 /*1 minute*/,
        refetchOnWindowFocus: false,
        retryOnMount: false // prevent infinite request on error in whitch component has loading before mount
      },
    },
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration> */}
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}