import React from 'react';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useForm } from 'react-hook-form';

import AppProviders from '@context/index';

const queryClient = new QueryClient();
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Test() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading) return (<span>Loading...</span>);
  if (error) return (<span>An error has occurred: ${error}</span>);


  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} /> {/* register an input */}
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register('age', { pattern: /^\d+$/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <AppProviders>
          <Test />
        </AppProviders>
      </ErrorBoundary>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
