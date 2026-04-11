'use client'

import { Button } from '@/components/ui/button'

const Error = ({ error, reset }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-muted-foreground">
        {error?.message ?? 'An unexpected error occurred.'}
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}

export default Error
